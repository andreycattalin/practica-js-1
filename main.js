// Ejericio 1
// document.getElementById("elemento1").innerHTML = "Escribo algo";
// document.getElementById("elemento2").innerHTML = "Escribo otra cosa";

// EJericio 2
function cambiarMiTexto() {
  let texto1 = "Cuando pulso he cambiado";
  let texto2 = "Cuando pulso Escribo otra cosa";

  let texto1Normal = "Hola";
  let texto2Normal = "Adios";

  let textoActual = document.getElementById("elemento1").innerHTML;

  if (textoActual == texto1) {
    document.getElementById("elemento1").innerHTML = texto1Normal;
    document.getElementById("elemento2").innerHTML = texto2Normal;
  } else {
    document.getElementById("elemento1").innerHTML = texto1;
    document.getElementById("elemento2").innerHTML = texto2;
  }
}

// Ejericio 3
function cambiarMiImagen() {
  let img1 = "ktal.png";
  let img2 = "persona.jpg";

  let imagenActual = document.getElementById("img-principal").src;

  if (imagenActual.includes(img1)) {
    document.getElementById("img-principal").src = img2;
  } else {
    document.getElementById("img-principal").src = img1;
  }
}

// Ejercicio 4
function cambiarClase() {
  let claseActual = document.getElementById("caja1").classList;
  if (claseActual == "caja rojo") {
    document.getElementById("caja1").classList = "caja azul";
  } else {
    document.getElementById("caja1").classList = "caja rojo";
  }

  // forma 2
  let caja2 = document.getElementById("caja2");

  if (caja2.classList == "caja rojo") {
    caja2.classList.remove("rojo");
    caja2.classList.add("azul");
  } else {
    caja2.classList.remove("azul");
    caja2.classList.add("rojo");
  }
}

// Ejercicio 5
function sumar() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let resultado = parseInt(num1) + parseInt(num2);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function restar() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let resultado = parseInt(num1) - parseInt(num2);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let resultado = parseInt(num1) * parseInt(num2);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  let resultado = parseInt(num1) / parseInt(num2);
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

//  Input de color
function aplicarColor() {
  let colorUsuario = document.getElementById("micolor").value;
  document.getElementById("cajaPedro").style.backgroundColor = colorUsuario;
}
