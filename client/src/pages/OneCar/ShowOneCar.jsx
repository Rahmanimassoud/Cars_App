import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const ShowOneCar = () => {
    const {id} = useParams(); //accessing the route params

    const [oneCar, setOneCar] = useState(null)

    useEffect(()=> {
        const fetchOneCar = async ()=> {
            try{
                const response = await axios.get(`/server/cars/${id}`);
                setOneCar(response.data)
            } catch (err) {
                console.error("Error fetching oneCar", err)
            }
        };
        fetchOneCar()
    }, [id])

    if (!oneCar) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Car Details</h3>
                        <div>
                            <h2>Car Name: {oneCar.name}</h2>
                            <p>Make: {oneCar.make}</p>
                            <p>Model: {oneCar.model}</p>
                            <p>Year: {oneCar.year}</p>
                        </div>
        </div>
    )
}

export default ShowOneCar
