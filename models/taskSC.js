const mongoose=require('mongoose')

const taskSchema=  new mongoose.Schema({
    name:String,
    completed:Boolean
})

module.exports = mongoose.model('Tasks',taskSchema) //to atributes 1:schema name , 2:your Schema