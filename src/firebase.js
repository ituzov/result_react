import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAyLMcHKT3SZffQtpJXqCmTI812sRQC6y0',
	authDomain: 'myfirstprojent.firebaseapp.com',
	projectId: 'myfirstprojent',
	storageBucket: 'myfirstprojent.appspot.com',
	messagingSenderId: '878835423658',
	appId: '1:878835423658:web:ce0ca57faa55c0d5e6b3d3',
	databaseURL: 'https://myfirstprojent-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
