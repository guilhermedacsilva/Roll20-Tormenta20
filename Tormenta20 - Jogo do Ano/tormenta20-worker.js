// Stat mods
['for', 'des', 'con', 'int', 'sab', 'car'].forEach(stat => {
    on(`sheet:opened change:${stat} change:fortemp change:destemp change:contemp change:inttemp change:sabtemp change:cartemp`, function () {
        getAttrs([stat, "fortemp", "destemp", "contemp", "inttemp", "sabtemp", "cartemp", "fakefor", "fakedes", "fakecon", "fakeint", "fakesab", "fakecar",], function (v) {
            let mod = isNaN(parseInt(v[stat])) ? 0 : v[stat];
            let modtemp = isNaN(parseInt(v[`${stat}temp`])) ? 0 : v[`${stat}temp`];
            mod = parseInt(mod) + parseInt(modtemp);

            let faketemp = " "

            if (parseInt(modtemp) < 0) {
                faketemp = modtemp;
            }
            if (parseInt(modtemp) > 0) {
                faketemp = "+" + modtemp;
            }

            setAttrs({
                [`${stat}_mod`]: mod
            });
            setAttrs({
                [`fake${stat}`]: faketemp
            });
            setAttrs({
                [`menace_${stat}`]: mod
            });


            if (stat == 'for') {
                repeatingSumModified("carga", "equipment", ["equipquantity", "equipslot"], "");
            }
        });
    });
});

on(`sheet:opened`, function () {
    getAttrs([
        "game_system", "ficha_monstro", "ficha_modificadores", "ficha_dominio"
    ], function (v) {
        if (v.game_system == 'ghanor') {
            //Esconde Tormenta
            $20('.sheet-deityAndLevel').addClass('sheet-hiddenelement');
            $20('.sheet-logo-tormenta').addClass('sheet-hiddenelement');
            $20('.sheet-skill-t20').addClass('sheet-hiddenelement');
            $20('.sheet-header-info').addClass('sheet-header-info-ghanor');
            $20('.sheet-container-logo').addClass('sheet-hiddenelement');

            //Apresenta Ghanor
            $20('.sheet-domains').removeClass('sheet-hiddenelement');
            $20('.sheet-ghanor-level').removeClass('sheet-hiddenelement');
            $20('.sheet-logo-ghanor').removeClass('sheet-hiddenelement');
            $20('.sheet-main .sheet-input-with-text-bellow.sheet-char-player-ghanor').removeClass('sheet-hiddenelement');
            $20('.sheet-container-logo-ghanor').removeClass('sheet-hiddenelement');
            $20('.sheet-char-player').addClass('sheet-char-player-ghanor');
            $20('.sheet-header-global').addClass('sheet-header-global-ghanor');

            //Troca de Cores                
            $20('.sheet-global-color').addClass('ghanor-color-background');
            $20('input:focus + .sheet-slider').addClass('ghanor-color-background');

            $20('.sheet-menace-header span').addClass('ghanor-color');
            $20('.sheet-menace-container input').addClass('ghanor-color');
            $20('.sheet-menace-base-info span').addClass('ghanor-color');
            $20('.sheet-menace-rolls span').addClass('ghanor-color');
            $20('.sheet-menace-attributes span').addClass('ghanor-color');
            $20('.sheet-menace-skills span').addClass('ghanor-color');
            $20('.sheet-menace-treasures span').addClass('ghanor-color');
            $20('.sheet-global-title').addClass('ghanor-color');

            $20('.sheet-menace-base-info').addClass('sheet-menace-base-info-ghanor');
            $20('.sheet-menace-attributes').addClass('sheet-menace-attributes-ghanor');
            $20('.sheet-menace-base-info').removeClass('sheet-menace-base-info');
            $20('.sheet-menace-attributes').removeClass('sheet-menace-attributes');

            $20('.sheet-inside-negative-corner').addClass('ghanor-color-border-2');
            $20('.sheet-corner').addClass('sheet-container-negative-corner-ghanor');
            $20('.sheet-global-container .sheet-character-attributes').addClass('sheet-character-attributes-ghanor');
        } else {
            $20('.sheet-span-court').addClass('sheet-background-tormenta');
            $20('.sheet-fortification-container span').addClass('sheet-background-tormenta');
            $20('.sheet-fortification-container textarea').addClass('sheet-border-tormenta');
        }
        console.log(v.ficha_dominio, v.ficha_modificadores, v.ficha_monstro);

        if (v.game_system == 'tormenta20jda') {
            if (v.ficha_dominio == 1) {
                $20('.sheet-domains').removeClass('sheet-hiddenelement');
            }
        }

        if (v.ficha_modificadores == 1) {
            $20('.sheet-mod').removeClass('sheet-hiddenelement');
        }

        if (v.ficha_monstro == 1) {
            $20('.sheet-npj').removeClass('sheet-hiddenelement');
        }
    });
});

