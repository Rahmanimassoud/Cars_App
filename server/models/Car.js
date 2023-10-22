

// create a schema (breakdown of what our data would look like)
const mongoose = require('mongoose')

// Schema
const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}


)



// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized like fruits
// Fruit > fruits
// User > users

const Car = mongoose.model("Car", carSchema)   //this is the model


module.exports = Car;