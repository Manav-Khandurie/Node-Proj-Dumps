const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());

let rtoken=[];// Should replace with a actual db like a redis cache or maybe a mongo store
app.post ("/token" , (req,res)=>{
    const refreshtoken=req.body.refreshtoken;
    if(refreshtoken==null) res.status(401);
    if(! rtoken.includes(refreshtoken)) res.status(403);
    jwt.verify(refreshtoken , process.env.SECRET_KEY , (err,user)=>{
        if(err)
            return res.status(403)
        const accessToken=genrateAccessToken({name :user.name});
        return res.json({accessToken : accessToken});
    }); 
} );


app.delete('/logout', (req,res)=>{
    rtoken.filter(token => (token !== req.body.refreshtoken))
    res.sendStatus(204);
})
app.post("/login",(req,res)=>{
    //Authenticate user

    const username=req.body.username;
    const uobj={ username : username };
    const accessToken= genrateAccessToken(uobj);
    const refreshtoken=jwt.sign(username,process.env.SECRET_KEY);
    rtoken.push(refreshtoken);
    res.json({ accessToken : accessToken  , refreshtoken : refreshtoken});

})


function genrateAccessToken(user){
    
    return jwt.sign(user , process.env.SECRET_KEY , {expiresIn : '15s' })
}

app.listen(4000,()=> console.log("Server started"));