'use strict'

function loadJsOnRoll20(path, delay = 0) {
    if (delay == 0) {
        const element = document.createElement('script')
        element.src = chrome.runtime.getURL('js/' + path)
        element.type = 'text/javascript'
        const node = (document.head || document.documentElement)
        node.appendChild(element)
    } else {
        setTimeout(() => {
            const element = document.createElement('script')
            element.src = chrome.runtime.getURL('js/' + path)
            element.type = 'text/javascript'
            const node = (document.head || document.documentElement)
            node.appendChild(element)
        }, delay);
    }
}

function loadFontOnRoll20(name, path) {
    const url = chrome.runtime.getURL('font/' + path)
    const element = document.createElement('style')
    element.innerHTML = `@font-face {
        font-family: ${name};
        src: url('${url}');
      }`
    const node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadCssOnRoll20(path) {
    const element = document.createElement('link')
    element.href = chrome.runtime.getURL('css/' + path)
    element.rel = 'stylesheet'
    element.type = 'text/css'
    const node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadCssOnRoll20CharSheet(charId) {
    const doc = document.querySelector(`iframe[name="iframe_${charId}"]`).contentWindow.document
    const link = doc.createElement('link')
    link.href = chrome.runtime.getURL('css/app.css')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    const node = (doc.head || doc.documentElement)
    node.appendChild(link)
}

function loadData(path) {
    fetch(chrome.runtime.getURL('data/' + path))
        .then(response => response.json())
        .then(json => {
            const name = path.split('/').pop().split('.')[0]
            window.postMessage({ type: 't20-loaded-json', name, json }, '*')
        })
}

console.log('Roll20-T20 init')
loadJsOnRoll20('app.js')

document.addEventListener('DOMContentLoaded', function() {
    console.log('Roll20-T20 ready')

    loadJsOnRoll20('utils.js')
    loadJsOnRoll20('mod-habilities.js')
    loadJsOnRoll20('mod-spells.js')
    loadJsOnRoll20('mod-modifiers.js')
    loadJsOnRoll20('listeners.js')
    loadJsOnRoll20('api.js')
    loadJsOnRoll20('datatables.min.js')
    loadJsOnRoll20('diacritics-sort.min.js', 5000)

    loadData('spells.json')
    loadData('habilities.json')

    loadCssOnRoll20('datatables.min.css')
    loadCssOnRoll20('app.css')

    loadFontOnRoll20('DanteMTS', 'DanteMTStd-Regular.otf')
    loadFontOnRoll20('Tormenta', 'Tormenta20x.ttf')

    window.addEventListener('message', e => {
        if (e.data.type === 'loaded') {
            loadCssOnRoll20CharSheet(e.data.characterId)
        }
    })
})