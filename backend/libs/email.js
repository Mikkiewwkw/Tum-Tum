'use strict'

const axios = require('axios'),
      sgMail = require('@sendgrid/mail'); 
      

const serviceConfig = require('../configs').service;

module.exports.sendEmail = ((config) => {
  return async (email, service="twilio") => {
    let error = new Error("Cannot reach the target email address.");
    error.name = "SendEmailFailedError";
    try {
      let emailConfig = config.sendEmail;
      let res;

      if (service == "xxx") {
	emailConfig = emailConfig[service];

      } else if (service == "rapid") {
	emailConfig = emailConfig[service];
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
        res = await axios(rapidSendgridReq);
      } else {
        emailConfig = emailConfig["twilio"];
        sgMail.setApiKey(emailConfig.APIKey); 
        const SendgridReq = {
          from: email.from,
          to: email.to,
          subject: email.subject,
          text: email.content
        };
        res = await sgMail.sendMultiple(SendgridReq);
	//console.log(res);
      }
      return res;
    } catch (err) {
      console.log(err); 
    }
  };
})(serviceConfig);