on(`sheet:opened change:rolltemp change:ataquetemp change:danotemp change:resistemp change:periciatemp change:defesafaketemp change:defesaarmaduratemp change:defesaescudotemp change:defesaoutrostemp change:fortemp change:destemp change:contemp change:inttemp change:sabtemp change:cartemp change:abalado change:agarrado change:alquebrado change:apavorado change:atordoado change:caido change:cego change:confuso change:debilitado  change:desprevenido change:doente change:emchama change:enfeiticado change:enjoado change:enreado change:envenenado change:esmorecido change:exausto change:fascinado change:fatigado change:fraco change:frustrado change:imovel change:inconsciente change:indefeso change:lento change:ofuscado change:paralizado change:pasmo change:petrificacao change:sangrando change:surdo change:surpreendido change:vulneravel`, function () {
    getAttrs([
        "abalado", "agarrado", "alquebrado", "apavorado", "atordoado", "caido", "cego", "confuso", "debilitado", "desprevenido", "doente", "emchama", "enfeiticado", "enjoado", "enreado",
        "envenenado", "esmorecido", "exausto", "fascinado", "fatigado", "fraco", "frustrado", "imovel", "inconsciente", "indefeso", "lento", "ofuscado", "paralizado", "pasmo", "petrificacao",
        "sangrando", "surdo", "surpreendido", "vulneravel", "desafesaoutrostemp",
        "rolltemp", "ataquetemp", "periciatemp", "danotemp", "resistemp", "defesafaketemp", "defesaarmaduratemp", "defesaescudotemp", "defesaoutrostemp",
        "fortemp", "destemp", "contemp", "inttemp", "sabtemp", "cartemp"
    ], function (v) {

        let ataque = ataque_cc = ataque_dis = 0;
        let pericia = pericia_fisica = pericia_mental = cego = 0;
        let percepcao = 0;
        let iniciativa = 0;
        let reflexo = 0;
        let defesa = 0;
        let show_global = false;

        if (v.abalado == 1) { pericia = -2; show_global = true; }
        if (v.agarrado == 1) { ataque = -2; setAttrs({ "desprevenido": 1, "imovel": 1 }); show_global = true; }
        if (v.atordoado == 1) { setAttrs({ "desprevenido": 1 }); show_global = true; }
        if (v.enreado == 1) { setAttrs({ "lento": 1, "vulneravel": 1 }); ataque = -2; show_global = true; }
        if (v.exausto == 1) { setAttrs({ "debilitado": 1, "lento": 1, "vulneravel": 1 }); show_global = true; }
        if (v.fatigado == 1) { setAttrs({ "fraco": 1, "vulneravel": 1 }); show_global = true; }
        if (v.fraco == 1) { pericia_fisica = -2; show_global = true; }
        if (v.frustrado == 1) { pericia_mental = -2; show_global = true; }
        if (v.inconsciente == 1) { setAttrs({ "indefeso": 1 }); show_global = true; }
        if (v.ofuscado == 1) { ataque = percepcao = -2; show_global = true; }
        if (v.paralizado == 1) { setAttrs({ "imovel": 1, "indefeso": 1 }); show_global = true; }
        if (v.petrificacao == 1) { setAttrs({ "inconsciente": 1 }); show_global = true; }
        if (v.surpreendido == 1) { setAttrs({ "desprevenido": 1 }); show_global = true; }
        if (v.vulneravel == 1) { defesa = -2; show_global = true; }
        if (v.surdo == 1) { iniciativa = -5; show_global = true; }
        if (v.apavorado == 1) { pericia = -5; show_global = true; }
        if (v.fascinado == 1) { percepcao = -5; show_global = true; }
        if (v.cego == 1) { cego = -5; setAttrs({ "desprevenido": 1, "lento": 1 }); show_global = true; }
        if (v.debilitado == 1) { pericia_fisica = -5; show_global = true; }
        if (v.esmorecido == 1) { pericia_mental = -5; show_global = true; }
        if (v.desprevenido == 1) { defesa = reflexo = -5; show_global = true; }
        if (v.indefeso == 1) { setAttrs({ "desprevenido": 1 }); defesa = -10; show_global = true; }
        if (v.alquebrado == 1) { show_global = true; }
        if (v.confuso == 1) { show_global = true; }
        if (v.emchama == 1) { show_global = true; }
        if (v.doente == 1) { show_global = true; }
        if (v.enfeiticado == 1) { show_global = true; }
        if (v.enjoado == 1) { show_global = true; }
        if (v.envenenado == 1) { show_global = true; }
        if (v.imovel == 1) { show_global = true; }
        if (v.lento == 1) { show_global = true; }
        if (v.imovel == 1) { show_global = true; }
        if (v.sangrando == 1) { show_global = true; }

        if (parseInt(ataque) < parseInt(ataque_cc)) { ataque_cc = 0; }
        if (parseInt(ataque) < parseInt(ataque_dis)) { ataque_dis = 0 }
        if (parseInt(pericia) < parseInt(pericia_fisica)) { pericia_fisica = 0; }
        if (parseInt(pericia) < parseInt(pericia_mental)) { pericia_mental = 0; }
        if (parseInt(pericia) < parseInt(percepcao)) { percepcao = 0; }
        if (parseInt(pericia) < parseInt(iniciativa)) { iniciativa = 0; }
        if (parseInt(pericia) < parseInt(reflexo)) { reflexo = 0; }
        if (parseInt(pericia) < parseInt(cego) || parseInt(pericia_fisica) < parseInt(cego)) { cego = 0; }
        if (parseInt(pericia) < parseInt(ataque)) { ataque = 0; }

        $20('.sheet-defesacaido-color').addClass('sheet-hiddenelement');
        if (v.caido == 1) { ataque_cc -= 5; $20('.sheet-defesacaido-color').removeClass('sheet-hiddenelement'); show_global = true; }

        let global_array = [
            [v.rolltemp, '.sheet-roll-span', '.sheet-roll-icon'],
            [parseInt(v.ataquetemp) + parseInt(ataque), '.sheet-attack-span', '.sheet-attack-icon'],
            [parseInt(v.periciatemp) + parseInt(pericia), '.sheet-skills-span', '.sheet-skills-icon'],
            [parseInt(v.danotemp), '.sheet-damage-span', '.sheet-damage-icon'],
            [parseInt(v.defesafaketemp) + parseInt(v.defesaoutrostemp) + parseInt(defesa), '.sheet-defense-span', '.sheet-defense-icon'],
            [v.defesaarmaduratemp, '.sheet-armor-span', '.sheet-armor-icon'],
            [v.defesaescudotemp, '.sheet-shield-span', '.sheet-shield-icon'],
            [parseInt(v.resistemp), '.sheet-resist-span', '.sheet-resist-icon']
        ];

        for (i = 0; i <= 7; i++) {
            if (parseInt(global_array[i][0]) != 0) {
                $20(global_array[i][1]).removeClass('sheet-hiddenelement');
                $20(global_array[i][2]).removeClass('sheet-hiddenelement');
                show_global = true;
            }

            if (parseInt(global_array[i][0]) == 0) {
                global_array[i][0] = "";
                $20(global_array[i][1]).addClass('sheet-hiddenelement');
                $20(global_array[i][2]).addClass('sheet-hiddenelement');
            }

            if (parseInt(global_array[i][0]) > 0) {
                global_array[i][0] = "+" + global_array[i][0];
            }
        }

        if (
            parseInt(v.fortemp) != 0 || parseInt(v.destemp) != 0 || parseInt(v.contemp) != 0 ||
            parseInt(v.inttemp) != 0 || parseInt(v.sabtemp) != 0 || parseInt(v.cartemp) != 0 ||
            show_global
        ) {
            $20('.sheet-global-color').removeClass('sheet-hiddenelement');
        } else {
            $20('.sheet-global-color').addClass('sheet-hiddenelement');
        }


        setAttrs({
            "condicaomodataquecc": ataque_cc,
            "condicaomodataquedis": ataque_dis,
            "condicaomodataque": ataque,
            "condicaoperfisico": pericia_fisica,
            "condicaopermental": pericia_mental,
            "condicaopericia": pericia,
            "condicaopercepcao": percepcao,
            "condicaoiniciativa": iniciativa,
            "condicaodefesa": defesa,
            "condicaoreflexo": reflexo,
            "condicaocego": cego,
            "rollicon": global_array[0][0],
            "attackicon": global_array[1][0],
            "skillsicon": global_array[2][0],
            "damageicon": global_array[3][0],
            "defenseicon": global_array[4][0],
            "armoricon": global_array[5][0],
            "shieldicon": global_array[6][0],
            "resistsicon": global_array[7][0]
        });

    });
});

