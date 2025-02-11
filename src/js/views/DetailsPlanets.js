import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsPlanets = () => {
    const { id } = useParams(); // Obtiene el ID del planeta desde la URL
    const [details, setDetails] = useState(null);

    // Fetch de los detalles del planeta
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
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
                {/* Imagen y nombre */}
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
                <div className="col-md-2">
                    <h5>Diameter</h5>
                    <p>{properties.diameter} km</p>
                </div>
                <div className="col-md-2">
                    <h5>Rotation Period</h5>
                    <p>{properties.rotation_period} hours</p>
                </div>
                <div className="col-md-2">
                    <h5>Orbital Period</h5>
                    <p>{properties.orbital_period} days</p>
                </div>
                <div className="col-md-2">
                    <h5>Gravity</h5>
                    <p>{properties.gravity}</p>
                </div>
                <div className="col-md-2">
                    <h5>Population</h5>
                    <p>{properties.population}</p>
                </div>
            </div>

            {/* Detalles adicionales */}
            <div className="row text-center mt-4">
                <div className="col-md-4">
                    <h5>Climate</h5>
                    <p>{properties.climate}</p>
                </div>
                <div className="col-md-4">
                    <h5>Terrain</h5>
                    <p>{properties.terrain}</p>
                </div>
                <div className="col-md-4">
                    <h5>Surface Water</h5>
                    <p>{properties.surface_water}%</p>
                </div>
            </div>
        </div>
    );
};
