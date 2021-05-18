import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyAjjVOWv25QEQwcjfqf1_QsSBn026TwI8Q",
	authDomain: "golfshop-coder.firebaseapp.com",
	projectId: "golfshop-coder",
	storageBucket: "golfshop-coder.appspot.com",
	messagingSenderId: "56752406523",
	appId: "1:56752406523:web:53e190510a51454d6b155e",
	measurementId: "G-0PVERCQ1W1",
});

export const getFirebase = () => {
	return app;
};

export const getFirestore = () => {
	return firebase.firestore(app);
};
