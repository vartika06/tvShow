import React, { useState, useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

const NewShowForm = () => {
	const { addShow } = useContext(ShowContext);
	const [ title, setTitle ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addShow(title);
		setTitle('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				required
				placeholder="New Show"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input type="submit" value="Add Show" />
		</form>
	);
};

export default NewShowForm;
