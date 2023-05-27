const mongoose=require('mongoose')


const issueSchema=new mongoose.Schema({
    title:{
        type:String,
        reuqire:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
        enum:['Pending','Completed']
    },
    raiseBy:{
        type:String,
        require:true,
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'Issue'
    }
},
{
    timestamps:true
}
)

const Issue=mongoose.model('Issue',issueSchema)
module.exports=Issue