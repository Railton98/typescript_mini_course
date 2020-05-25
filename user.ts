// accountInfo
// charInfo

type AccountInfo = {
    id: number
    name: string
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: "Railton",
    // email: "railton@email.com"
}

type CharInfo = {
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: "tecks",
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id:123,
    name: "Railton",
    nickname: "tecks98",
    level:100
}