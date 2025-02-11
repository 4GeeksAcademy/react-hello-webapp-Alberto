import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsFilms = () => {
    const { id } = useParams(); // Obtiene el ID de la película desde la URL
    const [details, setDetails] = useState(null);
    const [relatedData, setRelatedData] = useState({
        characters: [],
        planets: [],
        starships: [],
        vehicles: [],
        species: []
    });

    // Fetch de los detalles de la película
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/films/${id}`);
                if (!response.ok) throw new Error("Error fetching details");
                const data = await response.json();
                setDetails(data.result);

                // Fetch de los datos relacionados
                const fetchRelated = async (urls) => {
                    const results = await Promise.all(
                        urls.map(async (url) => {
                            const res = await fetch(url);
                            if (!res.ok) return "Unknown";
                            const relatedData = await res.json();
                            return relatedData.result.properties.name;
                        })
                    );
                    return results;
                };

                const characters = await fetchRelated(data.result.properties.characters);
                const planets = await fetchRelated(data.result.properties.planets);
                const starships = await fetchRelated(data.result.properties.starships);
                const vehicles = await fetchRelated(data.result.properties.vehicles);
                const species = await fetchRelated(data.result.properties.species);

                setRelatedData({ characters, planets, starships, vehicles, species });
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
                <div className="col-md-12 text-center">
                    <h1>{properties.title}</h1>
                    <p className="text-muted">Episode {properties.episode_id}</p>
                    <p>{description}</p>
                </div>
            </div>

            {/* Información general */}
            <div className="row text-center">
                <div className="col-md-4">
                    <h5>Director</h5>
                    <p>{properties.director}</p>
                </div>
                <div className="col-md-4">
                    <h5>Producer</h5>
                    <p>{properties.producer}</p>
                </div>
                <div className="col-md-4">
                    <h5>Release Date</h5>
                    <p>{properties.release_date}</p>
                </div>
            </div>

            {/* Opening Crawl */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <h4>Opening Crawl</h4>
                    <p>{properties.opening_crawl}</p>
                </div>
            </div>

            {/* Listas relacionadas */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <h5>Characters</h5>
                    <ul>
                        {relatedData.characters.map((character, index) => (
                            <li key={index}>{character}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h5>Planets</h5>
                    <ul>
                        {relatedData.planets.map((planet, index) => (
                            <li key={index}>{planet}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-4">
                    <h5>Starships</h5>
                    <ul>
                        {relatedData.starships.map((starship, index) => (
                            <li key={index}>{starship}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Vehicles</h5>
                    <ul>
                        {relatedData.vehicles.map((vehicle, index) => (
                            <li key={index}>{vehicle}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Species</h5>
                    <ul>
                        {relatedData.species.map((species, index) => (
                            <li key={index}>{species}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
