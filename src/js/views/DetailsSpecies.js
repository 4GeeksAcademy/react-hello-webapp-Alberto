import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsSpecies = () => {
    const { id } = useParams(); // Obtiene el ID de la especie desde la URL
    const [details, setDetails] = useState(null);

    // Fetch de los detalles de la especie
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
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
                    <h5>Classification</h5>
                    <p>{properties.classification}</p>
                </div>
                <div className="col-md-3">
                    <h5>Designation</h5>
                    <p>{properties.designation}</p>
                </div>
                <div className="col-md-3">
                    <h5>Average Height</h5>
                    <p>{properties.average_height} cm</p>
                </div>
                <div className="col-md-3">
                    <h5>Average Lifespan</h5>
                    <p>{properties.average_lifespan} years</p>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-3">
                    <h5>Skin Colors</h5>
                    <p>{properties.skin_colors}</p>
                </div>
                <div className="col-md-3">
                    <h5>Hair Colors</h5>
                    <p>{properties.hair_colors}</p>
                </div>
                <div className="col-md-3">
                    <h5>Eye Colors</h5>
                    <p>{properties.eye_colors}</p>
                </div>
                <div className="col-md-3">
                    <h5>Language</h5>
                    <p>{properties.language}</p>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-4">
                    <h5>Homeworld</h5>
                    <p>{properties.homeworld ? <a href={properties.homeworld} target="_blank" rel="noopener noreferrer">Homeworld</a> : "Unknown"}</p>
                </div>
            </div>
        </div>
    );
};
