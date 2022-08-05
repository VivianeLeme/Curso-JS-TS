enum Cores {
    VERMELHO = 10, // 10
    AZUL = 20, // 20
    AMARELO = 30, // 30
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}

function escolhaACor(cor: Cores): void {
    console.log((Cores[cor]));

}

escolhaACor(Cores.ROSA);
