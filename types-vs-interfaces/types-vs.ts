// Type Alias

// definição
type GameT = {
    title: string
}

type DLCT = {
    extra: string
}

// intersection
type GameCollectionT = GameT & DLCT

// implements
class CreateGameT implements GameCollectionT { }

// declarar função
type getSimilarsT = (title: string) => void

// ====================== Diferenças ====================== //

// permite declarar tipos primitivos
type IDT = string | number

// pode declarar tuplas normalmente
type TupleT = [number, number]

[1, 2] as TupleT

// Apenas uma declaração por escopo
type JQueryT = { a: string }
type JQueryT = { b: string }

// mias recomendado: na maioria das vezes

// Trabalhando com React - Props são criadas com types

// MANTER CONSISTÊNCIA!