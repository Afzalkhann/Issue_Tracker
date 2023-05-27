const project=require('../models/project')
module.exports.home=async function(req,res){
    try{
        let projects= await project.find({})
        return res.render('home',{
            projects:projects
        })

    }catch(err){
        console.log('error',err)
    }

}
