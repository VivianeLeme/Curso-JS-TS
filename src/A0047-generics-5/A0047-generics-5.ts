export class Pessoa<t, U> {
    constructor(public nome: t, public idade: U) {}
}

export class Pilha<t> {
    private contador = 0;
    private elementos: { [k: number]: t } = {};

    push(elemento: t): void {
        this.elementos[this.contador] =elemento;
        this.contador++;
    }

    pop(): t | void  {
        if (this.estaVazia()) return undefined;

        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    estaVazia(): boolean {
        return this.contador === 0;
    }

    tamanho(): number {
        return this.contador;
    }

    mostrarPilha(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave]);
        }
    }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('string');

while (!pilha.estaVazia()) {
    console.log(pilha.pop());
}
