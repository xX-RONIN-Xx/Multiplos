let data1: number = Number(prompt("Ingrese el primer número"));
let data2: number = Number(prompt("Ingrese el segundo número"));

function esMultiplo(data1: number, data2: number): boolean {
  return data1 % data2 === 0;
}
if (esMultiplo(data1, data2)) {
  console.log(data1 + " Es múltiplo de " + data2);
} else {
  console.log(data1 + " No es múltiplo de " + data2);
}
