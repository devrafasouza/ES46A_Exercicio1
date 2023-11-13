import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2RWb_pAbA5tCT4r-LPbclUypEyi0gD_U",
  authDomain: "arquitetura-medias.firebaseapp.com",
  projectId: "arquitetura-medias",
  storageBucket: "arquitetura-medias.appspot.com",
  messagingSenderId: "535365878049",
  appId: "1:535365878049:web:690f995ac2d2b05924fe60"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
