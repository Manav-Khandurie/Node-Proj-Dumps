const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
const posts=[{
    username:"Manav",
    title : "Post1"
},
{
    username:"manav",
    title : "Post2"
}
]
app.get("/post",authenticateToken, (req,res)=>{
    console.log(req.user.username);
    res.json(posts.filter(post => post.username === req.user.username ));
})


app.post("/login",(req,res)=>{
    //Authenticate user

    const username=req.body.username;
    const uobj={ username : username };
    const jwttoken=jwt.sign(uobj , process.env.SECRET_KEY )
    res.json({ accessToken : jwttoken });

})


function authenticateToken(req,res,next){
    //BEARER TOKEN 
    const authheader=req.headers['authorization']
    const token=authheader && authheader.split(' ')[1];
    if(token == null)
        res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY , (err,user)=>{
        if(err)
            return res.sendStatus(403);

        req.user=user;
        next();
        
    })
}

app.listen(3000,()=> console.log("Server started"));