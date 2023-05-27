const Project=require('../models/project')
const Issue=require('../models/issues')
const mongoose=require('mongoose')
module.exports.profile = async function(req, res){
    try{
        console.log(req.query.project)
        let project= await Project.findById(req.query.project)
        .populate('issues')
        console.log(project)
                return res.render('project', {
                title: 'Project Profile',
                project:project
            })
    }
    catch(err){
        console.log('error',err)
    }
   
}
module.exports.create=async function(req,res){
    try{
        await Project.create({
            name:req.body.name,
            description:req.body.description,
            author:req.body.author
        })
        req.flash('success','project is created');
        return res.redirect('back');

    }catch(err){
        console.log('error in creating project', err)
        res.flash('error','internal server errir')
        return res.redirect('back')

    }
}