import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadImage = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const allowedImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];

	const handleImageUpload = (e) => {
		let image = e.target.files[0];

		if (image && allowedImageTypes.includes(image.type)) {
			setFile(image);
			setError(null);
		} else {
			setFile(null);
			setError('Please upload a valid image file (png, jpg, jpeg)');
		}
	};

	return (
		<form>
			<label>
				<input type='file' onChange={handleImageUpload} />
				<span>+</span>
			</label>

			<div className='output'>
				{error && <div className='error'>{error}</div>}

				{file && <div className='image'>{file.name}</div>}

				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadImage;
