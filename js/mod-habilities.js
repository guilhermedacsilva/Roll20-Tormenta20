'use strict'

T20.modules.habilities = {
    initSheet($iframe, characterId) {
        const openDialog = function () {
            T20.modules.habilities.showDialogHabilities($iframe)
        }
        $iframe.find('.sheet-powers-and-abilities')
            .find('.repcontrol_add')
            .after($('<button class="btn repcontrol_more">T20</button>').click(openDialog))
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
        let novoItem = itens[itens.length - 1]

        novoItem.querySelector(`[name="attr_name${htmlName}"]`).value = hability[1]
        novoItem.querySelector(`[name="attr_${htmlName}description"]`).value = hability[2]

        setTimeout(function () {
            novoItem.querySelector(`[name="attr_name${htmlName}"]`).dispatchEvent(new Event('blur'))
            novoItem.querySelector(`[name="attr_${htmlName}description"]`).dispatchEvent(new Event('blur'))
        }, 10)
    },

    prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe) {
        $(nTd).html(`<span class="nome-click">${oData[1]}</span>`)
        nTd.addEventListener("click", () => {
            T20.modules.habilities.fichaInserirPoder(oData, $iframe)
        })
    },

    showDialogHabilities($iframe) {
        const dialog = $(this.dialogHabilitiesHtml)
        dialog.dialog({
            title: 'Listagem de habilidades e poderes',
            autoOpen: true,
            height: 500,
            width: 900,
            close: () => dialog.remove(),
        })
        const modal = dialog.closest('.ui-dialog').addClass('roll20-t20-dialog')
        modal.find('.ui-dialog-title').addClass('roll20-t20-dialog-titlebar')
        const content = modal.find('.ui-dialog-content')
        content.find('#roll20-t20-table-habilities').DataTable({
            scrollY: '400px',
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
                    type: 'diacritics-neutralise',
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.modules.habilities.prepararLinkPoder(nTd, sData, oData, iRow, iCol, $iframe)
                    }
                },
                {
                    title: 'Descrição',
                    data: 2,
                    orderData: 2,
                    fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                        T20.utils.cortarTexto(nTd, oData[2])
                    }
                },
            ],
            language: {
                zeroRecords: "Nenhum item encontrado",
                infoEmpty: "Nenhum item encontrado"
            },
            initComplete: function () {
                this.api()
                    .columns()
                    .every(function () {
                        let column = this;
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

    dialogHabilitiesHtml: `
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
    </div>`
}