//Trigger CalculoPesoMoeda
on("sheet:opened change:ts", function (e) {
    repeatingSumModified("carga", "equipment", ["equipquantity", "equipslot"], "");
});
on("sheet:opened change:to", function (e) {
    repeatingSumModified("carga", "equipment", ["equipquantity", "equipslot"], "");
});
on("sheet:opened change:extraslot", function (e) {
    repeatingSumModified("carga", "equipment", ["equipquantity", "equipslot"], "");
});

//Bonus em perícia por nível
on("sheet:opened change:charnivel", function (e) {
    getAttrs(["charnivel"], function (v) {
        let nivel = parseInt(v.charnivel);
        let bonusnivel = 0;
        if (nivel >= 15) {
            bonusnivel = 6;
        } else if (nivel >= 7) {
            bonusnivel = 4;
        } else {
            bonusnivel = 2;
        }
        setAttrs({
            "bonus_treino": bonusnivel
        });
    });
});

//Penalidades de Armadura:
on("sheet:opened change:armadurapenalidade1 change:armadurapenalidade2", function (e) {
    getAttrs(["armadurapenalidade1", "armadurapenalidade2"], function (v) {
        let penalidade1 = isNaN(v.armadurapenalidade1) ? 0 : v.armadurapenalidade1;
        let penalidade2 = isNaN(v.armadurapenalidade2) ? 0 : v.armadurapenalidade2;

        let total = parseInt(penalidade1) + parseInt(penalidade2);
        setAttrs({
            "penalidades_armadura": total
        });
    });
});

//Calculando o dano de um acerto critico
on("change:repeating_attacks:danoataque change:repeating_attacks:multiplicadorcriticoataque change:repeating_attacks:danoextraataque change:repeating_attacks:tipocritico change:repeating_attacks:modatributodano", function () {
    getAttrs([
        "repeating_attacks_danoataque",
        "repeating_attacks_multiplicadorcriticoataque",
        "repeating_attacks_tipocritico",
        "repeating_attacks_danoextraataque",
        "repeating_attacks_modatributodano",
        "danotemp", "rolltemp",
        "for_mod", "des_mod", "con_mod", "int_mod", "sab_mod", "car_mod"
    ], function (v) {
        let dano = '';

        if (typeof v.repeating_attacks_danoataque === 'string') {
            dano = v.repeating_attacks_danoataque;
        } else {
            dano = v.repeating_attacks_danoataque.toString();
        }

        let multiplicador = parseInt(v.repeating_attacks_multiplicadorcriticoataque) - 1;
        let resultado = dano;
        let lancinante = 0;

        for (let i = 0; i < multiplicador; i++) {
            resultado = resultado + " + " + dano;
        }

        resultado = resultado + " + " + parseInt(v.danotemp) + " + " + parseInt(v.rolltemp);

        if (v.repeating_attacks_tipocritico == "dilacerante") {
            resultado = resultado + " + " + 10;
        }

        if (v.repeating_attacks_tipocritico == "lancinante") {
            let modattribute = 0;
            let flat = 0;
            if (parseInt(v[stripTag(v.repeating_attacks_modatributodano)])) {
                modattribute = parseInt(v[stripTag(v.repeating_attacks_modatributodano)]);
            }

            for (let i = 0; i < multiplicador; i++) {
                lancinante = lancinante + " + " +
                    v.repeating_attacks_danoextraataque;
            }

            flat = ((parseInt(modattribute) + parseInt(v.danotemp) + parseInt(v.rolltemp)) * parseInt(multiplicador));

            lancinante = lancinante + " + " + flat;

            resultado = resultado + " + " + lancinante;
        }

        console.log("Resultado:" + resultado);

        setAttrs({
            "repeating_attacks_danocriticoataque": resultado
        });
    });
});

on("change:rolltemp change:danotemp", function () {
    getSectionIDs("attacks", function (idarray) {
        for (var i = 0; i < idarray.length; i++) {
            let repeating_attacks = "repeating_attacks_" + idarray[i] + "_danoataque";
            getAttrs([repeating_attacks], function (v) {
                console.log(v[repeating_attacks]);
                console.log(repeating_attacks);

                setAttrs({
                    [repeating_attacks]: v[repeating_attacks] + " "
                });
                setAttrs({
                    [repeating_attacks]: v[repeating_attacks]
                });
            });
        }
    });
});

