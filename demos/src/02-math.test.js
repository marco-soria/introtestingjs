const { sum, multiply, divide } = require('./02-math'); // Importar el archivo JS a evaluar

//test = Define la pueba a hacer
test ("Descripción de la prueba", ()=>{

	//Ejecución de la prueba en el código

	/*expect= Define y compara que el resultado esperado a partir de la pueba realizada
	sea igual al obtenido espues de la ejecución*/

	expect(/*Resultado de la ejecución*/).toBe(/*Resultado de la prueba*/);

});

test("add 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("add 1 * 4 should be 4", () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test("add 1 / 4 should be 4", () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test("should divide for zero", () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});
