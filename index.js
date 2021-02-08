const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const config = require('./config/key');
const {User} = require("./models/User")

const app = express()
const port = 3000

// application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected')).catch(err => console.log(err))



app.get('/',(req,res) => res.send('Hello Wontaek'))

app.post('/register',(req,res) => {
    // 회원 가입 시 필요한 정보들을 Client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)
    
    user.save((err, userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true,
        })
    })
})

app.listen(port, ()=> console.log(`Example App listening on port ${port}!`))