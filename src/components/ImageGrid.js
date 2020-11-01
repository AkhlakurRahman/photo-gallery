import React from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImage }) => {
	const { docs } = useFirestore('images');

	const handleImageClick = (url) => {
		setSelectedImage(url);
	};

	return (
		<div className='img-grid'>
			{docs &&
				docs.map((doc) => (
					<motion.div
						layout
						whileHover={{ opacity: 1 }}
						className='img-wrap'
						key={doc.id}
						onClick={() => handleImageClick(doc.url)}
					>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
							src={doc.url}
							alt={doc.id}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
