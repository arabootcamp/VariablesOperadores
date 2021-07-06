//Se solicita que el usuario ingrese un número, el cual se convierte a decimal y luego se almacena en la variable daysEntered
let daysEntered = parseFloat(prompt("Ingrese cantidad de días a convertir"));

//Se comprueba que se ingreso un número, que sea mayor a cero y entero
if (!isNaN(daysEntered) && daysEntered > 0 && Number.isInteger(daysEntered)) {

  //Se define la variable years y se le asigna la cantidad de años a partir de los días ingresados
  let years = Math.floor(daysEntered / 365)
  //Se define la variable weeks y se le asigna la cantidad de semanas calculada con el resto de la división (daysEntered / 365)
  let weeks = Math.floor((daysEntered % 365) / 7);
  //Se define la variable days y se le asigna el resultado de la resta de los días ingresados menos los años y semanas calculadas anteriormente
  let days = daysEntered - years*365 - weeks*7;

  //Se imprime en el html los datos ingresados y el resultado de las operaciones realizadas para calcular los años, semanas y días
  document.write(`<div class="container my-5">`);
  document.write(`<h2>Los ${daysEntered} días corresponden a:</h2>`);
  document.write(`<p>${years} año/s, ${weeks} semana/s y ${days} día/s</p>`);
  document.write(`<button class="btn btn-primary my-5" onclick="location='index.html'">Regresar</button>`);
  document.write(`</div>`);
} else
  //Se imprime una alerta si no ingreso un número mayor a cero
  alert("Debe ingresar un número entero mayor a cero");