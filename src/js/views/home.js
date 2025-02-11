import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import { Card } from "../component/card";

export const Home = () => {
    const { store } = useContext(Context);

    const renderCarousel = (items, title, category) => (
        <div className="carousel-section mb-5">
            <h2 className="text-light mb-3">{title}</h2>
            <Carousel
                interval={null}
                className="carousel-dark"
                prevIcon={<i className="fas fa-chevron-left text-light fs-3"></i>}
                nextIcon={<i className="fas fa-chevron-right text-light fs-3"></i>}
            >
                {items.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            {group.map((item, i) => (
                                <Card key={i} data={item} category={category} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );

    const groupItems = (items, groupSize = 4) => {
        if (!items || items.length === 0) return [];
        const grouped = [];
        for (let i = 0; i < items.length; i += groupSize) {
            grouped.push(items.slice(i, i + groupSize));
        }
        return grouped;
    };

    return (
        <div className="text-center py-5 bg-dark">
            <h1 className="text-light mb-5">Star Wars Databank</h1>
            <div className="container">
                {store.people && store.people.length > 0 && renderCarousel(groupItems(store.people), "Characters", "people")}
                {store.planets && store.planets.length > 0 && renderCarousel(groupItems(store.planets), "Planets", "planets")}
                {store.vehicles && store.vehicles.length > 0 && renderCarousel(groupItems(store.vehicles), "Vehicles", "vehicles")}
                {store.films && store.films.length > 0 && renderCarousel(groupItems(store.films), "Films", "films")}
                {store.species && store.species.length > 0 && renderCarousel(groupItems(store.species), "Species", "species")}
                {store.starships && store.starships.length > 0 && renderCarousel(groupItems(store.starships), "Starships", "starships")}
            </div>
        </div>
    );
};
