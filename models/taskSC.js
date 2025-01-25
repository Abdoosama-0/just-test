const mongoose=require('mongoose')

const taskSchema=  new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
        maxlength:50,
    },

    completed:{
       type:  Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Tasks',taskSchema) //to atributes 1:schema name , 2:your Schema