//Importador:
on("sheet:opened", function (e) {
    setAttrs({
        "created_by_linki": ""
    });
});
on("change:created_by_linki", function (e) {
    "use strict";
    getAttrs(["created_by_linki"], function (v) {
        try {
            if (!!v.created_by_linki) {
                let data = JSON.parse(v.created_by_linki);
                if (!!data) {
                    let newrowid = generateRowID();
                    newrowid = newrowid.replace(/_/g, "Z");
                    let toadd = {};

                    Object.keys(data).forEach(function (objkey) {
                        toadd["repeating_attacks_" + newrowid + "_" + objkey] = data[objkey];
                    });
                    setAttrs(toadd);
                }
            }
        } catch (e) {
            console.error("ops!", e);
        } finally {
            setAttrs({
                "created_by_linki": ""
            });
        }
    });
});

//Repeating Sum [https://wiki.roll20.net/RepeatingSum]
const repeatingSumModified = (destination, section, fields, appendText = '', multiplier = 1) => {
    if (!Array.isArray(fields)) fields = [fields];
    getSectionIDs(`repeating_${section}`, idArray => {
        const attrArray = idArray.reduce((m, id) => [...m, ...(fields.map(field => `repeating_${section}_${id}_${field}`))], []);

        let pesoMoeda = 0;
        let slotExtra = 0;
        getAttrs(["ts", "to", "extraslot"], function (v) {
            let tibar = parseInt(v.ts);
            let tibouro = parseInt(v.to);
            slotExtra = parseInt(v.extraslot)
            pesoMoeda = Math.floor((tibar + tibouro) / 1000);
        });

        getAttrs(["for", ...attrArray], v => {
            //console.log("===== values of v: "+ JSON.stringify(v) +" =====");
            // getValue: if not a number, returns 1 if it is 'on' (checkbox), otherwise returns 0..
            const getValue = (section, id, field) => parseFloat(v[`repeating_${section}_${id}_${field}`]) || (v[`repeating_${section}_${id}_${field}`] === 'on' ? 1 : 0);
            const sumTotal = idArray.reduce((total, id) => total + fields.reduce((subtotal, field) => subtotal * getValue(section, id, field), 1), 0);

            let for_mod = parseInt(v.for);

            let cargalimit = for_mod > 0 ? 10 + (2 * for_mod) : 10 + parseInt(for_mod);
            cargalimit += slotExtra;
            let cargamax = cargalimit * 2;

            let setObj = {}

            let finalTotal = (sumTotal * multiplier) + pesoMoeda;

            finalTotal = finalTotal.toString() + appendText;

            setObj['penalidades_armadura_carga'] = 0;

            setObj[destination] = finalTotal;

            setObj['limite'] = cargalimit;
            setObj['maxima'] = cargamax;

            if (sumTotal * multiplier > cargalimit) {
                setObj['penalidades_armadura_carga'] = 5;

                setObj[destination] = finalTotal + "!";
            }

            setAttrs(setObj);
        });
    });
};

//Calculando carga e seus efeitos:
on('sheet:opened change:repeating_equipment remove:repeating_equipment', function () {
    repeatingSumModified("carga", "equipment", ["equipquantity", "equipslot"], "");
});

/* // Usar para adicionar uma arma ao criar a ficha
getSectionIDs('repeating_foo', idArray => {
    log(idArray.length); // logs number of repeating rows within repeating_foo
});
*/


//Calculando Defesa Total:
on("sheet:opened change:condicaodefesa change:defesaoutrostemp change:defesaarmaduratemp change:defesaescudotemp change:defesafaketemp change:defesaatributo change:armaduradefesa1 change:armaduradefesa2 change:defesaoutros change:for_mod change:des_mod change:con_mod change:int_mod change:sab_mod change:car_mod change:modatributodefesa change:caido", function (e) {
    getAttrs(["condicaodefesa", "defesafaketemp", "defesaoutrostemp", "defesaarmaduratemp", "defesaescudotemp", "defesaatributo", "armaduradefesa1", "armaduradefesa2", "defesaoutros", "for_mod", "des_mod", "con_mod", "int_mod", "sab_mod", "car_mod", "modatributodefesa", "caido"], function (v) {
        let total = 10;

        //Armadura
        if (!isNaN(v.armaduradefesa1)) {
            total = total + parseInt(v.armaduradefesa1) + parseInt(v.defesaarmaduratemp);
        }
        //Escudo
        if (!isNaN(v.armaduradefesa2)) {
            total = total + parseInt(v.armaduradefesa2) + parseInt(v.defesaescudotemp);
        }
        //Outros
        if (!isNaN(v.defesaoutros)) {
            total = total + parseInt(v.defesaoutros) + parseInt(v.defesaoutrostemp);
        }
        //Mod de Atributo
        let modAttributo = parseInt(v[`${v.modatributodefesa}`]);

        if (!isNaN(modAttributo) && v.defesaatributo == '1') {
            total = total + modAttributo;
        }

        if (!isNaN(v.condicaodefesa)) {
            total = total + parseInt(v.condicaodefesa);
        }

        if (!isNaN(v.defesafaketemp)) {
            total = total + parseInt(v.defesafaketemp);
        }

        setAttrs({
            "defesatotal": total,
            "menace_defense": total
        });
    });
});

const convertToND = (charnivel) => {
    if (charnivel == '.3') {
        return '1/4';
    }
    if (charnivel == '.5') {
        return '1/2';
    }
    return charnivel
}

on("clicked:eraseglobal", function () {
    getAttrs(["rolltemp", "ataquetemp", "periciatemp", "danotemp", "defesafaketemp", "defesaarmaduratemp", "defesaescudotemp", "defesaoutrostemp",
        "fortemp", "destemp", "contemp", "inttemp", "sabtemp", "cartemp",
    ], function (v) {
        setAttrs({
            "rolltemp": 0, "ataquetemp": 0, "periciatemp": 0, "resistemp": 0, "danotemp": 0, "defesafaketemp": 0, "defesaoutrostemp": 0,
            "defesaarmaduratemp": 0, "defesaescudotemp": 0,
            "fortemp": 0, "destemp": 0, "contemp": 0, "inttemp": 0, "sabtemp": 0, "cartemp": 0, "abalado": 0,
            "agarrado": 0, "alquebrado": 0, "apavorado": 0, "atordoado": 0, "caido": 0, "cego": 0, "confuso": 0,
            "debilitado": 0, "desprevenido": 0, "doente": 0, "emchama": 0, "enfeiticado": 0, "enjoado": 0,
            "enreado": 0, "envenenado": 0, "esmorecido": 0, "exausto": 0, "fascinado": 0, "fatigado": 0,
            "fraco": 0, "frustrado": 0, "imovel": 0, "inconsciente": 0, "indefeso": 0, "lento": 0,
            "ofuscado": 0, "paralizado": 0, "pasmo": 0, "petrificacao": 0, "sangrando": 0,
            "surdo": 0, "surpreendido": 0, "vulneravel": 0, "alquebrado": 0
        });
    });
});

