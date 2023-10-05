const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
require("dotenv").config();

const pool  = require("./mysql_connection")


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nivetha.rajendran@axesstechnology.in',
      pass: process.env.email_password
    }
  });
  

  
const sendOTP = (req,res)=>{
    const{email} = req.body

    // Generate a 6-digit OTP
    const otp = otpGenerator.generate(6, { digits: true, specialChars: false });


    const mailOptions = {
        from: 'nivetha.rajendran@axesstechnology.in',
        to: email ,
        subject: 'New OTP',
        text: `Your OTP is ${otp}`
      };

console.log("emai",email,otp)
  transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(201).json({})
    }
  });
  const query = `
  INSERT INTO otpstorage
  VALUES (?, ?)
  ON DUPLICATE KEY UPDATE otp = VALUES(otp)
`;

  pool.query(query,[email,otp], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }
    console.log("res",results)
    pool.end(); 
  });

}
module.exports = {sendOTP}


