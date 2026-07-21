const firebaseConfig = {
    apiKey: "AIzaSyDicp7L31V_ALmsQ6bxHjVsN5YK3iO9X_Q",
    authDomain: "clouddatabaseproject-4f6f3.firebaseapp.com",
    projectId: "clouddatabaseproject-4f6f3",
    storageBucket: "clouddatabaseproject-4f6f3.firebasestorage.app",
    messagingSenderId: "399450795598",
    appId: "1:399450795598:web:0619e3d1388f68a4f0dd1f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create Firestore reference
const db = firebase.firestore();