// a Tuple seria um array com tipos bem especificos e tamanho fixo.
// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [2, 'Helena', 'Heitor'];
const dadosCliente3: [number, string, string?] = [1, 'Vivi'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vivi', 'Vieira'];


// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly - array
const array1: readonly string[] = ['Luiz', 'Otavio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otavio'];

console.log(array1);
console.log(array2);
