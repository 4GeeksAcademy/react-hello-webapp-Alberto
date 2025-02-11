import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { DetailsPeople } from "./views/DetailsPeople";
import { DetailsPlanets } from "./views/DetailsPlanets";
import { DetailsVehicles } from "./views/DetailsVehicles";
import { DetailsFilms } from "./views/DetailsFilms";
import { DetailsSpecies } from "./views/DetailsSpecies";
import { DetailsStarships } from "./views/DetailsStarships";



import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/people/:id" element={<DetailsPeople />} />
                        <Route path="/details/planets/:id" element={<DetailsPlanets />} />
                        <Route path="/details/vehicles/:id" element={<DetailsVehicles />} />
                        <Route path="/details/films/:id" element={<DetailsFilms />} />
                        <Route path="/details/species/:id" element={<DetailsSpecies />} />
                        <Route path="/details/starships/:id" element={<DetailsStarships />} />

                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        {/* Ruta para manejar páginas no encontradas */}
                        <Route path="*" element={<h1 className="text-center mt-5">Página no encontrada</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);