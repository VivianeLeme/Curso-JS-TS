// Endadeamento opcional e Operador de coalescência nula

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1-Ixi, nao existe data.');
console.log(undefined ?? '2-Ixi, nao existe data.');
console.log(null ?? '3-Ixi, nao existe data.');
console.log(false ?? '4-Ixi, nao existe data.');
console.log(0 ?? '5-Ixi, nao existe data.');
console.log('_' ?? '6-Ixi, nao existe data.');

