import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const ShowContext = createContext();

const ShowContextProvider = (props) => {
	const localData = localStorage.getItem('shows');
	const state = localData ? JSON.parse(localData) : [];
	const [ shows, setShows ] = useState(state);

	useEffect(() => {
		localStorage.setItem('shows', JSON.stringify(shows), [ shows ]);
	});

	const addShow = (title) => setShows([ ...shows, { title, id: uuid() } ]);

	const removeShow = (id) => setShows(shows.filter((show) => show.id !== id));

	return <ShowContext.Provider value={{ shows, addShow, removeShow }}>{props.children}</ShowContext.Provider>;
};

export default ShowContextProvider;
