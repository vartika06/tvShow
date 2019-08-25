import React, { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

const Navbar = () => {
	const { shows } = useContext(ShowContext);
	return (
		<nav>
			<h1>To Watch</h1>
			<p>{shows.length} more shows to go</p>
		</nav>
	);
};

export default Navbar;
