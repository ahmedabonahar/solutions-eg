const express = require('express');
const nodemailer = require("nodemailer");
const ContactForm = require("../models/contact");
const router = express.Router();
const excel = require('exceljs');
var workbook = new excel.Workbook(); //creating workbook
var sheet = workbook.addWorksheet('MySheet'); //creating worksheet
const fs = require('fs');

router.get('/create-excel-sheet', (req, res, next) => {
  res.writeHead(302, {
    'Location': 'https://www.solutions-eg.org/download-exsheet'
  });
  res.end(); 
})

router.get('/create-excel-sheet/:key', (req, res, next) => {
  console.log('asd')
  if(req.params.key=='j56op52qao5asd4'){
    ContactForm.find()
    .then(dataObject => {
      // sheet.getRow(1).values["Full Name", 'Email', 'Message', 'Service', 'Phone'];
      sheet.getCell('A1').value = 'Name'
      sheet.getCell('B1').value = 'Email'
      sheet.getCell('C1').value = 'Message'
      sheet.getCell('D1').value = 'Country'
      sheet.getCell('E1').value = 'Phone Number'
      sheet.getCell('F1').value = 'Service'
      sheet.columns = [
        { key: 'Full_Name' },
        { key: 'Email' },
        { key: 'Message' },
        { key: 'Service' },
        { key: 'Phone' },
        { key: 'Country' }
      ];
      dataObject.forEach(function (item) {
        sheet.addRow({
          Full_Name: item.name,
          Email: item.email,
          Message: item.message,
          Service: item.service,
          Phone: item.phone,
          Budget: item.budget
        })
      });
      const dateTime = Date.now();
      workbook.xlsx.writeFile(`./contact-us-${dateTime}.xlsx`);
      sendWorkbook(workbook, res, dateTime)
    });}
    else{
      res.writeHead(302, {
        'Location': 'https://www.solutions-eg.org/download-exsheet'
      });
      res.end();    
    }
});

function sendWorkbook(workbook, response, dateTime) {
  var fileName = `contact-us-${dateTime}.xlsx`;

  response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  response.setHeader("Content-Disposition", "attachment; filename=" + fileName);

  workbook.xlsx.write(response).then(function () {
    fs.unlinkSync(`./contact-us-${dateTime}.xlsx`, () => {
    });
    response.end();
  });
}


router.post('/submit', (req, res, next) => {
  const contact = new ContactForm({
    name: req.body.full_name,
    email: req.body.email,
    message: req.body.message,
    service: req.body.service,
    phone: req.body.phone,
    country: req.body.country
  });
  var transporter = nodemailer.createTransport({
    // service: 'zoho',
    host: "depro13.fcomet.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
      user: 'website@freaksrepublic.com',
      pass: 'G64pmJbExQ8b'
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: 'hello@solutions-eg.org',
    subject: 'Solutions Contact',
    text: 'Message: ' + req.body.message + '\n Email: ' + req.body.email + '\n Service: ' + req.body.service + '\n Phone:' + req.body.phone + '\n Budget Category: ' + req.body.country
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  contact.save().then(() => {
    res.status(201).json({
      message: "mail has been sent",
      isError: false,
    })
  })

});

module.exports = router;

// app.listen(PORT, function(){

//     console.log("Server running on localhost:" + PORT);
// });

