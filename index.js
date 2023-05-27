
const bodyParser=require('body-parser')
const express=require('express');
const port=8000
const app=express()
const flash=require('express-flash')
const mongoose=require('mongoose')
const db=require('./config/mongoose')
const custMware=require('./config/middleware')
app.set('view engine','ejs');
app.set('views','./views');
const expressLayouts=require('express-ejs-layouts') 
const session=require('express-session')
const MongoStore=require('connect-mongo')
app.use(express.static(__dirname + '/assets'));

//mongoose.connect('mongodb://localhost/issue_tracker')

app.use(session({
    name:'issue-tracker',
    secret:'thisIsSecretKey',
    saveUninitialized:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:MongoStore.create({

        mongoUrl:'mongodb://localhost/issue_tracker',
        autoRemove:'disabled',
    })
}))
app.use(flash())
app.use(custMware.setFlash)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',require('./routes/'))
app.listen(port,function(err){
    if(err){
        console.log('error in listning to port')
    }
    else{
        console.log('listning to port',port)
    }
})