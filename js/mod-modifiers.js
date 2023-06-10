'use strict'

T20.modules.modifiers = {
    initSheet: ($iframe) => {
        const $modContainer = $(`<div class="sheet-modifiers-container">
            <div class="sheet-inside">
                <div class="sheet-container-negative-corner">
                    <div class="sheet-inside-negative-corner">
                    
                        <div class="sheet-t20-modifiersgrid">
                            <div></div>
                            <div class="sheet-grid-title">Nome do Buff</div>
                            <div class="sheet-small-title">Bônus de Ataque</div>
                            <div class="sheet-small-title">Dano Extra</div>
                            <div class="sheet-small-title">Dados Extra</div>
                            <div class="sheet-small-title">Margem</div>
                        </div>

                        <div class="roll20-t20-mod-itens">
                            
                        </div>

                        <div class="roll20-t20-mod-footer repcontrol">
                            <button class="btn repcontrol_add" style="margin: 0!important"></button>
                            <button class="btn roll20-t20-btn-refresh" style="margin: 0!important" title="Recarregar"></button>
                            <button class="btn roll20-t20-btn-help" style="margin: 0!important" title="Ajuda">?</button>
                        </div>

                        <div class="sheet-corner sheet-top-left"></div>
                        <div class="sheet-corner sheet-top-right"></div>
                        <div class="sheet-corner sheet-bottom-left"></div>
                        <div class="sheet-corner sheet-bottom-right"></div>
                    </div>
                </div>
            </div>
        </div>`)

        const $modItens = $modContainer.find('.roll20-t20-mod-itens')

        function addMod() {
            const $modItem = $(`<div class="roll20-t20-mod-item sheet-t20-modifiersgrid">
                    <input type="checkbox" name="roll20-t20-mod-ativo" class="roll20-t20-checkbox">
                    <input type="text" name="roll20-t20-mod-nome">
                    <input type="text" name="roll20-t20-mod-ataque" value="0">
                    <input type="text" name="roll20-t20-mod-dano" value="0">
                    <input type="text" name="roll20-t20-mod-dado" value="">
                    <input type="text" name="roll20-t20-mod-margem" value="">
                </div>`)
            $modItem.find('input').on('keyup change clear', applyMods)
            $modItens.append($modItem)
        }

        function applyMods() {
            const nomes = []
            let attack = 0
            let dano = 0
            let margem = 0
            const dados = []
            $modContainer.find('.roll20-t20-mod-item').each(function () {
                const $mod = $(this)
                if ($mod.find('[name="roll20-t20-mod-ativo"]').is(":checked")) {
                    nomes.push($mod.find('[name="roll20-t20-mod-nome"]').val())
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
                        dados.push($dado.val())
                    }
                    const $margem = $mod.find('[name="roll20-t20-mod-margem"]')
                    if ($margem.length > 0) {
                        margem += parseInt($margem.val())
                    }
                }
            })
            // quando o parseInt falha, dá NaN, avisar com css de erro
            // filter removes blanks
            let dado = dados.filter(x => x).join('+')
            if (dado.length > 0) {
                dado += '+'
            }

            $iframe.find('.sheet-attacks-container .repitem').each(function () {
                const $attackElement = $(this)
                let margemFinal = parseInt($attackElement.find('[name="attr_margemcriticoataque"]').val())
                margemFinal -= margem
                const critico = $attackElement.find('[name="attr_tipocritico"]').val()
                let lancinante = 0
                if (critico == 'lancinante') {
                    lancinante = dano
                    // se o cara muda o tipo de crítico para lancinante, ele precisa desligar e ligar o modificador para rodar este código.
                }
                let descricao = nomes.filter(x => x).join(', ')
                if (descricao.length > 0) {
                    descricao = `*Já incluso: ${descricao}*`
                    const ataqueDesc = $attackElement.find('[name="attr_ataquedescricao"]').val()
                    if (ataqueDesc.length > 0) {
                        descricao = '%NEWLINE%' + descricao
                    }
                }
                $attackElement.find('[name="roll_attack"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+1d20cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${dano}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${dano}+${lancinante}+@{danocriticoataque}+@{dadoextraataque}+@{modatributodano}+@{danoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)

                $attackElement.find('[name="roll_attack_best"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kh1cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${dano}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${dano}+${lancinante}+@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)

                $attackElement.find('[name="roll_attack_worst"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kl1cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${dano}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${dano}+${lancinante}+@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)
                
            })
        }

        $modContainer.find('.repcontrol_add').on('click', addMod)
        $modContainer.find('.roll20-t20-btn-refresh').on('click', applyMods)
        $iframe.find('.sheet-pseudo-attributes').after($modContainer)
        //$modContainer.find('input').first().trigger('change')
    }
}
