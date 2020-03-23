{/* <script type="text/javascript">
window.onload = function() { //datos para escritura
escribir = document.getElementById("caja")
si = "correcto"; 
no = "no es correcto";
}
function correcto(valor) { // dar respuesta
         if (valor == true) { respuesta = si }
         else  { respuesta = no }
         return respuesta;
         }
function comprobar() {
         escribir.innerHTML = "Comprobación de datos: <br/> "
         //comprobar nombre
         nombre = document.formu.nombre.value;
         patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
         compNombre = patronNombre.test(nombre);
         correcto(compNombre);
         escribir.innerHTML += "Nombre : "+respuesta + "<br/>";
         //comprobar teléfono
         telefono = document.formu.tel.value;
         patronTel = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
         compTel = patronTel.test(telefono);
         correcto(compTel);
         escribir.innerHTML += "Teléfono: "+respuesta + "<br/>";
         //comprobar correo
         correo = document.formu.email.value;
         patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
         compEmail = patronEmail.test(correo);
         correcto(compEmail);
         escribir.innerHTML += "E-mail : "+respuesta + "<br/>";
         // comprobar página web
         pagina = document.formu.web.value;
         patronPag = /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;
         compPag = patronPag.test(pagina);
         correcto(compPag);
         escribir.innerHTML += "Página Web: "+respuesta + "<br/>";
         }
</script> */}