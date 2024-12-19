import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = ({ data }) => {
    const { actions } = useContext(Context);

    return (
        <div className="card text-light bg-secondary position-relative" style={{ width: "18rem" }}>
            <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={data.name}
            />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Explore more about {data.name}.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-outline-light">
                        Learn More
                    </a>
                </div>
            </div>
            <i
                className="fas fa-heart"
                onClick={() => actions.addFavorite(data)}
            ></i>
        </div>
    );
};
