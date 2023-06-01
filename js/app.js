'use strict'

const T20 = {
    db: {},
    modules: {},
    utils: null
}


T20.utils = {
    /*
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
    showDialogHabilities(characterId) {
        const input = $('<input type="text" name="value" value="" placeholder="Digite para buscar...">')
        const dialog = $(`<div class="" title="Habilidades"><form>`)
        const form = dialog.find('form').append(input)
            .append('<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">')
        dialog.dialog({
            autoOpen: true,
            close: () => dialog.remove()
        })
        const modal = dialog.closest('.ui-dialog')
        const titleBar = modal.find('.ui-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        if (extraOptions.padding) {
            content.css({ padding: extraOptions.padding })
        }
        if (!title) {
            titleBar.css({ padding: 8 })
            titleBar.find('.ui-dialog-titlebar-close').css({ top: 7, right: 0, zIndex: 10 })
            titleBar.find('.ui-dialog-title').remove()
        }
        form.on('submit', async e => {
            e.preventDefault()
            const formValues = {}
            form.find(':input').each(function () {
                const name = $(this).attr('name')
                if (name) formValues[name] = $(this).val()
            })
            try {
                callback && await callback(formValues)
            } catch (err) {
                console.error(err)
                return err.message && alert(err.message)
            }
            dialog.dialog('close')
        })
        setTimeout(() => {
            form.find(':input:eq(0)').focus()
        }, 1500)
        return dialog
    },
    showSelectDialog(title, options, callback) {
        const input = $('<input type="text" name="value" value="" placeholder="Digite para buscar...">')
        input.on('keydown', e => {
            if (e.keyCode === 13) setTimeout(() => { form.submit() }, 200)
        })
        this.showDialog(title, input, ({ value }) => {
            if (options[value] && callback) callback(options[value])
        })
        setTimeout(() => {
            input.autocomplete({ source: Object.keys(options) })
            input.focus()
        }, 200)
    },
    showDialog(title, inputsEl, callback, extraOptions = {}) {
        const dialog = $(`<div class="${extraOptions.class || ''}" title="${title}"><form>`)
        const form = dialog.find('form').append(inputsEl)
            .append('<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">')
        dialog.dialog({
            autoOpen: true,
            buttons: callback ? {
                Confirmar: () => form.submit(),
                Cancelar: () => dialog.dialog('close')
            } : {
                Ok: () => dialog.dialog('close')
            },
            close: () => dialog.remove(),
            ...extraOptions
        })
        const modal = dialog.closest('.ui-dialog')
        const titleBar = modal.find('.ui-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        if (extraOptions.padding) {
            content.css({ padding: extraOptions.padding })
        }
        if (!title) {
            titleBar.css({ padding: 8 })
            titleBar.find('.ui-dialog-titlebar-close').css({ top: 7, right: 0, zIndex: 10 })
            titleBar.find('.ui-dialog-title').remove()
        }
        form.on('submit', async e => {
            e.preventDefault()
            const formValues = {}
            form.find(':input').each(function () {
                const name = $(this).attr('name')
                if (name) formValues[name] = $(this).val()
            })
            try {
                callback && await callback(formValues)
            } catch (err) {
                console.error(err)
                return err.message && alert(err.message)
            }
            dialog.dialog('close')
        })
        setTimeout(() => {
            form.find(':input:eq(0)').focus()
        }, 1500)
        return dialog
    }
}