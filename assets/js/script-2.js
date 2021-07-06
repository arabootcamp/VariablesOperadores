//Se solicita que el usuario ingrese un número, el cual se convierto a decimal y luego se almacena en la variable num1
let num1 = parseFloat(prompt("Ingrese el primer número"));
//Se solicita que el usuario ingrese un número, el cual se convierto a decimal y luego se almacena en la variable num2
let num2 = parseFloat(prompt("Ingrese el segundo número"));

//Se comprueba que se ingresarón números y que sean mayores a cero
if (!isNaN(num1) && !isNaN(num2) && num1 > 0 && num2 > 0) {

  //Se definen las variables y se les asigna el valor asociado a la operación aritmética sobre los números ingresados.
  let addition = num1 + num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  let module = num1 % num2;

  //Se imprime en el html el resultado de cada operación aritmética 
  document.write(`<div class="container my-5">`);
  document.write(`<h2>Para los números ingresados ${num1} y ${num2}, los resultados de las operaciones aritméticas son:</h2>`);
  document.write(`<p>Suma: ${(addition).toFixed(2)} <p>`);
  document.write(`<p>Resta: ${(subtraction).toFixed(2)} <p>`);
  document.write(`<p>Multiplicación: ${(multiplication).toFixed(2)} <p>`);
  document.write(`<p>División: ${(division).toFixed(2)} <p>`);
  document.write(`<p>Módulo: ${(module).toFixed(2)} <p>`);
  document.write(`<button class="btn btn-primary my-5" onclick="location='index.html'">Regresar</button>`);
  document.write(`</div>`);
} else
  //Se imprime una alerta si no ingreso un número mayor a cero
  alert("Debe ingresar números mayores a cero");