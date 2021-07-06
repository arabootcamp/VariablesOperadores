//Esta función se crea para hacer un return y terminar las intrucciones si hay error
function CalculationsWithNumbers() {
  //Se define un arreglo para almacenar los números que ingresará el usuario
  let arrayNums = new Array();
  //Se define e inicializa la variable que almacenará la suma de los números ingresados
  let sum = 0;

  //Se crea el for para solicitar los 5 números que deberá ingresar el usuario
  for (let i = 0; i < 5; i++) {
    //Se convierte a decimal y se almacena en el array el número ingresado por el usuario
    arrayNums.push(parseFloat(prompt(`Ingrese ${i+1}° número de 5`)));
    //Se comprueba que se ingreso un número
    if (!isNaN(arrayNums[i]))
      //A la variable suma se le asigna la suma actual más el número ingresado
      sum += arrayNums[i];
    else {
      //Si no se ingreso un número se envia una alerta y se hace un return para terminar la función
      alert("Debe ingresar números");
      return;
    }
  }
  //Se calcula el promedio de los 5 números
  let average = sum / 5;
  //Se imprime en el html los datos ingresados y los resultados, suma y promedio.
  document.write(`<div class="container my-5">`);
  document.write(`<h2>Para Los números ingresados: ${arrayNums.shift()}, ${arrayNums.shift()}, ${arrayNums.shift()}, ${arrayNums.shift()}, ${arrayNums.shift()} </h2>`);
  document.write(`<p>La suma es: ${(sum).toFixed(2)} </p>`);
  document.write(`<p>El promedio es: ${(average).toFixed(2)} </p>`);
  document.write(`<button class="btn btn-primary my-5" onclick="location='index.html'">Regresar</button>`);
  document.write(`</div>`);
  return;
}

//Se llama a la función que realiza todo el proceso.
CalculationsWithNumbers();