//Se solicita que el usuario ingrese un número, el cual se convierte a decimal y luego se almacena en la variable tCelsius
let tCelsius = parseFloat(prompt("Ingrese un número para la temperatura en grados Celsius"));

//Se comprueba que se ingresó un número
if (!isNaN(tCelsius)) {
  //Se definen las variable que almacenaran los resultados y se asigna el valor de la operacion matemática para obtener la temperatura en Kelvin y Fahrenheit
  let tKelvin = tCelsius + 273.15;
  let tFahrenheit = (tCelsius * 9 / 5) + 32;

  //Se imprime en el html el resultado de la conversión realizada
  document.write(`<div class="container my-5">`);  
  document.write(`<h2>${tCelsius} grados Celsius quivalen a:</h2>`);
  document.write(`<p>${(tKelvin).toFixed(2)} grados Kelvin<p>`);
  document.write(`<p>${(tFahrenheit).toFixed(2)} grados Fahrenheit<p>`);
  document.write(`<button class="btn btn-primary my-5" onclick="location='index.html'">Regresar</button>`);
  document.write(`</div>`);
} else
  //Se imprime una alerta si no ingreso un número mayor a cero
  alert("Debe ingresar un número");