//Troca entre a ficha de ameaças e a ficha de jogador
on("sheet:opened change:cstype change:resistemp", function (e) {
    getAttrs(["cstype", "game_system"], function (v) {
        let switch_selector = 'sheet-switch-selected';
        if (v.game_system == 'ghanor') {
            switch_selector = 'sheet-switch-selected-ghanor';
        }

        if (v.cstype == 0) {
            $20('.sheet-left-container').removeClass('sheet-hiddenelement');
            $20('.sheet-right-container').removeClass('sheet-hiddenelement');
            $20('.sheet-charnotes-container').removeClass('sheet-hiddenelement');

            $20('.sheet-menace-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container-conditions').addClass('sheet-hiddenelement');
            $20('.sheet-domains-container').addClass('sheet-hiddenelement');

            $20('.sheet-pj').addClass(switch_selector);
            $20('.sheet-npj').removeClass(switch_selector);
            $20('.sheet-mod').removeClass(switch_selector);
            $20('.sheet-domains').removeClass(switch_selector);

        }

        if (v.cstype == 1) {
            $20('.sheet-left-container').addClass('sheet-hiddenelement');
            $20('.sheet-right-container').addClass('sheet-hiddenelement');
            $20('.sheet-charnotes-container').addClass('sheet-hiddenelement');

            $20('.sheet-menace-container').removeClass('sheet-hiddenelement');
            $20('.sheet-global-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container-conditions').addClass('sheet-hiddenelement');
            $20('.sheet-domains-container').addClass('sheet-hiddenelement');

            $20('.sheet-pj').removeClass(switch_selector);
            $20('.sheet-npj').addClass(switch_selector);
            $20('.sheet-mod').removeClass(switch_selector);
            $20('.sheet-domains').removeClass(switch_selector);
        }

        if (v.cstype == 2) {
            $20('.sheet-left-container').addClass('sheet-hiddenelement');
            $20('.sheet-right-container').addClass('sheet-hiddenelement');
            $20('.sheet-charnotes-container').addClass('sheet-hiddenelement');

            $20('.sheet-menace-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container').removeClass('sheet-hiddenelement');
            $20('.sheet-global-container-conditions').removeClass('sheet-hiddenelement');
            $20('.sheet-domains-container').addClass('sheet-hiddenelement');

            $20('.sheet-pj').removeClass(switch_selector);
            $20('.sheet-npj').removeClass(switch_selector);
            $20('.sheet-mod').addClass(switch_selector);
            $20('.sheet-domains').removeClass(switch_selector);

        }

        if (v.cstype == 3) {
            $20('.sheet-left-container').addClass('sheet-hiddenelement');
            $20('.sheet-right-container').addClass('sheet-hiddenelement');
            $20('.sheet-charnotes-container').addClass('sheet-hiddenelement');

            $20('.sheet-menace-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container').addClass('sheet-hiddenelement');
            $20('.sheet-global-container-conditions').addClass('sheet-hiddenelement');
            $20('.sheet-domains-container').removeClass('sheet-hiddenelement');

            $20('.sheet-pj').removeClass(switch_selector);
            $20('.sheet-npj').removeClass(switch_selector);
            $20('.sheet-mod').removeClass(switch_selector);
            $20('.sheet-domains').addClass(switch_selector);
        }


    });

    getAttrs(["character_name", "vida_max", "manatotal", "manatemp", "charnivel", "bonus_treino",
        "iniciativaatributo2", "percepcaoatributo2", "fortitudeatributo2", "reflexosatributo2", "vontadeatributo2",
        "iniciativa_treinada", "percepcao_treinada", "fortitude_treinada", "reflexos_treinada", "vontade_treinada",
        "iniciativaoutros", "percepcaooutros", "fortitudeoutros", "reflexosoutros", "vontadeoutros",
        "for_mod", "des_mod", "int_mod", "sab_mod", "con_mod", "car_mod",
        "condicaopericia", "periciatemp", "rolltemp", "condicaoiniciativa", "condicaopercepcao",
        "condicaoreflexo", "resistemp",
        "condicaoperfisico", "condicaopermental", "condicaocego", "condicaomodataquedis"
    ], function (v) {

        let setObj = {};
        setObj['menace_name'] = v.character_name;
        setObj['menace_hp'] = v.vida_max;
        let mana_total = parseInt(v.manatotal) ? parseInt(v.manatotal) : 0;
        let mana_temp = parseInt(v.manatemp) ? parseInt(v.manatemp) : 0;
        setObj['menace_mp'] = mana_total + mana_temp;
        setObj['menace_nd'] = convertToND(v.charnivel);


        let metade_nivel = Math.floor(Number.parseFloat(v.charnivel) / 2);
        let splitAttr = stripTag(v.iniciativaatributo2).split("+");
        let attrSum = 0;

        for (let i = 0; i < splitAttr.length; i++) {
            attrSum += parseInt(v[`${stripTag(splitAttr[i].trim())}`]);
        }

        let atribute = parseInt(v.condicaopericia) + parseInt(v.periciatemp) + parseInt(v.rolltemp) + parseInt(v.condicaoiniciativa) + parseInt(metade_nivel) + parseInt(attrSum) + (parseInt(v.bonus_treino) * parseInt(v.iniciativa_treinada)) + parseInt(v.iniciativaoutros);
        setObj['menace_init'] = atribute > 0 ? "+" + atribute : atribute;

        splitAttr = stripTag(v.percepcaoatributo2).split("+");
        attrSum = 0;

        for (let i = 0; i < splitAttr.length; i++) {
            attrSum += parseInt(v[stripTag(splitAttr[i].trim())]);
        }

        atribute = parseInt(v.condicaopericia) + parseInt(v.periciatemp) + parseInt(v.rolltemp) + parseInt(v.condicaopercepcao) + parseInt(metade_nivel) + parseInt(attrSum) + (parseInt(v.bonus_treino) * parseInt(v.percepcao_treinada)) + parseInt(v.percepcaooutros);
        setObj['menace_percep'] = atribute > 0 ? "+" + atribute : atribute;

        splitAttr = stripTag(v.fortitudeatributo2).split("+");
        attrSum = 0;

        for (let i = 0; i < splitAttr.length; i++) {
            attrSum += parseInt(v[stripTag(splitAttr[i].trim())]);
        }

        atribute = parseInt(v.resistemp) + parseInt(v.condicaopericia) + parseInt(v.periciatemp) + parseInt(v.rolltemp) + parseInt(metade_nivel) + parseInt(attrSum) + (parseInt(v.bonus_treino) * parseInt(v.fortitude_treinada)) + parseInt(v.fortitudeoutros);
        setObj['menace_fortitude'] = atribute > 0 ? "+" + atribute : atribute;

        splitAttr = stripTag(v.reflexosatributo2).split("+");
        attrSum = 0;

        for (let i = 0; i < splitAttr.length; i++) {
            attrSum += parseInt(v[stripTag(splitAttr[i].trim())]);

            console.log(splitAttr[i] + stripTag(splitAttr[i]) + v[stripTag(splitAttr[i].trim())])
        }

        atribute = parseInt(v.resistemp) + parseInt(v.condicaopericia) + parseInt(v.periciatemp) + parseInt(v.rolltemp) + parseInt(metade_nivel) + parseInt(attrSum) + (parseInt(v.bonus_treino) * parseInt(v.reflexos_treinada)) + parseInt(v.reflexosoutros);
        setObj['menace_reflex'] = atribute > 0 ? "+" + atribute : atribute;

        splitAttr = stripTag(v.vontadeatributo2).split("+");
        attrSum = 0;

        for (let i = 0; i < splitAttr.length; i++) {
            attrSum += parseInt(v[stripTag(splitAttr[i].trim())]);

            console.log(splitAttr[i] + stripTag(splitAttr[i]) + v[stripTag(splitAttr[i].trim())])
        }

        atribute = parseInt(v.resistemp) + parseInt(v.condicaoreflexo) + parseInt(v.condicaopericia) + parseInt(v.periciatemp) + parseInt(v.rolltemp) + parseInt(metade_nivel) + parseInt(attrSum) + (parseInt(v.bonus_treino) * parseInt(v.vontade_treinada)) + parseInt(v.vontadeoutros);
        setObj['menace_will'] = atribute > 0 ? "+" + atribute : atribute;

        if (v.mana_max <= 0) {
            $20('.sheet-menace-mana').addClass('sheet-hiddenelement');
        } else {
            $20('.sheet-menace-mana').removeClass('sheet-hiddenelement');
        }

        setAttrs(setObj);
    });

    [
        'acrobacia', 'adestramento', 'atletismo', 'atuacao', 'cavalgar', 'conhecimento', 'cura', 'diplomacia',
        'enganacao', 'furtividade', 'guerra', 'intimidacao', 'intuicao', 'investigacao', 'jogatina', 'ladinagem',
        'misticismo', 'nobreza', 'oficio', 'oficio2', 'pilotagem', 'religiao', 'sobrevivencia'
    ].forEach(skill => {
        getAttrs([
            `${skill}_treinada`, `menace-${skill}`, `${skill}atributo2`, `${skill}outros`, 'bonus_treino',
            'charnivel', "for_mod", "des_mod", "int_mod", "sab_mod", "con_mod", "car_mod",
            "periciatemp", "rolltemp", "condicaopericia", "condicaomodataquecc", "condicaomodataque",
            "condicaoperfisico", "condicaopermental", "condicaocego", "condicaomodataquedis"
        ], function (x) {
            let setObj = {};
            let splitAttr = stripTag(x[`${skill}atributo2`]).split("+");
            let attrSum = 0;

            for (let i = 0; i < splitAttr.length; i++) {
                attrSum += parseInt(x[stripTag(splitAttr[i].trim())]);
            }

            let metade_nivel = Math.floor(Number.parseFloat(x.charnivel) / 2);
            let total_skill = parseInt(x.periciatemp) + parseInt(x.rolltemp) + parseInt(x.condicaopericia) +
                parseInt(metade_nivel) + attrSum +
                (parseInt(x.bonus_treino) * parseInt(x[`${skill}_treinada`])) + parseInt(x[`${skill}outros`]);

            setObj[`menace_${skill}total`] = total_skill > 0 ? "+" + total_skill : total_skill;

            setAttrs(setObj);

            if (parseInt(x[`${skill}_treinada`]) == 1) {
                $20(`.sheet-menace-${skill}`).removeClass('sheet-hiddenelement');
            } else {
                $20(`.sheet-menace-${skill}`).addClass('sheet-hiddenelement');
            }
        });
    });

});

