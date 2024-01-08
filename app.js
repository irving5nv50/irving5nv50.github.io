// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6R-PJdoDiYoCueVljzC7A-SRGsTNZlzs",
  authDomain: "bellezascaninas-7f05f.firebaseapp.com",
  projectId: "bellezascaninas-7f05f",
  // ...otros parámetros
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

    updateAppointmentsList();
}

function editAppointment() {
    const appointmentId = document.getElementById('edit-appointment-id').value;
    const newPetName = document.getElementById('edit-pet-name').value;
    const newAppointmentTime = document.getElementById('edit-appointment-time').value;

    if (citas[appointmentId]) {
        citas[appointmentId] = { petName: newPetName, appointmentTime: newAppointmentTime };
    }

    updateAppointmentsList();
}

function queryAppointment() {
    const appointmentId = document.getElementById('query-appointment-id').value;
    if (citas[appointmentId]) {
        alert(`Cita encontrada: Mascota - ${citas[appointmentId].petName}, Hora - ${citas[appointmentId].appointmentTime}`);
    } else {
        alert("Cita no encontrada.");
    }
}

function cancelAppointment() {
    const appointmentId = document.getElementById('cancel-appointment-id').value;
    if (citas[appointmentId]) {
        delete citas[appointmentId];
        updateAppointmentsList();
    }
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

document.getElementById('edit-appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    editAppointment();
});

document.getElementById('query-appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    queryAppointment();
});

document.getElementById('cancel-appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    cancelAppointment();
});
