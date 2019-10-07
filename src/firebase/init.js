import * as firebase from 'firebase/app';
import 'firebase/firestore';
 
var firebaseConfig = {
        apiKey: 'AIzaSyCDtmyxfU85BSheE4uRtkt5jhmt8UegyEo',
        authDomain: 'sushi-recipes.firebaseapp.com',
        projectId: 'sushi-recipes-19628'
};
 
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
