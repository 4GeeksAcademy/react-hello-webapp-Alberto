import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsPeople = () => {
    const { id } = useParams(); // Obtiene el ID del recurso desde la URL
    const [details, setDetails] = useState(null);

    // Fetch de los detalles del personaje
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
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
                    <p>
                        {`Birth Year: ${properties.birth_year}`}
                    </p>
                    <p>{description}</p>
                </div>
            </div>

            {/* Tabla de detalles */}
            <div className="row text-center">
                <div className="col-md-2">
                    <h5>Gender</h5>
                    <p>{properties.gender}</p>
                </div>
                <div className="col-md-2">
                    <h5>Height</h5>
                    <p>{properties.height} cm</p>
                </div>
                <div className="col-md-2">
                    <h5>Mass</h5>
                    <p>{properties.mass} kg</p>
                </div>
                <div className="col-md-2">
                    <h5>Eye Color</h5>
                    <p>{properties.eye_color}</p>
                </div>
                <div className="col-md-2">
                    <h5>Hair Color</h5>
                    <p>{properties.hair_color}</p>
                </div>
                <div className="col-md-2">
                    <h5>Skin Color</h5>
                    <p>{properties.skin_color}</p>
                </div>
            </div>

            {/* Apariciones */}
            <div className="row mt-5">
                <h4>Appearances</h4>
                <ul>
                    {properties.films && properties.films.map((film, index) => (
                        <li key={index}>{film}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
