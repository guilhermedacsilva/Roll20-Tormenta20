'use strict'

T20.modules.modifiers = {
    initSheet: ($iframe, characterId) => {
        console.log('T20.modules.modifiers.initSheet')
        const $modContainer = $(`<div class="sheet-modifiers-container">
            <div class="sheet-inside">
                <div class="sheet-container-negative-corner">
                    <div class="sheet-inside-negative-corner">
                    
                        <div class="sheet-t20-modifiersgrid">
                            <div></div>
                            <div class="sheet-grid-title">Nome do Buff</div>
                            <div class="sheet-small-title">Bônus de Ataque</div>
                            <div class="sheet-small-title">Dano Extra</div>
                            <div class="sheet-small-title">Dados Extras</div>
                            <div class="sheet-small-title">Bônus de Ameaça</div>
                            <div class="sheet-small-title">Bônus de Mult.</div>
                            <div class="sheet-small-title"></div>
                        </div>

                        <div class="roll20-t20-mod-itens"></div>

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
        const $modGlobalRoll = $iframe.find('[name="attr_rolltemp"]')
        const $modGlobalDamage = $iframe.find('[name="attr_danotemp"]')

        function loadModListHtml() {
            $modGlobalRoll.on('change blur', () => { setTimeout(applyMods, 200) })
            $modGlobalDamage.on('change blur', () => { setTimeout(applyMods, 200) })
            const $repContainer = $iframe.find('.sheet-attacks-container .repcontainer')
            $repContainer.find('input[type="text"]')
                .on('blur', applyMods)
            $repContainer.find('input[name="attr_danoataque"]')
                .on('change keyup clear', applyMods)
            $repContainer.find('input[name="attr_danoextraataque"]')
                .on('change keyup clear', applyMods)
            $repContainer.find('input[name="attr_margemcriticoataque"]')
                .on('change keyup clear', applyMods)
            $repContainer.find('input[name="attr_multiplicadorcriticoataque"]')
                .on('change keyup clear', applyMods)
            $repContainer.find('select').on('change', applyMods)
            $iframe.find('button[name="act_eraseglobal"]')
                .on('click', () => { setTimeout(applyMods, 1000) })
            $iframe.find('.sheet-attacks-container .repcontrol_add')
                .on('click', () => {
                    setTimeout(() => {
                        const $newAttack = $iframe.find('.sheet-attacks-container .repitem:last-child')
                        $newAttack.find('input[type="text"]').on('blur', applyMods)
                        $newAttack.find('input[name="attr_danoataque"]')
                            .on('change keyup clear', applyMods)
                        $newAttack.find('input[name="attr_danoextraataque"]')
                            .on('change keyup clear', applyMods)
                        $newAttack.find('input[name="attr_margemcriticoataque"]')
                            .on('change keyup clear', applyMods)
                        $newAttack.find('input[name="attr_multiplicadorcriticoataque"]')
                            .on('change keyup clear', applyMods)
                        $newAttack.find('select').on('change', applyMods)
                    }, 600);
                })

            let attribT20ModList = T20.api.getAttrib(characterId, 't20_mod_list')
            if (attribT20ModList) {
                attribT20ModList = JSON.parse(attribT20ModList)
                attribT20ModList.forEach(attriMod => {
                    const $modItem = $(`<div class="roll20-t20-mod-item sheet-t20-modifiersgrid">
                        <input type="checkbox" name="roll20-t20-mod-ativo" class="roll20-t20-checkbox">
                        <input type="text" name="roll20-t20-mod-nome" value="${attriMod.nome}">
                        <input type="text" name="roll20-t20-mod-ataque" value="${attriMod.ataque}">
                        <input type="text" name="roll20-t20-mod-dano" value="${attriMod.dano}">
                        <input type="text" name="roll20-t20-mod-dado" value="${attriMod.dado}">
                        <input type="text" name="roll20-t20-mod-margem" value="${attriMod.margem}">
                        <input type="text" name="roll20-t20-mod-mult" value="${attriMod.mult}">
                        <button class="btn roll20-t20-btn-remove" title="Remover"></button>
                    </div>`)
                    $modItem.find('[name="roll20-t20-mod-ativo"]')
                        .prop('checked', attriMod.ativo)
                        .on('change', applyModsAndSave);
                    $modItem.find('input[type="text"]')
                        .on('keyup change clear', applyMods)
                        .on('blur', saveModAttribs)
                    $modItem.find('.roll20-t20-btn-remove')
                        .on('click', removeMod)
                    $modItens.append($modItem)
                })
                if (attribT20ModList.length > 0) {
                    applyMods()
                }
            }
        }

        function removeMod() {
            $(this).parent().remove()
            applyModsAndSave()
        }

        function applyModsAndSave() {
            applyMods()
            saveModAttribs()
        }

        function saveModAttribs() {
            const attribT20ModList = []
            $modItens.find('.roll20-t20-mod-item').each(function () {
                const $modItem = $(this)
                attribT20ModList.push({
                    ativo: $modItem.find('[name="roll20-t20-mod-ativo"]').is(':checked'),
                    nome: $modItem.find('[name="roll20-t20-mod-nome"]').val(),
                    ataque: $modItem.find('[name="roll20-t20-mod-ataque"]').val(),
                    dano: $modItem.find('[name="roll20-t20-mod-dano"]').val(),
                    dado: $modItem.find('[name="roll20-t20-mod-dado"]').val(),
                    margem: $modItem.find('[name="roll20-t20-mod-margem"]').val(),
                    mult: $modItem.find('[name="roll20-t20-mod-mult"]').val()
                })
            })
            T20.api.setAttrib(characterId, 't20_mod_list', JSON.stringify(attribT20ModList))
        }

        function addMod() {
            const $modItem = $(`<div class="roll20-t20-mod-item sheet-t20-modifiersgrid">
                    <input type="checkbox" name="roll20-t20-mod-ativo" class="roll20-t20-checkbox">
                    <input type="text" name="roll20-t20-mod-nome">
                    <input type="text" name="roll20-t20-mod-ataque">
                    <input type="text" name="roll20-t20-mod-dano">
                    <input type="text" name="roll20-t20-mod-dado">
                    <input type="text" name="roll20-t20-mod-margem">
                    <input type="text" name="roll20-t20-mod-mult">
                    <button class="btn roll20-t20-btn-remove" title="Remover"></button>
                </div>`)
            $modItem.find('[name="roll20-t20-mod-ativo"]').on('change', applyModsAndSave);
            $modItem.find('input[type="text"]')
                .on('keyup change clear', applyMods)
                .on('blur', saveModAttribs)
            $modItem.find('.roll20-t20-btn-remove')
                .on('click', removeMod)
            $modItens.append($modItem)
        }

        function applyMods() {
            console.log('T20 applyMods')
            const nomes = []
            let attack = 0
            let danoTotal = 0
            let margem = 0
            let multTotal = 0
            const dados = []
            $modItens.find('.roll20-t20-mod-item').each(function () {
                const $mod = $(this)
                if ($mod.find('[name="roll20-t20-mod-ativo"]').is(":checked")) {
                    const modName = $mod.find('[name="roll20-t20-mod-nome"]').val()
                    if (modName.length > 0) {
                        nomes.push(modName)
                    } else {
                        nomes.push('Buff sem nome')
                    }
                    const modAttack = $mod.find('[name="roll20-t20-mod-ataque"]').val()
                    if (modAttack.length > 0) {
                        attack += parseInt(modAttack)
                    }
                    const modDamage = $mod.find('[name="roll20-t20-mod-dano"]').val()
                    if (modDamage.length > 0) {
                        danoTotal += parseInt(modDamage)
                    }
                    const modDice = $mod.find('[name="roll20-t20-mod-dado"]').val()
                    if (modDice.length > 0) {
                        dados.push(modDice)
                    }
                    const modCrit = $mod.find('[name="roll20-t20-mod-margem"]').val()
                    if (modCrit.length > 0) {
                        margem += parseInt(modCrit)
                    }
                    const modMult = $mod.find('[name="roll20-t20-mod-mult"]').val()
                    if (modMult.length > 0) {
                        multTotal += parseInt(modMult)
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
                let lancinante = ''
                if (critico == 'lancinante') {
                    // inclui todos os danos de buffs
                    let multAtual = $attackElement.find('[name="attr_multiplicadorcriticoataque"]').val()
                    multAtual = parseInt(multAtual) + multTotal - 1
                    lancinante = String(danoTotal * multAtual) + '+'

                    // inclui os danos da força para atacar
                    const attribDamageSelected = $attackElement
                        .find('[name="attr_modatributodano"]')
                        .val()
                    // inclui o dano extra cadastrado no ataque
                    const attackExtraDamage = $attackElement
                        .find('[name="attr_danoextraataque"]')
                        .val()
                    // inclui modificador global Rolagem
                    const modGlobalRoll = $modGlobalRoll.val()
                    // inclui modificador global Dano
                    const modGlobalDamage = $modGlobalDamage.val()
                    for (let i = 0; i < multTotal; i++) {
                        lancinante += attribDamageSelected + '+'
                            + attackExtraDamage + '+'
                            + modGlobalRoll + '+'
                            + modGlobalDamage + '+'
                    }

                    lancinante = '(' + lancinante.slice(0, -1) + ')+'
                }

                let descricao = nomes.filter(x => x).join(', ')
                if (descricao.length > 0) {
                    descricao = `*Já incluso: ${descricao}*`
                    const ataqueDesc = $attackElement.find('[name="attr_ataquedescricao"]').val()
                    if (ataqueDesc.length > 0) {
                        descricao = '%NEWLINE%%NEWLINE%' + descricao
                    }
                }

                let mult = ''
                if (multTotal > 0) {
                    const dadoBase = $attackElement.find('[name="attr_danoataque"]').val()
                    for (let i = 0; i < multTotal; i++) {
                        mult = mult + dadoBase + ' + ';
                    }
                }

                $attackElement.find('[name="roll_attack"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+1d20cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${danoTotal}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${danoTotal}+${lancinante}${mult}@{danocriticoataque}+@{dadoextraataque}+@{modatributodano}+@{danoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)

                $attackElement.find('[name="roll_attack_best"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kh1cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${danoTotal}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${danoTotal}+${lancinante}${mult}@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)

                $attackElement.find('[name="roll_attack_worst"]').val(`&{template:t20-attack}{{character=@{character_name}}}{{attackname=@{nomeataque}}}{{attackroll=[[${attack}+2d20kl1cs>${margemFinal}+[[@{ataquepericia}]]+@{bonusataque}+@{ataquetemp}]]}} {{damageroll=[[${dado}${danoTotal}+@{danoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}+@{danotemp}+@{rolltemp}]]}} {{criticaldamageroll=[[${dado}${danoTotal}+${lancinante}${mult}@{danocriticoataque}+@{modatributodano}+@{danoextraataque}+@{dadoextraataque}]]}}{{typeofdamage=@{ataquetipodedano}}}{{description=@{ataquedescricao}${descricao}}}`)

            })
        }

        $modContainer.find('.repcontrol_add').on('click', addMod)
        $modContainer.find('.roll20-t20-btn-refresh').on('click', applyModsAndSave)
        $modContainer.find('.roll20-t20-btn-help').on('click', T20.modules.modifiers.showDialogHelp)
        $iframe.find('.sheet-pseudo-attributes').after($modContainer)
        setTimeout(loadModListHtml, 3000);
    },

    showDialogHelp() {
        const dialog = $(`<div>
        <p>Você pode cadastrar e remover buffs, que são modificadores para os ataques!</p>
        <p>Os buffs podem conter valores positivos ou negativos.</p>
        <p>O campo Dados Extras é o único que aceita dados. Exemplo: 1d6.</p>
        <p>Para os buffs funcionarem, basta rolar o ataque normalmente. Também funciona com Melhor Dado e Pior Dado.</p>
        <p>O cálculo dos bônus numéricos do crítico lancinante considera os seguintes campos: o Atributo no Dano do ataque (ex: Força), o Dano Extra do ataque, o Modificador Global de Rolagem, o Modificador Global de Dano e o Dano Extra dos buffs.</p>
        <p>Caso você encontre algum erro na soma dos buffs, clique no botão de recarregar <span class="roll20-t20-btn-refresh-text">1</span>. Se tudo der errado, feche e abra a ficha. Se nada der certo, só lamento.</p>
        </div>`)
        dialog.dialog({
            title: 'Ajuda da Seção Buffs',
            autoOpen: true,
            height: 360,
            width: 505,
            close: () => dialog.remove(),
        })
    }
}
