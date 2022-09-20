interface PessoaProtocolo<t = string, U = number> {
    nome: t;
    sobrenome: t;
    idade: U;
}

type PessoaProtocolo2<t = string, U = number> = {
    nome: t;
    sobrenome: t;
    idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

const aluno: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30,
};

const aluno3: PessoaProtocolo2 = {
    nome: 'Luiz',
    sobrenome: 'Vieira',
    idade: 30,
};

console.log(aluno, aluno1, aluno3);
