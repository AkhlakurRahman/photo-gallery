import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleImageClose = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImage(null);
		}
	};

	return (
		<motion.div
			className='backdrop'
			onClick={handleImageClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
				src={selectedImage}
				alt='Selected'
			/>
		</motion.div>
	);
};

export default Modal;
