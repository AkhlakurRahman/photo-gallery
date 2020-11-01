import React, { useState } from 'react';

import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadImage from './components/UploadImage';

function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	console.log(selectedImage);

	return (
		<div className='App'>
			<Title />
			<UploadImage />
			<ImageGrid setSelectedImage={setSelectedImage} />
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</div>
	);
}

export default App;
