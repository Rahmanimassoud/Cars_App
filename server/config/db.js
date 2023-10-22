// connect mongoose to DB


const mongoose = require('mongoose')
console.log(process.env.MONGO_PASS);
let connectionString = `mongodb+srv://userOne:${process.env.MONGO_PASS}@cluster0.unpkcfd.mongodb.net/Vehicle?retryWrites=true&w=majority`

console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



mongoose.connection.once('open', ()=> {
    console.log("Connected to DATABASE");
})