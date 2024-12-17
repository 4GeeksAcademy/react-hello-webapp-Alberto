const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			films: [],
			species: [],
			starships: []
		},
		actions: {
			getPeople: async () => {
				try {
					const response = await fetch ("https://www.swapi.tech/api/people");
					if (!response.ok) throw new Error ("Error al obtener personajes");

					const data = await response.json();

					setStore({people: data.results});
				} catch (error) {
					console.error("Error al obtener personajes", error);
				}
			},

			getFilms: async () => {
				try {
					const response = await fetch ("https://www.swapi.tech/api/films");
					if (!response.ok) throw new Error ("Error al obtener peliculas");

					const data = await response.json();

					setStore({films: data.results});
				} catch (error) {
					console.error("Error al obtener peliculas", error);
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch ("https://www.swapi.tech/api/planets");
					if (!response.ok) throw new Error ("Error al obtener planetas");

					const data = await response.json();

					setStore({planets: data.results});
				} catch (error) {
					console.error("Error al obtener planetas", error);
				}
			},

			getVehicles: async () => {
				try{
					const response = await fetch ("https://www.swapi.tech/api/vehicles");
					if (!response.ok) throw new Error ("Error al obtener vehiculos");

					const data = response.json();

					setStore({vehicles: data.results});
				} catch (error){
					console.error("Error al obtener vehiculos", error);
				}
			},

			getSpecies: async () => {
				try{
					const response = await fetch ("https://www.swapi.tech/api/species");
					if (!response.ok) throw new Error ("Error al obtener especies");

					const data = response.json();

					setStore({species: data.results});
				} catch (error) {
					console.error("Error al obtener especies", error);
				}
			},

			getStarships: async () => {
				try{
					const response = await fetch ("https://www.swapi.tech/api/starships");
				if (!response.ok) throw new Error("Error al obtener naves");

				const data = response.json();

				setStore({starships: data.results});
				} catch (error){
					console.error("Error al obtener naves", error);
				}


			}

		}

	};
};

export default getState;
