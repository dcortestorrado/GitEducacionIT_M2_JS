function verificarEdad() {
    let edad = document.getElementById("inputedad").value;
    console.log(edad);

    if (edad === "") {

      let inputElement = document.getElementById("inputedad");
      let tooltip = new bootstrap.Tooltip(inputElement);
      tooltip.show();
  
      return; 
    }

    if (edad >= 18) {
      let modal = document.getElementById("welcomeModal");
      modal.classList.add("show");
      modal.style.display = "block";
      
      setTimeout(function() {
        location.href = "/ejercicio2.html";
      }, 2000); 
    } else {
      location.href = "/error.html";
    }
}

function redireccionPrincipal(){
  location.href = "/ejercicio1.html";
}

/* funciones para el login, ejercicio 2 */

const mapaDeUsuarios = new Map();
mapaDeUsuarios.set('admin', '1234');
mapaDeUsuarios.set('emma.smith', 'pass456');
mapaDeUsuarios.set('alex.wilson', 'secure789');
mapaDeUsuarios.set('lisa.brown', 'secret987');
mapaDeUsuarios.set('mike.jones', '1234pass');

function verificarUsuario() {
  let usuario = document.getElementById("inputusuario").value.trim();
  let password = document.getElementById("inputpassword").value.trim();

  if (usuario === "") {
    mostrarModal("El usuario no puede estar vacío");
    return;
  }

  if (password === "") {
    mostrarModal("La contraseña no puede estar vacía");
    return;
  }

  if (!mapaDeUsuarios.has(usuario)) {
    mostrarModal("El usuario no existe");
    return;
  } else {
    if (password === mapaDeUsuarios.get(usuario)) {
      mostrarModal("¡Bienvenido!");
    } else {
      mostrarModal("Contraseña incorrecta");
    }
  }
}

function mostrarModal(msj) {
  document.getElementById("modal-msj").innerHTML = msj;

  document.getElementById("modal").classList.add("show");
  document.getElementById("modal").style.display = "block";

  setTimeout(function() {
    cerrarModal();
  }, 3000);
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("show");
  document.getElementById("modal").style.display = "none";
}
  
