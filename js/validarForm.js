//  VARIABLES
const nombre = document.getElementById('nombre');
const telfono = document.getElementById('telfono');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const valEmail = document.getElementById('validarEmail');
const valTelefono = document.getElementById('validarTelefono');
const valNombre = document.getElementById('validarNombre');
const valMensaje = document.getElementById('validarMensaje');
let boll = true;





// EVENT LISTENER

eventListener();

function eventListener(){

    document.addEventListener('DOMContentLoaded', inicioApp);

    nombre.addEventListener('blur', validarNombre);
    telefono.addEventListener('blur', validarTelefono);
    email.addEventListener('blur', validarEmail);
    mensaje.addEventListener('blur', validarMensaje);

}






// FUNCIONES

function inicioApp(){

    if (boll == true) {

        btnEnviar.disabled = true;

    } else {
        
        btnEnviar.disabled = false;
        
    }
}





function validarNombre(){
    
    
    if (nombre.value == '') {
        
        nombre.style.borderBottomColor = 'red';
        valNombre.innerHTML = 'El campo nombre NO debe estar vacio, gracias.'
        valNombre.classList.add('error', 'fadeIn');        
        btnEnviar.disabled = true;
        boll = true;
        return boll

        
    }else{
        
        if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre.value)) {
            nombre.style.borderBottomColor = 'var(--color-primario)';
            valNombre.innerHTML = ''
            valNombre.classList.remove('error', 'fadeIn');
            valNombre.classList.add('fadeOut', 'slow');
            btnEnviar.disabled = false;
            boll = false;
            inicioApp(boll)
            
        } else {
            nombre.style.borderBottomColor = 'red';
            valNombre.classList.add('error', 'fadeIn');
            valNombre.innerHTML = 'Ingrese un nombre válido, gracias. Ejemplo: Miguel'
            btnEnviar.disabled = true;
            boll = true;
            return boll
            
        } 
    }
    
}
function validarTelefono(){

    if (telefono.value == '') {

        telefono.style.borderBottomColor = 'red'
        valTelefono.innerHTML = 'El campo telefono NO debe estar vacio, gracias.'
        valTelefono.classList.add('error', 'animated', 'fadeIn');
        btnEnviar.disabled = true;
        


    }else{
        
        if (/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(telefono.value)) {
            telefono.style.borderBottomColor = 'var(--color-primario)';
            valTelefono.innerHTML = ''
            valTelefono.classList.remove('error', 'fadeIn');
            valTelefono.classList.add('fadeOut', 'slow');
            btnEnviar.disabled = false;
            
        } else {
            telefono.style.borderBottomColor = 'red';
            valTelefono.classList.remove('fadeOut', 'slow');
            valTelefono.classList.add('error', 'animated', 'fadeIn');
            valTelefono.innerHTML = 'Ingrese un número de telefono válido, gracias. Ejemplo: 975372XXX'
            btnEnviar.disabled = true;
    
        } 
    }
    return true

}

function validarEmail(){

    if (email.value == '') {

        email.style.borderBottomColor = 'red'
        valEmail.innerHTML = 'El campo email NO debe estar vacio, gracias.'
        valEmail.classList.add('error', 'animated', 'fadeIn');
        btnEnviar.disabled = true;


    }else{
        
        if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            email.style.borderBottomColor = 'var(--color-primario)';
            valEmail.innerHTML = ''
            valEmail.classList.remove('error');
            btnEnviar.disabled = false;
        } else {
            email.style.borderBottomColor = 'red';
            valEmail.innerHTML = 'Ingrese un email válido, gracias. Ejemplo: correo@correo.cl'
            valEmail.classList.add('error', 'animated', 'fadeIn');
            btnEnviar.disabled = true;
    
        }
    }

}

function validarMensaje(){

    if (mensaje.value == '') {

        mensaje.style.borderBottomColor = 'red'
        valMensaje.innerHTML = 'El campo Menjase NO debe estar vacio, gracias.'
        valMensaje.classList.add('error', 'animated', 'fadeIn');
        btnEnviar.disabled = true;


    }else{
        
        if (/^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/.test(mensaje.value)) {
            mensaje.style.borderBottomColor = 'var(--color-primario)';
            valMensaje.innerHTML = ''
            valMensaje.classList.remove('error');
            btnEnviar.disabled = false;
        } else {
            mensaje.style.borderBottomColor = 'red';
            valMensaje.innerHTML = 'Escriba un mendaje sin simbolos especiales. Gracias'
            valMensaje.classList.add('error', 'animated', 'fadeIn');
            btnEnviar.disabled = true;
    
        }
    }

}