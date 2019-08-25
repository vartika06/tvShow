import React, { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';
import ShowDetails from '../components/ShowDetails';

const ShowList = () => {
	const { shows } = useContext(ShowContext);
	return shows.length ? (
		<div className="book-list">
			<ul>{shows.map((show) => <ShowDetails show={show} key={show.id} />)}</ul>
		</div>
	) : (
		<div className="empty">No new shows to watch</div>
	);
};

export default ShowList;
