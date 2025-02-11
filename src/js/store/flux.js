const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            films: [],
            species: [],
            starships: [],
            favorites: [],
        },
        actions: {
            fetchData: async (url, storeKey) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error(`Error al obtener datos de ${storeKey}`);

                    const data = await response.json();
                    setStore({ [storeKey]: data.results });
                } catch (error) {
                    console.error(`Error al obtener datos de ${storeKey}`, error);
                }
            },

            getPeople: async () => {
                getActions().fetchData("https://www.swapi.tech/api/people", "people");
            },

            getFilms: async () => {
                getActions().fetchData("https://www.swapi.tech/api/films", "films");
            },

            getPlanets: async () => {
                getActions().fetchData("https://www.swapi.tech/api/planets", "planets");
            },

            getVehicles: async () => {
                getActions().fetchData("https://www.swapi.tech/api/vehicles", "vehicles");
            },

            getSpecies: async () => {
                getActions().fetchData("https://www.swapi.tech/api/species", "species");
            },

            getStarships: async () => {
                getActions().fetchData("https://www.swapi.tech/api/starships", "starships");
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
            }
        }
    };
};

export default getState;