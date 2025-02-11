import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = ({ data, category }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="card text-light bg-secondary position-relative" style={{ width: "18rem" }}>
            <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={data.name || data.title}
            />
            <div className="card-body">
                <h5 className="card-title">{data.name || data.title}</h5>
                <p className="card-text">Explore more about {data.name || data.title}.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-outline-light"
                        onClick={() => navigate(`/details/${category}/${data.uid}`)}
                    >
                        Learn More
                    </button>
                    <i
                        className="fas fa-heart heart-container"
                        onClick={() => actions.addFavorite(data)}
                    ></i>
                </div>
            </div>
        </div>
    );
};
