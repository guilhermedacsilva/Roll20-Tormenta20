'use strict'

T20.modules.habilities = {
    initSheet: ($iframe, characterId) => {
        const div = $iframe.find('.sheet-powers-and-abilities')
        const click = function () {
            const button = $(this)
            T20.utils.showDialogHabilities(characterId)
        }
        div.find('.repcontrol_add:eq(0)')
            .after($('<button rel="abilities" class="btn repcontrol_more">T20</button>').click(click))
        div.find('.repcontrol_add:eq(1)')
            .after($('<button rel="powers" class="btn repcontrol_more">T20</button>').click(click))
    }
}