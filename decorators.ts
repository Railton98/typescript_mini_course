// @Component
// @Selector
// @useState("dasads")

// Factory
// function Logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }

// @Logger("Awesome")
// class Foo { }

// Class decorator
// function setApiVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }

// @setApiVersion("1.0.0")
// class API {}

// console.log(new API())
// Property decorator

// function minLenght(lenght: number) {
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val
//         const setter = (value: string) => {
//             if (value.length < lenght) {
//                 console.log(`Error: você não pode criar ${key} com tamanho menor que ${lenght}.`)
//             } else {
//                 val = value
//             }
//         }

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     }
// }

// class Movie {
//     @minLenght(5)
//     title: string

//     constructor(t: string) {
//         this.title = t
//     }
// }
// const movie = new Movie("Interstellar")
// console.log(movie.title)

// Method decorator

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`)
            setTimeout(() => {
                 originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        }

    }
}

class Greeter {
    greeting: string

    constructor(g: string) {
        this.greeting = g
    }

    @delay(500)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoinha = new Greeter("Person")
pessoinha.greet()

// Parameter decorator
// Acessor decorator