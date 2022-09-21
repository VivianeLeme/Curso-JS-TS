export function unirObjetos<t, U>(obj1: t, obj2: U): t & U {
    // return { ...obj1, ...obj2 };
    return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);

