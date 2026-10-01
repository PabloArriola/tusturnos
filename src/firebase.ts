import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCm-ANnGW6thh2ftcU9Yq912TkEYIlYSNY",
  authDomain: "tusturnos-app.firebaseapp.com",
  projectId: "tusturnos-app",
  storageBucket: "tusturnos-app.firebasestorage.app",
  messagingSenderId: "40133845791",
  appId: "1:40133845791:web:d3563f33b68cc90f5b862a"
};

export const app = initializeApp(firebaseConfig);
