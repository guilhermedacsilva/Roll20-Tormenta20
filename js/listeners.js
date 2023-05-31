'use strict'

window.addEventListener('message', async ({ data }) => {
    if (data.type === 't20-loaded-json') {
        T20.db[data.name] = data.json
    
    } else if (data.type === 'loaded') {
        // when user opens a character sheet
        const characterId = data.characterId
        const $iframe = $(`iframe[name="iframe_${characterId}"]`).contents()
        Object.entries(T20.modules).map(async ([key, module]) => {
            await checkTimeout(() => $iframe.find('.sheet-logo-tormenta').length)
            module.initSheet($iframe, characterId)
        })
    }

    /*
    if (data.type === 't20-scripts-loaded') {
        // checks if roll20 editor is loaded, then load my modules
        await checkTimeout(() => $('#editor').length)
        Object.entries(T20.modules).forEach(([key, module]) => {
            module.onLoad($('body'))
            console.log(`T20 - ${key} onLoad()...`)
        })
    }

    */
})