const sumAttr = (valAttr, list) => {
    let splitAttr = stripTag(v.iniciativaatributo2).split("+");
    let attrSum = 0;

    for (let i = 0; i < splitAttr.length; i++) {
        attrSum += parseInt(v[`${stripTag(splitAttr[i].trim())}`]);
    }
}

const calcAtaqueFim = (charnivel, atributo, bonus_treino, treino, outros) => {
    atributo = atributo ? atributo : 0;
    return Math.floor(Number.parseFloat(charnivel) / 2) + parseInt(atributo) + (parseInt(bonus_treino) * parseInt(treino)) + parseInt(outros);
}


const stripTag = (tag) => {
    let clean_tag = tag.replace('@{', '').replace('}', '').replace('+@{condicaomodataquecc}+@{condicaomodataque}', '')
        .replace('+@{condicaomodataquedis}+@{condicaomodataque}', '').trim();
    return clean_tag;
}

const createDice = () => {
    return '<button type="roll" name="roll_attack" class="buttonrollataque dado-simples" value="">T</button>'
}

const createAttack = (ataque_fim, bonus, dano, dano_extra, dado_extra, margem, critico) => {
    let ataque_total = (ataque_fim + parseInt(bonus));
    ataque_total = ataque_total > 0 ? "+" + ataque_total : " -" + ataque_total;

    let critico_final = (parseInt(margem) < 20 || critico > 2) ? ", " : '';
    critico_final = (parseInt(margem) < 20) ? critico_final + margem : critico_final;
    critico_final = (parseInt(margem) < 20 && critico > 2) ? critico_final + "/" : critico_final
    critico_final = (critico > 2) ? critico_final + 'x' + critico : critico_final;

    let dado_fim = dado_extra != "" ? "+" + dado_extra : "";

    return ataque_total + " (" + dano + "+" + dano_extra + dado_fim + critico_final + ")";
}


