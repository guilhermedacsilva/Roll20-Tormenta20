'use strict'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function checkTimeout(checkFunction, callbackFunction, resolve) {
    if (checkFunction()) {
        callbackFunction && callbackFunction()
        return resolve && resolve()
    }
    if (resolve) {
        return setTimeout(() => checkTimeout(checkFunction, callbackFunction, resolve), 100)
    }
    return new Promise(resolve => {
        return setTimeout(() => checkTimeout(checkFunction, callbackFunction, resolve), 100)
    })
}
