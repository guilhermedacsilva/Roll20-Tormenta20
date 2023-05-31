function loadCss(path) {
    let element = document.createElement('link')
    element.href = chrome.runtime.getURL(path)
    element.rel = 'stylesheet'
    element.type = 'text/css'
    let node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadJs(path) {
    let element = document.createElement('script')
    element.src = chrome.runtime.getURL(path)
    element.type = 'text/javascript'
    let node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadData(path) {
    fetch(chrome.runtime.getURL(path))
        .then(response => response.json())
        .then(json => {
            const book = path.split('/').pop().split('.')[0]
            window.postMessage({ type: 't20-book-loaded', book, json }, '*')
        })
}

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
