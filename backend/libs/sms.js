'use strict'

const axios = require('axios'),
      Twilio = require('twilio');

const serviceConfig = require('../configs').service;

module.exports.sendSMS = ((config) => {
  return async (SMS, service="twilio") => {
    let error = new Error("Cannot reach the target phone number.");
    error.name = "SendSMSFailedError";

    try {
      let SMSConfig = config.sendSMS;
      let res;
      let sendSucc = false;

      if (service == "xxx") {

      } else if (service == "rapid") {
        SMSConfig = SMSConfig[service];
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
          sendSucc = true;
        } else {
          if (res.data && res.data.data)
            error.message = res.data.data;
        }
        //console.log(res);
      } else {
        SMSConfig = SMSConfig['twilio'];
        // TODO: add webhooks to track message status
        const accountSid = SMSConfig.accountSid,
              authToken = SMSConfig.authToken;
        const client = Twilio(accountSid, authToken);
	
        res = await client.messages.create({
                body: SMS.content,
                messagingServiceSid: SMSConfig.msgServiceId,
                to: SMS.to
              });
        return res.sid;
      }
      //console.log(res.data);
      if (sendSucc == true) {
        return "success";
      } else {
        throw error;
      }
    } catch (err) {
      console.log(err); 
      throw err;
    }
  };
})(serviceConfig);
