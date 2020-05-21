// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number
let total: number
total = 0xff0 // hexadecimal

// array (type[])
let items: string[]
items = ["foo", "bar"]

// array (generic)
let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, boolean]
title = [1, 'foo', true]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL
let coisa: any
coisa = 1

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null | undefined
let foo: null
type bla = string | undefined

// never
function error(): never {
    throw new Error("Error")
}

// object
let cart: object
cart = {
    key: 'fi'
}

// Type Inference
let message2 = "mensagem indefinida"
message2 = 'String nova'

window.addEventListener("click", (e) => {
    console.log(e.target)
})