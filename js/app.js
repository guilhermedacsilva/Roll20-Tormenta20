'use strict'

const T20 = {
    db: {},
    modules: {},
    utils: null,
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
    cortarTexto(nTd, sData, oData, iRow, iCol) {
        if (oData.descricao.length > 150) {
            $(nTd).html(oData.descricao.substring(0, 150) + '...')
        }
    },

    prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData[2]}</span>`)
        nTd.addEventListener("click", () => {
            T20.utils.fichaInserirPoder(oData[0], $iframe)
        })
    },

    prepararLinkMagia(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData.nome}</span>`)
        nTd.addEventListener("click", () => {
            T20.utils.fichaInserirMagia(oData, $iframe)
        })
    },

    fichaInserirPoder(habilityIndex, $iframe) {
        let poder = T20.db.habilities[habilityIndex]
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

        novoItem.querySelector(`[name="attr_name${htmlName}"]`).value = poder[2]
        novoItem.querySelector(`[name="attr_${htmlName}description"]`).value = poder[3]

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
        <div class="roll20-t20-conteudo">
          <div class="row">
            <form>
              Inserir na ficha:
              <div class="form-check form-check-inline">
                <input class="form-check-input roll20-t20-input-radio" type="radio" name="poderColuna" id="poderColunaE" checked>
                <label class="form-check-label" for="poderColunaE">
                  Coluna da esquerda
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input roll20-t20-input-radio" type="radio" name="poderColuna" id="poderColunaD">
                <label class="form-check-label" for="poderColunaD">
                  Coluna da direita
                </label>
              </div>
            </form>
          </div>
          <hr>
          <table id="roll20-t20-table-habilities" class="table table-sm">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>`)
        dialog.dialog({
            title: 'Listagem de habilidades e poderes',
            autoOpen: true,
            height: 500,
            width: 900,
            close: () => dialog.remove()
        })
        const modal = dialog.closest('.ui-dialog')
        const content = modal.find('.ui-dialog-content')
        content.find('#roll20-t20-table-habilities').DataTable({
            data: T20.db.habilities,
            columns: [
                { title: 'Tipo', data: 1, orderData: [0, 1] },
                {
                    title: 'Nome',
                    data: 2,
                    orderData: 1,
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.utils.prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe)
                    }
                },
                { title: 'Descrição', data: 3, orderData: 2 },
            ],
            language: {
                search: 'Pesquisar',
                lengthMenu: 'Mostrar _MENU_ itens',
                info: 'Exibindo do _START_ ao _END_ de um total de _TOTAL_ itens',
                paginate: {
                    first: 'Primeira',
                    last: 'Última',
                    next: 'Próxima',
                    previous: 'Anterior'
                },
            },
        })
    },


    showDialogSpells($iframe) {
        const dialog = $(`
        <div class="roll20-t20-conteudo">
            <table id="roll20-t20-table-spells" class="table table-sm">
              <thead>
                <tr>
                  <th>C</th>
                  <th>Tipo</th>
                  <th>Escola</th>
                  <th>Nome</th>
                  <th class="coluna-400">Descrição</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
              <tfoot>
                <tr>
                    <th><select style="width:40px">
                        <option value="">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select></th>
                    <th><select style="width:60px">
                        <option value="">--</option>
                        <option value="Arcana">Arcanas</option>
                        <option value="Divina">Divinas</option>
                    </select></th>
                    <th><input style="width:85px"></th>
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
        const content = modal.find('.ui-dialog-content')
        const table = content.find('#roll20-t20-table-spells').DataTable({
            dom: 'lrtip',
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
                search: 'Pesquisar',
                lengthMenu: 'Mostrar _MENU_ itens',
                info: 'Exibindo do _START_ ao _END_ de um total de _TOTAL_ itens',
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
                $('#roll20-t20-table-spells tfoot tr').appendTo('#roll20-t20-table-spells thead')
            },
        })
        /*
        table.columns().every(function () {
            const that = this;
            $('input', this.header()).on('keyup change clear', function () {
                that.search(this.value).draw();
            });
        })
        */
    },
}