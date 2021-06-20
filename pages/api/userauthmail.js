
// require('dotenv').config();
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs';
// import { Token } from 'prismjs';
const jwt =require('jsonwebtoken');
// import { EnhancedEncryption } from '@material-ui/icons';

export default async function handler(req, res) {

    const {email,username}=req.body;

    const mymail=process.env.mail;
    const password=process.env.password
    const Link=process.env.WebLink
    const dic={

               time:new Date(new Date().getTime() + 3600000).getTime(),
               email,
               username
               }

    const End=jwt.sign( dic, process.env.key, { expiresIn: "1h" } )

    // console.log(End)
    
   const transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    
        auth: {
          user: mymail,
          pass: password
        }
      });

      const UserOptions = {
        from: mymail,
        to: email,
        
        subject: `From Email Verification for ${Link}`,
    
          html:`You Email LogIn/Sing Up Link is
          
          <a href="${Link}/auth/verify?d=${End}" target="_blank">Here</a>. 
          <br>
          will Expired in 1h.
          <br>Contact me:<ul ><li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook">Facebook</a></li><li><a href="https://github.com/zeel-codder" title="Github">Github</a></li><li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin">LinkedIn</a></li><li><a href="https://twitter.com/ZeelCodder" title="Twitter">Twitter</a></li></ul>`
      };

      try{
        await  transporter.sendMail(UserOptions);
     }catch(e){
         console.log(e)
         
         res.status(404).end(JSON.stringify({
             message:"Error in sending mail",

         }))
        }
        
        
         res.end(JSON.stringify({
            message:"Send the mail",

        }))
}
      