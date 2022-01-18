//const dotnev= require("dotenv");
require('dotenv').config({path:'relative/path/to/your/.env'})

//const path = require('path'); 
//require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` })
//dotnev.load(file);
//require('custom-env').env('file');
var mailer = require("nodemailer");

var transport = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env['user'],
        pass: process.env['pass']
    }
});

var mail ={
    from: process.env['user'],
    to: ['ayushg@gmail.com'],
    subject: 'This is nodejs',
    text: ' alert alert',
    attachments: [
        {
            filename: '1.png',
            path: __dirname+"//"+'1.png'
        }
    ]
}

transport.sendMail(mail,(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email sent' + res.response);
    }
})
console.log(process.env.port);