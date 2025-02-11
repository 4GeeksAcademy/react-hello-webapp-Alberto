import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsStarships = () => {
    const { id } = useParams(); // Obtiene el ID de la nave desde la URL
    const [details, setDetails] = useState(null);

    // Fetch de los detalles de la nave
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
                if (!response.ok) throw new Error("Error fetching details");
                const data = await response.json();
                setDetails(data.result); // Guarda los detalles completos
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
        fetchDetails();
    }, [id]);

    if (!details) return <div className="text-center text-light">Loading...</div>;

    const { properties, description } = details;

    return (
        <div className="container my-5 text-light">
            <div className="row mb-5">
                <div className="col-md-4 text-center">
                    <img
                        src="https://via.placeholder.com/300" // Placeholder hasta que se integre una imagen real
                        alt={properties.name}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{properties.name}</h1>
                    <p>{description}</p>
                </div>
            </div>

            {/* Tabla de detalles */}
            <div className="row text-center">
                <div className="col-md-3">
                    <h5>Model</h5>
                    <p>{properties.model}</p>
                </div>
                <div className="col-md-3">
                    <h5>Starship Class</h5>
                    <p>{properties.starship_class}</p>
                </div>
                <div className="col-md-3">
                    <h5>Manufacturer</h5>
                    <p>{properties.manufacturer}</p>
                </div>
                <div className="col-md-3">
                    <h5>Cost</h5>
                    <p>{properties.cost_in_credits} credits</p>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-3">
                    <h5>Length</h5>
                    <p>{properties.length} meters</p>
                </div>
                <div className="col-md-3">
                    <h5>Max Speed</h5>
                    <p>{properties.max_atmosphering_speed} km/h</p>
                </div>
                <div className="col-md-3">
                    <h5>Crew</h5>
                    <p>{properties.crew}</p>
                </div>
                <div className="col-md-3">
                    <h5>Passengers</h5>
                    <p>{properties.passengers}</p>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-3">
                    <h5>Hyperdrive Rating</h5>
                    <p>{properties.hyperdrive_rating}</p>
                </div>
                <div className="col-md-3">
                    <h5>MGLT</h5>
                    <p>{properties.MGLT}</p>
                </div>
                <div className="col-md-3">
                    <h5>Cargo Capacity</h5>
                    <p>{properties.cargo_capacity} kg</p>
                </div>
                <div className="col-md-3">
                    <h5>Consumables</h5>
                    <p>{properties.consumables}</p>
                </div>
            </div>
        </div>
    );
};
