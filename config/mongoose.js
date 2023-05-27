const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost/issue_tracker')

const db=mongoose.connection

db.on('error',console.error.bind(console,'error in connecting to db'))

db.once('open',function(){
    console.log('Connected to data base:: MongoDB')
})


module.exports=db