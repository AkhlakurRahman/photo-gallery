import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyBf2Qp18GyACo4h6H2LYMCVRyj9T-VXT40',
	authDomain: 'photo-gallery-5af55.firebaseapp.com',
	databaseURL: 'https://photo-gallery-5af55.firebaseio.com',
	projectId: 'photo-gallery-5af55',
	storageBucket: 'photo-gallery-5af55.appspot.com',
	messagingSenderId: '967374156657',
	appId: '1:967374156657:web:95f68d0795d4dc6e1d7cd0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
