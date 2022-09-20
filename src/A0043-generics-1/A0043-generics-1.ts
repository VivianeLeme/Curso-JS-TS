type FilterCallback<U> = (
    value: U,
    index?: number,
    array?: U[],
) => boolean;


export function meuFilter<t>(array: t[], callbackfn: FilterCallback<t>): t[] {
    const novoArray = [];


    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];

const arrayFiltradoOrigional = array.filter((value) => value < 5);
console.log(arrayFiltradoOrigional);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
