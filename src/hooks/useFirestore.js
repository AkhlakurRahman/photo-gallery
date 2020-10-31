import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = ({ collection }) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		projectFirestore.collection(collection).onSnapshot((snap) => {
			let documents = [];

			snap.forEach((doc) => {
				documents.push({ ...doc.data(), id: doc.id });
			});
		});
	}, [collection]);

	return { docs };
};
