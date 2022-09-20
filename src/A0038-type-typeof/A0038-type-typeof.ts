type coresObj = typeof coresObj;
type CoresChaves = keyof coresObj;

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    roxo: 'purple',
};

function traduzirCor(cor: 'vermelho' | 'verde' | 'azul',
    cores: typeof coresObj,
    ) {
    return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));

