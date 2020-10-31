import React from 'react';

import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import UploadImage from './components/UploadImage';

function App() {
	return (
		<div className='App'>
			<Title />
			<UploadImage />
			<ImageGrid />
		</div>
	);
}

export default App;
