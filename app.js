// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6R-PJdoDiYoCueVljzC7A-SRGsTNZlzs",
  authDomain: "bellezascaninas-7f05f.firebaseapp.com",
  projectId: "bellezascaninas-7f05f",
  storageBucket: "bellezascaninas-7f05f.appspot.com",
  messagingSenderId: "134138110069",
  appId: "1:134138110069:web:ea0e7e3dc941eb25ba183c",
  measurementId: "G-50RRR2EGEG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Autenticación con Google
function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log('Usuario autenticado:', user);
        }).catch((error) => {
            console.error('Error en la autenticación:', error);
        });
}

document.getElementById('googleSignIn').addEventListener('click', googleSignIn);

// Event Listener para el botón de inicio de sesión
document.getElementById('googleSignIn').addEventListener('click', googleSignIn);

let citas = {};

function addAppointment() {
    const petName = document.getElementById('pet-name').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const appointmentId = 'CITA-' + Math.floor(Math.random() * 1000000);
    citas[appointmentId] = { petName, appointmentTime };

    showNewAppointment(appointmentId); 
    updateAppointmentsList();
    document.getElementById('add-appointment-form').reset();
}

function showNewAppointment(appointmentId) {
    const cita = citas[appointmentId];
    const confirmationMessage = `Cita agregada: ID: ${appointmentId}, Mascota: ${cita.petName}, Hora: ${cita.appointmentTime}`;
    alert(confirmationMessage); 
}

function addAppointment() {
    const petName = document.getElementById('pet-name').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const appointmentId = 'CITA-' + Math.floor(Math.random() * 1000000);
    citas[appointmentId] = { petName, appointmentTime };

    updateAppointmentsList();
    document.getElementById('add-appointment-form').reset(); 
}

function cancelAppointment() {
    const appointmentId = document.getElementById('cancel-appointment-id').value;
    if (citas[appointmentId]) {
        delete citas[appointmentId];
        updateAppointmentsList();
    }
    document.getElementById('cancel-appointment-form').reset(); 
}

function updateAppointmentsList() {
    const appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';

    for (const [id, cita] of Object.entries(citas)) {
        const appointmentInfo = document.createElement('div');
        appointmentInfo.textContent = `ID: ${id}, Mascota: ${cita.petName}, Hora: ${cita.appointmentTime}`;
        appointmentsList.appendChild(appointmentInfo);
    }
}

document.getElementById('add-appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addAppointment();
});

document.getElementById('cancel-appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    cancelAppointment();
});
