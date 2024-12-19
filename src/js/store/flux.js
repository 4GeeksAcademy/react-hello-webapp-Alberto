const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            films: [],
            species: [],
            starships: [],
            favorites: []
        },
        actions: {
            getPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    if (!response.ok) throw new Error("Error al obtener personajes");

                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error al obtener personajes", error);
                }
            },

            getFilms: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/films");
                    if (!response.ok) throw new Error("Error al obtener películas");

                    const data = await response.json();
                    setStore({ films: data.results });
                } catch (error) {
                    console.error("Error al obtener películas", error);
                }
            },

            getPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    if (!response.ok) throw new Error("Error al obtener planetas");

                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error al obtener planetas", error);
                }
            },

            getVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    if (!response.ok) throw new Error("Error al obtener vehículos");

                    const data = await response.json(); // Se agregó await
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error al obtener vehículos", error);
                }
            },

            getSpecies: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/species");
                    if (!response.ok) throw new Error("Error al obtener especies");

                    const data = await response.json(); // Se agregó await
                    setStore({ species: data.results });
                } catch (error) {
                    console.error("Error al obtener especies", error);
                }
            },

            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some((fav) => fav.name === item.name)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
        
            removeFavorite: (name) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter((fav) => fav.name !== name);
                setStore({ favorites: updatedFavorites });
            },

            getStarships: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/starships");
                    if (!response.ok) throw new Error("Error al obtener naves");

                    const data = await response.json(); // Se agregó await
                    setStore({ starships: data.results });
                } catch (error) {
                    console.error("Error al obtener naves", error);
                }
            }
        }
    };
};

export default getState;
