'use strict'

function loadCssOnRoll20(path) {
    let element = document.createElement('link')
    element.href = chrome.runtime.getURL(path)
    element.rel = 'stylesheet'
    element.type = 'text/css'
    let node = (document.head || document.documentElement)
    node.appendChild(element)
}

function loadJsOnRoll20(path) {
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
            const name = path.split('/').pop().split('.')[0]
            window.postMessage({ type: 't20-loaded-json', name, json }, '*')
        })
}

$(document).ready(function () {

    console.log('Roll20-T20 init')

    loadJsOnRoll20('js/utils.js')
    loadJsOnRoll20('js/app.js')
    loadJsOnRoll20('js/listeners.js')
    loadJsOnRoll20('js/habilities.js')

    loadData('data/spells.json')
    loadData('data/habilities.json')

    /*
    loadJsOnRoll20('modules/_api.js')
    loadJsOnRoll20('modules/_utils.js')
    loadJsOnRoll20('modules/attacks-and-equipments.js')
    loadJsOnRoll20('modules/builder.js')
    loadJsOnRoll20('modules/handouts.js')
    loadJsOnRoll20('modules/macros.js')
    //  loadJsOnRoll20('modules/meet.js')
    loadJsOnRoll20('modules/powers-and-abilities.js')
    loadJsOnRoll20('modules/spells.js')
    loadJsOnRoll20('modules/threats.js')
    //  loadJsOnRoll20('modules/tokens.js')
    //  loadJsOnRoll20('modules/tracker.js')

    //loadCssOnRoll20('sheet.css')

    loadData('data/equipments.json')
    loadData('data/powers.json')
    loadData('data/rules.json')
    loadData('data/spells.json')

    setTimeout(() => window.postMessage({ type: 't20-scripts-loaded' }, '*'), 100)

    // load tormenta20 book rules
    loadJsOnRoll20('tormenta20_book.js')

    fetch(chrome.runtime.getURL('data/rules.json'))
        .then((response) => response.json())
        .then((rules) => {
            const book = { 'rules': rules, 'icon': chrome.runtime.getURL('images/32.png') }
            window.postMessage({ type: 'FROM_CONTENT', text: JSON.stringify(book) }, '*')
        })

    $(window).on('message', ({ originalEvent: { data } }) => {
        if (data.type === 'loaded') {
            const iframe = $(`iframe[name="iframe_${data.characterId}"]`).contents()
            iframe.find('head').append($(`<link href="${chrome.runtime.getURL('sheet.css')}" rel="stylesheet">`))
            console.log('Window loaded')
            console.log(data)

        }
    })
    */
})