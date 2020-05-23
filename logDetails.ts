// type alias
type Uid = number | string

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'Linux' | 'Mas OS' | 'Windows'| 'BSD'

function renderPlatform(platform:Platform) {
    return platform
}

logDetails(11, "sapato")
logDetails("11", "camisa")

logInfo(123, "Railton")
logInfo("123", "Railton")

renderPlatform('BSD')