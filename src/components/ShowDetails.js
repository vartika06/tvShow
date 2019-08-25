import React, { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

const ShowDetails = ({ show }) => {
	const { removeShow } = useContext(ShowContext);
	return <li onClick={() => removeShow(show.id)}>{show.title}</li>;
};

export default ShowDetails;
