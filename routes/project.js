const express=require('express');
const router=express.Router()

const projectController=require('../controllers/projectController')

router.post('/create',projectController.create)
router.get('/profile',projectController.profile)

module.exports=router