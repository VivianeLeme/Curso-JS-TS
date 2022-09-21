/* eslint-disable @typecript-eslint/no-namespace */

namespace MeuNamespace1 {
    export const nomeDoNamespace = 'Luiz';

   export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Luiz');

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome no outro namespace';
    }
}

const constDoNamespace = 'Valor da const do namescpace';

