// Declaration marging
interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    idade?: number;
}

const pessoas: Pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    enderecos: ['Av. Brasil'],
    idade: 30,
};

console.log(pessoas);
