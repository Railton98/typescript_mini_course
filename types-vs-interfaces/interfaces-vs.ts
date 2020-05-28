// Interfaces

// definição
interface Game {
    title: string
}

interface DLC {
    extra: string
}

// interseção | extend
interface GameCollection extends Game, DLC { }

// implements
class CreateGame implements GameCollection { }

// declara função
interface getSimilars {
    (title: string): void
}

// ====================== Diferenças ====================== //
interface ID extends number { }

interface Tuple {
    0: number
    1: number
}

[1, 2, 3, "asad"] as Tuple

// Pode ter múltiplas declarações e ele une as de mesmo nome
interface JQuery {
    a: string
}

interface JQuery {
    b: string
}

const $: JQuery = {
    a: "bla",
    b: "foo"
}

// vantagem: Para criação de libs, interfaces são preferiveis, pq são mais extensíveis

// Criação de objetos/classes (POO)

// MANTER CONSISTÊNCIA!