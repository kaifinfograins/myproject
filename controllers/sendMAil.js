const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

//   connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'darlene.bins@ethereal.email',
        pass: 'fMGXKngAKHf2C5mxXE'
    },
  });
 
  let info = await transporter.sendMail({
    from: '"kaif 👻" <kaif@gmail.com>', // sender address
    to: "mkaif.infograins@gmail.com", // list of receivers
    subject: "Hello kaif", // Subject line
    text: "Hello kaif", // plain text body
    html: "<b>Hello kaif,hope you are good</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
    res.json(info)
  

};

module.exports = sendMail;
