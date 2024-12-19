import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-black mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0">
                    <img
                        src={"data:image/png;base64,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"}
                        style={{ height: "100px" }}
                    />
                </span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((favorite, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <span>{favorite.name}</span>
                                    <i
                                        className="fas fa-trash text-danger"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => actions.removeFavorite(favorite.name)}
                                    ></i>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item text-muted">No hay favoritos</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
