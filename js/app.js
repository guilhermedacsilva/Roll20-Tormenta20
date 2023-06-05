'use strict'

const T20 = {
    db: {},
    modules: {},
    utils: null,
    d20: null,
    api: null
}

function setInterceptor(prop, callback) {
    Object.defineProperty(window, prop, {
        enumerable: true,
        configurable: true,
        set: newValue => {
            delete window[prop]
            const intercept = callback && callback(newValue)
            window[prop] = intercept || newValue
        }
    })
}

setInterceptor('d20ext', val => {
    console.log('T20 - D20 API ENV SET TO DEVELOPMENT')
    return { ...val, environment: 'development' }
})

setInterceptor('debug_d20', val => {
    console.log('T20 - D20 API FULLY INITIALIZED')
    val.environment = 'production'
    return T20.d20 = val
})

T20.modules.modifiers = {
    initSheet: ($iframe) => {
        const $element = $(`<div class="sheet-modifiers-container">
            <div class="sheet-inside">
                <div class="sheet-container-negative-corner">
                    <div class="sheet-inside-negative-corner">
                        <div class="roll20-t20-mod">
                            <input name="roll20-t20-mod-ativo" type="checkbox">
                            <div>
                                Escaramuça.
                                Ataque: <input name="roll20-t20-mod-ataque" value="0" style="width:30px">
                                Dano extra: <input name="roll20-t20-mod-dano" value="0" style="width:30px">
                                Dado extra: <input name="roll20-t20-mod-dado" value="" style="width:60px">
                            </div>
                        </div>
                        <div class="sheet-corner sheet-top-left"></div>
                        <div class="sheet-corner sheet-top-right"></div>
                        <div class="sheet-corner sheet-bottom-left"></div>
                        <div class="sheet-corner sheet-bottom-right"></div>
                    </div>
                </div>
            </div>
        </div>`)

        $element.find('input').on('keyup change clear', function () {
            let attack = 0
            let dano = 0
            let dado = []
            $element.find('.roll20-t20-mod').each(function () {
                const $mod = $(this)
                if ($mod.find('[name="roll20-t20-mod-ativo"]').is(":checked")) {
                    const $attack = $mod.find('[name="roll20-t20-mod-ataque"]')
                    if ($attack.length > 0) {
                        attack += parseInt($attack.val())
                    }
                    const $dano = $mod.find('[name="roll20-t20-mod-dano"]')
                    if ($dano.length > 0) {
                        dano += parseInt($dano.val())
                    }
                    const $dado = $mod.find('[name="roll20-t20-mod-dado"]')
                    if ($dado.length > 0) {
                        dado.push($dado.val())
                    }
                }
            })
            // quando o parseInt falha, dá NaN, avisar com css de erro
            dado = dado.join('+')
            if (dado.length > 0) {
                dado += '+'
            }

            $iframe.find('.sheet-attacks-container .repitem').each(function () {
                const $attackElement = $(this)
                const critico = $attackElement.find('[name="attr_tipocritico"]').val()
                let lancinante = 0
                if (critico == 'lancinante') {
                    lancinante = dano
                }
                console.log('lancinante')
                console.log(lancinante)
                $attackElement.find('[name="roll_attack"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+1d20cs>@{margemcriticoataque}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[@{danocriticoataque}+@{dadoextraataque}+@{modatributodano}+@{danoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}}}`)

                $attackElement.find('[name="roll_attack_best"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kh1cs>@{margemcriticoataque}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}}}`)

                $attackElement.find('[name="roll_attack_worst"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kl1cs>@{margemcriticoataque}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}}}`)
                
            })
        })
        $iframe.find('.sheet-pseudo-attributes')
            .after($element)
        //$element.find('input').first().trigger('change')
    }
}

T20.modules.habilities = {
    initSheet: ($iframe) => {
        const openDialog = function () {
            T20.utils.showDialogHabilities($iframe)
        }
        $iframe.find('.sheet-powers-and-abilities')
            .find('.repcontrol_add')
            .after($('<button class="btn repcontrol_more">T20</button>').click(openDialog))
    }
}

T20.modules.spells = {
    initSheet: ($iframe) => {
        const openDialog = function () {
            T20.utils.showDialogSpells($iframe)
        }
        $iframe.find('.sheet-spells')
            .find('.repcontrol_add')
            .after($('<button class="btn repcontrol_more">T20</button>').click(openDialog))
    }
}

T20.utils = {
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

    cortarTexto(nTd, sData, oData, iRow, iCol) {
        if (oData.descricao.length > 150) {
            $(nTd).html(oData.descricao.substring(0, 150) + '...')
        }
    },

    prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData[1]}</span>`)
        nTd.addEventListener("click", () => {
            T20.utils.fichaInserirPoder(oData, $iframe)
        })
    },

    prepararLinkMagia(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData.nome}</span>`)
        nTd.addEventListener("click", () => {
            T20.utils.fichaInserirMagia(oData, $iframe)
        })
    },

    fichaInserirPoder(hability, $iframe) {
        let colunaDireita = $('#poderColunaD').prop("checked")

        let poderes = $iframe.find('[class="sheet-container-reapeater"]')
        let htmlName = 'ability'
        if (colunaDireita) {
            poderes = poderes[1]
            htmlName = 'power'
        } else {
            poderes = poderes[0]
        }

        poderes.querySelector('[class="btn repcontrol_add"]').click()
        let itens = poderes.querySelectorAll('[class="repitem"]')
        var novoItem = itens[itens.length - 1]

        novoItem.querySelector(`[name="attr_name${htmlName}"]`).value = hability[1]
        novoItem.querySelector(`[name="attr_${htmlName}description"]`).value = hability[2]

        setTimeout(function () {
            novoItem.querySelector(`[name="attr_name${htmlName}"]`).dispatchEvent(new Event('blur'))
            novoItem.querySelector(`[name="attr_${htmlName}description"]`).dispatchEvent(new Event('blur'))
        }, 10)
    },

    fichaInserirMagia(magia, $iframe) {
        const $spellGroup = $iframe.find('.repeating_spells' + magia.circulo).parent()
        $spellGroup.find('.repcontrol_add').click()
        const $novoItem = $spellGroup.find('.repitem').last()

        $novoItem.find('[name="attr_namespell"]').val(magia.nome)
        $novoItem.find('[name="attr_spellalcance"]').val(magia.alcance)
        $novoItem.find('[name="attr_spellalvoarea"]').val(magia.alvo)
        $novoItem.find('[name="attr_spelltipo"]').val(magia.escola)
        $novoItem.find('[name="attr_spellduracao"]').val(magia.duracao)
        $novoItem.find('[name="attr_spellexecucao"]').val(magia.execucao)
        $novoItem.find('[name="attr_spelldescription"]').val(magia.descricao.replaceAll('<br>', '\n'))
        if ('resistencia' in magia) {
            $novoItem.find('[name="attr_spellresistencia"]').val(magia.resistencia)
        }

        setTimeout(() => {
            const inputs = [
                "attr_namespell",
                "attr_spellalcance",
                "attr_spellalvoarea",
                "attr_spelltipo",
                "attr_spellduracao",
                "attr_spellexecucao",
                "attr_spelldescription",
                "attr_spellresistencia"
            ]
            inputs.forEach(inputName => {
                $novoItem.find(`[name="${inputName}"]`)[0].dispatchEvent(new Event('blur'))
            })
        }, 10)

    },


    showDialogHabilities($iframe) {
        const dialog = $(`
        <div class="roll20-t20-dialog-conteudo">
            <form class="roll20-t20-dialog-form">
              <div>
                <input class="roll20-t20-dialog-radio" type="radio" name="roll20-t20-dialog-coluna" id="poderColunaE" checked>
                <label class="roll20-t20-dialog-label" for="poderColunaE">Coluna da esquerda</label>
              </div>
              <div>
                <input class="roll20-t20-dialog-radio" type="radio" name="roll20-t20-dialog-coluna" id="poderColunaD">
                <label class="roll20-t20-dialog-label" for="poderColunaD">Coluna da direita</label>
              </div>
            </form>
          <hr>
          <table id="roll20-t20-table-habilities" class="table table-sm">
            <thead>
              <tr class="roll20-t20-dialog-columns">
                <th>Tipo</th>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr>
                  <th><select class="roll20-t20-dialog-select" style="width:100px">
                      <option value="">--</option>
                      <option value="Humano">Humano</option>
                      <option value="Anão">Anão</option>
                      <option value="Dahllan">Dahllan</option>
                      <option value="Elfo">Elfo</option>
                      <option value="Goblin">Goblin</option>
                      <option value="Lefou">Lefou</option>
                      <option value="Minotauro">Minotauro</option>
                      <option value="Qareen">Qareen</option>
                      <option value="Hynne">Hynne</option>
                      <option value="Golem">Golem</option>
                      <option value="Kliren">Kliren</option>
                      <option value="Medusa">Medusa</option>
                      <option value="Osteon">Osteon</option>
                      <option value="Sereia">Sereia</option>
                      <option value="Sílfide">Sílfide</option>
                      <option value="Suraggel">Suraggel</option>
                      <option value="Trog">Trog</option>
                      <option value="">--</option>
                      <option value="Arcanista">Arcanista</option>
                      <option value="Bárbaro">Bárbaro</option>
                      <option value="Bardo">Bardo</option>
                      <option value="Bucaneiro">Bucaneiro</option>
                      <option value="Caçador">Caçador</option>
                      <option value="Cavaleiro">Cavaleiro</option>
                      <option value="Clérigo">Clérigo</option>
                      <option value="Druida">Druida</option>
                      <option value="Guerreiro">Guerreiro</option>
                      <option value="Inventor">Inventor</option>
                      <option value="Ladino">Ladino</option>
                      <option value="Lutador">Lutador</option>
                      <option value="Nobre">Nobre</option>
                      <option value="Paladino">Paladino</option>
                      <option value="">--</option>
                      <option value="Origem">Origem</option>
                      <option value="Combate">Combate</option>
                      <option value="Destino">Destino</option>
                      <option value="Magia">Magia</option>
                      <option value="Concedido">Concedido</option>
                      <option value="Tormenta">Tormenta</option>
                  </select></th>
                  <th><input style="width:100px"></th>
                  <th><input style="width:100%"></th>
              </tr>
            </tfoot>
          </table>
        </div>`)
        dialog.dialog({
            title: 'Listagem de habilidades e poderes',
            autoOpen: true,
            height: 500,
            width: 900,
            close: () => dialog.remove(),
        })
        const modal = dialog.closest('.ui-dialog')
        modal.addClass('roll20-t20-dialog')
        modal.find('.ui-dialog-title').addClass('roll20-t20-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        content.find('#roll20-t20-table-habilities').DataTable({
            scrollY: '215px',
            scrollCollapse: true,
            paging: false,
            dom: 'rt',
            data: T20.db.habilities,
            columns: [
                { title: 'Tipo', data: 0, orderData: [0, 1] },
                {
                    title: 'Nome',
                    data: 1,
                    orderData: [1, 0],
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.utils.prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe)
                    }
                },
                { title: 'Descrição', data: 2, orderData: 2 },
            ],
            language: {
                zeroRecords: "Nenhum item encontrado",
                infoEmpty: "Nenhum item encontrado",
                infoFiltered: "(filtrado de um total de _MAX_ itens)",
                paginate: {
                    first: 'Primeira',
                    last: 'Última',
                    next: 'Próxima',
                    previous: 'Anterior'
                },
            },
            initComplete: function () {
                this.api()
                    .columns()
                    .every(function () {
                        var column = this;
                        $('input', this.footer()).on('keyup change clear', function () {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                        })
                        $('select', this.footer()).on('change', function () {
                            const val = $(this).val();
                            column.search(val).draw()
                        })
                    })
                $('#roll20-t20-table-habilities_wrapper .dataTables_scrollFoot').insertAfter('#roll20-t20-table-habilities_wrapper .dataTables_scrollHead')
            },
        })
    },


    showDialogSpells($iframe) {
        const dialog = $(`
        <div class="roll20-t20-dialog-conteudo">
            <table id="roll20-t20-table-spells" class="table table-sm">
              <thead>
                <tr class="roll20-t20-dialog-columns">
                  <th>C</th>
                  <th>Tipo</th>
                  <th>Escola</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
              <tfoot>
                <tr>
                    <th><select class="roll20-t20-dialog-select" style="width:40px">
                        <option value="">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></th>
                    <th><select class="roll20-t20-dialog-select" style="width:60px">
                        <option value="">--</option>
                        <option value="Arcana">Arcanas</option>
                        <option value="Divina">Divinas</option>
                    </select></th>
                    <th><select class="roll20-t20-dialog-select" style="width:85px">
                        <option value="">--</option>
                        <option value="Abjuração">Abjuração</option>
                        <option value="Adivinhação">Adivinhação</option>
                        <option value="Convocação">Convocação</option>
                        <option value="Encantamento">Encantamento</option>
                        <option value="Evocação">Evocação</option>
                        <option value="Ilusão">Ilusão</option>
                        <option value="Necromancia">Necromancia</option>
                        <option value="Transmutação">Transmutação</option>
                    </select></th>
                    <th><input style="width:85px"></th>
                    <th><input style="width:100%"></th>
                </tr>
              </tfoot>
            </table>
        </div>`)
        dialog.dialog({
            title: 'Listagem de magias',
            autoOpen: true,
            height: 500,
            width: 900,
            close: () => dialog.remove()
        })
        const modal = dialog.closest('.ui-dialog')
        modal.find('.ui-dialog-title').addClass('roll20-t20-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        const table = content.find('#roll20-t20-table-spells').DataTable({
            scrollY: '215px',
            scrollCollapse: true,
            paging: false,
            dom: 'rt',
            data: T20.db.spells,
            columns: [
                { title: 'C', data: 'circulo', orderData: [0, 2, 1, 3] },
                { title: 'Tipo', data: 'tipo', orderData: [1, 0, 2, 3] },
                { title: 'Escola', data: 'escola', orderData: [2, 0, 1, 3] },
                {
                    title: 'Nome',
                    data: 'nome',
                    orderData: 3,
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.utils.prepararLinkMagia(nTd, sData, oData, iRow, iCol, $iframe)
                    }
                },
                {
                    title: 'Descrição',
                    data: 'descricao',
                    orderData: 4,
                    fnCreatedCell: T20.utils.cortarTexto
                },
            ],
            language: {
                zeroRecords: "Nenhum item encontrado",
                info: 'Exibindo do _START_ ao _END_ de um total de _TOTAL_ itens',
                infoEmpty: "Nenhum item encontrado",
                infoFiltered: "(filtrado de um total de _MAX_ itens)",
                paginate: {
                    first: 'Primeira',
                    last: 'Última',
                    next: 'Próxima',
                    previous: 'Anterior'
                },
            },
            initComplete: function () {
                this.api()
                    .columns()
                    .every(function () {
                        var column = this;
                        $('input', this.footer()).on('keyup change clear', function () {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                        })
                        $('select', this.footer()).on('change', function () {
                            let val = $.fn.dataTable.util.escapeRegex($(this).val());
                            if (val == 'Arcana' || val == 'Divina') {
                                val += '|Universal'
                            }
                            column.search(val, true, false).draw()
                        })
                    })
                $('#roll20-t20-table-spells_wrapper .dataTables_scrollFoot').insertAfter('#roll20-t20-table-spells_wrapper .dataTables_scrollHead')
            },
        })
    },
}