const createSpells = (circle) => {
    getSectionIDs(`repeating_spells${circle}`, (idarray) => {
        getAttrs(
            idarray.map((id) => `repeating_spells${circle}_${id}_namespell`)
                .concat(idarray.map((id) => `repeating_spells${circle}_${id}_spelldescription`)),
            (v) => {
                idarray.forEach(
                    (id) => {
                        let newrowattrs = {};
                        let rowId = generateRowID();
                        newrowattrs[`repeating_menacespells_${rowId}_menacenamespells`] = v[`repeating_spells${circle}_${id}_namespell`];
                        newrowattrs[`repeating_menacespells_${rowId}_menaceaspellsdescription`] = v[`repeating_spells${circle}_${id}_spelldescription`];
                        newrowattrs[`repeating_menacespells_${rowId}_menacenamespellsinput`] = v[`repeating_spells${circle}_${id}_namespell`];
                        newrowattrs[`repeating_menacespells_${rowId}_menaceaspellsdescriptioninput`] = v[`repeating_spells${circle}_${id}_spelldescription`];

                        setAttrs(newrowattrs);
                    }
                );
            });
    });
}

const eraseRepeatingRow = (repeatingRow) => {
    getSectionIDs(repeatingRow, function (idarray) {
        for (var i = 0; i < idarray.length; i++) {
            removeRepeatingRow(repeatingRow + "_" + idarray[i]);
        }
    });
}

on('sheet:opened change:repeating_abilities remove:repeating_abilities change:repeating_powers remove:repeating_powers', () => {
    eraseRepeatingRow("repeating_menaceabilities");

    getSectionIDs('repeating_abilities', (idarray) => {
        getAttrs(idarray.map((id) => `repeating_abilities_${id}_nameability`)
            .concat(idarray.map((id) => `repeating_abilities_${id}_abilitydescription`)
            ), (v) => {
                idarray.forEach(
                    (id) => {
                        let newrowattrs = {};
                        let rowId = generateRowID();
                        newrowattrs[`repeating_menaceabilities_${rowId}_menacenameability`] = v[`repeating_abilities_${id}_nameability`];
                        newrowattrs[`repeating_menaceabilities_${rowId}_menaceabilitydescription`] = v[`repeating_abilities_${id}_abilitydescription`];
                        newrowattrs[`repeating_menaceabilities_${rowId}_menacenameabilityinput`] = v[`repeating_abilities_${id}_nameability`];
                        newrowattrs[`repeating_menaceabilities_${rowId}_menaceabilitydescriptioninput`] = v[`repeating_abilities_${id}_abilitydescription`];

                        setAttrs(newrowattrs);
                    }
                );
            });
    });

    getSectionIDs('repeating_powers', (idarray) => {
        getAttrs(
            idarray.map((id) => `repeating_powers_${id}_namepower`)
                .concat(idarray.map((id) => `repeating_powers_${id}_powerdescription`)
                ), (v) => {
                    idarray.forEach(
                        (id) => {
                            let newrowattrs = {};
                            let rowId = generateRowID();
                            newrowattrs[`repeating_menaceabilities_${rowId}_menacenameability`] = v[`repeating_powers_${id}_namepower`];
                            newrowattrs[`repeating_menaceabilities_${rowId}_menaceabilitydescription`] = v[`repeating_powers_${id}_powerdescription`];
                            newrowattrs[`repeating_menaceabilities_${rowId}_menacenameabilityinput`] = v[`repeating_powers_${id}_namepower`];
                            newrowattrs[`repeating_menaceabilities_${rowId}_menaceabilitydescriptioninput`] = v[`repeating_powers_${id}_powerdescription`];

                            setAttrs(newrowattrs);
                        }
                    );
                });
    });
});

on('sheet:opened change:repeating_spells1 remove:repeating_spells1 change:repeating_spells2 remove:repeating_spells2 change:repeating_spells3 remove:repeating_spells3 change:repeating_spells4 remove:repeating_spells4 change:repeating_spells5 remove:repeating_spells5', () => {
    eraseRepeatingRow("repeating_menacespells");
    ['1', '2', '3', '4', '5'].forEach((x) => createSpells(x));
});

on('sheet:opened change:repeating_equipment remove:repeating_equipment', () => {
    getSectionIDs('repeating_equipment', (idarray) => {
        getAttrs(
            idarray.map((id) => `repeating_equipment_${id}_equipquantity`)
                .concat(idarray.map((id) => `repeating_equipment_${id}_equipname`)),
            (v) => {
                let equip = idarray.map((id) => v[`repeating_equipment_${id}_equipname`]).join(', ');
                setAttrs({ menace_treasure: equip });
            });
    });
});

