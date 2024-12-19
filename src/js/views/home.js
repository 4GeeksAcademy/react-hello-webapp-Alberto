import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import { Card } from "../component/card";

export const Home = () => {
    const { store } = useContext(Context);

    // Función para generar los carruseles
    const renderCarousel = (items, title) => (
        <div className="carousel-section mb-5">
            <h2 className="text-light mb-3">{title}</h2>
            <Carousel interval={null} className="carousel-dark">
                {items.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            {group.map((item, i) => (
                                <Card key={i} data={item} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );

    // Agrupa los elementos en subgrupos de tamaño especificado
    const groupItems = (items, groupSize = 4) => {
        if (!items || items.length === 0) return []; // Si no hay datos, devolver un array vacío
        const grouped = [];
        for (let i = 0; i < items.length; i += groupSize) {
            grouped.push(items.slice(i, i + groupSize));
        }
        return grouped;
    };

	console.log("People:", store.people);
	console.log("Planets:", store.planets);
	console.log("Vehicles:", store.vehicles);
	console.log("Films:", store.films);
	console.log("Species:", store.species);
	console.log("Starships:", store.starships);


    return (
        <div className="text-center py-5 bg-dark">
            <h1 className="text-light mb-5">Star Wars Databank</h1>
            <div className="container">
                {store.people && renderCarousel(groupItems(store.people), "Characters")}
                {store.planets && renderCarousel(groupItems(store.planets), "Planets")}
                {store.vehicles && renderCarousel(groupItems(store.vehicles), "Vehicles")}
                {store.films && renderCarousel(groupItems(store.films), "Films")}
                {store.species && renderCarousel(groupItems(store.species), "Species")}
                {store.starships && renderCarousel(groupItems(store.starships), "Starships")}
            </div>
        </div>
    );
};
