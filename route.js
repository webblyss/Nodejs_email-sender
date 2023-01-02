const express = require("express");
const path = require("path")
const router = express.Router();
const nodeMailer = require("nodemailer");



router.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/main.html"));
})

router.post("/home",(req,res)=>{
   if(req.files){
    console.log(req.files);
    console.log(req.body);

    // SEND EMAIL
    const transport = nodeMailer.createTransport({
        service:process.env.SERVICE,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });
    var mailOption = {
        from : req.body.email,
        to:process.env.EMAIL,
        subject:'full stack developer position',
        text:req.body.text
    };
    transport.sendMail(mailOption,function(error,info){
        if(error) return res.status(401).json({error:"Message could not send"});
        res.status(200).json({message:"your form have been submitted"})
    })
   };
   console.log('nothing')
})

module.exports = router