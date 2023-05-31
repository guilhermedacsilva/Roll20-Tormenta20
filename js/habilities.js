'use strict'

T20.modules.habilities = {
    initSheet: ($iframe, characterId) => {
        const div = $iframe.find('.sheet-powers-and-abilities')
        const click = function () {
            console.log('T20 cheguei aqui')
            return
            const button = $(this)
            T20.utils.showSelectDialog('Poderes e Abilidades', T20.books.powers, selected => {
                if (button.attr('rel') === 'abilities')
                    T20.api.addAbility(characterId, selected)
                else
                    T20.api.addPower(characterId, selected)
            })
        }
        div.find('.repcontrol_add:eq(0)')
            .after($('<button rel="abilities" class="btn repcontrol_more">...</button>').click(click))
        div.find('.repcontrol_add:eq(1)')
            .after($('<button rel="powers" class="btn repcontrol_more">...</button>').click(click))
    }
}