on('sheet:opened change:cstype clicked:eraseglobal', () => {
    eraseRepeatingRow("repeating_menacemelee");
    eraseRepeatingRow("repeating_menacedistance");

    getSectionIDs('repeating_attacks', (idarray) => {
        getAttrs(
            ['charnivel', 'bonus_treino',
                'lutaatributo2', 'luta_treinada', 'lutaoutros',
                'pontariaatributo2', 'pontaria_treinada', 'pontariaoutros',
                'atuacaoatributo2', 'atuacao_treinada', 'atuacaooutros',
                'for_mod', 'des_mod', 'con_mod', 'int_mod', 'sab_mod', 'car_mod', 'character_name',
                "condicaomodataquecc", "condicaomodataquedis", "condicaomodataque",
                "rolltemp", "ataquetemp", "danotemp", "periciatemp"
            ]
                .concat(idarray.map((id) => `repeating_attacks_${id}_modatributodano`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_nomeataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_bonusataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_danoataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_danoextraataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_dadoextraataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_danocriticoataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_margemcriticoataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_multiplicadorcriticoataque`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_ataquetipodedano`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_ataquedescricao`))
                .concat(idarray.map((id) => `repeating_attacks_${id}_ataquepericia`))
            , (values) => {
                $20('.sheet-melee').addClass('sheet-hiddenelement');
                $20('.sheet-distance').addClass('sheet-hiddenelement');

                idarray.forEach(
                    (id) => {
                        let tagPericia = stripTag(values[`repeating_attacks_${id}_ataquepericia`]).replace('total', '');
                        let newrowattrs = {};
                        let rowId = generateRowID();
                        let ataqueaTributo = stripTag(values[`${tagPericia}atributo2`]).split(' ')[0];


                        let ataque_fim = calcAtaqueFim(values['charnivel'], values[ataqueaTributo], values['bonus_treino'], values[`${tagPericia}_treinada`], values[`${tagPericia}outros`]);

                        let menace_attack = '';
                        let menace_list = '';
                        let menace_attackdescription = '';

                        ataque_fim = parseInt(ataque_fim) + parseInt(values.rolltemp) + parseInt(values.ataquetemp) + parseInt(values.condicaomodataque) + parseInt(values.periciatemp);

                        if (tagPericia == 'luta' || tagPericia == 'atuacao') {
                            $20('.sheet-melee').removeClass('sheet-hiddenelement');
                            menace_attack = 'repeating_menacemelee';
                            menace_list = 'melee_list'
                            menace_description = 'meleedescription';
                            ataque_fim = ataque_fim + parseInt(values.condicaomodataquecc);
                        } else {
                            $20('.sheet-distance').removeClass('sheet-hiddenelement');
                            menace_attack = 'repeating_menacedistance';
                            menace_list = 'distance_list';
                            menace_description = 'distancedescription';
                            ataque_fim = ataque_fim + parseInt(values.condicaomodataquedis);
                        }

                        newrowattrs[`${menace_attack}_${rowId}_${menace_list}`] = values[`repeating_attacks_${id}_nomeataque`];

                        newrowattrs[`${menace_attack}_${rowId}_${menace_description}`] = createAttack(ataque_fim, values[`repeating_attacks_${id}_bonusataque`],
                            values[`repeating_attacks_${id}_danoataque`], values[`repeating_attacks_${id}_dadoextraataque`],
                            parseInt(values[`repeating_attacks_${id}_danoextraataque`]) + parseInt(values.danotemp),
                            values[`repeating_attacks_${id}_margemcriticoataque`], values[`repeating_attacks_${id}_multiplicadorcriticoataque`]);


                        newrowattrs[`${menace_attack}_${rowId}_nomeataque`] = values[`repeating_attacks_${id}_nomeataque`];
                        newrowattrs[`${menace_attack}_${rowId}_bonusataque`] = values[`repeating_attacks_${id}_bonusataque`];
                        newrowattrs[`${menace_attack}_${rowId}_danoataque`] = values[`repeating_attacks_${id}_danoataque`];
                        newrowattrs[`${menace_attack}_${rowId}_danoextraataque`] = parseInt(values[`repeating_attacks_${id}_danoextraataque`]) + parseInt(values.rolltemp) + parseInt(values.danotemp);
                        newrowattrs[`${menace_attack}_${rowId}_dadoextraataque`] = values[`repeating_attacks_${id}_dadoextraataque`];
                        newrowattrs[`${menace_attack}_${rowId}_margemcriticoataque`] = values[`repeating_attacks_${id}_margemcriticoataque`];
                        newrowattrs[`${menace_attack}_${rowId}_multiplicadorcriticoataque`] = values[`repeating_attacks_${id}_multiplicadorcriticoataque`];
                        newrowattrs[`${menace_attack}_${rowId}_danocriticoataque`] = values[`repeating_attacks_${id}_danocriticoataque`];
                        newrowattrs[`${menace_attack}_${rowId}_ataquepericia`] = values[`repeating_attacks_${id}_ataquepericia`];
                        newrowattrs[`${menace_attack}_${rowId}_ataquetipodedano`] = values[`repeating_attacks_${id}_ataquetipodedano`];
                        newrowattrs[`${menace_attack}_${rowId}_modatributodano`] = values[`repeating_attacks_${id}_modatributodano`];
                        newrowattrs[`${menace_attack}_${rowId}_ataquedescricao`] = values[`repeating_attacks_${id}_ataquedescricao`];

                        setAttrs(newrowattrs);
                    }
                );
            });
    });
});


//Compatibilidade para o nome (FAZ O BOTÃO DE EDITAR A FICHA SUMIR)
/*on("sheet:opened", function(e){
    getAttrs(["charname"], function(v){
        
        if(v.charname != '' || v.charname.length < 1){
            let newname = v.charname;            
            setAttrs({
                "character_name": newname
            });
        }
    }); 
});*/

['vida', 'mana'].forEach(max => {
    on(`change:${max}total change:${max}temp`, () => {
        getAttrs([`${max}total`, `${max}temp`], v => {
            const temp = +v[`${max}temp`] || 0;
            const total = +v[`${max}total`] || 0;
            setAttrs({
                [`${max}_max`]: temp + total
            });
        });
    });
});
