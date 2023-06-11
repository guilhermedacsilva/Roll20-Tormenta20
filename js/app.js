'use strict'

const T20 = {
    db: {},
    modules: {},
    utils: null,
    api: null
}

T20.utils = {
    cortarTexto(nTd, descricao) {
        if (descricao.length > 100) {
            $(nTd).html(descricao.substring(0, 100) + '...')
        }
    }
}