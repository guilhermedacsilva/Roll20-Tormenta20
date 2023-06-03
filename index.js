'use strict'

function loadJsOnRoll20(path) {
    let element = document.createElement('script')
    element.src = chrome.runtime.getURL('js/' + path)
    element.type = 'text/javascript'
    let node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadCssOnRoll20(path) {
    let element = document.createElement('link')
    element.href = chrome.runtime.getURL('css/'+path)
    element.rel = 'stylesheet'
    element.type = 'text/css'
    let node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadCssOnRoll20CharSheet(charId) {
    const iframe = $(`iframe[name="iframe_${charId}"]`).contents()
    iframe.find('head').append($(`<link href="${chrome.runtime.getURL('css/app.css')}" rel="stylesheet">`))
}

function loadData(path) {
    fetch(chrome.runtime.getURL('data/' + path))
        .then(response => response.json())
        .then(json => {
            const name = path.split('/').pop().split('.')[0]
            window.postMessage({ type: 't20-loaded-json', name, json }, '*')
        })
}

$(document).ready(function () {

    console.log('Roll20-T20 init')

    loadJsOnRoll20('app.js')
    loadJsOnRoll20('utils.js')
    loadJsOnRoll20('listeners.js')
    loadJsOnRoll20('datatables.min.js')

    loadData('spells.json')
    loadData('habilities.json')

    loadCssOnRoll20('datatables.min.css')
    loadCssOnRoll20('app.css')

    $(window).on('message', ({ originalEvent: { data } }) => {
        if (data.type === 'loaded') {
            loadCssOnRoll20CharSheet(data.characterId)
        }
    })

    /*

    setTimeout(() => window.postMessage({ type: 't20-scripts-loaded' }, '*'), 100)

    // load tormenta20 book rules
    loadJsOnRoll20('tormenta20_book.js')

    fetch(chrome.runtime.getURL('data/rules.json'))
        .then((response) => response.json())
        .then((rules) => {
            const book = { 'rules': rules, 'icon': chrome.runtime.getURL('images/32.png') }
            window.postMessage({ type: 'FROM_CONTENT', text: JSON.stringify(book) }, '*')
        })


    */

})