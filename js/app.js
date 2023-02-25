// Menu
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
  if (menu_visible == false) {
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

// Barras
function crearBarra(id_barra) {
  for (i = 0; i <= 100; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

// Creación
let te = document.getElementById("te");
crearBarra(te);
let ord = document.getElementById("ord");
crearBarra(ord);
let des = document.getElementById("des");
crearBarra(des);
let cre = document.getElementById("cre");
crearBarra(cre);

// Animación
let contadores = [-1, -1, -1, -1];
let entro = false;

function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;

  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalTE = setInterval(function () {
      pintarBarra(te, 90, 0, intervalTE);
    }, 100);
    const intervalOrd = setInterval(function () {
      pintarBarra(ord, 95, 1, intervalOrd);
    }, 100);
    const intervalDes = setInterval(function () {
      pintarBarra(des, 70, 2, intervalDes);
    }, 100);
    const intervalCre = setInterval(function () {
      pintarBarra(cre, 86, 3, intervalCre);
    }, 100);
  }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#44EBE9";
  } else {
    clearInterval(interval);
  }
}

window.onscroll = function () {
  efectoHabilidades();
};
