import React from 'react';
import ShowContextProvider from './contexts/ShowContext';
import Navbar from './components/Navbar';
import ShowList from './components/ShowList';
import NewShowForm from './components/NewShowForm';

const App = () => {
	return (
		<div className="App">
			<ShowContextProvider>
				<Navbar />
				<ShowList />
				<NewShowForm />
			</ShowContextProvider>
		</div>
	);
};

export default App;
