const express=require('express');
const port=8000
const app=express()
app.set('view engine','ejs');
app.set('views','./views');
const expressLayouts=require('express-ejs-layouts') 

app.use('/',require('./routes/'))



app.listen(port,function(err){
    if(err){
        console.log('error in listning to port')
    }
    else{
        console.log('listning to port',port)
    }
})