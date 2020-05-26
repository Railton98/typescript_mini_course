abstract class UserAccount {
    public name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} id ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string
    // readonly level: number
    level: number

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)

        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        console.log("---GET---")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`THe player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
}

// const tecks = new UserAccount("Railton", 22)
// console.log(tecks)
// tecks.logDetails()

const john = new CharAccount("John", 45, "johnmaster", 80)
console.log(john)
john.logDetails()
john.logCharDetails()
john.setLevel = 221
console.log(john.getLevel)