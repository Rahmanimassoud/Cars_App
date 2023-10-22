import { useState } from "react";
import axios from 'axios'


const AddCar = () => {

    // state
    const [carsData, setCarsData] = useState({
        name: '',
        make: '',
        model: '',
        year: 0
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setCarsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/server/cars', carsData);
            if(response.status >= 200 && response.status < 300){
                console.log("Car added successfully", response.data);
            } else {
                console.error('Error adding car:', response.data);
            }
        } catch (error){
            console.error('There was an error sending the request:', error)
        }
        setCarsData({
            name: '',
            make: '',
            model: '',
            year: 0
        })
    }


    return (
        <div>
            <h1>Add a Car</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Car Name:</label>
                    <input type="text" id="name" name="name" value={carsData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="make">Make:</label>
                    <input type="text" id="make" name="make" value={carsData.make} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" value={carsData.model} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" value={carsData.year} onChange={handleChange}/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default AddCar;
