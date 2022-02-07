const express = require("express")
const app = express()
require("dotenv").config()
const port = 4000;
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		service:'gmail',
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: "myportfoliosite.com",
		to: "lauren.m.hale7@gmail.com",
		subject: "New Portfolio Message",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Darwin</p>
         </div>
    `
	})
})


  app.get('/', (req, res) => {
	res.send('Successful response.');
  });
  
  app.listen(4000, () => console.log('Example app is listening on port 4000.'));