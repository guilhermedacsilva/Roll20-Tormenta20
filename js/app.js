'use strict'

const T20 = {
    db: {},
    modules: {},
    utils: null,
    d20: null,
    api: null
}

Object.defineProperty(window, 'd20ext', {
    enumerable: true,
    configurable: true,
    set(value) {
        delete this.d20ext
        window.d20ext = value
        T20.d20 = value
    }
})

T20.utils = {
    cortarTexto(nTd, descricao) {
        if (descricao.length > 100) {
            $(nTd).html(descricao.substring(0, 100) + '...')
        }
    }
    /* métodos da API
    closeContextMenu() {
        T20.d20.token_editor.closeContextMenu()
    },
    getCurrentPage() {
        return T20.d20.Campaign.activePage()
    },
    getCurrentLayer() {
        return window.currentEditingLayer
    },
    getCanvasMousePos() {
        return [...T20.d20.engine.mousePos]
    },
    */
}