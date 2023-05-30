const express=require('express')

const router=express.Router()

const homeController=require('../controllers/home')

//home page router
router.get('/',homeController.home)

//project deatils while click on project name
router.use('/project',require('./project'))

//for creating issue
router.use('/issue',require('./issue'))



module.exports=router
