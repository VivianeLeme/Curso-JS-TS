let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;

const pessoa = {
    nome: 'Luiz' as const,
    sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor('Amarelo'));


// Module mode
export default 1;
