'use strict'

const axios = require('axios');

const serviceConfig = require('../configs').service;

module.exports.sendSMS = ((config) => {
  return async (SMS, service="rapid") => {
    let error = new Error("Cannot reach the target phone number.");
    error.name = "SendSMSFailedError";
    try {
      const SMSConfig = config.sendSMS;
      let res;

      if (service == "rapidxxx") {

      } else {
        const rapidSMSReq = {
          "method": "POST",
          "url": SMSConfig.url,
          "headers": {
            "content-type": "application/json",
            "authorization": `Basic ${SMSConfig.authorization}`,
            "x-rapidapi-host": SMSConfig["x-rapidapi-host"],
            "x-rapidapi-key": SMSConfig["x-rapidapi-key"],
            "accept": "application/json",
            "useQueryString": true
          },
          "data": {
            "from": "D7-Rapid",
            "to": parseInt(SMS.to),
            "content": SMS.content
	  }
        };
        res = await axios(rapidSMSReq);
        if (res.data && res.data.data && res.data.data.startsWith("Success")) {
          return "success";
	} else {
          if (res.data && res.data.data)
            error.message = res.data.data;
	  throw error;
	}
        //console.log(res);
      }
      //console.log(res.data);
      return "fail";
    } catch (err) {
      console.log(err); 
      throw err;
    }
  };
})(serviceConfig);
