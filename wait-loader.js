/**
 * @description default loader time
 * @type {number}
 */
const LOADER_TIME = 1500

/**
 * get random number from range
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function getRandomFromRange(from = 0, to = 1000) {
    return  from + Math.floor(Math.random() *  (to - from))
}

/**
 * create new waiter
 * @param {number} time
 * @return {Promise<number>}
 */
function wait(time = 100) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(time), time)
    })
}

/**
 * create loader
 * @return {Promise<void>}
 */
function createLoader() {
    return wait(LOADER_TIME).then((time) => {
        console.log('loader is done, time: ' + time)
    })
}

/**
 * create request
 * @return {Promise<void>}
 */
function createRequest() {
    return wait(getRandomFromRange(LOADER_TIME - (LOADER_TIME / 10),  LOADER_TIME + (LOADER_TIME / 10)))
        .then((time) => {console.log('request is done, time: ' + time)
    })
}


async function main() {
    const loader = createLoader()
    const request = createRequest()

    await Promise.all([loader, request])

    console.log('after loader and request')
}

main()
