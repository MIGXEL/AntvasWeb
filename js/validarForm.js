//  VARIABLES
const nombre = document.getElementById('nombre');
const telfono = document.getElementById('telfono');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const valEmail = document.getElementById('validarEmail');
const valTelefono = document.getElementById('validarTelefono');
const valNombre = document.getElementById('validarNombre');






// EVENT LISTENER

eventListener();

function eventListener(){

    document.addEventListener('DOMContentLoaded', inicioApp);

    nombre.addEventListener('blur', validarCampo);
    telefono.addEventListener('blur', validarCampo);
    email.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

}






// FUNCIONES

function inicioApp(){

    btnEnviar.disabled = true;
}
function validarCampo(){
    console.log(this);
    // Se valida la longuitud del texto y que no este vacio
    /* validarLonguitud(this); */

    // Se valida solo el campo email
    if (this.id === 'email') {
        validarEmail(this);
        console.log(this);
    }
    if (this.id == 'telefono') {
        validarTelefono(this);
        console.log(this);
    }
    if (this.id == 'nombre') {
        validarNombre(this);
        console.log(this);
    }
    /* let errores = document.querySelectorAll('error');
    if (nombre.value !== '' && telefono.value !== '' && email.value !== '' && mensaje.value !== '' ) {
        if (errores.length === 0) {
            
            btnEnviar.disabled = false;

        }
    } */
}

/* function validarLonguitud(campo){

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'var(--color-primario)';
        valEmail.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        valEmail.innerHTML = 'Los campos NO deben estar vacios, gracias.'
        valEmail.classList.add('error');
    }

} */

function validarEmail(campo){

    if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campo.value)) {
        campo.style.borderBottomColor = 'var(--color-primario)';
        valEmail.innerHTML = ''
        valEmail.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        valEmail.innerHTML = 'ingresar un email valido, gracias. Ejemplo: correo@correo.cl'
        valEmail.classList.add('error');

    }
}

function validarTelefono(campo){

    if (/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(campo.value)) {
        campo.style.borderBottomColor = 'var(--color-primario)';
        valTelefono.innerHTML = ''
        valTelefono.classList.remove('error', 'fadeIn');
        valTelefono.classList.add('fadeOut', 'slow');
        
    } else {
        campo.style.borderBottomColor = 'red';
        valTelefono.classList.remove('fadeOut', 'slow');
        valTelefono.classList.add('error', 'animated', 'fadeIn');
        valTelefono.innerHTML = 'Ingrese un número de telefono válido, gracias. Ejemplo: 975372XXX'

    } 
}

function validarNombre(campo){

    if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(campo.value)) {
        campo.style.borderBottomColor = 'var(--color-primario)';
        valNombre.innerHTML = ''
        valNombre.classList.remove('error');
        
    } else {
        campo.style.borderBottomColor = 'red';
        valNombre.classList.add('error');
        valNombre.innerHTML = 'Revise su nombre, gracias. Ejemplo: Miguel'

    } 
}