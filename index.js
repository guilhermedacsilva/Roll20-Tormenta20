'use strict'

function loadCssOrJs(path) {
    let element
    if (path.endsWith('.css')) {
        element = document.createElement('link')
        element.href = chrome.runtime.getURL(path)
        element.rel = 'stylesheet'
        element.type = 'text/css'
    } else {
        element = document.createElement('script')
        element.src = chrome.runtime.getURL(path)
        element.type = 'text/javascript'
    }
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

loadCssOrJs('bootstrap.js')

$(document).ready(function () {

    loadCssOrJs('modules/_api.js')
    loadCssOrJs('modules/_utils.js')
    loadCssOrJs('modules/attacks-and-equipments.js')
    loadCssOrJs('modules/builder.js')
    loadCssOrJs('modules/handouts.js')
    loadCssOrJs('modules/macros.js')
    //  loadCssOrJs('modules/meet.js')
    loadCssOrJs('modules/powers-and-abilities.js')
    loadCssOrJs('modules/spells.js')
    loadCssOrJs('modules/threats.js')
    //  loadCssOrJs('modules/tokens.js')
    //  loadCssOrJs('modules/tracker.js')

    loadCssOrJs('sheet.css')

    loadData('data/equipments.json')
    loadData('data/powers.json')
    loadData('data/rules.json')
    loadData('data/spells.json')

    setTimeout(() => window.postMessage({ type: 't20-scripts-loaded' }, '*'), 100)

    // load tormenta20 book rules
    loadCssOrJs('tormenta20_book.js')

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
})