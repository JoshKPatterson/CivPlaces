const express = require('express');
const fs = require('fs');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
// console.log(process.env.MAPS_API_KEY)

app.set('view engine', 'ejs');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + "/public"));
const allwonders = JSON.parse(fs.readFileSync(__dirname + '/public/data/allwonders.json', 'utf-8'));
const civ6wonders = JSON.parse(fs.readFileSync(__dirname + '/public/data/civ6wonders.json', 'utf-8'));
const civ5wonders = JSON.parse(fs.readFileSync(__dirname + '/public/data/civ5wonders.json', 'utf-8'));
// console.log(civ6wonders);
// console.log(civ5wonders);

app.get('/', (req, res) => {
  res.render('main', {
    allwonders: allwonders, 
    civ6wonders: civ6wonders, 
    civ5wonders: civ5wonders, 
    apiKey: process.env.MAPS_API_KEY
  });
})

app.get('/feedback', (req, res) => {
  res.render('feedback');
})

app.post('/', (req, res) => {
  res.render('submission');
  let feedback = req.body.feedback;
  console.log(feedback);
  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `CivPlaces Feedback ${Date()}`,
    text: feedback
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Email sent: ${info.response}`)
    }
  })
})

app.listen(3000);
