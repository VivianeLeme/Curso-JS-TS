import { type } from "os";

const objeto1: Record<string, string | number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;


const objeto2: PessoaRequired = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

console.log(objeto2);

// Extract e Esclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
    sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const AccountMongo: AccountMongo = {
    _id: 'dfndfndfvdsfvdsfvds',
    nome: 'Luiz',
    idade: 30,
    sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return {...accountData, id: _id};
}

const AccountApi = mapAccount(AccountMongo);
console.log('API:');
console.log(AccountApi);

// Module mode
export default 1;
