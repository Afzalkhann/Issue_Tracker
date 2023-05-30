const Issue=require('../models/issues');
const Project=require('../models/project');
//

//to create new issue
module.exports.create=async function(req,res){
    try{
        let project=await Project.findById(req.query.project)
        if(project){
            var issue=await Issue.create({
                title: req.body.title,
                description:req.body.description,
                status:'Pending',
                raiseBy:req.body.raisedBy,
                project:req.query.project
    
            })
        }
        if(!issue){
            console.log('isseu is not created')
        }
        project.issues.push(issue);
        project.save()
        req.flash('success','Issue created successfully')
        res.redirect('back')
    }catch(err){
        console.log('error',err)
        req.flash('error','failed to create issue')
        res.redirect('back')
    }
}
