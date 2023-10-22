// backend dependencies npm i all of the bellow:
// npm i express
// npm i cors
// npm init -y
// npm i morgan
// npm i helmet
// npm i dotenv
// npm i mongoose
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const Car = require('./models/Car');
require('dotenv').config();
require('./config/db')
const PORT = 3000;


const app = express();


// START MIDDLEWARE====================
app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use(morgan('dev'))
app.use(helmet());
// END MIDDLEWARE ===================


// ROUTES ==============
app.post("/cars", async (req, res)=> {
    // get the data from front-end

    // model.create
    try {
        let responseFromDB = await Car.create(req.body)
        console.log(responseFromDB);
        res.status(201).send("Route is good and created a new Car")

    } catch (error){
        console.error("Error from route", error)
    }
    // step 2/ make a db and connect it. make config folder and inside it make a db.js file
    // step 3, create the model with the event data which is coming from front-end
})

// getting all
app.get("/cars", async (req, res)=> {
    let carsFromDB = await Car.find()
    res.send(carsFromDB)
})  

// get One Car
app.get("/cars/:id", async (req, res) => {
    try {
        const carId = req.params.id; // Extract the car ID from the request parameters.
        const car = await Car.findById(carId);

        if (!car) {
            return res.status(404).send("Car not found"); // Handle the case where the car is not found.
        }

        res.send(car); // Send the car data
    } catch (error) {
        console.error("Error fetching car:", error);
        res.status(500).send("Internal Server Error"); // Handle any server errors.
    }
});



app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});