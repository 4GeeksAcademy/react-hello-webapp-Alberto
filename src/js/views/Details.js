import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { id } = useParams(); // Obtiene el ID del recurso desde la URL
    const [details, setDetails] = useState(null);

    // Fetch de los detalles del personaje
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await response.json();
                setDetails(data.result.properties); // Guarda las propiedades
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
        fetchDetails();
    }, [id]);

    if (!details) return <div className="text-center text-light">Loading...</div>;

    return (
        <div className="container my-5 text-light">
            <div className="row mb-5">
                {/* Imagen y nombre */}
                <div className="col-md-4 text-center">
                    <img
                        src="https://via.placeholder.com/300" // Placeholder hasta que se integre una imagen real
                        alt={details.name}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{details.name}</h1>
                    <p>
                        {`Birth Year: ${details.birth_year}`}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque ut ex posuere volutpat.
                    </p>
                </div>
            </div>

            {/* Tabla de detalles */}
            <div className="row text-center">
                <div className="col-md-2">
                    <h5>Gender</h5>
                    <p>{details.gender}</p>
                </div>
                <div className="col-md-2">
                    <h5>Height</h5>
                    <p>{details.height} cm</p>
                </div>
                <div className="col-md-2">
                    <h5>Mass</h5>
                    <p>{details.mass} kg</p>
                </div>
                <div className="col-md-2">
                    <h5>Eye Color</h5>
                    <p>{details.eye_color}</p>
                </div>
                <div className="col-md-2">
                    <h5>Hair Color</h5>
                    <p>{details.hair_color}</p>
                </div>
                <div className="col-md-2">
                    <h5>Skin Color</h5>
                    <p>{details.skin_color}</p>
                </div>
            </div>

            {/* Apariciones */}
            <div className="row mt-5">
                <h4>Appearances</h4>
                <ul>
                    {details.films.map((film, index) => (
                        <li key={index}>{film}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
