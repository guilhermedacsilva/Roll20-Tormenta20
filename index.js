'use strict'

const T20 = {
    utils: null,
    habilities: null,
    spells: null
}

window.addEventListener('message', async ({ data }) => {
    if (data.type === 't20-scripts-loaded') {
        await checkTimeout(() => $('#editor').length)
        Object.entries(T20.modules).forEach(([key, module]) => {
            module.onLoad($('body'))
            console.log(`T20 - ${key} onLoad()...`)
        })
    }

    if (data.type === 't20-book-loaded') {
        T20.books[data.book] = data.json
    }

    if (data.type === 'loaded') {
        const characterId = data.characterId
        const iframe = $(`iframe[name="iframe_${characterId}"]`).contents()
        Object.entries(T20.modules).map(async ([key, module]) => {
            await checkTimeout(() => iframe.find('.sheet-logo-tormenta').length)
            console.log(`T20 - ${key} onSheet()...`)
            module.onSheet(iframe, characterId)
        })
    }
})



$(document).ready(function () {

    /*
    loadJs('modules/_api.js')
    loadJs('modules/_utils.js')
    loadJs('modules/attacks-and-equipments.js')
    loadJs('modules/builder.js')
    loadJs('modules/handouts.js')
    loadJs('modules/macros.js')
    //  loadJs('modules/meet.js')
    loadJs('modules/powers-and-abilities.js')
    loadJs('modules/spells.js')
    loadJs('modules/threats.js')
    //  loadJs('modules/tokens.js')
    //  loadJs('modules/tracker.js')

    //loadCss('sheet.css')

    loadData('data/equipments.json')
    loadData('data/powers.json')
    loadData('data/rules.json')
    loadData('data/spells.json')

    setTimeout(() => window.postMessage({ type: 't20-scripts-loaded' }, '*'), 100)

    // load tormenta20 book rules
    loadJs('tormenta20_book.js')

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