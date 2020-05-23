// type alias
type Uid = number | string

const logDetails = (uid: Uid, item: string) => console.log(`A product with ${uid} has a title as ${item}.`)

const logInfo = (uid: Uid, user: string) => console.log(`An user with ${uid} has a name as ${user}.`)

type Platform = 'Linux' | 'Mas OS' | 'Windows'| 'BSD'

const renderPlatform = (platform:Platform) =>platform

logDetails(11, "sapato")
logDetails("11", "camisa")

logInfo(123, "Railton")
logInfo("123", "Railton")

renderPlatform('BSD')