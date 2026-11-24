import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// O domínio firebaseapp.com é a origem oficial do helper OAuth deste projeto.
// Mantém todas as telas na mesma origem para evitar bloqueios de popup/cookies.
if (window.location.hostname === "seu-projeto.web.app") {
  const destinoFirebase = new URL(window.location.href);
  destinoFirebase.hostname = "seu-projeto.firebaseapp.com";
  window.location.replace(destinoFirebase.toString());
}

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
  measurementId: "G-XXXXXXXXXX"
};

// 3. INICIALIZAÇÃO DO APP (Apenas uma vez)
const app = initializeApp(firebaseConfig);

// 4. EXPORTAÇÕES DOS MÓDULOS PARA OS CONTROLLERS/MODELS
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
