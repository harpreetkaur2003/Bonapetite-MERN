const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://harpreetkaur030111:rmgrc4M6TEhLIze2@cluster0.lvnjkl9.mongodb.net/mern-bonapetite'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser : true})

//connect Variable
var connection = mongoose.connection

//callback function
connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed!!!')
})

connection.on('connected' , ()=>{
    console.log('Mongo Db Connection Successfull!!!')
})

module.exports = mongoose