import React from 'react';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {
	render() {
		return (
			<div style={{ marginTop: '30px' }} className='ui container'>
				<SearchBar />
			</div>
		);
	}
}

export default App;
