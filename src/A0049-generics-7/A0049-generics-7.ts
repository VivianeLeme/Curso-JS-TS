export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function soma<t>(...args: t[]): number | null {
    const retorno = args.reduce((sum, value) => {
        if(isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
    }

    console.log(soma(1, 2, 3));
    console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
    console.log(soma('a', 'b', 'c'));
