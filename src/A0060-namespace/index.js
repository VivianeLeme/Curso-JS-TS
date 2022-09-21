/* eslint-disable @typecript-eslint/no-namespace */
var MeuNamespace1;
(function (MeuNamespace1) {
    MeuNamespace1.nomeDoNamespace = 'Luiz';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace1.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Luiz');
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome no outro namespace';
    })(OutroNamespace = MeuNamespace1.OutroNamespace || (MeuNamespace1.OutroNamespace = {}));
})(MeuNamespace1 || (MeuNamespace1 = {}));
var constDoNamespace = 'Valor da const do namescpace';
/* eslint-disable @typecript-eslint/triple-slash-reference */
///  <reference path="module.ts" />
console.log(MeuNamespace1.nomeDoNamespace);
console.log(constDoNamespace);
