const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://gunasekaraiusa:silva1234@cluster0.pyngokn.mongodb.net/Kurunegala-Cabs' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose