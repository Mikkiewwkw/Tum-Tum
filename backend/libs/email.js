'use strict'

const axios = require('axios');

const serviceConfig = require('../configs').service;

module.exports.sendEmail = ((config) => {
  return async (email, service="rapid") => {
    let error = new Error("Cannot reach the target email address.");
    error.name = "SendEmailFailedError";
    try {
      const emailConfig = config.sendEmail;
      let res;

      if (service == "rapidxxx") {

      } else {
        let curEmailTo = [];
        for (let curTo of email.to)
          curEmailTo.push({ "email": curTo });

        const curEmail = {
          "personalizations": [{
            "to": curEmailTo,
            "subject": email.subject
	  }],
          "from": { "email": email.from },
          "content": [{
              "type": "text/plain",
              "value": email.content
	  }]
        };

        const rapidSendgridReq = {
          "method": "POST",
          "url": emailConfig.url,
          "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": emailConfig["x-rapidapi-host"],
            "x-rapidapi-key": emailConfig["x-rapidapi-key"],
            "accept": "application/json",
            "useQueryString": true
          },
          "data": curEmail
        };
        //console.log(rapidSendgridReq);
        res = await axios(rapidSendgridReq);
      }
      //console.log(res.data);
      return res;
    } catch (err) {
      console.log(err); 
    }
  };
})(serviceConfig);
