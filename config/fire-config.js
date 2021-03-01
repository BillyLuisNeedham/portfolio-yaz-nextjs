import firebase from 'firebase'

// TODO abstract into .env 
const firebaseConfig = {
  apiKey: 'AIzaSyBOoT8Tht5LGhk5V39n4EZ2KI-l8TILRc4',
  authDomain: 'portfolio-yazmin.firebaseapp.com',
  projectId: 'portfolio-yazmin',
  storageBucket: 'portfolio-yazmin.appspot.com',
  messagingSenderId: '1077395798987',
  appId: '1:1077395798987:web:174e093f6912c90a88144e',
  measurementId: 'G-9J3EC5K5E5',
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
