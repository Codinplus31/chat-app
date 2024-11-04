const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://root:Registration.1@cluster0.8atdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Connect to DB")
        })

        connection.on('error',(error)=>{
            console.log("Something is wrong in mongodb ",error)
        })
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = connectDB
