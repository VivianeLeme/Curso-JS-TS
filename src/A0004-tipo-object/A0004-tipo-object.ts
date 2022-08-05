const objetoA: {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);


// readonly (nao pode alterar o valor da chave)
