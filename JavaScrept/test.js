const criaLista = () => {
    const lista = [[],[],[]]

    for(let i = 0; i <= 100; i++) {
        const listaAleatoria = Math.floor(Math.random() * 3)
        lista[listaAleatoria].push(i)
    }
    return [...lista[0], ...lista[1], ...lista[2]]
}

const quicksort = (array) => {
    if(array.length < 2) return array

    let pivo = array[0]
    const menorQPivo = []
    const maiorQPivo = []

    for(let i = 0; i <= array.length -1; i++) {
        array[i] < pivo ? menorQPivo.push(array[i]) : 0
        array[i] > pivo ? maiorQPivo.push(array[i]) : 0
    }

    return [...quicksort(menorQPivo), pivo, ...quicksort(maiorQPivo)]
}

const buscaBinaria = (arrayOrdenado, valorBuscado) => {
    let menorValor = 0
    let maiorValor = arrayOrdenado.length -1

    while(menorValor <= maiorValor) {
        const meioDaLista = parseInt((menorValor + maiorValor) / 2)
        chute = arrayOrdenado[meioDaLista]

        if(chute == valorBuscado) return meioDaLista
        chute > valorBuscado ? maiorValor = meioDaLista -1: menorValor = meioDaLista +1
        console.log("Esta rodando")
    }
    return null
}

const lista = criaLista()
const listaOrdenada = quicksort(lista)

const valor = buscaBinaria(listaOrdenada, 8)

console.log(valor)