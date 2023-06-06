'use strict'

T20.modules.spells = {
    initSheet: ($iframe) => {
        const openDialog = function () {
            T20.modules.spells.showDialogSpells($iframe)
        }
        $iframe.find('.sheet-spells')
            .find('.repcontrol_add')
            .after($('<button class="btn repcontrol_more">T20</button>').click(openDialog))
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

    prepararLinkMagia(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData.nome}</span>`)
        nTd.addEventListener("click", () => {
            T20.modules.spells.fichaInserirMagia(oData, $iframe)
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
        modal.addClass('roll20-t20-dialog')
        modal.find('.ui-dialog-title').addClass('roll20-t20-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        const table = content.find('#roll20-t20-table-spells').DataTable({
            scrollY: '400px',
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
                        T20.modules.spells.prepararLinkMagia(nTd, sData, oData, iRow, iCol, $iframe)
                    }
                },
                {
                    title: 'Descrição',
                    data: 'descricao',
                    orderData: 4,
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.utils.cortarTexto(nTd, oData.descricao)
                    }
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
