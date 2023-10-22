import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowCars = () => {
    const [cars, setCars] = useState([])


    useEffect(()=> {
        const fetchCars = async () => {
            try{
                const response = await axios.get('/server/cars');
                setCars(response.data)
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        fetchCars();

    }, [])


    return(
        <div className="car-list">
            <h1>Show Cars</h1>
            {
                cars.map((eachCar)=> {
                    return (
                        <div className="car-item" key={eachCar._id}>
                            <Link to={`/oneCar/${eachCar._id}`}><h2>Car Name: {eachCar.name}</h2></Link>
                            <p>Make: {eachCar.make}</p>
                            <p>Model: {eachCar.model}</p>
                            <p>Year: {eachCar.year}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ShowCars;
