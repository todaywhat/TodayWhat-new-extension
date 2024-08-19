// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrOW8B0xbuI_pkwciSl_gChYTcEc__Yzw',
  authDomain: 'todaywhat-extension.firebaseapp.com',
  projectId: 'todaywhat-extension',
  storageBucket: 'todaywhat-extension.appspot.com',
  messagingSenderId: '710632112995',
  appId: '1:710632112995:web:efe4c1f3c8605831bdc956',
  measurementId: 'G-7PW1GPTLVR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
