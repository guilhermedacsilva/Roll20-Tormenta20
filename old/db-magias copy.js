Arquivo antes de fazer regex:
Rodei os seguintes para chegar ao resultado final

([^\[,\{;])$\n\s*
$1 

([^12345"\}],)$\n\s*
$1 

resolver erros de ; na mão

 (\+[0-9]+ pm: )
<br>$1

"undefined"
""

dbMagias = [
    {
    circulo: 1,
    nome: "Abençoar Alimentos",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Alimento para 1 criatura",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.\nTruque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido. +1 PM: aumenta o número de alvos em +1. +1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.",
    },
    {
    circulo: 1,
    nome: "Acalmar Animal",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 animal",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "O animal fica prestativo em relação a
    você. Ele não fica sob seu controle, mas
    percebe suas palavras e ações da maneira
    mais favorável possível. Você recebe
    +10 nos testes de Adestramento e Diplomacia
    que fizer contra o animal.
    Um alvo hostil ou que esteja envolvido
    em um combate recebe +5 em seu teste
    de resistência. Se você ou seus aliados
    tomarem qualquer ação hostil contra o
    alvo, a magia é dissipada e ele retorna à
    atitude que tinha antes (ou piorada, de
    acordo com o mestre). Se tratar bem o
    alvo, a atitude pode permanecer mesmo
    após o término da magia.
    +1 PM: muda o alcance para médio.
    +1 PM: muda o alvo para 1 monstro ou
    espírito com Inteligência 1 ou 2. +2 PM: aumenta o número de alvos
    em +1.
    +5 PM: muda o alvo para 1 monstro
    ou espírito. Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Adaga Mental",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Encantamento",
    descricao: "Você manifesta e dispara uma adaga
    imaterial contra a mente do alvo, que
    sofre 2d6 pontos de dano mental e fica
    pasmo por uma rodada. Se passar no
    teste de resistência, sofre apenas metade
    do dano e não fica pasmo.
    +1 PM: você lança a magia sem gesticular
    ou pronunciar palavras e a adaga
    se torna invisível. Se o alvo falhar no
    teste de resistência, não percebe que
    você lançou uma magia contra ele.
    +2 PM: muda a duração para 1 dia.
    Além do normal, você “finca” a adaga
    na mente do alvo. Enquanto a magia
    durar, você sabe a direção e localização
    do alvo, desde que ele esteja no mesmo
    mundo.
    +2 PM: aumenta o dano em +1d6.",
    },
    {
    circulo: 1,
    nome: "Alarme",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "undefined",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Você cria uma barreira protetora invisível
    que detecta qualquer criatura
    que tocar ou entrar na área protegida.
    Ao lançar a magia, você pode escolher
    quais criaturas podem entrar na área
    sem ativar seus efeitos. Alarme pode
    emitir um aviso telepático ou sonoro,
    decidido quando a magia é lançada.
    Um aviso telepático alerta apenas
    você, inclusive acordando-o se estiver
    dormindo, mas apenas se estiver a até
    1km da área protegida. Um aviso sonoro
    alerta todas as criaturas em alcance
    longo.
    +2 PM: muda o alcance para pessoal.
    A área é emanada a partir de você.
    +5 PM: além do normal, você também
    percebe qualquer efeito de adivinhação
    que seja usado dentro da
    área ou atravesse a área. Você pode
    fazer um teste oposto de Misticismo
    contra quem usou o efeito; se passar,
    tem um vislumbre de seu rosto e
    uma ideia aproximada de sua localização
    (“três dias de viagem ao norte”,
    por exemplo).
    +5 PM: muda a duração para 1 dia
    ou até ser descarregada e a resistência
    para Vontade anula. Quando um
    intruso entra na área, você pode descarregar
    a magia como uma reação. Se
    o intruso falhar na resistência, ficará
    paralisado por 1d4 rodadas. Além disso,
    pelas próximas 24 horas você e as
    criaturas escolhidas ganham +10 em
    testes de Sobrevivência para rastrear
    o intruso.",
    },
    {
    circulo: 1,
    nome: "Amedrontar",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 animal ou humanoide de ND 2 ou menor",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "O alvo é envolvido por energias sombrias
    assustadoras. Se falhar na resistência,
    fica apavorado por 1d4 rodadas,
    depois abalado. Se passar, fica abalado
    por 1d4 rodadas.
    +2 PM: muda o alvo para criatura de
    ND 2 ou menor.
    +2 PM: afeta alvos de ND 5 ou menor.
    Requer 2º círculo.
    +5 PM: afeta todos os alvos válidos a
    sua escolha dentro do alcance.
    +5 PM: afeta alvos de ND 10 ou menor.
    Requer 3º círculo.
    +9 PM: afeta alvos de ND 15 ou menor.
    Requer 4º círculo.
    +14 PM: afeta alvos de qualquer ND.
    Requer 5º círculo.",
    },
    {
    circulo: 1,
    nome: "Área Escorregadia",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Quadrado de 3m ou 1 objeto",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Esta magia recobre uma superfície com
    uma substância gordurosa e escorregadia.
    Criaturas na área devem passar na
    resistência para não cair. Nas rodadas
    seguintes, criaturas que tentem movimentar-
    se pela área devem fazer testes
    de Acrobacia para equilíbrio (CD 10).
    Área Escorregadia pode tornar um item
    escorregadio. Uma criatura segurando
    um objeto afetado deve passar na
    resistência para não deixar o item cair
    cada vez que usá-lo.
    +1 PM: aumenta a área em +1 quadrado
    de 1,5m.
    +2 PM: muda a CD dos testes de
    Acrobacia para 15.
    +5 PM: muda a CD dos testes de Acrobacia
    para 20.",
    },
    {
    circulo: 1,
    nome: "Arma Espiritual",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Você invoca a arma preferida de sua
    divindade, que surge flutuando a seu
    lado. Uma vez por rodada, quando
    você sofre um ataque corpo a corpo,
    pode usar uma reação para que a arma cause automaticamente 2d6 pontos de
    dano do tipo da arma — por exemplo,
    uma espada longa causa dano de corte
    — no oponente que fez o ataque. Esta
    magia se dissipa se você morrer.
    +1 PM: além do normal, a arma também
    o protege, oferecendo +1 na Defesa.
    +2 PM: aumenta o bônus na Defesa
    em +1.
    +2 PM: muda a duração para sustentada.
    Além do normal, uma vez por
    rodada, você pode gastar uma ação livre
    para fazer a arma acertar automaticamente
    um alvo em alcance curto.
    Se a arma atacar, não poderá contra-atacar
    até seu próximo turno. Requer
    2º círculo.
    +2 PM: muda o tipo do dano para essência.
    Requer 2º círculo.
    +5 PM: invoca duas armas, permitindo
    que você contra-ataque (ou ataque,
    se usar o aprimoramento acima) duas
    vezes por rodada. Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Arma Mágica",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 arma",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "A arma fornece um bônus de +1 nos
    testes de ataque e rolagens de dano e
    é considerada mágica. Caso você esteja
    empunhando a arma, pode usar seu
    atributo-chave de magias em vez do
    atributo original nos testes de ataque.
    +2 PM: aumenta o bônus em +1, limitado
    pelo círculo máximo de magia
    que você pode lançar.
    +2 PM: a arma passa a causar +1d6
    de dano de ácido, eletricidade, fogo ou
    frio, escolhido no momento em que a
    magia é lançada.",
    },
    {
    circulo: 1,
    nome: "Armadura Arcana",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Esta magia cria uma película protetora
    invisível, mas tangível, fornecendo
    +4 na Defesa. Esse bônus é cumulativo
    com outras magias, mas não com
    bônus fornecido por armaduras.
    +1 PM: muda a execução para reação.
    Em vez do normal, você cria um escudo
    mágico que fornece +6 na Defesa
    contra o próximo ataque que sofrer até
    o fim do turno atual.
    +2 PM: aumenta o bônus na Defesa
    em +1.
    +2 PM: muda a duração para 1 dia.
    Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Armamento da Natureza",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 arma",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você fortalece uma arma mundana primitiva
    (sem custo em T$, como bordão,
    clava, funda ou tacape), uma arma
    natural ou um ataque desarmado. O
    dano da arma aumenta em um passo
    e ela é considerada mágica para propósitos
    de resistência a dano. Ao lançar a
    magia, você pode mudar o tipo de dano
    da arma (escolhendo entre corte, impacto
    ou perfuração).
    +1 PM: fornece +1 nos testes de ataque
    com a arma.
    +2 PM: muda a execução para ação de
    movimento.
    +3 PM: aumenta o bônus nos testes de
    ataque em +1.
    +5 PM: aumenta o dano da arma em
    mais um passo.",
    },
    {
    circulo: 1,
    nome: "Aviso",
    execucao: "Movimento",
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Advinhação",
    descricao: "Envia um aviso telepático para uma
    criatura, mesmo que não possa vê-la
    nem tenha linha de efeito. Escolha um:
    Alerta: o alvo recebe +5 em seu próximo
    teste de Iniciativa e de Percepção
    dentro da cena.
    Mensagem: o alvo recebe uma mensagem
    sua de até 25 palavras. Vocês devem
    ter um idioma em comum para o
    alvo poder entendê-lo.
    Localização: o alvo sabe onde você está
    naquele momento. Se você mudar de
    posição, ele não saberá.
    +1 PM: aumenta o alcance em um fator
    de 10 (90m para 900m, 900m para
    9km e assim por diante).
    +1 PM: se escolher mensagem, o alvo
    pode enviar uma resposta de até 25 palavras
    para você até o fim de seu próximo
    turno.
    +2 PM: se escolher localização, muda
    a duração para cena. O alvo sabe onde
    você está mesmo que você mude de
    posição.
    +3 PM: aumenta o número de alvos
    em +1.",
    },
    {
    circulo: 1,
    nome: "Bênção",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Criaturas escolhidas",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Abençoa os alvos, que recebem +1 em
    testes de ataque e rolagens de dano.
    Bênção anula Perdição.
    +1 PM: muda o alvo para 1 cadáver e a
    duração para 1 semana. O cadáver não se
    decompõe nem pode ser transformado
    em morto-vivo pela duração da magia.
    +2 PM: aumenta os bônus em +1, limitado
    pelo círculo máximo de magia
    que você pode lançar.",
    },
    {
    circulo: 1,
    nome: "Caminhos da Natureza",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 arma",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Você invoca espíritos da natureza, pedindo
    que eles abram seu caminho. As
    criaturas afetadas recebem deslocamento
    +3m e ignoram penalidades por terreno
    difícil em terrenos naturais.
    Truque: muda o alcance para pessoal
    e o alvo para você. Em vez do normal,
    você sabe onde fica o norte e recebe
    +5 em testes de Sobrevivência para
    se orientar.
    +1 PM: além do normal, a CD para
    rastrear os alvos em terreno natural
    aumenta em +10.
    +2 PM: aumenta o bônus de deslocamento
    em +3m.",
    },
    {
    circulo: 1,
    nome: "Comando",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 humanoide",
    duracao: "1 rodada",
    escola: "Encantamento",
    descricao: "Você dá uma ordem irresistível, que o
    alvo deve ser capaz de ouvir (mas não
    precisa entender). Se falhar na resistência,
    ele deve obedecer ao comando
    em seu próprio turno da melhor maneira
    possível. Escolha um dos efeitos.
    Fuja: o alvo gasta seu turno se afastando
    de você (usando todas as suas ações).
    Largue: o alvo solta quaisquer itens que
    esteja segurando e não pode pegá-los
    novamente até o início de seu próximo
    turno. Como esta é uma ação livre, ele
    ainda pode executar outras ações (exceto
    pegar aquilo que largou).
    Pare: o alvo fica pasmo (não pode fazer
    ações, exceto reações).
    Senta: com uma ação livre, o alvo senta
    no chão (se estava pendurado ou voando,
    desce até o chão). Ele pode fazer
    outras ações, mas não se levantar até o
    início de seu próximo turno.
    Venha: o alvo gasta seu turno se aproximando
    de você (usando todas as suas
    ações).
    +1 PM: muda o alvo para 1 criatura.
    +2 PM: aumenta a quantidade de alvos
    em +1.",
    },
    {
    circulo: 1,
    nome: "Compreensão",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura ou texto",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Essa magia lhe confere compreensão
    sobrenatural. Você pode tocar um texto
    e entender as palavras mesmo que
    não conheça o idioma. Se tocar numa
    criatura inteligente, pode se comunicar
    com ela mesmo que não tenham um
    idioma em comum. Se tocar uma criatura
    não inteligente, como um animal,
    pode perceber seus sentimentos.
    Você também pode gastar uma ação de
    movimento para ouvir os pensamentos
    de uma criatura tocada (você “ouve”
    o que o alvo está pensando), mas um
    alvo involuntário tem direito a um teste
    de Vontade para proteger seus pensamentos
    e evitar este efeito.
    +1 PM: muda o alcance para curto.
    +2 PM: muda o alcance para curto e
    o alvo para criaturas escolhidas. Você
    pode entender todas as criaturas afetadas,
    mas só pode ouvir os pensamentos
    de uma por vez.
    +2 PM: muda o alvo para 1 criatura.
    Em vez do normal, pode vasculhar os
    pensamentos do alvo para extrair informações.
    O alvo tem direito a um
    teste de Vontade para anular este efeito.
    O mestre decide se a criatura sabe
    ou não a informação que você procura.
    Requer 2º círculo.
    +5 PM: muda o alcance para pessoal
    e o alvo para você. Em vez do normal,
    você pode falar, entender e escrever
    qualquer idioma. Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Concentração de Combate",
    execucao: "Livre",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "1 rodada",
    escola: "Advinhação",
    descricao: "Você amplia sua percepção, antecipando
    movimentos dos inimigos e achando
    brechas em sua defesa. Quando faz
    um ataque, você rola dois dados e usa
    o melhor resultado.
    +2 PM: muda a execução para padrão e
    a duração para cena. Requer 2º círculo.
    +5 PM: além do normal, ao atacar
    você, um inimigo deve rolar dois dados
    e usar o pior resultado. Requer 3º
    círculo.
    +9 PM: muda a execução para padrão,
    o alcance para curto, o alvo para
    criaturas escolhidas e a duração para
    cena. Requer 4º círculo.
    +14 PM: muda a execução para padrão
    e a duração para 1 dia. Além do
    normal, você recebe um sexto sentido
    que o avisa de qualquer perigo ou
    ameaça. Você fica imune às condições
    surpreendido e desprevenido e recebe
    +10 em Defesa e Reflexos. Requer 5º
    círculo.",
    },
    {
    circulo: 1,
    nome: "Conjurar Monstro",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "1 criatura conjurada",
    duracao: "Sustentada",
    escola: "Convocação",
    descricao: "Esta magia conjura um monstro Pequeno
    que ataca seus inimigos. Você
    escolhe a aparência do monstro e o
    tipo de dano que ele pode causar, entre
    corte, impacto e perfuração. No
    entanto, ele não é uma criatura real,
    e sim um construto feito de energia.
    Se for destruído, ou quando a magia
    acaba, desaparece com um brilho, sem
    deixar nada para trás. Você só pode
    ter um monstro conjurado por esta
    magia por vez.
    O monstro surge em um ponto escolhido
    por você dentro do alcance e pode
    agir no começo do seu próximo turno,
    sempre na sua Iniciativa. O monstro
    tem deslocamento 9m e pode fazer
    uma ação de movimento por rodada.
    Você pode usar uma ação padrão para
    dar uma das seguintes ordens a ele.
    Mover: o monstro se movimenta o dobro
    do deslocamento nessa rodada.
    Atacar: o monstro ataca um alvo em alcance
    corpo a corpo. O ataque acerta
    automaticamente e causa 2d4+2 pontos
    de dano.
    Lançar Magia: o monstro pode servir
    como ponto de origem para uma magia
    lançada por você com execução de
    uma ação padrão ou menor. Ele pode
    descarregar um Toque Chocante em um
    inimigo distante, ou mesmo “cuspir”
    uma Bola de Fogo! Você gasta PM normalmente
    para lançar a magia.
    Outros usos criativos para monstros
    conjurados ficam a critério do mestre.
    O monstro não age sem receber uma
    ordem.
    Para efeitos de jogo, o monstro conjurado
    tem For 14, Des 17 e todos os outros
    atributos nulos. Ele tem 20 pontos
    de vida, não tem um valor de Defesa
    (ataques feitos contra ele acertam automaticamente)
    e usa o seu bônus para
    teste de Reflexos. Ele é imune a efeitos
    que pedem um teste de Fortitude
    ou Vontade.
    +1 PM: o monstro ganha deslocamento
    de escalada ou natação igual ao seu
    deslocamento terrestre.
    +1 PM: aumenta o deslocamento do
    monstro em +3m.
    +1 PM: muda o tipo de dano do ataque
    do monstro para ácido, fogo, frio
    ou eletricidade.
    +2 PM: o monstro ganha percepção às
    cegas.
    +2 PM: aumenta os PV do monstro
    em +10 para cada categoria de tamanho
    a partir de Pequeno (+10 PV para
    Pequeno, +20 PV para Médio etc.).
    +2 PM: aumenta o tamanho do monstro
    para Médio. Ele tem For 18, Des
    16, 45 PV, deslocamento 12m e seu
    ataque causa 2d6+4 pontos de dano.
    +2 PM: o monstro ganha resistência 5
    contra dois tipos de dano (por exemplo,
    corte e frio).
    +4 PM: o monstro ganha uma nova
    ordem: Arma de Sopro. O monstro causa
    o dobro de seu dano de ataque em
    um cone de 6m a partir de si (Reflexos
    reduz à metade).
    +5 PM: aumenta o tamanho do monstro
    para Grande. Ele tem For 24, Des
    14, 75 PV, deslocamento 12m e seu
    ataque causa 3d6+7 pontos de dano
    com 3m de alcance. Requer 2º círculo.
    +9 PM: o monstro ganha deslocamento
    de voo igual ao dobro do deslocamento.
    +9 PM: o monstro ganha imunidade
    contra dois tipos de dano.
    +9 PM: aumenta o tamanho do monstro
    para Enorme. Ele tem For 32, Des
    12, 110 PV, deslocamento 15m e seu
    ataque causa 4d6+11 pontos de dano
    com 4,5m de alcance. Requer 4º círculo.
    +14 PM: aumenta o tamanho do
    monstro para Colossal. Ele tem For 41,
    Des 10, 180 PV, deslocamento 15m e
    seu ataque causa 6d6+15 de dano com
    9m de alcance. Requer 5º círculo.",
    },
    {
    circulo: 1,
    nome: "Consagrar",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "undefined",
    duracao: "1 dia",
    escola: "Evocação",
    descricao: "Esta magia enche a área com energia
    positiva. Efeitos de luz que curam pontos
    de vida ou canalizam energia positiva
    têm seus efeitos maximizados.
    Por exemplo, Curar Ferimentos cura automaticamente
    18 PV em alvos dentro
    da área. Esta magia não pode ser lançada
    em uma área contendo um símbolo
    visível dedicado a uma divindade que
    não a sua. Consagrar anula Profanar.
    +1 PM: além do normal, mortos-vivos
    na área sofrem –2 em testes e Defesa.
    +2 PM: aumenta as penalidades para
    mortos-vivos em –1.
    +9 PM: muda a execução para 1 hora,
    a duração para permanente e adiciona
    componente material (incenso e óleos
    no valor de T$ 1.000). Requer 4º círculo.",
    },
    {
    circulo: 1,
    nome: "Controlar Plantas",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "undefined",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Esta magia só pode ser lançada em
    uma área com vegetação. As plantas
    se enroscam nas criaturas da área.
    Aquelas que falharem na resistência
    ficam enredadas. Uma vítima pode
    se libertar com uma ação padrão e
    um teste de Acrobacia ou Atletismo.
    Além disso, a área é considerada terreno
    difícil. No início de seus turnos,
    a vegetação tenta enredar novamente
    qualquer criatura na área, exigindo
    um novo teste de Reflexos.
    Truque: muda a área para alvo de 1
    planta e a resistência para nenhuma.
    Em vez do normal, você pode fazer a
    planta se mover como se fosse animada.
    Ela não pode causar dano ou atrapalhar
    a concentração de um conjurador.
    +1 PM: muda a duração para instantânea.
    Em vez do normal, as plantas na
    área diminuem, como se tivessem sido
    podadas. Terreno difícil muda para terreno
    normal e não oferece camuflagem.
    Esse efeito dissipa o uso normal
    de Controlar Plantas.
    +1 PM: além do normal, criaturas que
    falhem na resistência também ficam
    imóveis.
    +2 PM: muda o alcance para pessoal,
    a área para alvo (você) e a resistência
    para nenhuma. Em vez do normal,
    você consegue se comunicar com plantas,
    que começam com atitude prestativa
    em relação a você. Além disso,
    você pode fazer testes de Diplomacia
    com plantas. Em geral, plantas têm
    uma percepção limitada de seus arredores
    e normalmente fornecem respostas
    simplórias.",
    },
    {
    circulo: 1,
    nome: "Criar Elementos",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Elemento escolhido",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Você cria uma pequena porção de um
    elemento, a sua escolha. Os elementos
    criados são reais, não mágicos. Elementos
    físicos devem surgir em uma
    superfície. Em vez de um cubo, podese
    criar objetos simples (sem partes
    móveis) feitos de gelo, terra ou pedra.
    Água: enche um recipiente de tamanho
    Minúsculo (como um odre) com água
    potável ou cria um cubo de gelo de tamanho
    Minúsculo.
    Ar: cria um vento fraco em um quadrado
    de 1,5m. Isso purifica a área de
    qualquer gás ou fumaça, ou remove
    névoa por uma rodada.
    Fogo: cria uma chama que ilumina
    como uma tocha. Você pode segurá-la
    na palma de sua mão sem se queimar,
    ou fazê-la surgir em um quadrado de
    1,5m. Se uma criatura ou objeto estiver
    no quadrado, sofre 1d6 pontos de
    dano de fogo; se falhar num teste de
    Reflexos, pega fogo.
    Terra: cria um cubo de tamanho Minúsculo
    feito de terra, argila ou pedra.
    +1 PM: aumenta a quantidade do elemento
    em um passo (uma categoria de
    tamanho para água ou terra, +1 quadrado
    de 1,5m para ar e fogo).
    +1 PM: muda o efeito para alvo 1 criatura
    ou objeto e a resistência para Reflexos
    reduz à metade. Se escolher
    água ou terra, você arremessa o cubo
    ou objeto criado no alvo, causando 2d4
    pontos de dano de impacto. Para cada
    categoria de tamanho acima de Minúsculo,
    o dano aumenta em um passo. O
    cubo se desfaz em seguida.
    +2 PM: se escolheu fogo, aumenta o
    dano inicial de cada chama em +1d6.",
    },
    {
    circulo: 1,
    nome: "Criar Ilusão",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Ilusão que se estende a até 4 cubos de 1,5m",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Esta magia cria uma ilusão visual (uma
        criatura, uma parede...) ou sonora (um
        grito de socorro, um uivo assustador...).
        A magia cria apenas imagens ou sons
        simples, com volume equivalente ao
        tom de voz normal para cada cubo de
        1,5m no efeito. Não é possível criar
        cheiros, texturas ou temperaturas, nem
        sons complexos, como uma música ou
        diálogo. Criaturas e objetos atravessam
        uma ilusão sem sofrer dano, mas a magia
        pode, por exemplo, esconder uma
        armadilha ou inimigo. A magia é dissipada
        se você sair do alcance.
        +1 PM: muda a duração para sustentada.
        A cada rodada você pode usar uma
        ação livre para mover a imagem ou alterar
        levemente o som, como aumentar
        o volume ou fazer com que pareça
        se afastar ou se aproximar, ainda dentro
        dos limites do efeito. Você pode,
        por exemplo, criar a ilusão de um fantasma
        que anda pela sala, controlando
        seus movimentos. Quando você
        para de sustentar a magia, a imagem
        ou som persistem por mais uma rodada
        antes de a magia se dissipar.
        +1 PM: aumenta o efeito da ilusão em
        +1 cubo de 1,5m.
        +1 PM: também pode criar ilusões de
        imagem e sons combinados.
        +1 PM: também pode criar sons complexos
        com volume máximo equivalente
        ao que cinco pessoas podem produzir
        para cada cubo de 1,5m no efeito.
        Com uma ação livre, você pode alterar
        o volume do som ou fazê-lo se aproximar
        ou se afastar dentro do alcance.
        +2 PM: também pode criar odores e
        sensações térmicas, que são percebidos
        a uma distância igual ao dobro do
        tamanho máximo do efeito. Por exemplo,
        uma miragem de uma fogueira
        com 4 cubos de 1,5m poderia emanar
        calor e cheiro de queimado a até 12m.
        +2 PM: muda o alcance para longo e o
        efeito para esfera de 30m de raio. Em
        vez do normal, você cria um som muito
        alto, equivalente a uma multidão.
        Criaturas na área lançam magias como
        se estivessem em uma condição ruim e
        a CD de testes de Percepção para ouvir
        aumenta em +10. Requer 2º círculo.
        +2 PM: também pode criar sensações
        táteis, como texturas; objetos ainda
        atravessam a ilusão, mas criaturas não
        conseguem atravessá-la sem passar
        em um teste de Vontade. A ilusão ainda
        é incapaz de causar ou sofrer dano.
        Requer 2º círculo.
        +5 PM: muda a duração para sustentada.
        Além do normal, você pode
        gastar uma ação livre para modificar
        livremente a ilusão (mas não pode
        acrescentar novos aprimoramentos
        após lançá-la). Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Curar Ferimentos",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você canaliza energia positiva que recupera
    2d8+2 pontos de vida na criatura
    tocada. Como mortos-vivos usam
    energia negativa, esta magia causa dano
    de luz a eles (Vontade reduz à metade).
    Curar Ferimentos anula Infligir Ferimentos.
    Truque: em vez do normal, estabiliza
    uma criatura.
    Truque: muda o alvo para 1 morto-
    vivo. Em vez do normal, causa 1d8
    pontos de dano de luz (Vontade reduz
    à metade).
    +1 PM: aumenta a cura em +1d8+1.
    +2 PM: também remove uma condição
    de fadiga do alvo.
    +2 PM: muda o alcance para curto.
    +5 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas.",
    },
    {
    circulo: 1,
    nome: "Despedaçar",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 critura ou objeto mundano pequeno",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta magia emite um som alto e agudo.
    Se o alvo é uma criatura, sofre
    1d8+2 pontos de dano de impacto e
    fica atordoado por uma rodada (Fortitude
    reduz o dano à metade e evita
    o atordoamento). Construtos sofrem
    dano dobrado por essa magia. Se
    o alvo é um objeto, é destruído (Reflexos
    anula).
    +2 PM: aumenta o dano em +1d8+2.
    +2 PM: muda o alvo para objeto mundano
    Médio. Requer 2º círculo.
    +5 PM: muda o alvo para objeto mundano
    Grande. Requer 3º círculo.
    +9 PM: muda o alvo para objeto mundano
    Enorme. Requer 4º círculo.
    +14 PM: muda o alvo para objeto
    mundano Colossal. Requer 5º círculo.
    +5 PM: muda o alcance para pessoal e
    a área para explosão de 6m de raio. Todas
    as criaturas e objetos na área são
    afetados.",
    },
    {
    circulo: 1,
    nome: "Detectar Ameaças",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Esfera de 9m de raio",
    duracao: "Instantânea",
    escola: "Advinhação",
    descricao: "Você percebe a presença e a localização
    de criaturas inamistosas ou hostis
    na área, mesmo através de barreiras
    físicas.
    +0 PM: em vez de criaturas, você
    percebe a presença e localização de
    venenos.
    +1 PM: muda a execução para ação
    completa. Você descobre também a
    raça ou espécie e o poder das criaturas
    (determinado pela aura delas). Criaturas
    de 1º a 6º nível geram uma aura tênue,
    criaturas de 7º a 12º nível geram
    uma aura moderada e criaturas de 13º
    ao 20º nível geram uma aura poderosa.
    Criaturas acima do 20º nível geram
    uma aura avassaladora. +2 PM: em vez de criaturas, você
    percebe a presença e localização de
    armadilhas.
    +5 PM: muda a área para esfera de
    30m de raio. Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Disfarce Ilusório",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Você muda a aparência do alvo, incluindo
    seu equipamento. Isso inclui
    altura, peso, tom de pele, cor de cabelo,
    timbre de voz etc. O alvo recebe
    +10 em testes de Enganação para
    disfarce. O alvo não recebe novas habilidades
    (você pode ficar parecido com
    outra raça, mas não ganhará as habilidades
    dela), nem modifica o equipamento
    (uma espada longa disfarçada
    de bordão continua funcionando e causando
    dano como uma espada).
    Truque: muda o alcance para toque,
    o alvo para 1 criatura e a duração para
    1 semana. Em vez do normal, você faz
    uma pequena alteração na aparência
    do alvo, como deixar o nariz vermelho
    ou fazer brotar um gerânio no alto da
    cabeça. A mudança é inofensiva, mas
    persistente — se a flor for arrancada,
    por exemplo, outra nascerá no local.
    +1 PM: muda o alcance para curto e o
    alvo para 1 objeto. Você pode, por exemplo,
    transformar pedaços de ferro em
    moedas de ouro. Você recebe +10 em
    testes de Enganação para falsificação.
    +2 PM: muda o alcance para curto e o
    alvo para 1 criatura. Uma criatura involuntária
    pode anular o efeito com
    um teste de Vontade.
    +2 PM: a ilusão inclui odores e sensações.
    Isso muda o bônus em testes de
    Enganação para disfarce para +20.
    +3 PM: muda o alcance para curto e
    o alvo para criaturas escolhidas. Cada
    criatura pode ter uma aparência diferente.
    Criaturas involuntárias podem
    anular o efeito com um teste de Vontade.
    Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Enfeitiçar",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 humanoide",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Esta magia torna o alvo prestativo (veja
        a página 118). Ele não fica sob seu controle,
        mas percebe suas palavras e ações
        da maneira mais favorável possível.
        Você recebe um bônus de +10 em testes
        de Diplomacia com a vítima. Um
        alvo hostil ou que esteja envolvido em
        um combate recebe +5 em seu teste de
        resistência. Se você ou seus aliados tomarem
        qualquer ação hostil contra o
        alvo, a magia é dissipada e o alvo retorna
        à atitude que tinha antes (ou piorada,
        de acordo com o mestre).
        +2 PM: em vez do normal, você sugere
        uma ação para o alvo e ele obedece.
        A sugestão deve ser feita de modo
        que pareça aceitável, a critério do mestre.
        Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia.
        Já sugerir a um guarda que descanse
        um pouco, de modo que você e seus
        aliados passem por ele, é aceitável.
        Quando o alvo executa a ação, a magia
        termina. Você pode determinar
        uma condição específica para a sugestão:
        por exemplo, que um rico mercador
        doe suas moedas para o primeiro
        mendigo que encontrar.
        +5 PM: muda o alvo para 1 espírito ou
        monstro. Requer 3º círculo.
        +5 PM: afeta todos os alvos dentro do
        alcance.",
    },
    {
    circulo: 1,
    nome: "Escudo da Fé",
    execucao: "Reação",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "1 turno",
    escola: "Abjuração",
    descricao: "Um escudo místico se manifesta momentaneamente
    para bloquear um golpe.
    O alvo recebe +2 na Defesa.
    +1 PM: muda a execução para ação padrão,
    o alcance para toque e a duração
    para cena.
    +1 PM: também fornece ao alvo camuflagem
    contra ataques à distância.
    +2 PM: aumenta o bônus na Defesa
    em +1.
    +2 PM: muda a execução para ação padrão,
    o alcance para toque e a duração
    para cena. A magia cria uma conexão
    mística entre você e o alvo. Além do
    efeito normal, o alvo sofre apenas metade
    do dano por ataques e efeitos; a
    outra metade do dano é transferida a
    você. Se a qualquer momento o alvo
    sair de alcance curto de você, a magia é
    dissipada. Requer 2º círculo.
    +3 PM: muda a duração para 1 dia. Requer
    2º círculo.",
    },
    {
    circulo: 1,
    nome: "Escuridão",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 objeto",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "O alvo emana sombras em uma área
    com 6m de raio. Criaturas dentro da
    área recebem camuflagem por escuridão.
    As sombras não podem ser iluminadas
    por nenhuma fonte de luz natural.
    O objeto pode ser guardado (em um
    bolso, por exemplo) para interromper a
    escuridão, que voltará a funcionar caso
    o objeto seja revelado. Se lançar a magia
    num objeto de uma criatura involuntária,
    ela tem direito a um teste de Vontade
    para anulá-la. Escuridão anula Luz.
    +1 PM: aumenta a área da escuridão
    em +1,5m de raio.
    +2 PM: muda o efeito para fornecer
    camuflagem total por escuridão.
    +2 PM: muda a duração para 1 dia.
    +2 PM: muda o alvo para 1 criatura e
    a resistência para Fortitude parcial. Você
    lança a magia nos olhos do alvo, que fica
    cego pela cena. Se passar na resistência,
    fica cego por 1 rodada. Requer 2º círculo.
    +5 PM: muda o alcance para pessoal e o
    alvo para você. Em vez do normal, você
    é coberto por sombras, recebendo +10
    em testes de Furtividade e camuflagem
    por escuridão. Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Explosão de Chamas",
    execucao: "Padrão",
    alcance: "6m",
    alvo: "undefined",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Um leque de chamas irrompe de suas
    mãos, causando 2d6 pontos de dano de
    fogo às criaturas na área.
    Truque: muda o alcance para curto,
    a área para alvo de 1 objeto e a resistência
    para Reflexos anula. Você gera
    uma pequena explosão que não causa
    dano mas pode acender uma vela, tocha
    ou fogueira. Também pode fazer
    um objeto inflamável com RD 0 (como
    uma corda ou pergaminho) ficar em
    chamas. Uma criatura em posse de um
    objeto pode evitar esse efeito se passar
    no teste de resistência.
    +1 PM: aumenta o dano em +1d6.
    +1 PM: muda a resistência para Reflexos
    parcial. Se passar, a criatura reduz
    o dano à metade; se falhar, fica em chamas
    (veja Condições, no Apêndice).",
    },
    {
    circulo: 1,
    nome: "Hipnotismo",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Criaturas escolhidas de ND 2 ou menor",
    duracao: "1d4 rodadas",
    escola: "Encantamento",
    descricao: "Suas palavras e movimentos ritmados
    deixam as criaturas fascinadas. Esta
    magia só afeta criaturas que possam
    perceber você. Se usar esta magia em
    combate, os alvos recebem +5 em seus
    testes de resistência.
    Truque: muda o alvo para 1 criatura
    e a duração para 1 rodada. Em vez de
    fascinado, o alvo fica pasmo. Uma criatura
    só pode ser afetada por este truque
    uma vez por cena.
    +1 PM: como o normal, mas se passarem
    na resistência os alvos não saberão
    que foram alvos de uma magia.
    +2 PM: muda a duração para cena.
    +2 PM: muda o alcance para médio.
    +2 PM: afeta alvos de ND 5 ou menor.
    Requer 2º círculo.
    +5 PM: afeta alvos de ND 10 ou menor.
    Requer 3º círculo.
    +9 PM: afeta alvos de ND 15 ou menor.
    Requer 4º círculo.
    +14 PM: afeta alvos de qualquer ND.
    Requer 5º círculo.",
    },
    {
    circulo: 1,
    nome: "Imagem Espelhada",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Três cópias ilusórias suas aparecem.
    As duplicatas ficam ao seu redor e imitam
    suas ações, tornando difícil para
    um inimigo saber quem atacar. Você
    recebe +6 na Defesa. Cada vez que um
    ataque contra você erra, uma das imagens
    desaparece e o bônus na Defesa
    diminui em 2. Um oponente deve
    ver as cópias para ser confundido. Se
    você estiver invisível, ou o atacante fechar
    os olhos, você não recebe o bônus
    (mas o atacante ainda sofre penalidades
    normais por não enxergar).
    +2 PM: aumenta o número de cópias
    em +1 (e o bônus na Defesa em +2).
    +2 PM: além do normal, toda vez que
    uma cópia é destruída, emite um clarão
    de luz. A criatura que destruiu a
    cópia fica ofuscada por uma rodada.
    Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Infligir Ferimentos",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "Você canaliza energia negativa contra
    um alvo, causando 2d8+2 pontos de
    dano de trevas (ou curando 2d8+2 PV,
    se for um morto-vivo). Infligir Ferimentos
    anula Curar Ferimentos.
    +1 PM: além do normal, se falhar na
    resistência, o alvo fica fraco pela cena.
    +2 PM: aumenta o dano em 1d8+1.
    +2 PM: como parte da execução da magia,
    você pode fazer um ataque corpo a
    corpo contra o alvo. Se acertar, causa o
    dano do ataque e o efeito da magia.
    +5 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas.",
    },
    {
    circulo: 1,
    nome: "Leque Cromático",
    execucao: "Padrão",
    alcance: "4,5m",
    alvo: "undefined",
    duracao: "Instantânea",
    escola: "Ilusão",
    descricao: "Um cone de luzes brilhantes surge a
    partir das suas mãos, deixando as criaturas
    na área atordoadas por 1 rodada
    e ofuscadas pela cena. Caso passem na
    resistência, não ficam atordoadas. Esta
    magia afeta apenas criaturas de ND 2
    ou menor e não afeta criaturas cegas.
    +2 PM: aumenta a duração do efeito
    em +1 rodada.
    +2 PM: afeta alvos de ND 5 ou menor.
    Requer 2º círculo.
    +5 PM: afeta alvos de ND 10 ou menor.
    Requer 3º círculo.
    +9 PM: afeta alvos de ND 15 ou menor.
    Requer 4º círculo.
    +14 PM: afeta alvos de qualquer ND.
    Requer 5º círculo.",
    },
    {
    circulo: 1,
    nome: "Luz",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 objeto",
    duracao: "Cena",
    escola: "Evocação",
    descricao: "O alvo emite luz (mas não produz calor)
    em uma área com 6m de raio. O
    objeto pode ser guardado (em um bolso,
    por exemplo) para interromper a
    luz, que voltará a funcionar caso o objeto
    seja revelado. Se lançar a magia
    num objeto de uma criatura involuntária,
    ela tem direito a um teste de Vontade
    para anulá-la. Luz anula Escuridão.
    +1 PM: aumenta a área iluminada em
    +3m de raio.
    +2 PM: muda a duração para 1 dia.
    +2 PM: muda a duração para permanente
    e adiciona componente material
    (pó de rubi no valor de T$ 50). Requer
    2º círculo.
    +0 PM (Apenas Arcanos): muda
    o alvo para 1 criatura. Você lança a magia
    nos olhos do alvo, que fica ofuscado
    pela cena. Não afeta criaturas cegas.
    +2 PM (Apenas Arcanos): muda o
    alcance para longo e o efeito para 4 esferas
    brilhantes. Cria esferas flutuantes
    de pura luz com 10cm de diâmetro,
    que você pode posicionar onde quiser
    dentro do alcance. Você pode enviar
    uma esfera à frente, outra para trás,
    outra para cima e manter uma perto
    de você, por exemplo. Uma vez por rodada,
    você pode mover as esferas com
    uma ação livre. Cada esfera ilumina
    como uma tocha, mas não produz calor.
    Se uma esfera ocupar o espaço de
    uma criatura, ela fica ofuscada e sua silhueta
    pode ser vista claramente (ela
    não recebe camuflagem por escuridão
    ou invisibilidade). Requer 2º círculo.
    +2 PM (Apenas Divinos): a luz é
    cálida como a do sol. Criaturas que sofrem
    penalidades e dano pela luz solar
    sofrem seus efeitos como se estivessem
    expostos à luz solar real. Dentro
    da área seus aliados estabilizam automaticamente
    e ficam imunes à condição
    sangrando, e seus inimigos ficam
    ofuscados. Requer 2º círculo.
    +5 PM (Apenas Divinos): muda o
    alcance para toque e o alvo para 1 criatura.
    Em vez do normal, o alvo é envolto
    por um halo de luz, recebendo +10
    em testes de Diplomacia e resistência a
    trevas 10. Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Névoa",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "undefined",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Uma névoa espessa eleva-se de um
    ponto a sua escolha, obscurecendo
    toda a visão — criaturas a até 1,5m
    têm camuflagem e criaturas a partir de
    3m têm camuflagem total. Um vento
    forte dispersa a névoa em 4 rodadas e
    um vendaval a dispersa em 1 rodada.
    Esta magia não funciona sob a água.
    +1 PM: a magia também funciona sob
    a água, criando uma nuvem de tinta.
    +2 PM: você pode escolher criaturas
    no alcance ao lançar a magia; elas enxergam
    através do efeito. Requer 2º
    círculo.
    +2 PM: além do normal, a nuvem tem
    um cheiro horrível. No início de seus
    turnos, qualquer criatura dentro dela,
    ou qualquer criatura com faro em alcance
    curto da nuvem, deve fazer um
    teste de Fortitude. Se falhar, fica enjoada
    por uma rodada.
    +2 PM: além do normal, a nuvem tem
    um tom esverdeado e se torna cáustica.
    No início de seus turnos, criaturas
    dentro dela sofrem 2d4 pontos de dano
    de ácido.
    +3 PM: aumenta o dano de ácido em
    +2d4.
    +5 PM: além do normal, a nuvem fica
    espessa, quase sólida. Qualquer criatura
    dentro dela tem seu deslocamento
    reduzido para 3m (independentemente
    de seu deslocamento normal) e sofre –2
    em testes de ataque e rolagens de dano.",
    },
    {
    circulo: 1,
    nome: "Orientação",
    execucao: "Movimentação",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Você oferece ajuda. Escolha um atributo
    — até o final da cena, sempre que o
    alvo fizer um teste de perícia baseada
    no atributo escolhido, pode rolar dois
    dados e ficar com o melhor resultado.
    Esse benefício não se aplica a testes de
    ataque ou resistência.
    Truque: muda a execução para ação
    padrão e a duração para 1 rodada. O
    bônus vale para um único teste. Uma
    criatura só pode ser afetada por esse
    truque uma vez por dia.
    +5 PM: em vez de um atributo, escolha
    entre atributos físicos (Força, Destreza
    e Constituição) ou mentais (Inteligência,
    Sabedoria e Carisma). Requer
    3º círculo.
    +5 PM: muda o alvo para criaturas escolhidas.
    Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Perdição",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Criaturas escolhidas",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Amaldiçoa os alvos, que recebem –1
    em testes de ataque e rolagens de
    dano. Perdição anula Bênção.
    +2 PM: aumenta as penalidades em –1,
    limitado pelo círculo máximo de magia
    que você pode lançar.",
    },
    {
    circulo: 1,
    nome: "Primor Atlético",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você modifica os limites físicos do
    alvo, que recebe deslocamento +9m e
    +10 em testes de Atletismo.
    +1 PM: além do normal, o alvo recebe
    um bônus adicional de +20 em testes
    de Atletismo para saltar (para um
    bônus total de +30).
    +1 PM: além do normal, o alvo pode
    escalar paredes e tetos sem precisar
    fazer testes de Atletismo. Para isso,
    precisa estar com as mãos livres, mas
    pode usar uma única mão se ficar parado
    no lugar. O alvo não fica desprevenido
    enquanto escala.
    +1 PM: muda a execução para ação
    de movimento, o alcance para pessoal,
    o alvo para você e a duração
    para instantânea. Você salta muito
    alto e pousa em alcance corpo a corpo
    de uma criatura em alcance curto.
    Se fizer um ataque corpo a corpo contra
    essa criatura nesta rodada, recebe
    os benefícios e penalidades de uma
    investida e sua arma tem o dano aumentado
    em um dado do mesmo tipo
    durante este ataque.
    +3 PM: além do normal, ao fazer testes
    de perícias baseadas em Força,
    Destreza ou Constituição, o alvo pode
    rolar dois dados e escolher o melhor.
    Não afeta testes de ataque ou resistência.
    Requer 2º círculo.",
    },
    {
    circulo: 1,
    nome: "Profanar",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "undefined",
    duracao: "1 dia",
    escola: "Necromancia",
    descricao: "Esta magia enche a área com energia
    negativa. Efeitos que causam dano de
    trevas ou canalizam energia negativa
    têm o dano dobrado dentro da área.
    Esta magia não pode ser lançada em
    uma área contendo um símbolo visível
    dedicado a uma divindade que não
    a sua. Profanar anula Consagrar.
    +1 PM: além do normal, mortos-vivos
    na área recebem +2 na Defesa e +2 em
    todos os testes.
    +2 PM: aumenta os bônus para mortos-
    vivos em +1.
    +9 PM: muda a execução para 1 hora,
    a duração para permanente e adiciona
    componente material (incenso e óleos
    no valor de T$ 1.000). Requer 4º círculo.",
    },
    {
    circulo: 1,
    nome: "Proteção Divina",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Esta magia cria uma barreira mística
    invisível que fornece ao alvo +2 em
    testes de resistência.
    +2 PM: aumenta o bônus concedido
    em +1.
    +2 PM: muda a execução para reação,
    o alcance para curto e a duração para
    1 rodada.
    +2 PM: muda o alvo para área de círculo
    com 3m de raio. Todos os aliados
    dentro do círculo recebem o bônus da
    magia. Requer 2º círculo.
    +5 PM: também torna o alvo imune
    a efeitos de encantamento. Requer 3º
    círculo.",
    },
    {
    circulo: 1,
    nome: "Queda Suave",
    execucao: "Reação",
    alcance: "Curto",
    alvo: "1 criatura ou objeto com até 200kg",
    duracao: "Até chegar ao solo ou cena, o que vier primeiro",
    escola: "Transmutação",
    descricao: "O alvo cai lentamente. A velocidade da
    queda é reduzida para 18m por rodada
    — o suficiente para não causar dano.
    Como lançar esta magia é uma reação,
    você pode lançá-la rápido o bastante
    para salvar a si ou um aliado de quedas
    inesperadas.
    Lançada sobre um projétil — como
    uma flecha ou uma rocha largada do
    alto de um penhasco —, a magia faz
    com que ele cause metade do dano
    normal, devido à lentidão.
    Queda Suave só funciona em criaturas
    e objetos em queda livre ou similar; a
    magia não vai frear um golpe de espada
    ou o mergulho rasante de um atacante
    voador.
    Truque: muda o alvo para objeto
    com até 5kg. Em vez do normal, você
    pode gastar uma ação de movimento
    para levitar o alvo até 4,5m em qualquer
    direção.
    +2 PM: muda o alvo para até 10 criaturas
    ou objetos.",
    },
    {
    circulo: 1,
    nome: "Raio do Enfraquecimento",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Você dispara um raio púrpura que drena
    as forças do alvo. Se falhar na resistência,
    o alvo fica fatigado. Se passar,
    fica vulnerável.
    Truque: muda o alcance para toque
    e a resistência para Fortitude anula.
    Em vez do normal, ao tocar o alvo,
    sua mão emana um brilho púrpura. O
    alvo fica fatigado. Note que, como efeitos
    de magia não acumulam, lançar
    este truque duas vezes contra o mesmo
    alvo não irá deixá-lo exausto.
    +2 PM: em vez do normal, se falhar na
    resistência o alvo fica exausto. Se passar,
    fica fatigado. Requer 2º círculo.
    +5 PM: em vez do normal, se falhar na
    resistência o alvo fica inconsciente. Se
    passar, fica exausto. Requer 3º círculo.",
    },
    {
    circulo: 1,
    nome: "Resistência a Energia",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Ao lançar esta magia, escolha entre
    ácido, eletricidade, fogo, frio, luz ou
    trevas. O alvo recebe resistência 10
    contra a energia escolhida, passando
    a ignorar os 10 primeiros pontos
    de dano de cada ataque feito com essa
    energia (veja mais no Apêndice).
    +2 PM: aumenta a resistência em +5.
    +2 PM: muda a duração para 1 dia.
    Requer 2º círculo.
    +5 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas. Requer
    3º círculo.
    +5 PM: muda o efeito para resistência
    a dano de todos os tipos de energia.
    Requer 3º círculo.
    +9 PM: muda o efeito para imunidade
    a um tipo de dano de energia. Requer
    4º círculo.",
    },
    {
    circulo: 1,
    nome: "Santuário",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Qualquer criatura que tente fazer uma
    ação hostil contra o alvo deve fazer um
    teste de Vontade. Se falhar, não consegue,
    perde a ação e não pode tentar novamente
    até o fim da cena. Santuário
    não protege o alvo de efeitos de área.
    Além disso, o próprio alvo também
    não pode fazer ações hostis, ou a magia
    é dissipada — mas pode usar outras
    habilidades e magias de cura e suporte
    (como Curar Ferimentos, Bênção e
    assim por diante).
    +1 PM: além do normal, escolha um
    tipo de criatura entre animal, construto
    ou morto-vivo. Você não pode ser percebido
    por criaturas do tipo escolhido,
    não importando o sentido usado.
    +9 PM: também protege o alvo contra
    efeitos de área. Uma criatura que
    tente atacar uma área que inclua o alvo
    deve fazer o teste de Vontade; se falhar,
    não consegue e perde a ação. Ela
    só pode tentar novamente se o alvo
    sair da área.",
    },
    {
    circulo: 1,
    nome: "Seta Infalível de Talude",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Até 2 criaturas",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Favorita entre arcanistas iniciantes,
    esta magia lança duas setas de energia
    que causando 1d4+1 pontos de
    dano de essência cada. Você pode lançar
    as setas em alvos diferentes ou concentrá-
    las num mesmo alvo. Caso você
    possua um bônus no dano de magias,
    como pelo poder Arcano de Batalha,
    ele é aplicado em apenas uma seta (o
    bônus vale para a magia, não cada alvo).
    +2 PM: muda as setas para lanças de
    energia que surgem e caem do céu.
    Cada lança causa 1d8+1 pontos de
    dano de essência. Requer 2º círculo.
    +2 PM: muda o número de setas/lanças
    para três.
    +4 PM: muda o número de setas/lanças
    para cinco. Requer 2º círculo.
    +9 PM: muda o número de setas/lanças
    para dez. Requer 4º círculo.",
    },
    {
    circulo: 1,
    nome: "Sono",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura de ND 2 ou menor",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Um sono místico recai sobre o alvo. Se
    passar na resistência, fica fatigado por
    uma rodada. Se falhar, fica inconsciente
    e caído.
    +2 PM: muda o alvo para área de quadrado
    com 3m de lado. Todas as criaturas
    na área dentro do limite de ND
    são afetadas.
    +2 PM: afeta alvos de ND 5 ou menor.
    Requer 2º círculo.
    +5 PM: afeta alvos de ND 10 ou menor.
    Requer 3º círculo.
    +5 PM: muda o alvo para criaturas escolhidas.
    Todas as criaturas no alcance
    dentro do limite de ND são afetadas.
    +9 PM: afeta alvos de ND 15 ou menor.
    Requer 4º círculo.
    +14 PM: afeta alvos de qualquer ND.
    Requer 5º círculo.",
    },
    {
    circulo: 1,
    nome: "Suporte Ambiental",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Esta magia garante a sobrevivência
    em ambientes hostis. O alvo fica imune
    aos efeitos de calor e frio extremos,
    pode respirar na água se respirar
    ar (ou vice-versa) e não sufoca em
    fumaça densa.
    +5 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas.",
    },
    {
    circulo: 1,
    nome: "Teia",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "undefined",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Teia cria várias camadas de fibras entrelaçadas
    e pegajosas na área. Qualquer
    criatura na área que falhar na resistência
    fica enredada. Uma vítima pode se
    libertar com uma ação padrão e um
    teste de Acrobacia ou Atletismo. A
    área ocupada por Teia é terreno difícil.
    A Teia é inflamável. Qualquer ataque
    que cause dano de fogo destrói as teias
    por onde passar, libertando as criaturas
    enredadas mas deixando-as em chamas
    (veja Condições, no Apêndice).
    +1 PM: além do normal, criaturas que
    falhem na resistência também ficam
    imóveis.
    +2 PM: além do normal, no início de
    seus turnos a magia afeta novamente
    qualquer criatura na área, exigindo
    um novo teste de Reflexos. Requer 2º
    círculo.
    +2 PM: aumenta a área em +1 cubo
    de 1,5m.",
    },
    {
    circulo: 1,
    nome: "Toque Chocante",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Arcos elétricos envolvem sua mão,
    causando 2d8+2 pontos de dano de
    eletricidade. Se o alvo usa armadura de
    metal (ou carrega muito metal, a critério
    do mestre), sofre uma penalidade
    de –5 no teste de resistência.
    +1 PM: aumenta o dano em 1d8+1.
    +2 PM: como parte da execução da
    magia, você faz um ataque corpo a corpo
    contra o alvo. Se acertar, causa o
    dano do ataque e da magia.
    +2 PM: muda o alcance para pessoal
    e o alvo para área: explosão com 6m
    de raio. Você dispara raios pelas pontas
    dos dedos que afetam todas as criaturas
    na área.",
    },
    {
    circulo: 1,
    nome: "Tranca Arcana",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 objeto Grande ou menor",
    duracao: "Permanente",
    escola: "Abjuração",
    descricao: "Esta magia tranca uma porta ou outro
    item que possa ser aberto ou fechado
    (como um baú, caixa etc.), aumentando
    a CD de testes de Força ou Ladinagem
    para abri-lo em +10. Você pode
    abrir livremente sua própria tranca
    sem problemas.
    Componente material: chave de bronze
    no valor de T$ 25.
    Truque: muda o alcance para curto.
Em vez do normal, pode abrir ou fechar
um objeto de tamanho Médio ou
menor, como uma porta ou baú. Não
afeta objetos trancados.
+1 PM: muda o alcance para curto e a
duração para instantânea. Em vez do
normal, a magia abre portas, baús e janelas
trancadas, presas, barradas ou
protegidas por Tranca Arcana (o efeito é
dissipado) a sua escolha. Ela também
afrouxa grilhões e solta correntes.
+5 PM: aumenta a CD para abrir o
alvo em +5.
+5 PM: muda o alvo para 1 objeto de
qualquer tamanho, podendo afetar até
mesmo os portões de um castelo. Requer
3º círculo.",
    },
    {
    circulo: 1,
    nome: "Tranquilidade",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 animal ou humanoide",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Você emana ondas de serenidade. Se
    falhar na resistência, o alvo tem sua
    atitude mudada para indiferente (veja
    Diplomacia no Capítulo 2) e não
    pode atacar ou realizar qualquer ação
    agressiva. Se passar, sofre –2 em testes
    de ataque. Qualquer ação hostil contra
    o alvo ou seus aliados dissipa a magia e
    faz ele retornar à atitude que tinha antes
    (ou pior, de acordo com o mestre).
    +1 PM: muda o alvo para 1 criatura.
    +1 PM: aumenta o número de alvos
    em +1.
    +2 PM: aumenta a penalidade em –1.
    +5 PM: muda o alcance para médio e o
    alvo para criaturas escolhidas. Requer
    3º círculo.",
    },
    {
    circulo: 1,
    nome: "Transmutar Objetos",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "Matéria-prima, como madeeira, rochas, ossos",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "A magia transforma matéria bruta para
    moldar um novo objeto. Você pode
    usar matéria-prima mundana para
    criar um objeto de tamanho Pequeno
    ou menor e preço máximo de T$ 25,
    como um balde ou uma espada. O objeto
    reverte à matéria-prima no final da
    cena, ou se for tocado por um objeto
    feito de chumbo. Esta magia não pode
    ser usada para criar objetos consumíveis,
    como alimentos, itens alquímicos
    ou venenos, nem objetos com mecanismos
    complexos, como bestas ou
    armas de fogo. Transmutar Objetos anula
    Despedaçar.
    Truque: muda o alvo para 1 objeto
    mundano e a duração para instantânea.
    Em vez do normal, você pode alterar
    as propriedades físicas do objeto,
    como colorir, limpar ou sujar itens
    pequenos (incluindo peças de roupa),
    aquecer, esfriar e/ou temperar
    (mas não produzir) até 0,5kg de material
    inanimado (incluindo comida),
    ou curar 1 PV do objeto, consertando
    pequenas falhas como colar um frasco
    de cerâmica quebrado, unir os elos de
    uma corrente ou costurar uma roupa
    rasgada. Um objeto só pode ser afetado
    por este truque uma vez por dia.
    +2 PM: aumenta o limite de tamanho
    do objeto em uma categoria.
    +1 PM: aumenta o preço máximo do
    objeto criado em + T$ 25.
    +1 PM: muda o alcance para toque, o
    alvo para 1 construto e a duração para
    instantânea. Em vez do normal, cura
    2d8 PV do alvo. Você pode gastar 2 PM
    adicionais para aumentar a cura em
    +1d8.
    +5 PM: muda o alvo para 1 objeto
    mundano e a duração para instantânea.
    Em vez do normal, você cura todos
    os PV do alvo, restaurando o objeto
    totalmente. Este aprimoramento
    está sujeito aos limites de tamanho e
    preço do objeto conforme a magia original
    e não funciona se o objeto tiver
    sido completamente destruído (queimado
    até virar cinzas ou desintegrado,
    por exemplo). Requer 3º círculo.
    +9 PM: como o aprimoramento anterior,
    mas passa a afetar itens mágicos.",
    },
    {
    circulo: 1,
    nome: "Visão Mística",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "Você",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Seus olhos brilham com uma luz azul e
    passam a enxergar auras mágicas. Este
    efeito é similar ao uso de Misticismo
    para detectar magia, mas você detecta
    todas as auras mágicas em alcance médio
    e recebe todas as informações sobre
    elas sem gastar ações. Além disso,
    você pode gastar uma ação de movimento
    para descobrir se uma criatura
    que possa perceber em alcance médio
    é capaz de lançar magias e qual a aura
    gerada pelas magias de círculo mais
    alto que ela pode lançar.
    +1 PM: recebe visão no escuro.
    +2 PM: muda a duração para 1 dia.
    +2 PM: também pode enxergar objetos
    e criaturas invisíveis. Eles aparecem
    como formas translúcidas.",
    },
    {
    circulo: 1,
    nome: "Vitalidade Fantasma",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "Você suga energia vital da terra, recebendo
    2d8 pontos de vida temporários.
    Os PV temporários desaparecem
    ao final da cena.
    +2 PM: aumenta os PV temporários
    recebidos em +1d8.
    +5 PM: muda o alvo para área: esfera
    com 6m de raio centrada em você
    e a resistência para Fortitude reduz à
    metade. Em vez do normal, você suga
    energia das criaturas vivas na área,
    causando 1d8 pontos de dano de trevas
    e recebendo PV temporários iguais
    ao dano total causado. Os PV temporários
    desaparecem ao final da cena. Requer
    2º círculo.",
    },
    {
    circulo: 2,
    nome: "Augúrio",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Instantânea",
    escola: "Advinhação",
    descricao: "Esta magia diz se uma ação que você
    tomará em breve — no máximo uma
    hora no futuro — trará resultados bons
    ou ruins. O mestre rola 1d6 em segredo;
    com um resultado de 2 a 6, a magia
    funciona e você recebe uma das seguintes
    respostas: “felicidade” (a ação
    trará bons resultados); “miséria” (a
    ação trará maus resultados); “felicidade
    e miséria” (para ambos) ou “nada”
    (para ações que não trarão resultados
    bons ou ruins).
    Com um resultado 1, a magia falha
    e oferece o resultado “nada”. Não há
    como saber se esse resultado foi dado
    porque a magia falhou ou não. Lançar
    esta magia múltiplas vezes sobre
    o mesmo assunto gera sempre o primeiro
    resultado.
    Por exemplo, se o grupo está prestes
    a entrar em uma câmara, o augúrio
    dirá “felicidade” se a câmara contém
    um tesouro desprotegido, “miséria”
    se contém um monstro, “felicidade e
    miséria” se houver um tesouro e um
    monstro ou “nada” se a câmara estiver
    vazia.
    +3 PM: muda a execução para 1 minuto.
    Em vez do normal, você pode consultar
    uma divindade, fazendo uma
    pergunta sobre um evento que acontecerá
    até um dia no futuro. O mestre
    rola a chance de falha; com um resultado
    de 2 a 6, você recebe uma resposta,
    desde uma simples frase até uma
    profecia ou enigma. Em geral, este
    uso sempre oferece pistas, indicando
    um caminho a tomar para descobrir a
    resposta que se procura. Numa falha
    você não recebe resposta alguma. Requer
    3º círculo.
    +7 PM: muda a execução para 10 minutos
    e a duração para 1 minuto. Em
    vez do normal, você consulta uma divindade,
    podendo fazer uma pergunta
    por rodada, desde que ela possa
    ser respondida com “sim”, “não” ou
    “não sei” (embora poderosos, os deuses
    não são oniscientes). O mestre rola
    a chance de falha para cada pergunta.
    Em caso de falha, a resposta também é
    “não sei”. Requer 4º círculo.
    +7 PM: o mestre rola 1d12; a magia só
    falha em um resultado 1.
    +12 PM: o mestre rola 1d20; a magia
    só falha em um resultado 1.",
    },
    {
    circulo: 2,
    nome: "Sussuros Insanos",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 humanoide",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Você murmura palavras desconexas
    que afetam a mente do alvo. O alvo
    fica confuso.
    +2 PM: aumenta o número de alvos
    em +1.
    +3 PM: muda o alvo para 1 criatura.
    +12 PM: muda o alvo para criaturas
    escolhidas. Requer 5º círculo.",
    },
    {
    circulo: 2,
    nome: "Campo de Força",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Esta magia cria uma película protetora
    sobre você. Você recebe 30 PV temporários,
    mas apenas contra dano de corte,
    impacto ou perfuração.
    +1 PM: muda a execução para reação
    e a duração para instantânea. Em vez
    do normal, você recebe resistência 30
    contra o próximo dano que sofrer até o
    fim do turno atual.
    +1 PM: aumenta os PV temporários
    em +5 ou a resistência a dano em +10.
    +7 PM: muda o alcance para curto e
    o alvo para 1 criatura ou objeto Enorme
    ou menor. Em vez do normal, cria
    uma esfera imóvel e tremeluzente com
    o tamanho do alvo e centrada nele. Nenhuma
    criatura, objeto ou efeito de
    dano pode passar pela esfera, embora
    criaturas possam respirar normalmente.
    Criaturas na área podem fazer
    um teste de Reflexos para evitar serem
    aprisionadas. Requer 4º círculo.
    +9 PM: como o aprimoramento acima,
    mas também muda a duração para
    sustentada. Tudo dentro da esfera fica
    praticamente sem peso. Uma vez por
    rodada, você pode gastar uma ação livre
    para flutuar a esfera e seu conteúdo
    para qualquer local dentro de alcance
    longo. Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Dissipar Magia",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Abjuração",
    descricao: "Você dissipa outras magias que estejam
    ativas, como se sua duração tivesse
    acabado. Note que efeitos de magias
    instantâneas não podem ser dissipados
    (não se pode dissipar uma Bola de Fogo
    ou Relâmpago depois que já causaram
    dano...). Se lançar essa magia em uma
    criatura ou área, faça um teste de Misticismo;
    você anula as magias com CD
    igual ou menor que o resultado do teste.
    Se lançada contra um item mágico, o
    transforma em um item mundano por
    1d6 rodadas (sem teste de resistência).
    +12 PM: muda a área para esfera com
    9m de raio. Em vez do normal, cria um
    efeito de disjunção. Todas as magias na
    área são automaticamente dissipadas e
    todos os itens mágicos na área, exceto
    aqueles que você estiver carregando,
    viram itens mundanos (com direito
    a um teste de resistência para evitar
    esse efeito). Requer 5º círculo.",
    },
    {
    circulo: 2,
    nome: "Refúgio",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "Domo com 6m de raio",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Esta magia cria um domo imóvel e
    quase opaco por fora, mas transparente
    pelo lado de dentro. Ele protege
    contra calor, frio e forças pequenas,
    mas não contra qualquer coisa capaz
    de causar dano. Assim, o domo protege
    contra neve e vento comuns, mas
    não contra uma flecha ou Bola de Fogo.
    Porém, como o domo é quase opaco,
    qualquer criatura dentro dele tem camuflagem
    total contra ataques vindos
    de fora. Criaturas podem entrar e sair
    do domo livremente. Descansar dentro
    do Refúgio concede recuperação normal
    de PV e PM.
    +1 PM: além do normal, os limites do
    domo são envoltos por uma fumaça escura
    e espessa, que impede criaturas do
    lado de fora de enxergar ou ouvir o que
    está dentro. Criaturas do lado de dentro
    enxergam e ouvem normalmente o que
    está do lado de fora. A fumaça também
    bloqueia magias de adivinhação.
    +3 PM: em vez do normal, cria uma
    cabana que comporta até 10 criaturas
    Médias. Descansar nesse espaço concede
    recuperação confortável (recupera
    PV e PM igual ao dobro do nível).
    Para todos os efeitos é uma cabana
    normal, com paredes de madeira, telhado,
    uma porta, duas janelas e alguma
    mobília (camas, uma mesa com
    bancos e uma lareira). A porta e as janelas
    têm 15 PV, RD 5 e são protegidas
    por um efeito idêntico à magia Tranca
    Arcana. As paredes têm 200 PV e RD 5.
    +3 PM: em vez do normal, cria um espaço
    extradimensional, similar a uma
    caverna vazia e escura, que comporta
    até 10 criaturas Médias. A entrada
    para o espaço precisa estar desenhada
    em um objeto fixo como uma grande
    pedra ou árvore. Qualquer criatura que
    atravesse a entrada consegue entrar
    no espaço. Nenhum efeito a partir do
    mundo real afeta o espaço e vice-versa,
    mas aqueles que estiverem dentro
    podem observar o mundo real como
    se uma janela de 1m estivesse centrada
    na entrada. Qualquer coisa que esteja
    no espaço extradimensional surge
    no mundo real na área vazia mais próxima
    da entrada quando a duração da
    magia acaba. Requer 3º círculo.
    +9 PM: em vez do normal, cria uma
    mansão extradimensional que comporta
    até 100 criaturas Médias, com
    quartos luxuosos, comida e bebida e
    dez servos fantasmagóricos (como na
    magia Servos Invisíveis). Descansar na
    mansão concede recuperação luxuosa
    (recupera PV e PM igual ao triplo
    do nível). A mansão tem uma única
    entrada, uma porta feita de luz.
    Você pode deixá-la visível ou invisível
    como uma ação livre e apenas criaturas
    escolhidas por você podem passar.
    Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Runa de Proteção",
    execucao: "Completa",
    alcance: "Toque",
    alvo: "1 objeto ou passagem de até 6m de largura",
    duracao: "Permanente ou até descarregar",
    escola: "Abjuração",
    descricao: "Esta magia protege um objeto que possa
    ser aberto ou uma passagem de até
    6m de largura. Quando uma criatura
    abre o objeto ou passa pela passagem,
    a runa explode, causando 6d6 pontos
    de dano em todos os alvos a até 3m. A
    criatura que ativa a runa não tem direito
    a teste de resistência; outras criaturas
    na área têm direito a um teste de
    Reflexos para reduzir o dano à metade.
    Quando lança a magia, você escolhe o
    tipo de dano, entre ácido, eletricidade,
    fogo, frio, luz ou trevas.
    Você pode determinar que a runa se
    ative apenas em condições específicas
    — por exemplo, apenas por goblins ou
    apenas por mortos-vivos. Você também
    pode criar uma palavra mágica
    que impeça a runa de se ativar. Um personagem pode encontrar a runa
    com um teste de Investigação e desarmá-
    la com um teste de Ladinagem
    (ambos CD 28).
    Componente material: pó de diamante no
    valor de T$ 200, com o qual o conjurador
    desenha a runa, que brilha por alguns
    instantes e depois se torna praticamente
    invisível.
    +1 PM: aumenta o dano em +2d6.
    +1 PM: muda o alvo para 1 objeto que
    possa ser lido, como um livro, pergaminho
    ou mapa. A runa explode quando o
    objeto é lido. O objeto também sofre o
    dano (possivelmente sendo destruído).
    +1 PM: este aprimoramento exige que
    você lance uma magia de até 2º círculo
    como parte da execução da Runa de
    Proteção. Quando a runa é ativada, em
    vez do efeito normal, lança esta magia
    sobre a criatura que o ativou (se for
    uma magia de área, a área é centrada
    na criatura).
    +3 PM: como o aprimoramento acima,
    mas além de lançar a magia, a runa
    também causa o dano do efeito normal.
    Você define a ordem que os efeitos
    acontecem.",
    },
    {
    circulo: 2,
    nome: "Ligação Telepática",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "2 criaturas voluntárias",
    duracao: "1 dia",
    escola: "Advinhação",
    descricao: "Você cria um elo mental entre duas
    criaturas com Inteligência 3 ou maior
    (você pode ser uma delas). As criaturas
    podem se comunicar independente
    de idioma ou distância, mas não em
    mundos diferentes.
    +2 PM: aumenta o número de alvos
    em +1.
    +3 PM: muda o alvo para 1 criatura.
    Em vez do normal, você cria um elo
    mental que permite que você veja e
    ouça pelos sentidos da criatura, se gastar
    uma ação de movimento. Uma criatura
    involuntária pode fazer um teste
    de Vontade para suprimir a magia por
    uma hora. Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Localização",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Círculo com 90m de raio",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Esta magia pode encontrar uma criatura
    ou objeto a sua escolha. Você
    pode pensar em termos gerais (“um
    elfo”, “algo de metal”) ou específicos
    (“Gwen, a elfa”, “uma espada longa”).
    A magia indica a direção e distância
    da criatura ou objeto mais próximo
    desse tipo, caso esteja ao alcance.
    Você pode movimentar-se para continuar
    procurando. Procurar algo muito
    específico (“a espada longa encantada
    do Barão Rulyn”) exige que você
    tenha em mente uma imagem precisa
    do objeto; caso a imagem não seja
    muito próxima da verdade, a magia falha,
    mas você gasta os PM mesmo assim.
    Esta magia pode ser bloqueada
    por uma fina camada de chumbo.
    Truque: muda a área para alvo você.
    Em vez do normal, você sabe onde fica
    o norte e recebe +5 em testes de Sobrevivência
    para se orientar.
    +5 PM: aumenta a área em um fator
    de 10 (90m para 900m, 900m para
    9km e assim por diante).",
    },
    {
    circulo: 2,
    nome: "Mapear",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "Superfície ou objeto plano",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Uma fagulha percorre a superfície
    afetada, queimando-a enquanto esboça
    um mapa da região onde o conjurador
    está. Se você conhece o lugar,
    o mapa será completo. Caso contrário,
    apresentará apenas um esboço
    geral, além de um ponto de referência
    (para possibilitar localização)
    e um lugar de interesse, ambos definidos
    pelo mestre. A região representada
    no mapa tem tamanho máximo
    de um quadrado de 10km de lado.
    Caso você esteja dentro de uma construção,
    o mapa mostrará o andar no
    qual você se encontra.
    +3 PM: muda o alvo para 1 criatura e
    a duração para 1 hora. Em vez do normal,
    a criatura tocada descobre o caminho
    mais direto para entrar ou sair
    de um lugar. Assim, a magia pode ser
    usada para descobrir a rota até o relicário
    de uma catedral ou a saída mais
    próxima de uma masmorra (mas não
    para encontrar a localização de uma
    criatura ou objeto; a magia funciona
    apenas em relação a lugares). Caso
    a criatura demore mais de uma hora
    para percorrer o caminho, o conhecimento
    se perde.",
    },
    {
    circulo: 2,
    nome: "Amarras Etéreas",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Três laços de energia surgem do chão
    e se enroscam no alvo, deixando-o
    agarrado. A vítima pode tentar se livrar,
    gastando uma ação padrão para
    fazer um teste de Atletismo (CD igual
    à da magia). Se passar, destrói um
    laço, mais um laço adicional para cada
    2 pontos pelos quais superou a CD.
    Os laços também podem ser atacados
    e destruídos: cada um tem Defesa 10,
    10 PV, RD 5 e imunidade a dano mágico.
    Se todos os laços forem destruídos,
    a magia é dissipada. Por serem
    feitos de energia, os laços afetam criaturas
    incorpóreas.
    +2 PM: aumenta o número de alvos
    em +1.
    +2 PM: aumenta o número de laços
    em um alvo a sua escolha em +1.
    +3 PM: em vez do normal, cada laço
    é destruído automaticamente com um
    único ataque bem-sucedido; porém,
    cada laço destruído libera um choque
    de energia que causa 1d6+1 pontos de
    dano de essência na criatura amarrada.
    Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Montaria Arcana",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "",
    duracao: "1 dia",
    escola: "Convocação",
    descricao: "Esta magia convoca um cavalo de batalha
    que serve como um aliado montaria
    veterano. Sua aparência é de um
    animal negro com crina e cauda cinzentas
    e cascos feitos de fumaça, mas
    você pode mudá-la se quiser. Além dos
    benefícios normais, a Montaria Arcana
    pode atravessar terreno difícil sem redução
    em seu deslocamento.
    +1 PM: além do normal, criaturas do
    tipo animal em alcance curto da montaria
    devem fazer um teste de Vontade.
    Se passarem, ficam abaladas pela cena;
    se falharem, ficam apavoradas por 1d4
    rodadas, depois abaladas pela cena.
    +3 PM: muda a duração para permanente
    e adiciona sacrifício de 1 PM.
    +3 PM: aumenta o tamanho da montaria
    em uma categoria. Isso também
    aumenta o número de criaturas que ela
    pode carregar — duas para uma criatura
    Enorme, seis para Colossal. Uma
    única criatura controla a montaria; as
    outras apenas são deslocadas.
    +3 PM: muda a criatura para um aliado
    montaria mestre. Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Salto Dimensional",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Você",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Esta magia transporta você para outro
    lugar dentro do alcance. Você não precisa
    perceber nem ter linha de efeito
    ao seu destino, podendo simplesmente
    imaginá-lo. Por exemplo, pode se
    transportar 3m adiante para ultrapassar
    uma porta fechada. Uma vez transportadas,
    criaturas não podem agir até
    a rodada seguinte. Esta magia não permite
    que você apareça dentro de um
    corpo sólido; se o ponto de chegada
    não tem espaço livre, você ressurge na
    área vazia mais próxima.
    +1 PM: muda o alcance para médio.
    +1 PM: muda o alvo para você e uma
    criatura voluntária. Você pode escolher
    este aprimoramento mais vezes
    para aumentar o número de alvos adicionais
    em +1, mas deve estar tocando
    todos os alvos.
    +2 PM: muda a execução para reação.
    Em vez do normal, você salta para um
    espaço adjacente (1,5m), recebendo
    +5 na Defesa e em testes de Reflexos
    contra um ataque ou efeito que esteja
    prestes a atingi-lo.
    +3 PM: muda o alcance para longo.",
    },
    {
    circulo: 2,
    nome: "Servos Invisíveis",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "Criaturas Conjuradas",
    duracao: "1 cena",
    escola: "Convocação",
    descricao: "Você cria até três servos invisíveis e
    silenciosos, capazes de realizar tarefas
    simples como apanhar lenha, colher
    frutos, varrer o chão ou alimentar
    um cavalo. Os servos podem ser usados
    para manter arrumada e organizada
    uma mansão ou pequena torre ou
    para preparar um acampamento nos
    ermos para você e seus aliados (veja a
    perícia Sobrevivência, na página 123).
    Eles também podem ajudá-lo em tarefas
    mais complexas, como fazer uma
    pesquisa ou preparar uma poção, mas
    isso consome sua energia mágica. Você
    pode “gastar” um servo para receber
    um bônus não cumulativo de +2 em
    um teste de perícia (exceto testes de
    ataque e resistência). Os servos não
    são criaturas reais; não podem lutar,
    nem resistir a qualquer dano ou efeito
    que exija um teste de resistência ou
    teste oposto — falharão automaticamente
    no teste e serão destruídos.
    +2 PM: aumenta o número de servos
    conjurados em 1.
    +3 PM: você pode comandar os servos
    para realizar uma única tarefa no seu
    lugar. Em termos de jogo, eles passam
    automaticamente em um teste de perícia
    com CD máxima igual ao seu nível,
    +2 para cada servo conjurado. O tempo
    necessário para realizar a tarefa é o
    tempo do uso da perícia em questão.
    Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Desespero Esmagador",
    execucao: "Padrão",
    alcance: "6m",
    alvo: "Cone",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Humanoides na área são acometidos
    de grande tristeza, adquirindo as condições
    fraco e frustrado. Se passarem
    na resistência, adquirem essas condições
    por uma rodada.
    +2 PM: em vez do normal, as condições
    adquiridas são debilitado e esmorecido.
    +3 PM: em vez do normal, afeta qualquer
    tipo de criatura.
    +3 PM: além do normal, criaturas que
    falhem na resistência ficam aos prantos
    (em termos de jogo, adquirem a
    condição pasmo) por 1 rodada. Requer
    3º círculo.",
    },
    {
    circulo: 2,
    nome: "Marca da Obediência",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Você toca uma criatura, gravando uma
    marca mística no corpo dela enquanto
    profere uma ordem, como “não ataque
    a mim ou meus aliados”, “siga-me” ou
    “não saia desta sala”. A criatura deve
    seguir essa ordem, gastando todas as
    ações de seu turno para isso. A ordem
    não pode ser genérica demais (como
    “ajude-me”, por exemplo), nem forçar
    o alvo a atos suicidas. A cada rodada,
    o alvo pode fazer um teste de Vontade.
    Se passar, a magia é dissipada.
    +3 PM: muda a duração para 1 dia. Se
    não estiver em combate, a criatura só
    pode fazer o teste de Vontade a cada
    hora. Requer 3º círculo.
    +3 PM: sempre que o alvo fizer o teste
    de Vontade e falhar, a marca causa
    3d6 pontos de dano mental. Requer 3º
    círculo.",
    },
    {
    circulo: 2,
    nome: "Bola de Fogo",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Esfera com 6m de raio",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta famosa magia de ataque cria uma
    poderosa explosão, causando 6d6 pontos
    de dano de fogo em todas as criaturas
    e objetos livres na área.
    +2 PM: aumenta o dano em +2d6.
    +2 PM: muda a área para efeito de esfera
    flamejante com tamanho Médio e
    a duração para cena. Em vez do normal,
    cria uma esfera flamejante com
    1,5m de diâmetro que causa 3d6 pontos
    de dano a qualquer criatura no
    mesmo espaço. Você pode gastar uma
    ação de movimento para fazer a esfera
    voar 9m em qualquer direção. Ela é
    imune a dano, mas pode ser apagada
    com água. Uma criatura só pode sofrer
    dano da esfera uma vez por rodada.
    +3 PM: muda a duração para 1 dia ou
    até ser descarregada. Em vez do normal,
    você cria uma pequena pedra flamejante,
    que pode detonar como uma
    reação, descarregando a magia. A pedra
    pode ser usada como uma arma de
    arremesso com alcance curto. Uma vez
    detonada, causa o dano da magia numa
    área de esfera de 6m de raio.",
    },
    {
    circulo: 2,
    nome: "Flecha Ácida",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura ou objeto",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você dispara um projétil que causa 4d6
    pontos de dano de ácido. Se falhar no
    teste de resistência, o alvo também fica
    coberto por um muco corrosivo durante
    duas rodadas, sofrendo mais 2d6 de
    dano de ácido no início de seus turnos.
    Se lançada contra um objeto livre (que
    não esteja em posse de uma criatura)
    a magia causa dano dobrado e ignora a
    RD do objeto.
    +1 PM: além do normal, se o alvo coberto
    pelo muco ácido estiver usando
    armadura ou escudo, o item é corroído.
    Isso reduz o bônus na Defesa do
    item em 1 ponto permanentemente. O
    item pode ser consertado, restaurando
    seu bônus (veja a perícia Ofício, na página
    121).
    +2 PM: aumenta a redução na Defesa
    em +1.
    +2 PM: aumenta o dano inicial e o
    dano por rodada em +1d6.",
    },
    {
    circulo: 2,
    nome: "Relâmpago",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Linha",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você dispara um poderoso raio que
    causa 6d6 pontos de dano de eletricidade
    em todas as criaturas e objetos livres
    na área.
    +2 PM: aumenta o dano em +2d6.
    +3 PM: muda a área para alvo (criaturas
    escolhidas). Em vez do normal,
    você dispara vários relâmpagos, um
    para cada alvo escolhido, causando 6d6
    pontos de dano de eletricidade. Requer
    3º círculo.",
    },
    {
    circulo: 2,
    nome: "Sopro das Uivantes",
    execucao: "Padrão",
    alcance: "6m",
    alvo: "Cone",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você sopra ar gélido que causa 4d6
    pontos de dano de frio (Fortitude reduz
    à metade). Criaturas de tamanho
    Médio ou menor que falhem na resistência
    são empurradas 6m na direção
    oposta. Se houver uma parede ou outro
    objeto sólido (mas não uma criatura)
    no caminho, a criatura para de se
    mover, mas sofre 1d6 pontos de dano
    de impacto.
    +2 PM: aumenta o dano de frio em
    +2d6.
    +2 PM: além do normal, criaturas
    que falhem no teste de Fortitude ficam
    caídas.
    +3 PM: aumenta o tamanho máximo
    das criaturas afetadas em uma categoria.
    Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Aparência Perfeita",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Esta magia lhe concede um rosto idealizado,
    porte físico garboso, voz melodiosa
    e olhar sedutor, deixando-o mais
    atraente e confiável. Enquanto a magia
    estiver ativa, seu Carisma torna-se 20
    (ou recebe um bônus de +4, caso seja
    20 ou maior) e você recebe +5 nos testes
    de Diplomacia e Enganação. Quando
    a magia acaba, quaisquer observadores
    percebem a mudança e tendem a
    suspeitar de você. Da mesma maneira,
    pessoas que o viram sob o efeito da magia
    sentirão que “algo está errado” ao
    vê-lo em condições normais. Quando a
    cena acabar, você pode gastar os PM da
    magia novamente como uma ação livre
    para mantê-la ativa. Este efeito não fornece
    PV ou PM adicionais.
    +1 PM: muda o alcance para toque e o
    alvo para 1 humanoide.",
    },
    {
    circulo: 2,
    nome: "Camuflagem Ilusória",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "O alvo fica com sua imagem nublada,
    como se vista através de um líquido,
    recebendo os efeitos de camuflagem.
    +3 PM: a imagem do alvo fica mais distorcida,
    oferecendo camuflagem total.
    +7 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas. Requer
    4º círculo.",
    },
    {
    circulo: 2,
    nome: "Esculpir Sons",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura ou objeto",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Esta magia altera os sons emitidos pelo
    alvo. Ela não é capaz de criar sons, mas
    pode omiti-los (como fazer uma carroça
    ficar silenciosa) ou transformá-los
    (como fazer uma pessoa ficar com voz
    de passarinho). Você não pode criar sons
    que não conhece (não pode fazer uma
    criatura falar num idioma que não conheça).
    Uma vez que escolha a alteração,
    ela não pode ser mudada. Um conjurador
    que tenha a voz modificada drasticamente
    não poderá lançar magias.
    +2 PM: aumenta o número de alvos
    em +1. Todas as criaturas e objetos devem
    ser afetadas da mesma forma.",
    },
    {
    circulo: 2,
    nome: "Invisibilidade",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Ilusão",
    descricao: "O alvo fica invisível, incluindo seu
    equipamento. Ele recebe camuflagem
    total e +20 em testes de Furtividade.
    Como o normal, criaturas que
    não possam vê-lo ficam desprevenidas
    contra seus ataques.
    A magia termina se o alvo faz um ataque
    ou usa uma habilidade hostil.
    Ações contra objetos livres não dissipam
    a Invisibilidade (você pode tocar ou
    apanhar objetos que não estejam sendo
    segurados por outras criaturas). Causar
    dano indiretamente — por exemplo,
    acendendo o pavio de um barril de
    pólvora que vai detonar mais tarde —
    não é considerado um ataque.
    Objetos soltos pelo alvo voltam a ser
    visíveis e objetos apanhados por ele ficam
    invisíveis. Uma luz transportada
    pelo alvo nunca fica invisível (mesmo
    que sua fonte seja). Qualquer parte
    de um item carregado que se estenda
    além de seu alcance corpo a corpo natural
    se torna visível.
    +1 PM: muda a execução para ação padrão,
    o alcance para toque e o alvo para
    1 criatura ou 1 objeto.
    +3 PM: muda a duração para cena. Requer
    3º círculo.
    +3 PM: muda a duração para sustentada.
    Em vez do normal, o alvo gera uma
    esfera de invisibilidade. O alvo e todas
    as criaturas a até 3m dele se tornam
    invisíveis, como no efeito normal da
    magia (ainda ficam visíveis caso façam
    uma ação hostial). A esfera se move
    juntamente com o alvo; qualquer coisa
    que saia da esfera fica visível. Requer
    3º círculo.
    +7 PM: muda a execução para ação padrão,
    o alcance para toque e o alvo para
    1 criatura. A magia não é dissipada
    caso o alvo faça um ataque ou use uma
    habilidade ofensiva. Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Conjurar Mortos-Vivos",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "6 mortos-vivos",
    duracao: "Sustentada",
    escola: "Necromancia",
    descricao: "Seis esqueletos de tamanho Médio feitos
    de energia negativa emergem do
    chão em espaços desocupados escolhidos
    por você dentro do alcance. Você
    pode usar uma ação de movimento
    para fazer os mortos-vivos andarem
    (eles têm deslocamento 9m) ou uma
    ação padrão para fazê-los causar dano
    a criaturas adjacentes (1d6+2 pontos
    de dano de trevas cada). Os esqueletos
    têm For 14, Des 14 e todos os outros
    atributos nulos; eles têm 1 PV, não
    têm valor de Defesa ou testes de resistência,
    falham automaticamente em
    qualquer teste oposto e são imunes a
    atordoamento, dano não letal, doença,
    encantamento, fadiga, frio, ilusão, paralisia,
    sono e veneno. Eles desapare�-
    cem quando são reduzidos a 0 PV ou
    no fim da cena. Os mortos-vivos não
    agem sem receber uma ordem. Usos
    criativos para criaturas invocadas fora
    de combate ficam a critério do mestre.
    +2 PM: aumenta o número de mortos-
    -vivos conjurados em +1.
    +3 PM: em vez de esqueletos, conjura
    carniçais. Requer 3º círculo.
    +7 PM: em vez de esqueletos, conjura
    sombras. Requer 4º círculo.
    Carniçal: como o esqueleto, mas tem
    For 16, Des 16, 12 PV e causa 1d8+3
    pontos de dano de trevas mais 1d8
    pontos de dano de veneno. Além disso,
    criaturas atingidas por um carniçal devem
    passar num teste de Fortitude (CD
    igual à da magia) ou ficam paralisadas
    por 1 rodada. Uma criatura que passe
    no teste de resistência fica imune à paralisia
    dos carniçais por 24 horas.
    Sombra: como o esqueleto, mas tem a
    habilidade incorpóreo, Des 18, 30 PV
    e causa 1d10 pontos de dano de trevas
    mais 1d10 pontos de dano de frio.
    Além disso, criaturas vivas atingidas
    por uma sombra devem passar num
    teste de Fortitude (CD igual à da magia)
    ou perdem 1d4 PM. Sombras perdem
    a habilidade incorpóreo quando
    expostas à luz do sol.",
    },
    {
    circulo: 2,
    nome: "Crânio Voador de Vladislav",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "Esta magia cria um crânio humano envolto
    em energia negativa, que causa
    4d8+4 pontos de dano de trevas quando
    atinge o alvo e se desfaz emitindo
    um som horrendo, podendo deixar
    abalados todos os inimigos num raio
    de 3m. Passar no teste de resistência
    diminui o dano pela metade e evita a
    condição abalado. Alvos que já estiverem
    abalados e falharem no teste ficam
    apavorados por 1d4 rodadas.
    +1 PM: aumenta o dano em +1d8+1.
    +2 PM: aumenta o número de alvos
    em +1.",
    },
    {
    circulo: 2,
    nome: "Toque Vampírico",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "Sua mão brilha com energia sombria,
    causando 6d6 pontos de dano de trevas.
    Você recupera pontos de vida
    iguais à metade do dano causado (se
    causou algum dano).
    +1 PM: como parte da execução da
    magia, você pode fazer um ataque corpo
    a corpo contra o alvo. Se acertar,
    causa o dano do ataque e da magia, e
    recupera pontos de vida iguais à metade
    do dano da magia.
    +2 PM: aumenta o dano em +2d6.
    +2 PM: muda o alcance para pessoal,
    o alvo para você e a duração para cena.
    Em vez do normal, a cada rodada você
    pode gastar uma ação padrão para tocar
    1 criatura e causar 3d6 pontos de
    dano. Você recupera pontos de vida
    iguais à metade do dano causado. Requer
    3º círculo.",
    },
    {
    circulo: 2,
    nome: "Alterar Tamanho",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 objeto",
    duracao: "1 dia",
    escola: "Transmutação",
    descricao: "Esta magia aumenta ou diminui o
    tamanho de um item mundano em
    até três categorias (um objeto Enorme
    vira Pequeno, por exemplo). Você
    também pode mudar a consistência
    do item, deixando-o rígido como pedra
    ou flexível como seda (isso não altera
    sua RD ou PV, apenas suas propriedades
    físicas).
    +1 PM: aumenta o número de alvos
    em +1.
    +2 PM: muda o alcance para toque e o
    alvo para 1 criatura. Em vez do normal,
    o alvo e seu equipamento aumentam
    de tamanho em uma categoria. O alvo
    também recebe Força +4. Um alvo involuntário
    pode fazer um teste de Fortitude
    para negar o efeito.
    +3 PM: muda o alcance para toque e
    o alvo para 1 criatura. Em vez do normal,
    o alvo e seu equipamento diminuem
    de tamanho em uma categoria.
    O alvo também recebe Destreza +4.
    Um alvo involuntário pode fazer um
    teste de Fortitude para negar o efeito.
    Requer 3º círculo.
    +7 PM: muda o alcance para toque,
    o alvo para 1 criatura, a duração para
    permanente e a resistência para Fortitude
    anula. Em vez do normal, se falhar
    na resistência o alvo e seu equipamento
    têm seu tamanho mudado para
    Minúsculo. O alvo também tem seu
    valor de Força reduzido a 1 e suas formas
    de deslocamento reduzidas a 3m.
    Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Metamorfose",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você muda sua aparência e forma — incluindo
    seu equipamento — para qualquer
    outra criatura, existente ou imaginada.
    Independentemente da forma
    escolhida, você recebe +20 em testes
    de Enganação para disfarce. Características
    não mencionadas não mudam.
    Se mudar para uma forma humanoide,
    pode mudar o tipo de dano físico de
    suas armas (se usa uma maça e transformá-
    la em espada longa, ela pode
    causar dano de corte, por exemplo).
    Se quiser, pode assumir uma forma
    humanoide com uma categoria de tamanho
    acima ou abaixo da sua; nesse
    caso aplique os modificadores em Furtividade
    e testes de manobra.
    Se mudar para outras formas, você
    pode escolher uma Forma Selvagem do
    druida (veja no Capítulo 1). Nesse
    caso você não pode atacar com suas armas,
    falar ou lançar magias até voltar
    ao normal, mas recebe uma ou mais armas
    naturais e os bônus da forma selvagem
    escolhida.
    +1 PM: a forma escolhida recebe uma
habilidade de sentidos entre faro, visão
na penumbra e visão no escuro.
+3 PM: a forma escolhida recebe percepção
às cegas. Requer 3º círculo.
+3 PM: muda o alcance para toque, o
alvo para 1 criatura e adiciona resistência
(Vontade anula).
+3 PM: muda o alcance para médio,
o alvo para 1 criatura e a resistência
para Vontade anula. Em vez do normal,
transforma o alvo em uma criatura
ou objeto inofensivo (ovelha,
sapo, galinha, pudim de ameixa etc.).
A criatura não pode atacar, falar e lançar
magias; seu deslocamento vira 3m
e sua Defesa vira 10. Suas outras características
não mudam. No início de
seus turnos, o alvo pode fazer um teste
de Vontade; se passar, retorna à sua
forma normal e a magia termina. Requer
3º círculo.
+5 PM: se mudar para formas não
humanoides, pode escolher uma Forma
Selvagem Aprimorada. Requer 3º
círculo.
+9 PM: se mudar para formas não humanoides,
pode escolher uma Forma
Selvagem Superior. Requer 4º círculo.
+12 PM: além do normal, no início
de seus turnos o alvo pode mudar de
forma novamente, como uma ação livre,
fazendo novas escolhas. Requer
5º círculo.",
    },
    {
    circulo: 2,
    nome: "Velocidade",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "O alvo pode realizar uma ação padrão
    ou de movimento adicional por turno.
    Esta ação não pode ser usada para lançar
    magias e ativar engenhocas.
    +7 PM: muda o alvo para criaturas escolhidas
    no alcance. Requer 4º círculo.
    +7 PM: muda o alcance para pessoal e
    o alvo para você. Você acelera sua mente,
    além de seu corpo. A ação adicional
    pode ser usada para lançar magias
    e ativar engenhocas. Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Círculo da Justiça",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "Cubo com 9m de lado",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Também conhecida como Lágrimas de
    Hyninn, esta magia é usada em tribunais
    e para proteger áreas sensíveis.
    Criaturas na área sofrem –10 em testes
    de Acrobacia, Enganação, Furtividade
    e Ladinagem e não podem mentir
    deliberadamente — mas podem tentar
    evitar perguntas que normalmente responderiam
    com uma mentira (sendo
    evasivas ou cometendo omissões, por
    exemplo). Uma criatura que passe na
    resistência tem as penalidades reduzidas
    para –5 e pode mentir.
    +1 PM: muda a execução para ação
    padrão, o alcance para pessoal, o alvo
    para você, a duração para cena e a resistência
    para nenhuma. Em vez do
    normal, qualquer criatura ou objeto
    invisível em alcance curto se torna visível.
    Isso não dissipa o efeito mágico;
    se sair do seu alcance, a criatura ou objeto
    voltam a ficar invisíveis.
    +3 PM: muda a penalidade nas perícias
    para –10 (se passar na resistência)
    e –20 (se falhar). Requer 4º círculo.
    +7 PM: muda a duração para permanente
    e adiciona componente material
    (balança de prata no valor de T$ 5.000).",
    },
    {
    circulo: 2,
    nome: "Vestimenta da Fé",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 traje, armadura ou escudo",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Você fortalece uma indumentária com
    o poder de sua fé. Isso aumenta o
    bônus de Defesa de uma armadura ou
    escudo em +2 (isso é uma melhoria no
    item, portanto é cumulativa com outras
    magias). No caso de um traje, ele
    passa a oferecer +2 na Defesa e continua
    contando como se você não estivesse
    usando armadura.
    +3 PM: o objeto também oferece o
    mesmo bônus em testes de resistência.
    Requer 3º círculo.
    +4 PM: aumenta o bônus em +1.
    +7 PM: o objeto também oferece resistência
    a dano 5. Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Condição",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Até 5 criaturas",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Pela duração da magia, você sabe a posição
    e condição (PV atuais, se estão sob
    efeito de magia...) das criaturas escolhidas.
    Depois de lançada, a distância entre
    você e os alvos não importa — a magia
    só deixa de detectar um alvo se ele
    morrer ou viajar para outro plano.
    +1 PM: aumenta o número de alvos
    em +1.
    +1 PM: aumenta a duração para 1 dia.",
    },
    {
    circulo: 2,
    nome: "Globo da Verdade de Gwen",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Cria um globo flutuante e intangível,
    com 50cm de diâmetro. O globo mostra
    uma cena vista até uma semana atrás
    por você ou por uma criatura que você
    toque ao lançar a magia (mediante uma
    pergunta; a criatura pode fazer um teste
    de Vontade para anular o efeito), permitindo
    que outras pessoas a vejam.
    +1 PM: o globo mostra uma cena vista
    até um mês atrás.
    +2 PM: como acima, até um ano atrás.
    +2 PM: ao lançar a magia, você pode
    tocar um cadáver. O globo mostra a última
    cena vista por essa criatura.
    +4 PM: muda o alcance para longo e o
    efeito para 10 globos. Todos mostram
    a mesma cena.",
    },
    {
    circulo: 2,
    nome: "Mente Divina",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Você traz inspiração divina à mente do
    alvo. Escolha entre Inteligência, Sabedoria
    ou Carisma. O alvo recebe +4 no
    atributo escolhido. Esse aumento não
    oferece PV, PM ou perícias adicionais.
    +3 PM: em vez do normal, o alvo recebe
    +4 nos três atributos mentais. Requer
    3º círculo.
    +7 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas.
    +7 PM: aumenta o bônus em +2. Requer
    4º círculo.",
    },
    {
    circulo: 2,
    nome: "Voz Divina",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Você pode conversar com criaturas de
    qualquer raça e tipo: animal, construto,
    espírito, humanoide, monstro ou
    morto-vivo. Pode fazer perguntas e entende
    suas respostas, mesmo sem um
    idioma em comum ou se a criatura não
    for capaz de falar, mas respeitando os
    limites da Inteligência dela. A atitude
    dessas criaturas não é alterada, mas
    você pode usar a perícia Diplomacia
    para tentar mudar sua atitude.
    +1 PM: você concede um pouco de
    vida a um cadáver, suficiente para que
    ele responda a suas perguntas. O conhecimento
    do corpo é limitado ao que
    ele tinha enquanto vivo e suas respostas
    são curtas e enigmáticas. Um corpo
    só pode ser alvo desta magia uma
    vez. Ela também não funciona em um
    corpo cuja cabeça tenha sido destruída.
    +1 PM: você pode falar com plantas
    (normais ou monstruosas) e rochas.
    Plantas e rochas têm percepção limitada
    de seus arredores e normalmente
    fornecem respostas simplórias.",
    },
    {
    circulo: 2,
    nome: "Enxame de Pestes",
    execucao: "Completa",
    alcance: "Médio",
    alvo: "1 enxame Médio (quadrado de 1,5m)",
    duracao: "Sustentada",
    escola: "Convocação",
    descricao: "Você conjura um enxame de criaturas
    a sua escolha, como besouros, gafanhotos,
    mosquitos, ratos, morcegos
    ou serpentes, que surge em um ponto
    a sua escolha. O enxame pode passar
    pelo espaço de outras criaturas e não
    impede que outras criaturas entrem
    no espaço dele. No final de cada um
    de seus turnos, o enxame causa 2d12
    pontos de dano de veneno a qualquer
    criatura em seu espaço (Fortitude reduz
    à metade). Você pode gastar uma
    ação de movimento para mover o enxame
    com deslocamento de 12m.
    +2 PM: aumenta o dano em +1d12.
    +3 PM: muda a resistência para Reflexos
    reduz à metade e o enxame para
    criaturas maiores, como gatos, guaxinins,
    compsognatos ou kobolds. Ele
    causa 3d12 pontos de dano (a sua escolha
    entre corte, impacto ou perfuração).
    O resto da magia segue normal.
    +5 PM: aumenta o número de enxames
    em +1. Eles não podem ocupar o
    mesmo espaço. Requer 3º círculo.
    +7 PM: muda a resistência para Reflexos
    reduz à metade e o enxame para
    criaturas elementais. Ele causa 5d12
    pontos do dano (a sua escolha entre
    ácido, eletricidade, fogo ou frio). O
    resto da magia segue normal. Requer
    4º círculo.",
    },
    {
    circulo: 2,
    nome: "Soco de Arsenal",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Ninguém sabe se Mestre Arsenal foi
    realmente o criador desta magia —
    mas ele foi o primeiro a utilizá-la. Você
    fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6
    + mod. Força pontos de dano de impacto.
    A vítima é empurrada 3m na direção
    oposta à sua (ou 1,5m se passar
    na resistência).
    +1 PM: muda o alcance para pessoal,
    o alvo para você, a duração para cena
    e a resistência para nenhuma. Em vez
    do normal, seus ataques corpo a corpo
    passam a acertar inimigos distantes.
    Seu alcance natural aumenta em 3m;
    uma criatura Média pode atacar adversários
    a até 4,5m, por exemplo.
    +2 PM: aumenta o dano em +1d6.
    +4 PM: aumenta a distância do efeito
    de empurrar em +3m.
    +5 PM: muda o tipo do dano para
    essência.",
    },
    {
    circulo: 2,
    nome: "Aliado Animal",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 animal prestativo",
    duracao: "1 dia",
    escola: "Encantamento",
    descricao: "Você cria um vínculo mental com um
    animal prestativo em relação a você.
    O Aliado Animal obedece a você no
    melhor de suas capacidades, mesmo
    que isso arrisque a vida dele. Ele funciona
    como um aliado veterano, de
    um tipo a sua escolha entre ajudante,
    combatente, fortão, guardião, montaria
    ou perseguidor.
    +1 PM: muda o alvo para 1 animal Minúsculo
    e a duração para 1 semana. Em
    vez do normal, o animal se desloca no
    melhor de suas capacidades até um local
    designado por você — em geral, para
    levar um item, carta ou similar. Quando
    o animal chega ao destino, fica esperando
    até o fim da magia, permitindo apenas
    que uma ou mais criaturas escolhidas
    por você se aproximem e peguem o
    que ele estiver carregando.
    +7 PM: muda o aliado para mestre.
    Requer 3º círculo.
    +12 PM: muda o alvo para 2 animais
    prestativos. Cada animal funciona
    como um aliado de um tipo diferente,
    e você pode receber a ajuda de ambos
    (mas ainda precisa seguir o limite de
    aliados de acordo com o seu nível de
    personagem). Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Oração",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Todas as criaturas (veja texto)",
    duracao: "Sustentada",
    escola: "Encantamento",
    descricao: "Todos os seus aliados no alcance recebem
    +2 em testes de perícia e rolagens
    de dano, e todos os seus inimigos no
    alcance sofrem –2 em testes de perícia
    e rolagens de dano. Esses bônus e penalidades
    são cumulativos com outras
    magias.
    +2 PM: aumenta os bônus em +1, limitado
    pelo círculo máximo de magia
    que você pode lançar.
    +2 PM: aumenta as penalidades em
    –1, limitado pelo círculo máximo de
    magia que você pode lançar.
    +7 PM: muda o alcance para médio.
    Requer 3º círculo.
    +12 PM: muda a duração para cena.
    Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Controlar Fogo",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Ver texto",
    duracao: "Cena",
    escola: "Evocação",
    descricao: "Você pode criar, moldar, mover ou extinguir
    chamas e emanações de calor. Ao
    lançar a magia, escolha um dos efeitos.
    Chamejar: o alvo é armas escolhidas.
    Elas causam +1d6 de dano de fogo.
    Também afeta armas naturais e ataques
    desarmados.
    Esquentar: o alvo é 1 objeto, que começa
    a esquentar. Ele sofre 1d6 pontos
    de dano de fogo por rodada e causa o
    mesmo dano a qualquer criatura que
    o esteja segurando ou vestindo. A critério
    do mestre, o objeto ou a criatura
    vestindo-o também podem pegar fogo.
    Uma criatura pode gastar uma ação
    completa para resfriar o objeto (jogando
    areia ou se jogando numa fonte de
    água próxima, por exemplo) e cancelar
    o efeito da magia.
    Extinguir: o alvo é 1 chama de tamanho
    Grande ou menor, que é apagada. Isso
    cria uma nuvem de fumaça que ocupa
    uma esfera de 3m de raio centrada
    onde estava a chama. Dentro da fumaça,
    criaturas têm camuflagem.
    Modelar: o alvo é 1 chama de tamanho
    Grande ou menor. A cada rodada, você
    pode gastar uma ação livre para movimentá-
    la 9m em qualquer direção. Se
    atravessar o espaço ocupado por uma
    criatura, causa 2d6 pontos de dano de
    fogo. Uma criatura só pode receber dano
    dessa maneira uma vez por rodada.
    +1 PM: muda a duração para sustentada
    e a resistência para Reflexos reduz
    à metade. Em vez do normal, você
    deve escolher o seguinte efeito. Labaredas:
    a cada rodada, você pode gastar
    uma ação de movimento para projetar
    uma labareda, acertando um alvo
    em alcance curto a partir da chama. O
    alvo sofre 4d6 pontos de dano de fogo
    (Reflexos reduz à metade).
    +2 PM: aumenta o dano em +1d6.
    +3 PM: muda o alvo para 1 criatura
    composta principalmente por fogo,
    lava ou magma (como um elemental
    do fogo) e a resistência para Fortitude
    parcial. Em vez do normal, se a
    criatura falhar no teste de resistência,
    é reduzida a 0 PV. Se passar, sofre 5d6
    pontos de dano.",
    },
    {
    circulo: 2,
    nome: "Purificação",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Seu toque purifica a criatura tocada.
    Esta magia remove uma das seguintes
    condições: abalado, apavorado, alquebrado,
    atordoado, cego, confuso, debilitado,
    enjoado, envenenado, esmorecido,
    exausto, fascinado, fatigado,
    fraco, frustrado, lento, ofuscado, paralisado,
    pasmo ou surdo.
    +2 PM: também cura todo o dano causado
    por venenos.
    +2 PM: em vez de uma, remove todas
    as condições listadas.
    +3 PM: também permite que o alvo
    solte qualquer item amaldiçoado que
    esteja segurando (mas não remove a
    maldição do item em si).
    +7 PM: também dissipa magias e efeitos
    prejudiciais de encantamento, necromancia
    e transmutação afetando o
    alvo. Requer 3º círculo.",
    },
    {
    circulo: 2,
    nome: "Raio Solar",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Linha",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você canaliza uma poderosa rajada de
    energia positiva que ilumina o campo
    de batalha. Criaturas na área sofrem
    4d8 pontos de dano de luz (ou 4d12,
    se forem mortos-vivos) e ficam ofuscadas
    por uma rodada. Se passarem na
    resistência, sofrem metade do dano e
    não ficam ofuscadas.
    Truque: muda a duração para cena e
    a resistência para nenhuma. Em vez do
    normal, cria um facho de luz que ilumina
    a área da magia. Uma vez por rodada,
    você pode mudar a direção do facho
    como uma ação livre.
    +2 PM: aumenta o dano ou cura em
    +1d8 (ou +1d12 em mortos-vivos).
    +3 PM: em vez do normal, criaturas
    vivas a sua escolha na área curam 4d8
    pontos de vida; o restante sofre o dano
    normalmente.
    +3 PM: criaturas que falhem na resistência
    ficam cegas por 1d4 rodadas.",
    },
    {
    circulo: 2,
    nome: "Tempestade Divina",
    execucao: "Completa",
    alcance: "Longo",
    alvo: "Cilindro com 9m de raio",
    duracao: "Cena",
    escola: "Evocação",
    descricao: "Esta magia só pode ser usada em ambientes
    abertos. A área fica sujeita a
    um vendaval — ataques à distância
    sofrem penalidade de –5, chamas são
    apagadas e névoas e fumaças são dissipadas
    em 1 rodada. Você também pode
    causar chuva (–5 em testes de Percepção),
    neve (como chuva, mais a área se
    torna terreno difícil) ou granizo (como
    chuva, mais 1 ponto de dano de impacto
    por rodada, no início de seus turnos).
    Criaturas na área recebem uma
    penalidade de –15m no deslocamento
    de voo (mínimo 1,5m).
    +1 PM: muda a duração para sustentada.
    Além do normal, uma vez por
    rodada, como uma ação padrão, você
    pode fazer um relâmpago cair sobre
    um alvo na área, causando 3d8 pontos
    de dano de eletricidade (Reflexos
    reduz à metade).
    +1 PM: se escolheu causar granizo,
muda o dano para 1d6.
+2 PM: aumenta o dano em +1 dado
do mesmo tipo.
+3 PM: se escolheu causar chuva, ela
revela criaturas e objetos invisíveis na
área.
+7 PM: se escolheu causar neve, criaturas
na área sofrem 2d6 pontos de
dano de frio no início de seus turnos.",
    },
    {
    circulo: 2,
    nome: "Silêncio",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Esfera com 6m de raio",
    duracao: "Sustentada",
    escola: "Ilusão",
    descricao: "Um silêncio sepulcral recai sobre a
    área e nenhum som é produzido nela.
    Enquanto estiverem na área, todas as
    criaturas ficam surdas. Além disso,
    como lançar magias exige palavras mágicas,
    normalmente nenhuma magia
    pode ser lançada dentro da área.
    +1 PM: muda a área para alvo de 1 objeto.
    Em vez do normal, o alvo emana
    uma área de silêncio com 3m de raio.
    Se lançar a magia num objeto de uma
    criatura involuntária, ela tem direito a
    um teste de Vontade para anulá-la.
    +2 PM: muda a duração para cena. Em
    vez do normal, nenhum som pode deixar
    a área, mas criaturas dentro da área
    podem falar, ouvir e lançar magias com
    palavras mágicas normalmente.",
    },
    {
    circulo: 2,
    nome: "Miasma Mefítico",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Nuvem com 6m de raio",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "A área é coberta por emanações letais.
    Criaturas na área sofrem 5d6 pontos
    de dano de veneno e ficam enjoadas
    por 1 rodada. Se passarem na resistência,
    sofrem metade do dano e não ficam
    enjoadas.
    Truque: muda o alcance para toque,
    a área para alvo (1 criatura com 0 PV
    ou menos), a duração para instantânea
    e a resistência para Fortitude anula.
    Em vez do normal, você canaliza
    o Miasma contra uma vítima. Se falhar
    na resistência, ela morre e você recebe
    +2 na CD de suas magias por 1 dia.
    Se passar, fica imune a este truque por
    um dia.
    +2 PM: aumenta o dano em +1d6.
    +3 PM: muda o tipo do dano para
    trevas.",
    },
    {
    circulo: 2,
    nome: "Rogar Maldição",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Sustentada",
    escola: "Necromancia",
    descricao: "Você entoa cânticos maléficos que
    amaldiçoam uma vítima, criando efeitos
    variados. Ao lançar a magia, escolha
    entre os seguintes.
    Debilidade: o alvo fica esmorecido e não
    pode se comunicar ou lançar magias.
    Ainda reconhece seus aliados e pode
    segui-los e ajudá-los, mas sempre de
    maneira simplória.
    Doença: muda a duração para instantânea.
    O alvo contrai uma doença a sua
    escolha, que o afeta imediatamente
    (sem período de incubação).
    Fraqueza: o alvo fica debilitado e lento.
    Isolamento: o alvo perde o uso de um
    de seus cinco sentidos a sua escolha.
    Se perder a visão, fica cego. Se perder a
    audição, fica surdo. Se perder o olfato
    ou paladar, não pode usar a habilidade
    faro. Se perder o tato, fica caído e não
    pode se levantar.
    Você também pode inventar sua própria
    maldição, usando esses exemplos
    como sugestões, mas o mestre tem a
    palavra final sobre o efeito.
    +3 PM: aumenta o número de efeitos
    que você pode escolher em +1. Requer
    3º círculo.
    +7 PM: muda a duração para permanente
    e resistência para Fortitude parcial.
    Se passar, a criatura ainda sofre os
    efeitos da maldição, mas por 1 rodada.
    Requer 4º círculo.",
    },
    {
    circulo: 2,
    nome: "Controlar Madeira",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 objeto de madeira grande ou menor",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você molda, retorce, altera ou repele
    madeira. Ao lançar a magia, escolha.
    Fortalecer: deixa o alvo mais resistente.
    Armas têm seu dano aumentado em
    um passo. Escudos têm seu bônus de
    Defesa aumentado em +2. Além disso,
    esses e outros itens de madeira recebem
    +5 na RD e dobram seus PV.
    Modelar: muda a forma do alvo. Pode
    transformar um galho em espada,
    criar uma porta onde antes havia apenas
    uma parede, transformar um tronco
    em uma caixa... Mas não pode criar
    mecanismos complexos (como uma
    besta) ou itens consumíveis.
    Repelir: o alvo é repelido por você. Se
    for uma arma, ataques feitos com ela
    contra você falham automaticamente.
    Se for uma porta ou outro objeto que
    possa ser aberto, ele vai se abrir quando
    você se aproximar, mesmo que esteja
    trancado. Uma carroça ou outro objeto
    que vá atingi-lo, como um tronco
    caindo ou barril, vai desviar ou simplesmente
    parar adjacente a você, sem lhe
    causar dano. Os efeitos de regras em
    outros objetos de madeira ficam a cargo
    do mestre.
    Retorcer: torna o alvo imprestável. Uma
    porta retorcida emperra (exigindo um
    teste de Força contra CD 25 para ser
    aberta). Armas e itens retorcidos impõem
    uma penalidade de –5 em testes
    de perícia. Escudos retorcidos deixam
    de oferecer qualquer bônus (mas ainda
    impõem penalidades). Um barco retorcido
    começa a afundar e naufraga ao
    final da cena. Os efeitos de regras em
    outros objetos de madeira ficam a cargo
    do mestre.
    +1 PM: muda o alcance para pessoal,
    o alvo para você e a duração para 1
    dia. Você e seu equipamento se transformam
    em uma árvore de tamanho
    Grande. Nessa forma, você não pode
    falar ou fazer ações físicas, mas consegue
    perceber seus arredores normalmente.
    Se for atacado nessa forma, a
    magia é dissipada. Um teste de Sobrevivência
    (CD 30) revela que você não é
    uma árvore verdadeira.
    +3 PM: muda o alvo para área de quadrado
    com 9m de lado e a duração para
    cena. Em vez do normal, qualquer
    vegetação na área fica rígida e afiada.
    A área é considerada terreno difícil
    e criaturas que andem nela sofrem
    1d6 pontos de dano de corte para cada
    1,5m que avancem.
    +7 PM: muda o alvo para objeto de
    madeira Enorme ou menor. Requer 3º
    círculo.
    +12 PM: muda o alvo para objeto de
    madeira Colossal ou menor. Requer 4º
    círculo.",
    },
    {
    circulo: 2,
    nome: "Físico Divino",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "O alvo se torna uma versão mais poderosa
    de si mesmo. O alvo recebe +4
    em Força, Destreza ou Constituição, a
    sua escolha. Esse aumento não oferece
    PV ou PM adicionais.
    +3 PM: em vez do normal, o alvo
    recebe +4 nos três atributos físicos.
    Requer 3º círculo.
    +7 PM: muda o alcance para curto e o
    alvo para criaturas escolhidas.
    +7 PM: aumenta o bônus em +2. Requer
    4º círculo.",
    },
    {
    circulo: 3,
    nome: "Âncora Dimensional",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura ou objeto",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "O alvo é envolvido por um campo de
    força cor de esmeralda que impede
    qualquer movimento planar. Isso inclui
    magias de convocação (como Salto
    Dimensional e Teletransporte), viagens
    astrais e a habilidade incorpóreo.
    +2 PM: muda o alcance para médio, a
    área para círculo de 3m de raio e o alvo
    para criaturas escolhidas.
    +2 PM: muda o efeito para criar um
    fio de energia cor de esmeralda que
    prende o alvo a um ponto no espaço
    dentro do alcance. O ponto precisa ser
    fixo, mas não precisa de nenhum apoio
    ou superfície (pode simplesmente flutuar
    no ar). O alvo não pode se afastar
    mais de 3m do ponto, nem fisicamente,
    nem com movimento planar. O
    fio possui 20 PV e resistência a dano
    20 (mas pode ser dissipado por efeitos
    que libertam criaturas, como o Julgamento
    Divino: Libertação do paladino).
    +4 PM: como acima, mas em vez de
    um fio, cria uma corrente de energia,
    com 20 PV e resistência a dano 40.
    +4 PM: muda o alvo para área de cubo
    de 9m, a duração para permanente e
    adiciona componente material (chave
    de esmeralda no valor de T$ 2.000).
    Em vez do normal, nenhum tipo de
    movimento planar pode ser feito para
    entrar ou sair da área.
    +9 PM: muda o alcance para médio, a
    área para círculo de 3m de raio e o alvo
    para criaturas escolhidas. Cria um fio
    de energia (veja acima) que prende todos
    os alvos ao centro da área.",
    },
    {
    circulo: 3,
    nome: "Dificultar Detecção",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura ou objeto",
    duracao: "1 dia",
    escola: "Abjuração",
    descricao: "Esta magia oculta a presença do alvo
    contra qualquer meio mágico de detecção,
    inclusive detectar magia. Um conjurador
    que lance uma magia de adivinhação
    para detectar a presença ou
    localização do alvo deve fazer um teste
    de Vontade. Se falhar, a magia não funciona,
    mas os PM são gastos mesmo
    assim. Se for lançada sobre uma criatura,
    Dificultar Detecção protege tanto a
    criatura quanto seu equipamento.
    +4 PM: muda o alvo para área de cubo
    de 9m. Qualquer criatura ou objeto na
    área recebe o efeito da magia enquanto
    estiver dentro dela.
    +4 PM: muda a duração para 1 semana.",
    },
    {
    circulo: 3,
    nome: "Globo de Invulnerabilidade",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Abjuração",
    descricao: "Você é envolto por uma esfera mágica
    brilhante com 3m de raio, que detém
    qualquer magia de 2º círculo ou menor.
    Nenhuma magia pode ser lançada
    contra um alvo dentro do globo e magias
    de área não o penetram. No entanto,
    magias ainda podem ser lançadas
    de dentro para fora.
    Dissipar Magia só dissipa o globo se
    for usada diretamente sobre você, não
    o afetando se usada em área. Efeitos
    mágicos não são dissipados quando
    entram na esfera, apenas suprimidos
    (voltam a funcionar fora do globo,
    caso sua duração não tenha acabado).
    O globo é imóvel e não tem efeito sobre
    criaturas ou objetos. Após lançá-lo,
    você pode entrar ou sair livremente.
    +4 PM: muda o efeito para afetar magias
    de até 3º círculo. Requer 4º círculo.
    +9 PM: muda o efeito para afetar magias
    de até 4º círculo. Requer 5º círculo.",
    },
    {
    circulo: 3,
    nome: "Contato Extraplanar",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "1 dia",
    escola: "Advinhação",
    descricao: "Sua mente viaja até outro plano de existência,
    onde entra em contato com seres
    extraplanares como gênios, demônios
    ou elementais. Você firma um contrato
    com uma dessas entidades para que
    o auxilie durante o dia, em troca de se
    alimentar de seu mana. Quando a magia
    é lançada, você recebe 6d6 dados de
    auxílio. Enquanto a magia durar, sempre
    que for realizar um teste de perícia,
    você pode gastar qualquer quantidade
    desses d6 e adicionar o resultado rolado
    como bônus no teste. No entanto,
    esse auxílio tem um preço: sempre que
    rolar um “6” num desses d6, a entidade
    “suga” 1 PM de você. A magia termina
    quando você ficar sem dados para rolar,
    sem PM ou no fim do dia (o que acontecer
    primeiro).
    +2 PM: aumenta o número de dados
    de auxílio em +1.
    +8 PM: Muda os dados de auxílio para
    d12. Sempre que rolar um resultado 12
    num desses d12, a entidade “suga” 2
    PM de você. Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Lendas e Histórias",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura, objeto ou local",
    duracao: "Sustentada",
    escola: "Advinhação",
    descricao: "Você descobre informações sobre uma
    criatura, objeto ou local que esteja tocando.
    O que exatamente você descobre
    depende do mestre: talvez você não
    descubra tudo que há para saber, mas
    ganhe pistas para continuar a investigação.
    A cada rodada que mantiver a
    magia, você descobre:
    • Todas as informações sobre o alvo,
    como se tivesse passado em todos os
    testes de Conhecimento para tal.
    • Todas as habilidades do alvo. Se for
    uma criatura, você sabe suas estatísticas
    de jogo como raça, classe, nível,
    atributos, magias, resistências e fraquezas.
    Se for um item mágico, aprende
    seu efeito e funcionamento.
    • Se o alvo está sob influência de alguma
    magia e todas as informações sobre
    as magias ativas, se houver alguma.
    +4 PM: muda a execução para 1 dia, o
    alcance para ilimitado e adiciona componente
    material (cuba de ouro cheia
    d’água e ingredientes mágicos, no valor
    de T$ 1.000). Você ainda precisa ter
    alguma informação sobre o alvo, como
    um nome, descrição ou localização.",
    },
    {
    circulo: 3,
    nome: "Vidência",
    execucao: "Completa",
    alcance: "Ilimitado",
    alvo: "1 criatura",
    duracao: "Sustentada",
    escola: "Advinhação",
    descricao: "Através de uma superfície reflexiva
    (bacia de água benta para clérigos,
    lago para druidas, bola de cristal para
    magos, espelho para feiticeiros etc.)
    você pode ver e ouvir uma criatura escolhida
    e seus arredores (cerca de 6m
    em qualquer direção), mesmo que ela
    se mova. O alvo pode estar a qualquer
    distância, mas se passar em um teste
    de Vontade, a magia falha. A vítima recebe
    bônus ou penalidades em seu teste
    de resistência, dependendo do conhecimento
    que você tiver dela.
    • Não conhece o alvo: +10.
    • Ouviu falar do alvo: +5.
    • O alvo está em outro plano ou
    mundo: +5.
    • Já encontrou o alvo pessoalmente: +0.
    • Tem uma pintura, escultura ou outra
    representação do alvo: –2.
    • Conhece bem o alvo: –5.
    • Tem um pertence pessoal ou peça de
    roupa do alvo: –5.
    • Tem uma parte do corpo do alvo
    (unhas, cabelos...): –10.",
    },
    {
    circulo: 3,
    nome: "Convocação Instantânea",
    execucao: "Padrão",
    alcance: "Ilimitado",
    alvo: "1 objeto de até 5kg",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Você invoca um objeto de qualquer lugar
    para sua mão. O item deve ter sido
    previamente preparado com uma runa
    ou marca pessoal sua (ao custo de T$ 5).
    A magia não funciona se o objeto estiver
    com outra criatura, mas você saberá
    onde ele está e quem o está carregando
    (ou sua descrição física, caso
    não conheça a criatura).
    +1 PM: além do normal, até 1 hora
    após ter lançado a magia, você pode
    gastar uma ação de movimento para
    enviar o objeto de volta para o local em
    que ele estava antes.
    +1 PM: muda o alvo para um baú Médio,
    a duração para permanente e adiciona
    sacrifício de 1 PM. Em vez do
    normal, você esconde o baú alvo no
    Etéreo, com até 250kg de equipamento.
    A magia faz com que qualquer objeto
    caiba no baú, independentemente
    do seu tamanho. Uma vez escondido,
    você pode convocar o baú para um espaço
    livre adjacente, ou de volta para o
    Etéreo, como uma ação padrão. Componente
    material: baú construído com matéria-
    prima da melhor qualidade (T$
    1.000). Você deve ter em mãos uma
    miniatura do baú, no valor de T$ 100,
    para invocar o baú verdadeiro.
    +2 PM: aumenta o número de alvos
    em +1.
    +2 PM: aumenta o peso limite do alvo
    em um fator de 10, até 500 kg. Um objeto
    muito grande ou pesado para aparecer
    em suas mãos é teletransportado
    para um espaço adjacente a sua escolha.",
    },
    {
    circulo: 3,
    nome: "Enxame Rubro de Ichabod",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Quadrado de 3m",
    duracao: "Sustentada",
    escola: "Convocação",
    descricao: "Você conjura um enxame de pequenas
    criaturas da Tormenta, que surge
    em um ponto a sua escolha. O enxame
    pode passar pelo espaço de outras criaturas
    e não impede que outras criaturas
    entrem no espaço dele. No final de
    cada um de seus turnos, o enxame causa
    4d12 pontos de dano de ácido a qualquer
    criatura em seu espaço (Reflexos
    reduz à metade). Você pode gastar uma
    ação de movimento para mover o enxame
    com deslocamento de 12m.
    +1 PM: além do normal, uma criatura
    que falhe no teste de Reflexos fica agarrada
    (o enxame escala e cobre o corpo
    dela). A criatura pode gastar uma ação
    padrão e fazer um teste de Acrobacia
    ou Atletismo para escapar. Se você mover
    o enxame, a criatura fica livre.
    +2 PM: aumenta o dano em +1d12.
    +2 PM: muda o dano para trevas.
    +3 PM: o enxame vira Enorme (quadrado
    de 6m de lado).
    +3 PM: o enxame ganha deslocamento
    de voo 18m e passa a ocupar um cubo
    ao invés de um quadrado.
    +4 PM: o enxame inclui parasitas inchados
    que explodem e criam novos
    enxames. No início de cada um de seus
    turnos, role 1d6. Em um resultado 5
    ou 6, um novo enxame surge adjacente
    a um já existente à sua escolha. Você
    pode mover todos os enxames com
    uma única ação de movimento, mas
    eles não podem ocupar o mesmo espaço.
    Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Teletransporte",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "Até 5 criaturas voluntárias",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Esta magia transporta os alvos para um
    lugar a sua escolha a até 1.000km. Você
    precisa fazer um teste de Misticismo,
    com dificuldade que depende de seu
    conhecimento sobre o local de destino.
    CD 20. Um lugar familiar, que você
    visita com frequência.
    CD 30. Um lugar conhecido, que você
    já visitou pelo menos uma vez.
    CD 40. Um lugar desconhecido, que
    você nunca visitou e só conhece a
    partir da descrição de outra pessoa
    que esteve lá.
    Você não pode se teletransportar para
    um lugar que nunca visitou sem a descrição
    de alguém. Ou seja, não pode
    se transportar para a “sala de tesouro
    do rei” se nunca esteve nela nem falou
    com alguém que esteve.
    Se passar no teste, os alvos chegam ao
    lugar desejado. Se falhar, os alvos surgem
    1d10 x 10km afastados em qualquer
    direção (se o destino é uma cidade
    costeira, você pode surgir em
    alto-mar). Se falhar por 5 ou mais,
    você chega em um lugar parecido,
    mas errado. E se você rolar 1 natural
    no teste a magia falha, mas você gasta
    PM normalmente e fica atordoado por
    1d4 rodadas.
    +2 PM: aumenta o número de alvos
    em +5.
    +2 PM: em vez do normal, a magia teletransporta
    os alvos para seu santuário
    — um local familiar e previamente
    preparado. A magia pode ser usada
    sem limite de distância ou necessidade
    de testes, mas apenas dentro do mesmo
    plano. Preparar um local como seu
    santuário exige um ritual de um dia e
    o gasto de T$ 1.000. Você só pode ter
    um santuário por vez.
    +9 PM: muda a execução para ação
    completa, a duração para cena e adiciona
    sacrifício de 1 PM. Em vez do normal,
    você cria um círculo de 1,5m de
    diâmetro no chão, que transporta qualquer
    criatura que pisar nele. O destino
    é escolhido quando a magia é lançada
    e pode ser qualquer lugar, em qualquer
    mundo, sem a necessidade de testes,
    desde que seja conhecido por você. O
    círculo é tênue e praticamente invisível.
    Você pode marcá-lo de alguma forma
    (por exemplo, lançando-o sobre
    uma plataforma elevada). Se não fizer
    isso, alguém pode pisar nele por acidente.
    Junte isso a um destino hostil e
    você terá uma armadilha bastante eficaz!
    Requer 5º círculo.",
    },
    {
    circulo: 3,
    nome: "Imobilizar",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 humanoide ou animal",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "O alvo fica paralisado; se passar na resistência,
    em vez disso fica lento. A
    cada rodada, pode gastar uma ação
    completa para fazer um novo teste de
    Vontade. Se passar, se liberta do efeito.
    +1 PM: muda o alvo para 1 espírito.
    +2 PM: aumenta o número de alvos
    em +1.
    +3 PM: muda o alvo para 1 criatura.
    Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Selo de Mana",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Seu toque manifesta um selo mágico
    na pele do alvo, que atrapalha o fluxo
    de mana. Pela duração da magia, sempre
    que o alvo realizar qualquer ação
    que gaste PM, deve fazer um teste de
    Vontade; se passar, faz a ação normalmente.
    Se falhar, a ação não tem efeito
    (mas os PM são gastos mesmo assim).
    +4 PM: muda o alcance para curto e
    o alvo para criaturas escolhidas dentro
    do alcance. Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Erupção Glacial",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Quadrado de 6m de lado",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Estacas de gelo irrompem do chão.
    Criaturas na área sofrem 4d6 de dano
    de corte, 4d6 de dano de frio e ficam
    caídas. Passar no teste de Reflexos evita
    o dano de corte e a queda. As estacas
    duram pela cena, o que torna a área
    afetada terreno difícil, e concedem cobertura
    para criaturas dentro da área
    ou atrás dela. As estacas são destruídas
    caso sofram qualquer quantidade
    de dano por fogo mágico.
    +3 PM: aumenta o dano de frio em
    +2d6 e o dano de corte em +2d6.
    +4 PM: muda a área para cilindro com
    6m de raio e 6m de altura e a duração
    para sustentada. Em vez do normal, a
    magia cria uma tempestade de granizo
    que causa 3d6 pontos de dano de impacto
    e 3d6 pontos de dano de frio em
    todas as criaturas na área (sem teste de
    resistência). A tempestade fornece camuflagem
    a todas as criaturas dentro
    dela e deixa o piso escorregadio. Piso
    escorregadio conta como terreno difícil
    e obriga criaturas na área a fazer testes
    de Acrobacia para equilíbrio (veja o
    Capítulo 2). Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Lança Ígnea de Aleph",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta magia foi desenvolvida pelo mago
    imortal Aleph Olhos Vermelhos, um entusiasta
    dos estudos vulcânicos. Ela dispara
    um projétil de magma superaquecido
    contra o alvo, que sofre 4d6 pontos
    de dano de fogo e 4d6 pontos de dano
    de perfuração e fica em chamas. As chamas
    causam 2d6 pontos de dano por rodada,
    em vez do dano normal. Se passar
    no teste de resistência, o alvo sofre metade
    do dano e não fica em chamas.
    Respingos de rocha incandescente se
    espalham com a explosão, atingindo
    todas as criaturas adjacentes ao alvo,
    que devem fazer um teste de Reflexos.
    Se falharem, ficam em chamas, como
    descrito acima.
    +3 PM: aumenta o dano inicial em
    +2d6 e o dano do efeito em chamas
    em +1d6.
    +4 PM: muda a duração para cena ou
    até ser descarregada. Em vez do efeito
    normal, a magia cria quatro dardos de
    lava que flutuam ao lado do conjurador.
    Uma vez por rodada, como uma ação livre,
    você pode disparar um dos dardos
    em uma criatura, causando o efeito normal
    da magia. Requer 4º Círculo.",
    },
    {
    circulo: 3,
    nome: "Muralha Elemental",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "",
    duracao: "Cena",
    escola: "Evocação",
    descricao: "Esta magia cria uma muralha de um
    elemento a sua escolha. A muralha
    pode ter duas formas: uma barreira de
    até 30m de comprimento e 3m de altura
    (ou o contrário) ou uma cúpula de
    3m de raio. Os efeitos variam conforme
    o tipo de elemento escolhido.
    Fogo. Faz surgir uma violenta cortina
    de chamas. Um lado da muralha (a sua
    escolha) emite ondas de calor, que causam
    2d6 pontos de dano de fogo em
    criaturas a até 6m. A muralha causa
    esse dano quando surge e no início de
    seus turnos. Atravessar a muralha causa
    8d6 pontos de dano de fogo. Caso
    seja criada em uma área onde existem
    criaturas, elas sofrem dano como se estivessem
    atravessando a muralha, mas
    podem fazer um teste de Reflexos para
    reduzir o dano à metade (a criatura escolhe
    para qual lado quer escapar, mas
    se escapar para o lado quente sofrerá
    mais 2d6 pontos de dano).
    Gelo. Evoca uma parede grossa de gelo
    denso com 15cm de espessura. Na forma
    de cúpula, pode prender uma ou
    mais criaturas, mas elas têm direito a
    um teste de Reflexos para escapar antes
    que a cúpula se forme. Cada trecho
    de 3m da muralha tem Defesa 8,
    40 PV e RD 5. Um trecho da muralha
    que atinja 0 PV será rompido. Qualquer
    efeito de fogo causa dano dobrado
    à muralha. Uma criatura que atravesse
    um trecho rompido da muralha
    sofre 4d6 pontos de dano de frio.
    +2 PM: aumenta o comprimento em
    +15m e altura em +3m, até 60m de
    comprimento e 9m de altura.
    +4 PM: muda a duração para sustentada
    e adiciona uma nova escolha, Essência.
    A muralha é invisível e indestrutível
    — imune a qualquer forma de
    dano e não afetada por nenhuma magia.
    Ela não pode ser atravessada nem
    mesmo por criaturas incorpóreas. No
    entanto, magias que teletransportam
    criaturas, como Salto Dimensional, podem
    atravessá-la. Magias e efeitos de
    dano, como Bola de Fogo e o sopro de
    um dragão, não vencem a muralha,
    mas magias lançadas diretamente sobre
    uma criatura ou área, como Sono,
    podem ser lançadas contra alvos que
    estejam no outro lado como se tivessem
    linha de efeito. Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Ilusão Lacerante",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Você cria uma ilusão de algum perigo
    mortal. Quando a magia é lançada, e
    no início de cada um de seus turnos, o
    alvo deve fazer um teste de Vontade; se
    falhar, acredita que a ilusão é real e sofre
    3d6 pontos de dano. O tipo de dano
    depende da ilusão — fogo para uma
    ilusão de chamas, impacto para uma
    ilusão de desmoronamento etc. Somente
    o alvo pode ver a ilusão, e racionaliza
    o efeito sempre que falha no teste
    (por exemplo, acredita que o mesmo
    teto pode cair sobre ele várias vezes).
    Se o alvo passar em dois testes de Vontade
    seguidos, anula o efeito.
    +2 PM: aumenta o dano em +2d6. O
    aumento pode ser de um novo tipo de
    dano, desde que explicado pela ilusão.
    +3 PM: aumenta o número de alvos
    em +1.",
    },
    {
    circulo: 3,
    nome: "Manto de Sombras",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Ilusão",
    descricao: "Você fica coberto por um manto de
    energia sombria. Nesta forma, torna-
    se incorpóreo (inclui seu equipamento):
    só pode ser afetado por armas
    mágicas, magias ou outras criaturas incorpóreas
    e pode atravessar objetos sólidos,
    mas não manipulá-los. Contudo,
    se torna vulnerável à luz direta: se exposto
    a uma fonte de luz, sofre 1 ponto
    de dano por rodada.
    Você pode gastar uma ação de movimento
    e 1 PM para “entrar” em uma
    sombra do seu tamanho ou maior e
    se teletransportar para outra sombra,
    também do seu tamanho ou maior, em
    alcance médio.
    +4 PM: muda o alcance para toque e o
    alvo para 1 criatura. Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Miragem",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "Cubo de até 90m de lado",
    duracao: "1 dia",
    escola: "Ilusão",
    descricao: "Você faz um terreno parecer outro, incluindo
    sons e cheiros. Uma planície
    pode parecer um pântano, uma floresta
    pode parecer uma montanha etc. Esta
    magia pode ser usada para criar armadilhas:
    areia movediça pode parecer
    terra firme ou um precipício pode parecer
    um lago. Você pode alterar, incluir
    e esconder estruturas dentro da área,
    mas não criaturas (embora elas possam
    se esconder nas estruturas ilusórias).
    +4 PM: além do normal, pode alterar
    a aparência de criaturas escolhidas na
    área, como se usando Disfarce Ilusório.
    +9 PM: muda a duração para permanente
    e adiciona componente material
    (pó de diamante no valor de T$ 1.000).
    Requer 5º círculo.",
    },
    {
    circulo: 3,
    nome: "Ferver Sangue",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Sustentada",
    escola: "Necromancia",
    descricao: "O sangue do alvo aquece rapidamente
    até entrar em ebulição. Quando a magia
    é lançada, e no início de cada um
    de seus turnos, o alvo sofre 3d6 pontos
    de dano de fogo (Fortitude reduz à metade).
    Se o alvo passar em dois testes
    de Fortitude seguidos, dissipa a magia.
    Se o alvo for reduzido a 0 PV pelo
    dano desta magia, seu corpo explode,
    matando-o e causando 6d6 pontos de
    dano de fogo em todas as criaturas a
    até 3m (Reflexos reduz à metade).
    Essa magia não afeta criaturas sem
    sangue, como construtos ou espíritos.
    +2 PM: aumenta o dano em +1d6.
    +9 PM: muda alvo para criaturas escolhidas.
    Requer 5º círculo.",
    },
    {
    circulo: 3,
    nome: "Tentáculos de Trevas",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Círculo com 6m de raio",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Um círculo de energias sombrias se
    abre no chão, de onde surgem tentáculos
    feitos de treva viscosa. Ao lançar a
    magia e no início de cada um de seus
    turnos, você faz um teste da manobra
    agarrar (usando seu bônus de Misticismo)
    contra cada criatura na área. Se
    você passar, a criatura é agarrada; se a
    vítima já está agarrada, é esmagada,
    sofrendo 4d6 pontos de dano de trevas.
    A área conta como terreno difícil.
    Os tentáculos são imunes a dano.
    +2 PM: aumenta o raio da área em
    +3m.
    +2 PM: aumenta o dano dos tentáculos
    em +2d6.",
    },
    {
    circulo: 3,
    nome: "Pele de Pedra",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Sua pele ganha aspecto e dureza de
    rocha. Você recebe resistência a dano 5.
    +1 PM: muda o alcance para toque e o
    alvo para 1 criatura.
    +4 PM: muda a duração para 1 dia.
    +4 PM: sua pele ganha aspecto e dureza
    de aço. Você recebe resistência a
    dano 10. Requer 4º círculo.
    +4 PM: muda o alcance para toque, o
    alvo para 1 criatura, a duração para 1d4
    rodadas e adiciona Resistência: Fortitude
    anula. Em vez do efeito normal,
    a magia transforma o alvo e seu equipamento
    em uma estátua inerte e sem
    consciência. A estátua possui os mesmos
    PV da criatura e resistência a dano
    8; se for quebrada, a criatura morrerá.
    Requer 4º círculo.
    +9 PM: como acima, mas com duração
    permanente. Requer 5º círculo.",
    },
    {
    circulo: 3,
    nome: "Telecinesia",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Veja o texto",
    duracao: "Sustentada ou Intantânea",
    escola: "Transmutação",
    descricao: "Você move objetos ou criaturas se concentrando.
    Ao lançar a magia, escolha
    uma das opções a seguir.
    Força Contínua: você move uma criatura
    ou objeto com até 200kg, a até 6m
    por rodada. Uma criatura pode anular
    o efeito sobre ela, ou sobre um objeto
    que possua, passando num teste de
    Vontade. O peso pode ser movido em
    qualquer direção dentro do alcance.
    Ele cai no chão se sair do alcance ou a
    magia terminar. Duração: sustentada.
    Empurrão Violento: nesta versão a energia
    mágica é expelida de uma única
    vez e arremessa até 10 objetos, ou um
    peso total de 200kg, o que for menor.
    Os objetos devem estar a até 3m uns
    dos outros.
    Objetos arremessados podem atingir
    criaturas em seu caminho, causando
    de 1 ponto de dano de impacto por
    10kg (objetos macios, sem pontas ou
    sem fio) até 1d6 pontos de dano por
    10kg (objetos duros, pontudos ou afiados).
    Criaturas atingidas têm direito
    a um teste de Reflexos para reduzir o
    dano à metade.
    Criaturas dentro da capacidade de peso
    da magia podem ser arremessadas,
    mas têm direito a um teste de Vontade
    para evitar o efeito (em si mesmas
    ou em objetos que estejam segurando).
    Uma criatura arremessada contra
    uma superfície sólida sofre 1d6 pontos
    de dano de impacto para cada 3m
    que “voou” no deslocamento (incluindo
    outras criaturas; nesse caso, ambas
    sofrem o dano). Duração: instantânea.
    +3 PM: aumenta o limite de peso em
    100kg.",
    },
    {
    circulo: 3,
    nome: "Transformação de Guerra",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Transmutação",
    descricao: "Você se torna uma máquina de combate,
    ficando mais forte, rápido e resistente.
    Você recebe +6 na Defesa, testes
    de ataque e rolagens de dano corpo
    a corpo, e 30 PV temporários. Durante
    a Transformação de Guerra você não pode
    lançar magias, mas se torna proficiente
    em todas as armas.
    +2 PM: aumenta os bônus na Defesa,
    testes de ataque e rolagens de dano
    corpo a corpo em +1, e os PV temporários
    em +10.
    +2 PM: adiciona componente material
    (uma barra de adamante no valor
    de T$ 100). Sua forma de combate
    ganha um aspecto metálico e sem expressões.
    Além do normal, você recebe
    resistência a dano 10 e imunidade a
    atordoamento, doenças, encantamento,
    fadiga, paralisia, necromancia, sangramento,
    sono e veneno, e não precisa
    respirar.",
    },
    {
    circulo: 3,
    nome: "Voo",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você recebe deslocamento de voo 12m.
    Voar por meio desta magia é simples
    como andar — você pode atacar e lançar
    magias normalmente enquanto
    voa. Quando a magia termina, você
    desce lentamente até o chão, como se
    estivesse sob efeito de Queda Suave.
    +1 PM: muda o alcance para toque e o
    alvo para 1 criatura.
    +4 PM: muda a duração para 1 dia.
    Requer 4º círculo.
    +4 PM: muda o alcance para curto e
    o alvo para até 10 criaturas. Requer 4°
    círculo.",
    },
    {
    circulo: 3,
    nome: "Banimento",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Abjuração",
    descricao: "Você expulsa criaturas que não são naturais
    deste mundo. Um alvo nativo de
    outro mundo, como muitas criaturas do
    tipo espírito, é teletransportado de volta
    para um lugar aleatório de seu mundo
    de origem. Já um alvo morto-vivo
    tem sua conexão com as energias negativas
    quase completamente rompida,
    sendo reduzido a 1d6 PV. Se passar na
    resistência, em vez dos efeitos acima, o
    alvo fica enjoado por 1d4 rodadas.
    Se você tiver um ou mais itens que se
    oponham ao alvo de alguma maneira, a
    CD do teste de resistência aumenta em
    +2 por item. Por exemplo, se lançar a
    magia contra demônios do frio (vulneráveis
    a água benta e que odeiam luz e calor)
    enquanto segura um frasco de água
    benta e uma tocha acesa, a CD do teste
    de resistência aumenta em +4. O mestre
    decide se determinado item é forte o
    bastante contra a criatura para isso.
    +1 PM: aumenta o número de alvos
    em +1.",
    },
    {
    circulo: 3,
    nome: "Proteção contra Magia",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Você protege o alvo contra efeitos mágicos
    nocivos. O alvo recebe +5 em
    testes de resistência contra magias.
    +4 PM: muda o bônus para +10. Requer
    4º círculo.
    +4 PM: em vez do normal, o alvo fica
    imune a uma escola de magia a sua escolha.
    Requer 4º Círculo.
    +9 PM: em vez do normal, o alvo fica
    imune a duas escolas de magia a sua
    escolha. Requer 5º Círculo.",
    },
    {
    circulo: 3,
    nome: "Comunhão com a Natureza",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "1 dia",
    escola: "Advinhação",
    descricao: "Após uma breve união com a natureza
    local, você obtém informações e intuições
    sobre a região em que está, numa
    distância equivalente a um dia de viagem.
    Você recebe 6d4 dados de auxílio.
    Enquanto a magia durar, sempre que
    for realizar um teste de perícia em áreas
    naturais, você pode gastar qualquer
    quantidade desses d4 e adicionar o resultado
    rolado como bônus no teste. A
    magia termina se você ficar sem dados.
    +1 PM: muda a execução para 1 minuto
    e a duração para instantânea. Em
    vez do normal, você descobre 1d4+1
    informações sobre os seguintes temas:
    terreno, animais, vegetais, minerais,
    cursos d’água e presença de criaturas
    antinaturais numa região natural em
    que você esteja. Você pode, por exemplo,
    descobrir a quantidade de cavernas
    (terreno), se uma planta rara existe (vegetais)
    e se há mortos-vivos (criaturas
    antinaturais) na região.
    +3 PM: aumenta o número de dados
    de auxílio em +2.
    +4 PM: muda o tipo dos dados de
    auxílio para d6.
    +8 PM: muda o tipo dos dados de
    auxílio para d8.",
    },
    {
    circulo: 3,
    nome: "Servo Divino",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "",
    duracao: "Cena ou até descarregar",
    escola: "Convocação",
    descricao: "Você pede a sua divindade que envie
    um espírito para ajudá-lo. Esse espírito
    realiza uma tarefa a sua escolha que
    possa ser cumprida em até uma hora
    — desde algo simples como “use suas
    asas para nos levar até o topo da montanha”
    até algo complexo como “escolte
    esses camponeses até o castelo”. A
    magia é descarregada quando a criatura
    cumpre a tarefa, retornando a seu
    plano natal. O tipo de criatura é escolhido
    pelo mestre, de acordo com as
    necessidades da tarefa.
    Componente material: um pagamento de
    T$ 100 ao espírito. A forma de pagamento
    varia — doações a um templo,
    um item mágico ou mesmo dinheiro.
    +4 PM: muda a duração para 1 dia ou
    até ser descarregada. O espírito realiza
    uma tarefa a sua escolha que exija
    até um dia. O custo do pagamento
    aumenta para T$ 500. O resto segue
    normal.
    +9 PM: muda a duração para 1 semana
    ou até ser descarregada. O espírito
    realiza uma tarefa que exija até uma
    semana. O custo do pagamento aumenta
    para T$ 1.000. O resto segue
    normal.",
    },
    {
    circulo: 3,
    nome: "Viagem Arbórea",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Convocação",
    descricao: "Como parte da execução, você entra
    em uma árvore adjacente que seja
    maior do que você. Você pode permanecer
    dentro da árvore, percebendo os
    arredores de forma normal (mas sem
    poder fazer ações). Você pode gastar
    uma ação de movimento para sair da
    mesma árvore, ou de qualquer outra
    dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia
    termina e você sofre 10d6 pontos
    de dano de impacto. Enquanto a magia
    durar você pode gastar ações de movimento
    para entrar em outras árvores.
    +2 PM: muda o alcance para toque,
    o alvo para até cinco criaturas e a duração
    para instantânea. Os alvos entram
    em uma planta (de tamanho Médio
    ou maior) e saem em outra planta
    do mesmo tamanho a até 100km de
    distância, especificada em direção e
    distância aproximadas (como “50km
    ao norte”).",
    },
    {
    circulo: 3,
    nome: "Despertar Consciência",
    execucao: "Completa",
    alcance: "Toque",
    alvo: "1 animal ou planta",
    duracao: "1 dia",
    escola: "Encantamento",
    descricao: "Você desperta a consciência de um animal
    ou planta, que passa a ajudá-lo. O
    alvo se torna um aliado veterano de
    um tipo a sua escolha entre ajudante,
    combatente, fortão, guardião, médico
    ou perseguidor. Se usar esta magia em
    um aliado que já possua, seu nível de
    poder aumenta em um passo (iniciante
    para veterano, veterano para mestre).
    Se já for um aliado mestre, fornece um
    bônus adicional de outro tipo de aliado
    iniciante (entre as escolhas acima).
    O alvo ganha Inteligência 3d6, +1d4
    de Carisma e pode falar os idiomas que
    você conhece.
    Se não quiser ter o alvo como aliado,
    você pode pedir que ele proteja um local
    específico, atacando invasores (nesse
    caso, use as estatísticas apropriadas
    à criatura; plantas usam as estatísticas
    de entes).
    +4 PM: muda o alvo para 1 escultura
    mundana inanimada. Além do normal,
    o alvo tem as mesmas características
    de um construto.
    +4 PM: muda a duração para permanente
    e adiciona sacrifício de 1 PM.",
    },
    {
    circulo: 3,
    nome: "Heroísmo",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Encantamento",
    descricao: "Esta magia imbui uma criatura com
    coragem e valentia. O alvo fica imune
    a medo e recebe +4 em testes de ataque
    e rolagens de dano contra inimigos
    com ND maior que seu nível.
    +4 PM: muda o bônus para +6.",
    },
    {
    circulo: 3,
    nome: "Missão Divina",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "1 semana ou até descarregar",
    escola: "Encantamento",
    descricao: "Esta magia obriga o alvo a cumprir uma
    tarefa a sua escolha. Ela dura uma semana
    ou até o alvo cumprir a tarefa, o
    que vier primeiro. O alvo pode recusar
    a missão — mas, no fim de cada dia em
    que não se esforçar para cumprir a tarefa,
    deve fazer um teste de Vontade; se
    falhar, sofre uma penalidade cumulativa
    de –2 em todos os testes e rolagens.
    A Missão Divina não pode forçar uma
    criatura a um ato suicida, nem designar
    uma missão impossível (como matar
    uma criatura que não existe).
    +2 PM: muda o alcance para toque, a
    duração para permanente e adiciona
    penalidade de –1 PM. Em vez do normal,
    você inscreve uma marca (como
    uma tatuagem) na pele do alvo e escolhe
    um tipo de ação que ativará a marca.
    Normalmente, será cometer um
    crime (roubar, matar...) ou outra coisa
    contrária às Obrigações & Restrições
    de sua divindade. Sempre que a marca
    é ativada, o alvo recebe uma penalidade
    cumulativa de –2 em todos os testes.
    Muitas vezes, portar essa marca é
    um estigma por si só, já que esta magia
    normalmente é lançada em criminosos
    ou traidores. Dissipar Magia suprime
    a marca e suas penalidades por
    um dia; elas só podem ser totalmente
    removidas pelo conjurador original ou
    pela magia Purificação.
    +4 PM: aumenta a duração para 1 ano
    ou até ser descarregada.",
    },
    {
    circulo: 3,
    nome: "Coluna de Chamas",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "Cilindo com 3m de raio e 30km de altura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Um pilar de fogo sagrado desce dos
    céus, causando 6d6 pontos de dano de
    fogo mais 6d6 pontos de dano de luz
    nas criaturas e objetos livres na área.
    +1 PM: aumenta o dano de fogo em +1d6.
    +1 PM: aumenta o dano de luz em +1d6.",
    },
    {
    circulo: 3,
    nome: "Dispersar as Trevas",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Esfera de 6m de raio",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta magia cria um forte brilho (multicolorido
        ou de uma cor que remeta a
        sua divindade) que causa diversos efeitos.
        Todas as magias de 3º círculo ou
        menor ativas na área são dissipadas se
        você passar num teste de Religião contra
        a CD de cada magia. Seus aliados
        na área recebem +4 em testes de resistência
        e resistência a trevas 10 até o
        fim da cena, protegidos por uma aura
        sutil da mesma cor. Inimigos na área ficam
        cegos por 1d4 rodadas. Dispersar as
        Trevas anula Anular a Luz.
        +2 PM: aumenta o bônus nas resistências
        em +1.
        +4 PM: muda o alcance para curto, a
        área para alvo 1 criatura e a duração para
        cena. O alvo fica imune a efeitos de necromancia
        e trevas.
        +4 PM: muda o círculo máximo de
        magias dissipadas para 4º. Requer 4º
        círculo.
        +9 PM: muda o círculo máximo de
        magias dissipadas para 5º. Requer 5º
        círculo.",
    },
    {
    circulo: 3,
    nome: "Sopro da Salvação",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Cone de 9m",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você enche seus pulmões de energia
    positiva e sopra um cone de poeira
    reluzente. O sopro afeta apenas seus
    aliados na área, curando 2d8+4 pontos
    de vida e removendo uma das seguintes
    condições de todos os alvos: abalado,
    atordoado, apavorado, alquebrado,
    cego, confuso, debilitado, enjoado, esmorecido,
    exausto, fascinado, fatigado,
    fraco, frustrado, lento, paralisado, pasmo
    e surdo.
    +2 PM: aumenta a quantidade de cura
    em 1d8+2.
    +4 PM: além do normal, se um aliado
    estiver com PV negativos, seus PV são
    levados a 0 e então a cura é aplicada.
    +4 PM: remove todas as condições listadas,
    em vez de apenas uma.",
    },
    {
    circulo: 3,
    nome: "Anular a Luz",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Área de 6m de raio",
    duracao: "Ver texto",
    escola: "Necromancia",
    descricao: "Esta magia cria uma onda de escuridão
    que causa diversos efeitos. Todas as magias
    de 3º círculo ou menor ativas na
    área são dissipadas se você passar num
    teste de Religião contra a CD de cada
    magia. Seus aliados na área são protegidos
    por uma aura sombria e recebem
    +4 na Defesa até o fim da cena. Inimigos
    na área ficam enjoados por 1d4 rodadas.
    Anular a Luz anula Dispersar as Trevas.
    +2 PM: aumenta o bônus na Defesa
    em +1.
    +4 PM: muda o círculo máximo de
    magias dissipadas para 4º.
    +9 PM: muda o círculo máximo de
    magias dissipadas para 5º.",
    },
    {
    circulo: 3,
    nome: "Poeira da Podridão",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Nuvem com 6m de raio",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Você manifesta uma nuvem de poeira
    carregada de energia negativa, que
    apodrece lentamente as criaturas na
    área. Ao lançar a magia, e no início de
    seus turnos, criaturas na área sofrem
    2d8+8 pontos de dano de trevas (Fortitude
    reduz à metade). Alvos que falharem
    no teste ficam imunes a magias
    de cura por uma rodada.
    +2 PM: aumenta o dano em 1d8+4.",
    },
    {
    circulo: 3,
    nome: "Servo Morto-Vivo",
    execucao: "Completa",
    alcance: "Toque",
    alvo: "1 cadáver",
    duracao: "Instantânea",
    escola: "Necromancia",
    descricao: "Esta magia transforma o cadáver de
    um humanoide, animal ou monstro
    em um esqueleto ou zumbi (conforme
    o estado de conservação do corpo). O
    morto-vivo então obedece a todos os
    seus comandos, mesmo suicidas. Se
    quiser que o morto-vivo o acompanhe,
    ele funciona como um aliado iniciante,
    de um tipo a sua escolha entre ajudante,
    atirador, combatente, fortão, guardião
    ou montaria.
    Se não quiser usar o morto-vivo como
    aliado, pode ordenar que ele proteja
    um local específico, atacando invasores
    (nesse caso, use as estatísticas
    de criaturas vistas no Capítulo 7:
    Ameaças). O nível somado de mortos-
    vivos sob seu comando ao mesmo
    tempo não pode exceder o seu próprio
    nível +3, mas você só pode receber
    os benefícios de um deles como aliado
    por vez. Eles duram até serem destruídos
    (um morto-vivo destruído não
    pode ser reanimado).
    Componente material: um ônix negro
    (T$ 100), inserido na boca ou olho
    do cadáver.
    +3 PM: muda o componente material
    para pó de ônix negro (T$ 500). Em
    vez de um zumbi ou esqueleto, cria um
    carniçal. Ele pode funcionar como um
    aliado veterano, escolhido entre ajudante,
    atirador, combatente, fortão ou
    guardião. O resto segue normal.
    +3 PM: muda o componente material
    para pó de ônix negro (T$ 500). Em
    vez de um zumbi ou esqueleto, cria
    uma sombra. Ela pode funcionar como
    um aliado veterano, escolhido entre
    assassino, combatente ou perseguidor.
    O restante da magia segue normal.
    +7 PM: muda o componente material
    para ferramentas de embalsamar (T$
    1.000). Em vez de um zumbi ou esqueleto,
    cria uma múmia. Ela pode funcionar
    como um aliado mestre, escolhido
    entre ajudante, destruidor, guardião
    ou médico. O restante da magia segue
    normal. Requer 4º círculo.",
    },
    {
    circulo: 3,
    nome: "Controlar Água",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "Esfera com 30m de raio",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você pode controlar os movimentos e
    comportamentos da água. Ao lançar a
    magia, escolha um dos efeitos abaixo.
    Congelar: toda a água mundana na área
    é congelada. Criaturas nadando na
    área ficam imóveis; escapar exige gastar
    uma ação padrão e passar num teste
    de Atletismo ou Acrobacia.
    Derreter: gelo mundano na área vira
    água e a magia termina. A critério do
    mestre, isso pode criar terreno difícil.
    Enchente: eleva o nível da água mundana
    na área em até 4,5m. A sua escolha,
    muda área para alvo: uma embarcação.
    O alvo recebe +3m em seu deslocamento
    pela duração do efeito.
    Evaporar: toda a água e gelo mundano
    na área evaporam instantaneamente e
    a magia termina. Elementais da água,
    plantas monstruosas e criaturas com
    imunidade a frio na área sofrem 10d8
    pontos de dano de fogo; outras criaturas vivas recebem metade desse dano
    (Fortitude reduz à metade).
    Partir: diminui o nível de toda água
    mundana na área em até 4,5m. Em um
    corpo d’água raso, isso abre um caminho
    seco, que pode ser atravessado
    a pé. Em um corpo d’água profundo,
    cria um redemoinho que pode prender
    barcos (um teste de Pilotagem com
    CD igual à da magia permite ao piloto
    livrar a embarcação). Elementais da
    água na área ficam lentos.
    +2 PM: aumenta o dano em +2d8.",
    },
    {
    circulo: 3,
    nome: "Controlar Terra",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "9 cubos com 1,5 metros de lado",
    duracao: "Instantânea",
    escola: "Transmutação",
    descricao: "Você manipula a densidade e a forma de
    toda terra, pedra, lama, argila ou areia
    na área. Ao lançar a magia, escolha.
    Amolecer: se afetar o teto, uma coluna
    ou suporte, provoca um desabamento
    que causa 10d6 pontos de dano de
    impacto às criaturas na área (Reflexos
    reduz à metade). Se afetar um piso de
    terra ou pedra, cria terreno difícil de
    areia ou argila, respectivamente.
    Modelar: pode usar pedra ou argila para
    criar um ou mais objetos simples de tamanho
    Enorme ou menor (sem mecanismos
    ou partes móveis). Por exemplo,
    pode transformar um tijolo em
    uma maça, criar uma passagem onde
    antes havia apenas uma parede ou levantar
    uma ou mais paredes que oferecem
    cobertura total (RD 8 e 50 PV
    para cada 3m).
    Solidificar: transforma lama ou areia em
    terra ou pedra. Criaturas com os pés
    na superfície ficam agarradas. Elas podem
    se soltar com uma ação padrão e
    um teste de Acrobacia ou Atletismo.
    +1 PM: aumenta o número de cubos
    de 1,5m em +2.
    +1 PM: muda o alcance para pessoal, o
    alvo para você e a duração para 1 dia.
    Você e seu equipamento fundem-se a
    uma superfície ou objeto adjacente feito
    de pedra, terra, argila ou areia que
    possa acomodá-lo. Você pode voltar ao
    espaço adjacente como uma ação livre,
    dissipando a magia. Enquanto mesclado,
    você não pode falar ou fazer ações
    físicas, mas consegue perceber seus arredores
    normalmente. Pequenos danos
    não o afetam, mas se o objeto (ou o
    trecho onde você está imerso) for destruído,
    a magia é dissipada, você volta
    a um espaço livre adjacente e sofre
    10d6 pontos de dano de impacto.",
    },
    {
    circulo: 3,
    nome: "Potência Divina",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Transmutação",
    descricao: "Você canaliza o poder de sua divindade.
    Você aumenta uma categoria de tamanho
    (seu equipamento muda de
    acordo). Além disso, você recebe Força
    +8 e resistência a dano 10. Você não
    pode lançar magias enquanto estiver
    sob efeito de Potência Divina.
    +2 PM: aumenta o bônus de Força em
    +2.
    +2 PM: aumenta a resistência a dano
    em +2.
    +2 PM: muda o alcance para toque e
    o alvo para 1 criatura. A magia falha
    se o alvo não seguir a mesma divindade
    que você.",
    },
    {
    circulo: 4,
    nome: "Campo Antimagia",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Abjuração",
    descricao: "Você é cercado por uma barreira invisível
    com 3m de raio que acompanha seus
    movimentos. Qualquer magia ou habilidade
    mágica que entre na área da barreira
    é suprimida enquanto estiver lá.
    Criaturas convocadas que entrem em
    um Campo Antimagia desaparecem.
    Elas reaparecem na mesma posição
    quando a duração do Campo termina —
    supondo que a duração da magia que as
    convocou ainda não tenha terminado.
    Criaturas mágicas, como elementais,
    ou construtos imbuídos com magia
    durante sua criação, como golens, não
    são diretamente afetados pelo Campo
    Antimagia. Entretanto, como qualquer
    criatura, não poderão usar magias ou
    habilidades mágicas dentro dele.
    Dissipar Magia não dissipa um Campo
    Antimagia,
    e dois Campos na mesma
    área não se neutralizam. Artefatos
    e deuses maiores não são afetados por
    um Campo Antimagia.",
    },
    {
    circulo: 4,
    nome: "Libertação",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "O alvo fica imune a condições de paralisia
    e ignora qualquer efeito que impeça
    ou restrinja seu deslocamento.
    Por fim, pode usar habilidades que exigem
    liberdade de movimentos mesmo
    se estiver usando armadura ou escudo.
    +2 PM: além do normal, o alvo pode
    caminhar sobre a água ou outros líquidos
    com seu deslocamento normal.
    Entretanto, isso não protege contra
    qualquer efeito que o líquido possa
    causar (o alvo pode andar sobre lava,
    mas ainda vai sofrer dano).
    +2 PM: além do normal, o alvo pode
    escolher 20 em todos os testes de
    Atletismo.
    +2 PM: além do normal, o alvo pode
    escolher 20 em todos os testes de Acrobacia
    e pode fazer todas as manobras
    desta perícia mesmo sem treinamento.
    +5 PM: muda o alcance para curto e o
    alvo para até 5 criaturas.
    +5 PM: pode dissipar Aprisionamento.",
    },
    {
    circulo: 4,
    nome: "Sonho",
    execucao: "10 minutos",
    alcance: "Ilimitado",
    alvo: "1 criatura viva",
    duracao: "Veja o texto",
    escola: "Advinhação",
    descricao: "Você entra nos sonhos de uma criatura.
    Uma vez lá, pode conversar com ela
    até que ela acorde. Se o alvo não estiver
    dormindo quando você lançar a magia,
    você pode permanecer em transe
    até que ele adormeça. Durante o transe,
    você fica indefeso e sem consciência
    dos arredores. Você pode sair do transe
    quando quiser, mas a magia termina.
    +2 PM: transforma o sonho do alvo
    em um pesadelo. A vítima deve fazer
    um teste de Vontade. Se falhar, não
    recupera PV ou PM pela noite, sofre
    1d10 pontos de dano de trevas e acorda
    fatigada. A vítima recebe bônus ou
    penalidades em seu teste de resistência,
    dependendo do conhecimento que
    você tiver dela. Use os mesmos modificadores
    da magia Vidência.
    +1 PM: aumenta o número de alvos
    em +1. Todos os alvos compartilham
    um mesmo sonho (ou pesadelo) entre
    si e com você.",
    },
    {
    circulo: 4,
    nome: "Visão da Verdade",
    execucao: "Movimento",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Você enxerga a forma real das coisas.
    Você pode ver através de camuflagem
    (normal e total), escuridão (normal e
    mágica) e efeitos de ilusão e transmutação
    (enxergando a verdade como formas
    translúcidas ou sobrepostas).
    +1 PM: muda o alcance para toque e o
    alvo para 1 criatura.
    +1 PM: além do normal, o alvo fica
    com sentidos apurados; ele recebe +10
    em todos os testes de Percepção.
    +2 PM: além do normal, o alvo escuta
    falsidades; ele recebe +10 em todos os
    testes de Intuição.
    +4 PM: além do normal, o alvo enxerga
    através de paredes e barreiras com
    30cm de espessura ou menos (as paredes
    e barreiras parecem translúcidas).",
    },
    {
    circulo: 4,
    nome: "Conjurar Elemental",
    execucao: "Completa",
    alcance: "Médio",
    alvo: "",
    duracao: "Sustentada",
    escola: "Convocação",
    descricao: "Esta magia transforma uma porção de
    um elemento inerte em uma criatura
    elemental Grande do tipo do elemento
    alvo. Por exemplo, lançar esta magia
    numa fogueira ou tocha cria um
    elemental do fogo. Você pode criar elementais
    do ar, água, fogo e terra com
    essa magia. O elemental obedece a todos
    os seus comandos e pode funcionar
    como um aliado mestre do tipo
    destruidor (mas sem custo em PM) e
    mais um tipo entre os indicados na lista
    abaixo. Somente você pode ser auxiliado
    pelo elemental e ele não conta
    em seu limite de aliados.
    Ar: assassino, perseguidor ou vigilante.
    Dano de eletricidade.
    Água: ajudante, guardião ou médico.
    Dano de frio.
    Fogo: atirador, combatente ou fortão.
    Dano de fogo.
    Terra: combatente, guardião ou montaria.
    Dano de impacto.
    +5 PM: o elemental muda para Enorme
    e recebe dois tipos de aliado indicados
    no seu elemento.
    +5 PM: você convoca um elemental
    de cada tipo. Você pode ordenar que
    cada elemental auxilie você ou seus
    aliados. Requer 5º círculo.",
    },
    {
    circulo: 4,
    nome: "Mão Poderosa de Talude",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "",
    duracao: "Sustentada",
    escola: "Convocação",
    descricao: "Esta magia cria uma mão flutuante de
    tamanho Grande que sempre se posiciona
    entre você e um oponente a
    sua escolha. A mão fornece cobertura
    (+5 na Defesa) contra esse oponente.
    Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade,
    metamorfose e disfarces mundanos
    não a impedem de protegê-lo. A
    mão tem Defesa 20 e PV e resistências
    iguais aos seus. Com uma ação de movimento,
    você pode comandar a mão
    para que o proteja de outro oponente
    ou para que realize uma das ações
    a seguir.
    Agarrar: a mão usa uma manobra agarrar
    contra o oponente, com bônus de
    +20. A mão mantém o oponente agarrado,
    mas não causa dano.
    Esmagar: a mão esmaga um oponente
    já agarrado, causando 2d6+12 pontos
    de dano.
    Empurrar: a mão afasta o oponente,
    usando uma manobra empurrar com
    bônus de +20. A mão sempre acompanha
    o oponente para empurrá-lo até a
    distância máxima que conseguir, dentro
    do alcance da magia.
    +3 PM: aumenta o bônus dos testes
    em +5 e o dano de impacto em
    +1d6+6.",
    },
    {
    circulo: 4,
    nome: "Viagem Planar",
    execucao: "Completa",
    alcance: "Toque",
    alvo: "Pessoal",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Você viaja instantaneamente para outro
    plano da Criação. Lá, você chega de 10
    a 1.000km do destino pretendido (role
    1d100 e multiplique por 10km).
    Componente material: um bastão de metal
    precioso em forma de forquilha (no
    valor de T$ 1.000). O tipo de metal determina
    para qual plano de existência
    você será enviado. Os metais que levam
    a dimensões específicas podem
    ser difíceis de encontrar, de acordo
    com o mestre.
    +2 PM: muda o alvo para até cinco
    criaturas voluntárias que você esteja
    tocando.",
    },
    {
    circulo: 4,
    nome: "Alterar Memória",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Encantamento",
    descricao: "Você invade a mente do alvo e altera ou
    apaga suas memórias da última hora.
    +2 PM: muda o alcance para cone de
    4,5m e o alvo para criaturas na área.
    +5 PM: você pode alterar ou apagar as
    memórias das últimas 24 horas.",
    },
    {
    circulo: 4,
    nome: "Marionete",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Sustentada",
    escola: "Encantamento",
    descricao: "Esta magia manipula o sistema nervoso
    do alvo. Ao sofrer a magia, e no
    início de cada um de seus turnos, a
    vítima faz um teste de Fortitude. Se
    passar, a magia é anulada. Se falhar,
    todas as suas ações físicas naquele
    turno estarão sob controle do conjurador.
    A vítima ainda tem consciência
    de tudo que acontece à sua volta, podendo
    ver, ouvir e até falar com certo
    esforço (mas não para lançar magias).
    Contudo, seu corpo realiza apenas os
    movimentos que o conjurador deseja.
    A vítima pode ser manipulada para
    se movimentar, lutar, usar habilidades
    de combate... Enfim, qualquer coisa
    de que seja fisicamente capaz.
    Você precisa de linha de efeito para
    controlar a vítima. Se perder o contato,
    não poderá controlá-la — mas ela estará
    paralisada até que o conjurador recupere
    o controle ou a magia termine.",
    },
    {
    circulo: 4,
    nome: "Raio Polar",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você dispara um raio azul esbranquiçado
    de gelo e ar congelante. O alvo
    sofre 10d8 pontos de dano de frio e
    fica preso em um bloco de gelo (paralisado).
    Se passar no teste de resistência,
    sofre metade do dano e, em vez de
    paralisado, fica lento por uma rodada.
    É possível quebrar o gelo para libertar
    uma criatura presa: o bloco tem 20
    PV, resistência a dano 10 e é vulnerável
    a fogo. Uma criatura presa pode
    usar uma ação completa para fazer um
    teste de Força e tentar se libertar do
    gelo; cada vez que passar no teste causa
    10 pontos de dano ao bloco, ignorando
    a RD.
    +3 PM: aumenta o dano em +2d8.
    +5 PM: muda o alvo para área de explosão
    de 6m de raio. Em vez de um
    raio, você dispara uma esfera de gelo
    que explode, causando o efeito da magia
    em todas as criaturas na área.",
    },
    {
    circulo: 4,
    nome: "Relâmpago Flamejante de Reynard",
    execucao: "Duas rodadas",
    alcance: "Médio",
    alvo: "",
    duracao: "Sustentada",
    escola: "Evocação",
    descricao: "Esta é uma magia poderosa, mas lenta,
    desenvolvida pelo metódico e impassível
    arquimago Reynard. Na primeira
    rodada de execução, você invoca
    as energias elementais do fogo e uma de suas mãos fica em chamas. Na segunda
    rodada, invoca as energias elementais
    dos relâmpagos, ficando com
    a outra mão eletrificada. Então, pela
    duração da magia, pode usar uma ação
    de movimento para disparar bolas de
    fogo (6d6 pontos de dano de fogo
    numa explosão de 3m de raio) ou relâmpagos
    (6d6 pontos de dano de eletricidade
    numa linha). Você também
    pode, como uma ação padrão, usar
    as duas mãos num ataque de energia
    mista (12d12 pontos de dano, metade
    de fogo e metade de eletricidade,
    numa explosão de 6m de raio). Você
    precisa estar com as duas mãos livres
    para invocar o efeito misto e isso consome
    toda a energia da magia, terminando-
    a imediatamente.
    +4 PM: aumenta o dano das rajadas
    em +1d6 e o dano da rajada mista em
    +2d12.",
    },
    {
    circulo: 4,
    nome: "Talho Invisível de Edauros",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Cone",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta magia cruel foi desenvolvida pelo
    mago de combate Edauros, quando
    ainda era um bípede. Você faz um gesto
    rápido e dispara uma lâmina de ar
    em alta velocidade. Criaturas na área
    sofrem 8d8 pontos de dano de corte e
    ficam sangrando. Alvos que passem no
    teste de resistência sofrem metade do
    dano e não ficam sangrando.
    +2 PM: aumenta o dano em +2d8.
    +2 PM: muda o alvo para você e a duração
    para sustentada. Uma vez por
    rodada, como uma ação padrão, você
    pode disparar uma lâmina de ar contra
    um alvo em alcance médio, causando
    6d8 pontos de dano de corte (Fortitude
    reduz à metade).",
    },
    {
    circulo: 4,
    nome: "Duplicata Ilusória",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Você cria uma cópia ilusória semirreal
    de... você mesmo! Ela é idêntica
    em aparência, som e cheiro, mas é intangível.
    A cada turno, você escolhe se
    verá e ouvirá através da duplicata ou
    de seu corpo original. A cópia reproduz
    todas as suas ações, incluindo fala.
    Qualquer magia com alcance de toque
    ou maior que você lançar pode se originar
    da duplicata, em vez do seu corpo
    original. As magias afetam outros alvos
    normalmente, com a única diferença
    de se originarem da cópia, em vez
    de você. Se quiser que a duplicata faça
    algo diferente de você, você deve gastar
    uma ação de movimento. Qualquer
    criatura que interagir com a cópia tem
    direito a um teste de Vontade para perceber
    que é uma ilusão. As magias que
    se originam dela, no entanto, são reais.
    A cópia desaparece se sair do alcance.
    +3 PM: cria uma cópia adicional.",
    },
    {
    circulo: 4,
    nome: "Explosão Caleidoscópica",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Esfera de 6m",
    duracao: "Instantânea",
    escola: "Ilusão",
    descricao: "Esta magia cria uma forte explosão de
    luzes estroboscópicas e sons cacofônicos
    que desorientam as criaturas atingidas.
    O efeito que cada criatura sofre
    depende do ND dela.
    ND 4 ou menor: se falhar no teste de resistência,
    fica inconsciente. Se passar,
    fica atordoada por 1d4 rodadas e enjoada
    pelo resto da cena.
    ND entre 5 e 9: se falhar no teste de resistência,
    fica atordoada por 1d4 rodadas
    e enjoada pelo resto da cena. Se
    passar, fica atordoada por 1 rodada e
    enjoada por 1d4 rodadas.
    ND 10 ou maior: se falhar no teste de
    resistência, fica atordoada por 1 rodada
    e enjoada por 1d4 rodadas. Se passar,
    fica desprevenida e enjoada por 1
    rodada.",
    },
    {
    circulo: 4,
    nome: "Assassino Fantasmagórico",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "Cena, até ser descarregada",
    escola: "Necromancia",
    descricao: "Usando os medos subconscientes do
    alvo, você cria uma imagem daquilo
    que ele mais teme. Apenas a própria
    vítima pode ver o Assassino Fantasmagórico
    com nitidez; outras criaturas presentes
    (incluindo o conjurador) enxergam
    apenas um espectro sombrio.
    O espectro surge adjacente a você e
    flutua em direção à vítima com deslocamento
    total de voo 18m por turno.
    Ele é incorpóreo e imune a magias.
    Se o espectro terminar seu turno em
    alcance curto da vítima, ela deve fazer
    um teste de Vontade. Se falhar, ficará
    abalada.
    Se o espectro terminar seu turno adjacente
    à vítima, ela deve fazer um teste
    de Fortitude. Se passar, sofre 6d6 pontos
    de dano de trevas (este dano não
    pode reduzir o alvo a menos de 0 PV e
    não o deixa sangrando). Se falhar, sofre
    um colapso, ficando imediatamente
    com –1 PV e sangrando.
    O espectro persegue o alvo implacavelmente.
    Ele só desaparece se deixar seu
    alvo inconsciente, se for dissipado ou
    ao término da cena.",
    },
    {
    circulo: 4,
    nome: "Muralha de Ossos",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Uma parede de ossos se eleva da terra.
    A parede tem 15m de comprimento,
    3m de altura e 1,5m de espessura. Ela
    pode ter qualquer forma — não precisa
    ser uma linha reta —, mas sua base
    precisa estar no chão e ela não pode
    aparecer de modo que ocupe o espaço
    de uma criatura.
    É possível escalar a parede. Isso exige
    um teste de Atletismo e causa 4d8
    pontos de dano de corte. Também é
    possível destruir o muro para atravessá-
    lo ou libertar uma criatura agarrada.
    Cada trecho de 3m do muro tem Defesa
    8, 40 PV e resistência a corte, frio e
    perfuração 5.
    +2 PM: aumenta o comprimento em
    +15m e altura em +3m (máximo de
    60m de comprimento e 9m de altura).
    +5 PM: o muro é feito de uma massa
de esqueletos animados. Quando você
lança a magia e no início de cada um
de seus turnos, todos os inimigos adjacentes
à muralha sofrem 4d8 pontos
de dano de corte e devem fazer um teste
de Reflexos. Se falharem, são agarrados
pela muralha. Uma criatura agarrada
pode gastar uma ação padrão para
fazer um teste de Acrobacia ou Atletismo
para se soltar.",
    },
    {
    circulo: 4,
    nome: "Animar Objetos",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
    duracao: "Cena",
    escola: "Transmutação",
    descricao: "Você concede vida a objetos inanimados.
    Cada objeto se torna um aliado
    sob seu controle. O tipo dele é escolhido
    da lista de tamanho e ele não conta
    em seu limite de aliados. Com uma
    ação de movimento, você pode comandar
    mentalmente qualquer objeto animado
    dentro do alcance para que auxilie
    você ou outra criatura neste turno.
    Outros usos criativos para os objetos
    ficam a cargo do mestre. Objetos animados têm valores de Força, Destreza
    de acordo com seu tamanho e todos os
    outros atributos nulos; eles têm PV de
    acordo com seu tamanho, não têm valor
    de Defesa ou testes de resistência e
    falham automaticamente em qualquer
    teste oposto, e são imunes a doenças,
    fadiga, sangramento, sono e veneno.
    Diferente de aliados comuns, um objeto
    pode ser alvo de um ataque direto.
    Esta magia não afeta itens mágicos,
    nem objetos que estejam sendo carregados
    por outra criatura.
    +5 PM: muda a duração para permanente
    e adiciona componente material
    (prataria no valor de T$ 1.000). Você
    pode ter um máximo de objetos animados
    igual à metade do seu nível.
    Estatísticas de objetos animados
    Minúsculo: For 4, Des 18, 5 PV; Assassino
    ou Combatente Iniciante.
    Pequeno: For 6, Des 14, 10 PV; Combatente
    ou Guardião Iniciante.
    Médio: For 10, Des 12, 20 PV; Combatente
    ou Guardião Veterano.
    Grande: For 14, Des 10, 40 PV; Fortão,
    Guardião ou Montaria Veterano.
    Enorme: For 18, Des 6, 60 PV; Fortão,
    Guardião ou Montaria Mestre.",
    },
    {
    circulo: 4,
    nome: "Controlar a Gravidade",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Cubo de 12m de lado",
    duracao: "Sustentada",
    escola: "Transmutação",
    descricao: "Você controla os efeitos da gravidade
    dentro da área. Ao lançar a magia, escolha
    um dos efeitos abaixo. Enquanto
    a magia durar, você pode usar uma
    ação padrão para mudar o efeito.
    Aumentar: a gravidade fica mais forte.
    No início de seus turnos, cada criatura
    na área deve fazer um teste de Força.
    Se passar, fica fatigada. Se falhar, fica
    fatigada e caída.
    Inverter: inverte a gravidade da área,
    fazendo com que criaturas e objetos
    “caiam” para cima, atingindo o topo
    (12m) em uma rodada. Se um obstáculo
    (como um teto) impedir o movimento
    das criaturas, elas sofrem 1d6
    pontos de dano de impacto para cada
    1,5m de “queda”. Elas podem então se
    levantar e caminhar no obstáculo, de
    cabeça para baixo. Se não houver obstáculo,
    as criaturas e objetos ficam ﬂutuando
    no topo da área afetada, sem
    poder sair do lugar. Criaturas voadoras
    podem se movimentar normalmente.
    Alguém adjacente a algo que possa
    agarrar tem direito a um teste de Reﬂexos
    para evitar a “queda”. A criatura
    deve permanecer presa pela duração da
    magia; caso contrário “cairá”.
    Reduzir: a gravidade fica mais leve. Criaturas
    ou objetos livres com até 100kg
    ﬂutuam para cima e para baixo conforme
    sua vontade, com deslocamento de
    voo 6m. Criaturas na área recebem +20
    de bônus em testes de Atletismo para
    escalar e saltar. Uma criatura levitando
    fica instável, sofrendo –2 de penalidade
    em testes de ataque.",
    },
    {
    circulo: 4,
    nome: "Desintegrar",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "1 criatura ou objeto",
    duracao: "Instantânea",
    escola: "Transmutação",
    descricao: "Você dispara um raio fino e esverdeado
    que causa 10d12 pontos de dano de
    essência. Se o alvo passar no teste de
    resistência, em vez disso sofre 2d12
    pontos de dano.
    Independentemente do resultado do
    teste de Fortitude, se os PV do alvo forem
    reduzidos a 0 ou menos, ele será
    completamente desintegrado, restando
    apenas pó.
    +4 PM: aumenta o dano total em
    +2d12 e o dano mínimo em +1d12.",
    },
    {
    circulo: 4,
    nome: "Forma Etérea",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Transmutação",
    descricao: "Você e todo o equipamento que está
    com você são transportados para o plano
    etéreo, que existe paralelamente ao
    plano material (o mundo físico). Na
    prática, é como ser transformado em
    um fantasma (mas você ainda é considerado
    uma criatura viva). Uma criatura
    etérea é invisível (pode alterar entre
    visível e invisível como ação livre),
    incorpórea e capaz de se mover em
    qualquer direção, inclusive para cima
    e para baixo. Ela enxerga o plano material,
    mas tudo parece cinza e insubstancial,
    reduzindo o alcance da visão
    e audição para 18m. Magias de abjuração
    e essência afetam criaturas etéreas,
    mas outras magias, não. Da mesma
    forma, uma criatura etérea não
    pode atacar nem lançar magias contra
    criaturas no plano material. Duas criaturas
    etéreas podem se afetar normalmente.
    Uma criatura afetada pode se
    materializar como uma ação de movimento,
    encerrando a magia. Uma criatura
    etérea que se materialize em um
    espaço ocupado é jogada para o espaço
    não ocupado mais próximo e sofre 1d6
    pontos de dano de impacto para cada
    1,5m de deslocamento.
    +5 PM: muda o alcance para toque e
    o alvo para até 5 criaturas voluntárias
    que estejam de mãos dadas. Depois
    que a magia é lançada, as criaturas podem
    soltar as mãos. Requer 5º círculo.",
    },
    {
    circulo: 4,
    nome: "Cúpula de Repulsão",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Uma cúpula de energia invisível o cerca,
    impedindo a aproximação de certas
    criaturas. Escolha um tipo de criatura
    com uma limitação específica, como
    animais mamíferos, monstros insetoides
    ou mortos-vivos corpóreos; ou
    uma raça, como elfos, goblins ou minotauros.
    Criaturas com o tipo e a limitação
    escolhidos (ou com a raça escolhida)
    não podem se aproximar a até
    3m de você. Isso detém ataques corpo
    a corpo, mas não ataques à distância
    ou magias. Se você tentar se aproximar
    além do limite de 3m, rompe a cúpula
    e a magia é dissipada.
    +1 PM: você pode se aproximar sem
    romper a cúpula.
    +4 PM: como normal, mas você pode
    escolher um tipo de criaturas sem limitação
    (todos os animais, todos os
    monstros etc.).
    +8 PM: muda a duração para sustentada.
    Além do normal, qualquer ataque,
    magia ou habilidade de uma criatura
    afetada é desviado pelo efeito e não o
    atinge. Requer 5º círculo.",
    },
    {
    circulo: 4,
    nome: "Premonição",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    escola: "Advinhação",
    descricao: "Vislumbres do futuro permitem que
    você reavalie suas ações. Uma vez por
    rodada, você pode usar uma reação
    para rolar novamente um teste recém
    realizado, mas deve aceitar o resultado
    da nova rolagem.
    +3 PM: muda a execução para reação,
    o alcance para curto, o alvo para
    1 criatura e a duração para instantânea.
    Esta magia só pode ser usada em
    uma criatura que tenha acabado de fazer
    um teste. Obriga a criatura a fazer
    uma nova rolagem de dados e aceitar o
    novo resultado, seja ele um sucesso ou
    falha. Criaturas involuntárias têm direito
    a um teste de Vontade para negar
    o efeito.
    +5 PM: muda a duração para 1 dia.",
    },
    {
    circulo: 4,
    nome: "Guardião Divino",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "",
    duracao: "Cena ou até ser descarregado",
    escola: "Convocação",
    descricao: "A magia invoca um elemental Pequeno,
    com a forma de um orbe feito de luz divina.
    A criatura é incorpórea, imune a
    dano e ilumina como uma tocha. O elemental
    tem 100 pontos de luz.
    Uma vez por rodada, durante o seu
    turno, o elemental pode se movimentar
    (deslocamento de voo 18m) e gastar
    quantos pontos de luz quiser para
    curar dano ou condições de criaturas
    em alcance curto, à taxa de 1 PV por
    1 ponto de luz ou uma condição por 3
    pontos de luz (entre abalado, apavorado,
    alquebrado, atordoado, cego, confuso,
    debilitado, enjoado, esmorecido,
    exausto, fascinado, fatigado, fraco,
    frustrado, ofuscado, pasmo, sangrando,
    surdo ou vulnerável). A magia é
    encerrada quando o elemental fica sem
    pontos de luz.",
    },
    {
    circulo: 4,
    nome: "Conceder Milagre",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Até ser descarregada",
    escola: "Encantamento",
    descricao: "Você transfere um pouco de seu poder
    divino a outra criatura. Escolha
    uma magia de até 2º círculo que você
    conheça; o alvo pode lançar essa magia
    uma vez, sem pagar o custo base
    dela em PM (aprimoramentos podem
    ser usados, mas o alvo deve gastar seus
    próprios PM). Você sofre uma penalidade
    de –3 PM até que o alvo lance a
    magia que ganhou.
    +4 PM: muda o círculo da magia concedida
    para 3º e a penalidade de PM
    para –6.",
    },
    {
    circulo: 4,
    nome: "Círculo da Restauração",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Círculo de 3m de raio",
    duracao: "5 rodadas",
    escola: "Evocação",
    descricao: "Você evoca um círculo de luz que emana
    uma energia poderosa. Qualquer
    criatura viva que termine o turno dentro
    do círculo recupera 3d8+3 PV e 1
    PM. Mortos-vivos e criaturas que sofrem
    dano por luz perdem PV e PM na
    mesma quantidade. Uma criatura só
    pode recuperar PM graças a esta magia
    uma vez por dia.
    +2 PM: aumenta a regeneração de PV
    em 1d8+1.",
    },
    {
    circulo: 4,
    nome: "Cólera de Azgher",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Esfera com 6m de raio",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Você cria uma explosão de luz dourada
    e intensa. Criaturas na área ficam
    cegas por 1d4 rodadas, pegam fogo e
    sofrem 10d6 pontos de dano de fogo
    (mortos-vivos sofrem 10d8 pontos de
    dano). Uma criatura que passe no teste
    de resistência não fica cega, não pega
    fogo e sofre metade do dano.
    +2 PM: aumenta o dano em +2d6
    (+2d8 contra mortos-vivos).
    +2 PM: aumenta a área em +6m de raio.
    +5 PM: a luz purificadora do Deus-Sol
    dissipa todas as magias de necromancia
    ativas na área. Requer 5º círculo.",
    },
    {
    circulo: 4,
    nome: "Manto do Cruzado",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    escola: "Evocação",
    descricao: "Você invoca a energia sagrada de sua
    divindade na forma de um manto de
    energia sólida que reveste seu corpo.
    Esta magia tem duas versões. Você escolhe
    qual versão pode lançar quando
    aprende esta magia. Ela não pode ser
    mudada.
    Manto de Luz: um manto dourado e luminoso.
    No início de cada um de seus
    turnos, você e todos os seus aliados em
    alcance curto recuperam 2d8 PV. Você
    fica imune a dano de trevas e seus ataques
    corpo a corpo causam +2d8 pontos
    de dano de luz.
    Manto de Trevas: um manto negro como
    a noite. No início de cada um de seus
    turnos, todos os inimigos em alcance
    curto sofrem 2d8 pontos de dano
    de trevas. Você cura metade de todo o
    dano causado pela magia.",
    },
    {
    circulo: 4,
    nome: "Terremoto",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "Dispersão com 30m de raio",
    duracao: "1 rodada",
    escola: "Evocação",
    descricao: "Esta magia cria um tremor de terra que
    rasga o solo. O terremoto dura uma rodada,
    durante a qual criaturas sobre o
    solo não podem se mover, atacar ou
    lançar magias.
    O efeito exato depende do terreno.
    Caverna ou subterrâneo: a magia derruba
    o teto, causando 12d6 pontos de
    dano de impacto e agarrando todas as
    criaturas na área. Um teste de Reflexos
    reduz o dano à metade e evita ficar
    agarrado.
    Construção: todas as estruturas na área
    sofrem 200 pontos de dano de impacto,
    o suficiente para derrubar construções
    de madeira ou alvenaria simples,
    mas não de alvenaria reforçada. Criaturas
    em uma construção que desmorone
    sofrem o mesmo efeito de criaturas
    em uma caverna (veja acima).
    Espaço aberto: fendas se abrem no
    chão; cada criatura tem 25% de chance
    (1 em 1d4) de cair em uma delas.
    A vítima tem direito a um teste de Reflexos
    para se agarrar na borda e escapar.
    No início do seu próximo turno
    as fendas se fecham, matando todos
    que estejam dentro delas.
    Penhascos: o penhasco racha, criando
    um desmoronamento que percorre
    uma distância horizontal igual à distância
    vertical da queda. Por exemplo,
    um penhasco com 30m de altura desmorona
    em uma área de 30m de comprimento
    além da base. Qualquer criatura
    no caminho sofre 8d6 pontos de
    dano de impacto e fica agarrada. Um
    teste de Reflexos reduz o dano à metade
    e evita ficar agarrado.
    Rio, lago ou pântano: fissuras se abrem
    sob a água, drenando-a e formando um
    lamaçal. Criaturas na área precisam fazer
    um teste de Reflexos para não
    afundarem na lama e ficarem agarradas.
    No início do seu próximo turno as
    fissuras se fecham, possivelmente afogando
    as criaturas que ficaram agarradas.
    Escapar exige uma ação completa
    e um teste de Atletismo.
    Criaturas agarradas (efeito possível de
    caverna, construção, penhasco e rio,
    lago ou pântano) sofrem 1d6 pontos
    de dano por rodada até serem libertadas,
    o que exige uma ação completa
    e um teste de Atletismo (por parte
    da própria criatura ou de um aliado
    adjacente).",
    },
    {
    circulo: 4,
    nome: "Ligação Sombria",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "1 dia",
    escola: "Necromancia",
    descricao: "Cria uma conexão entre seu corpo e o
    da criatura alvo, deixando uma marca
    idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer
    qualquer dano ou condição, o alvo desta
    magia deve fazer um teste de Fortitude;
    se falhar, sofre o mesmo dano
    que você ou adquire a mesma condição.
    A magia termina se o alvo chegar
    a 0 pontos de vida.
    +5 PM: além do normal, o alvo também
    pode morrer por perda de PV ou
    se você morrer (um teste de Fortitude
    anula a morte).",
    },
    {
    circulo: 4,
    nome: "Controlar o Clima",
    execucao: "Completa",
    alcance: "2km",
    alvo: "Círculo com 2km de raio",
    duracao: "4d12 horas",
    escola: "Transmutação",
    descricao: "Você muda o clima da área onde se
    encontra, podendo criar qualquer
    condição climática: chuva, neve, ventos,
    névoas... Veja o Capítulo 6: O
    Mestre para os efeitos em jogo do
    clima.
    +1 PM (Apenas Druidas): muda o
    raio da área para 3km e duração para
    1d4 dias.",
    },
    {
    circulo: 5,
    nome: "Aura Divina",
    execucao: "Padrão",
    alcance: "Pessoal",
    alvo: "Emanação de 9m de raio",
    duracao: "Cena",
    escola: "Abjuração",
    descricao: "Você se torna um condutor direto da
    energia de sua divindade, emanando
    uma aura brilhante da cor que escolher.
    Seus aliados na área recebem +5 na
    Defesa e em testes de resistência (você
    e aliados devotos da mesma divindade
    que você recebem +10) e ficam imunes
    a encantamento. Além disso, inimigos
    que entrem na área afetada devem fazer
    um teste de Vontade; em caso de
    falha, recebem uma condição a sua escolha
    entre esmorecido, debilitado ou
    lento até o fim da cena. O teste deve
    ser refeito cada vez que a criatura entrar
    novamente na área.
    +2 PM: aumenta os bônus na Defesa e
    em testes de resistência em +1.",
    },
    {
    circulo: 5,
    nome: "Invulnerabilidade",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Abjuração",
    descricao: "Esta magia cria uma barreira mágica
    impenetrável que protege você contra
    efeitos nocivos mentais ou físicos, a
    sua escolha.
    Proteção mental: você fica imune às condições
    abalado, alquebrado, apavorado,
    atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de
    efeitos de encantamento e ilusão.
    Proteção física: você fica imune às condições
    atordoado, cego, debilitado, enjoado,
    envenenado, exausto, fatigado,
    fraco, lento, ofuscado e paralisado,
    além de acertos críticos, ataques furtivos
    e doenças.
    +5 PM: muda o alcance para curto e o
    alvo para 1 criatura.",
    },
    {
    circulo: 5,
    nome: "Lágrimas de Wynna",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Abjuração",
    descricao: "Se falhar no teste de resistência, o alvo
    perde a habilidade de lançar magias arcanas
    até o fim da cena. Se passar, perde
    a habilidade por uma rodada.
    +2 PM: muda a área para círculo de
    6m de raio e o alvo para criaturas escolhidas.
    +5 PM: muda a execução para 1 dia
    e adiciona custo adicional (sacrifício
    de 1 PM). O alvo da magia precisa
    ser mantido em alcance curto do
    conjurador durante toda a execução.
    Ao término, faz um teste de Vontade.
    Se falhar, perde a habilidade de lançar
    magias arcanas permanentemente.
    Se passar, resiste, mas ainda pode
    ser alvo da magia no dia seguinte. Nenhum
    poder mortal é capaz de reverter
    essa perda. Os clérigos de Wynna
    dizem que a deusa chora cada vez que
    este ritual é realizado.",
    },
    {
    circulo: 5,
    nome: "Projetar Consciência",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Advinhação",
    descricao: "Esta magia faz com que sua consciência
    deixe seu corpo e se transporte instantaneamente
    para um local ou para
    perto de uma criatura alvo. Se escolher
    um local, ele precisa ser conhecido por
    você. Se escolher uma criatura, você
    transporta sua consciência até onde a
    criatura estiver, contanto que estejam
    no mesmo plano.
    Você adquire uma forma fantasmagórica
    invisível, mas pode se mostrar usando
    uma ação de movimento. Pode se
    mover em qualquer direção com deslocamento
    de voo 18m e, por ser incorpóreo,
    é capaz de atravessar objetos
    sólidos, mas fica limitado a se mover
    dentro dos limites do local, ou dentro
    de alcance curto da criatura alvo. Você
    pode ver e ouvir como se estivesse presente
    no local e pode falar mentalmente
    com qualquer criatura que possa
    ver, contanto que tenham um idioma
    em comum.
    +10 PM: além do normal, sua projeção
    é capaz de lançar magias que não
    precisem de componentes materiais e
    tenham duração diferente de sustentada.
    Sua forma fantasmagórica funciona
    como na magia Forma Etérea, sendo afetada
    por magias de abjuração e essência,
    mas as magias que ela lança podem
    afetar criaturas corpóreas.",
    },
    {
    circulo: 5,
    nome: "Buraco Negro",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Convocação",
    descricao: "Esta magia cria um vácuo capaz de sugar
    tudo nas proximidades. Escolha
    um espaço desocupado para o buraco
    negro. No início de cada um de seus
    três turnos seguintes, todas as criaturas
    a até 90m do buraco negro, incluindo
    você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e
    são puxadas 30m na direção do buraco.
    Objetos soltos também são puxados.
    Criaturas podem gastar uma ação de
    movimento para se segurar em algum
    objeto fixo, recebendo +2 em seus testes
    de resistência. Criaturas e objetos
    que toquem o buraco negro são sugadas,
    desaparecendo para sempre.
    Não se conhece o destino das coisas
    sugadas pelo buraco negro, uma vez
    que jamais retornam. Alguns estudiosos
    sugerem que podem ser enviadas
    para outros mundos. Muitos clérigos
    de Tenebra acreditam que esta magia
    abre um portal para Sombria, o lar de
    sua deusa, e sonham um dia poder realizar
    essa jornada.
    +5 PM: muda o efeito para que você
    não seja afetado.
    +10 PM: muda o efeito para que criaturas
    escolhidas dentro do alcance não
    sejam afetadas.",
    },
    {
    circulo: 5,
    nome: "Intervenção Divina",
    execucao: "Completa",
    alcance: "Veja o texto",
    alvo: "Veja o texto",
    duracao: "Veja o texto",
    escola: "Convocação",
    descricao: "Você pede a sua divindade para interceder
    diretamente. Você pode:
    • Curar todos os PV e condições de
    até 10 criaturas em alcance longo.
    • Dissipar os efeitos de qualquer magia
    de 4º círculo ou menor.
    Normalmente, Intervenção Divina não
    exige sacrifício de PM — mas você
    pode implorar por algo mais poderoso.
    Nesse caso, a magia requer o sacrifício
    de 2 PM e pode fazer coisas como:
    • Criar um item mundano de até T$
    25.000.
    • Duplicar os efeitos de qualquer magia
    de até 4º círculo. Caso a magia precise
    de um componente material para
    ser lançada, ainda é necessário providenciar
    o componente.
    • Proteger uma cidade de um desastre,
    como uma erupção vulcânica, enchente
    ou terremoto.
    • Ressuscitar uma criatura em alcance
    longo que tenha morrido há até uma
    rodada. A criatura acorda com 1 PV.
    • Qualquer outra coisa que o mestre
    autorize, conforme os desejos e objetivos
    da divindade do conjurador.",
    },
    {
    circulo: 5,
    nome: "Palavra Primordial",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Encantamento",
    descricao: "Você pronuncia uma palavra do idioma
    primordial da Criação, que causa um
    dos efeitos abaixo, a sua escolha.
    Atordoar: a criatura fica atordoada por
    2d4 rodadas. Se passar no teste de
    resistência, fica desprevenida por 1d4
    rodadas.
    Cegar: a criatura fica cega. Se passar no
    teste de resistência, fica ofuscada por
    1d4 rodadas.
    Matar: a criatura morre. Além do teste
    de Vontade, a criatura tem direito
    a um teste de Fortitude. Se passar em
    qualquer um deles, em vez de morrer
    sofre 10d8 pontos de dano de trevas e
    fica sangrando.",
    },
    {
    circulo: 5,
    nome: "Fúria do Panteão",
    execucao: "Completa",
    alcance: "Longo",
    alvo: "Nuvem de tempestade com 90m de lado",
    duracao: "Sustentada",
    escola: "Evocação",
    descricao: "Você cria uma nuvem de tempestade,
    com trovões e relâmpagos. Enquanto
    você sustenta a magia, ela gera os
    seguintes efeitos, sempre no início do
    seu turno.
    1ª rodada (quando você lança a magia): trovões
    ribombam. Criaturas na área sofrem
    6d6 pontos de dano de impacto e
    ficam surdas por uma rodada.
    2ª rodada: relâmpagos caem. Até seis
    criaturas a sua escolha na área sofrem
    10d8 pontos de dano de eletricidade.
    3º rodada em diante: chuva gélida e ventos
    causam 6d6 pontos de dano de frio
    por rodada. Além disso, reduzem a visibilidade
    (como a magia Névoa), transformam
    toda a área em terreno difícil
    e tornam ataques à distância impossíveis.
    Por fim, a área conta como condição
    terrível para conjuradores lançarem
    magias.",
    },
    {
    circulo: 5,
    nome: "Segunda Chance",
    execucao: "Padrão",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Um brilho alaranjado, na forma de asas
    de fênix, emana do alvo. Ele recupera
    200 pontos de vida e se cura de qualquer
    das seguintes condições: abalado,
    apavorado, alquebrado, atordoado,
    cego, confuso, debilitado, enjoado, envenenado,
    esmorecido, exausto, fascinado,
    fatigado, fraco, frustrado, lento,
    ofuscado, paralisado, pasmo ou surdo.
    +1 PM: aumenta a cura em +20 PV.
    +2 PM: muda o alcance para curto e o
    alvo para até 5 criaturas.
    +5 PM: muda o alvo para uma criatura
    que tenha morrido há até uma rodada.
    Esta magia pode curá-la.",
    },
    {
    circulo: 5,
    nome: "Reanimação Impura",
    execucao: "Completa",
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Necromancia",
    descricao: "Você reanima uma criatura morta recentemente
    (dentro da mesma cena),
    trazendo sua alma de volta ao corpo
    de forma forçada. O tipo da criatura
    muda para morto-vivo, mas ela retém
    suas memórias e habilidades de
    quando estava viva, podendo inclusive
    lançar magias. A criatura pode pensar
    e falar livremente, mas obedece cegamente
    a seus comandos. Quando a
    cena termina, a criatura volta a ficar
    morta, mas muitos clérigos malignos
    usam meios para guardar e preservar
    o corpo de criaturas poderosas para serem
    reanimadas dessa forma quando
    necessário. Se for destruída, a criatura
    não pode ser reanimada novamente
    com esta magia.",
    },
    {
    circulo: 5,
    nome: "Roubar a Alma",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Necromancia",
    descricao: "Você rouba a alma da vítima, armazenando-
    a em um objeto. Se o alvo passar
    no teste de resistência, sente o impacto
    de sua alma ser puxada para fora
    do corpo e fica pasmo por 1 rodada. Se
    falhar, seu corpo fica caído, inconsciente
    e inerte, enquanto sua alma é transportada
    para dentro do objeto. O corpo
    não envelhece nem se decompõe,
    permanecendo em estase. Ele pode ser
    atacado e destruído normalmente. O
    objeto escolhido deve custar T$ 1.000
    por nível da criatura. Um objeto que
    não seja valioso o bastante se quebrará
    quando a magia for lançada (embora
    personagens não conheçam o conceito
    de “nível” dentro do mundo de
    jogo, podem ter noção do poder geral
    de uma criatura específica, estimando
    assim o valor do objeto). Se o objeto
    for destruído, a magia se esvai. Se o
    corpo ainda estiver disponível, a alma
    retorna para ele. Caso contrário, escapa
    para os Mundos dos Deuses.
    Custo adicional: sacrifício de 1 PM.
    +5 PM: o objeto que abriga a alma detém
    os mesmos PM totais que o alvo.
    Se estiver empunhando o objeto, você
    pode usar esses PM para lançar magias
    no lugar dos seus. O objeto recupera
    PM por dia como se o personagem estivesse
    em descanso normal.
    +10 PM: como uma reação ao lançar
    esta magia, você possui o corpo sem
    alma do alvo, como na magia Possessão
    (mesmo que não conheça a magia).",
    },
    {
    circulo: 5,
    nome: "Toque da Morte",
    execucao: "",
    alcance: "",
    alvo: "",
    duracao: "",
    escola: "Necromancia",
    descricao: "Sua mão exala energias letais. Se a
    criatura tocada falhar no teste de Fortitude,
    seus PV são reduzidos a –10; se
    passar, sofre 10d8 pontos de dano de
    trevas.
    +2 PM: muda o alcance para curto.
    Em vez de tocar no alvo, você dispara
    um raio púrpura da ponta de seu dedo
    indicador.
    +10 PM: muda o alcance para curto
    e o alvo para inimigos no alcance. Em
    vez de tocar no alvo, você dispara raios
    púrpuras da ponta de seus dedos.",
    },
    {
    circulo: 5,
    nome: "Aprisionamento",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Permanente",
    escola: "Abjuração",
    descricao: "Você cria uma prisão mágica para aprisionar
    uma criatura. Se falhar no teste
    de resistência, o alvo sofre o efeito da
    magia; se passar, fica imune a esta magia
    por uma semana. Enquanto estiver
    aprisionada, a criatura não precisa respirar
    e alimentar-se, e não envelhece.
    Magias de adivinhação não conseguem
    localizar ou perceber o alvo. Ao lançar a
    magia, você escolhe uma das seguintes
    formas de prisão. O componente material
    varia, mas todos custam T$ 1.000.
    Acorrentamento: o alvo é preso por correntes
    firmemente enraizadas no chão,
    que o mantém no lugar. O alvo fica paralisado
    e não pode se mover ou ser
    movido por qualquer meio. Componente
    Material: uma fina corrente de mitral.
    Contenção Mínima: o alvo diminui para
    uma altura de 2 centímetros e é preso
    dentro de uma pedra preciosa ou objeto
    semelhante. A luz pode passar através
    da pedra preciosa normalmente
    (permitindo que o alvo veja o lado de
    fora e outras criaturas o vejam), mas
    nada mais pode passar, nem por meio
    de teletransporte ou viagem planar. A
    pedra não pode ser quebrada enquanto
    o alvo estiver dentro. Componente Material:
    uma pedra preciosa, como um diamante
    ou rubi.
    Prisão Dimensional: o alvo é transportado
    para um pequeno semiplano protegido
    contra teletransporte e viagens
    planares. O semiplano pode ser um labirinto,
    uma gaiola, uma torre ou qualquer
    estrutura ou área confinada similar
    de sua escolha. Componente Material:
    uma representação em miniatura da
    prisão, feita de jade.
    Sepultamento: o alvo é sepultado bem
    fundo abaixo da terra, dentro de uma
    esfera de força mágica. Nada pode destruir
    ou atravessar a esfera, nem mesmo
    teletransporte ou viagens planares.
    Componente Material: um pequeno orbe
    de adamante.
    Sono Eterno: o alvo adormece e não pode
    ser acordado. Componente Material: fruta
    preparada com ervas soníferas raras.
    Quando a magia é lançada, você deve
    especificar uma condição que fará com
    que ela termine e solte o alvo. A condição
    pode ser tão específica ou elaborada
    quanto você quiser, mas deve
    ser possível de acontecer. As condições
    podem se basear no nome, identidade
    ou divindade padroeira de uma criatura,
    ou em ações ou qualidades observáveis,
    mas nunca em estatísticas intangíveis,
    como nível, classe ou pontos de
    vida. O mestre tem a palavra final sobre
    se uma condição é válida ou não.
    Dissipar Magia pode dissipar o efeito,
    mas deve ser conjurada com o aprimoramento
    de 5º círculo e alvo na prisão.",
    },
    {
    circulo: 5,
    nome: "Engenho de Mana",
    execucao: "padrão",
    alcance: "Médio",
    alvo: "Disco de Energia com 1,5m",
    duracao: "Sustentada",
    escola: "Abjuração",
    descricao: "Esta poderosa magia manifesta um disco
    de energia que lembra uma roda de
    engenho e flutua no ponto em que foi
    conjurado. O disco é intangível, imune
    a dano e não pode ser movido. Enquanto
    estiver ativo, tenta absorver qualquer
    magia lançada em alcance médio dele,
    como uma ação automática de contramágica,
    usando seu teste de Misticismo.
    Caso vença o teste, o engenho não
    só anula a magia como absorve os PM
    usados para lançá-la, acumulando PM
    temporários. No seu turno, se estiver
    ao alcance do disco, você pode gastar
    PM guardados nele para lançar magias.
    +1 PM: em vez de flutuar no ponto em
    que foi conjurado, o disco flutua atrás de
    você, mantendo-se sempre adjacente.
    +4 PM: muda a duração para 1 dia.",
    },
    {
    circulo: 5,
    nome: "Alterar Destino",
    execucao: "Reação",
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Instantânea",
    escola: "Advinhação",
    descricao: "Sua mente visualiza todas as possibilidades
    de um evento, permitindo a
    você escolher o melhor curso de ação.
    Você automaticamente passa em um
    teste de resistência ou evita um ataque
    até o início de seu próximo turno.",
    },
    {
    circulo: 5,
    nome: "Chuva de Meteoros",
    execucao: "Completa",
    alcance: "Longo",
    alvo: "Explosão com 9m de raio",
    duracao: "Instantânea",
    escola: "Convocação",
    descricao: "Esta magia faz com que um meteoro
    caia dos céus, devastando a área de impacto
    e seus arredores. Criaturas na
    área sofrem 20d6 pontos de dano (metade
    impacto, metade fogo).
    +2 PM: criaturas que falhem no teste
    de resistência ficam caídas e presas
    sob os escombros (agarradas). Uma
    criatura agarrada pode escapar gastando
    uma ação padrão e passando em um
    teste de Atletismo. Toda a área afetada
    fica coberta de escombros, sendo considerada
    terreno difícil.
    +10 PM: aumenta o número de meteoros
    em +1. Os meteoros podem
    cair na mesma área, para acumular o
    dano (uma criatura atingida por dois
    meteoros, por exemplo, sofre 40d6
    pontos de dano) ou em uma área diferente
    (mas ainda dentro do alcance)
    para afetar mais alvos.",
    },
    {
    circulo: 5,
    nome: "Semiplano",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "",
    duracao: "1 dia",
    escola: "Convocação",
    descricao: "Você cria um semiplano — uma dimensão
    particular. Você pode entrar
    no semiplano gastando uma ação padrão
    e 1 PM, desaparecendo do plano
    material como se tivesse se teletransportado.
    Você pode levar criaturas voluntárias
    que esteja tocando, ao custo
    de 1 PM por criatura extra. Você também
    pode levar objetos que esteja tocando,
    ao custo de 1 PM por 200kg.
    Uma vez no semiplano, você pode gastar
    uma ação completa para voltar ao
    plano material, no mesmo local onde
    estava. Caso conheça a magia Viagem
    Planar, pode lançá-la para voltar ao plano
    material em outro local.
    Você escolhe a forma e a aparência do
    semiplano — uma caverna, um asteroide
    que singra o éter, um palacete
    de cristal etc. Ele contém ar, luz e calor,
    mas além disso é vazio. Entretanto,
    você pode levar itens (mobília, ferramentas
    etc.) a cada viagem.
    +2 PM: adiciona alvo (1 criatura).
    Você cria uma semiplano labiríntico e
    expulsa o alvo para ele. A cada rodada,
    a vítima tem direito a um teste de Inteligência
    (CD 30), com bônus cumulativo
    de +1 para cada teste já realizado,
    para escapar do labirinto. Quando
    o alvo escapa, a magia termina e o alvo
    reaparece no plano material no mesmo
    local onde estava quando a magia foi
    lançada. Magias como Salto Dimensional
    e Teletransporte
    não ajudam a escapar
    do labirinto, mas Viagem Planar, sim.
    +5 PM: muda a duração para permanente
    e adiciona componente material
    (diorama do semiplano feito de materiais
    preciosos no valor de T$ 5.000).
    Você pode lançar a magia diversas vezes
    para aumentar as dimensões do semiplano
    em +30m de lado a cada vez.",
    },
    {
    circulo: 5,
    nome: "Legião",
    execucao: "Padrão",
    alcance: "Médio",
    alvo: "Até 10 criaturas na área",
    duracao: "Sustentada",
    escola: "Encantamento",
    descricao: "Você domina a mente dos alvos. Os alvos
    obedecem cegamente a seus comandos,
    exceto ordens claramente suicidas.
    Um alvo tem direito a um teste
    no final de cada um de seus turnos para
    se livrar do efeito. Alvos que passarem
    no teste ficam pasmos por 1 rodada enquanto
    recuperam a consciência.
    +1 PM: aumenta o número de alvos
    em +1.",
    },
    {
    circulo: 5,
    nome: "Possessão",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "1 dia",
    escola: "Encantamento",
    descricao: "Você projeta sua consciência no corpo
    do alvo. Enquanto possuir uma criatura,
    você assume o controle total do corpo
    dela. O seu próprio corpo fica inconsciente
    e a consciência do alvo fica
    inerte. Em termos de jogo, você continua
    usando a sua ficha, mas com os
    atributos físicos e deslocamento da
    criatura. Se o alvo passar no teste de
    resistência, sabe que você tentou possuí-
    lo e fica imune a esta magia por um
    dia. Caso o corpo da criatura morra enquanto
    você a possui, a criatura morre
    e você deve fazer um teste de Vontade
    contra a CD da sua própria magia. Se
    passar, sua consciência retorna para o
    seu corpo (contanto que esteja dentro
    do alcance). Do contrário, você também
    morre. Retornar para o seu corpo
    voluntariamente é uma ação livre.
    +5 PM: você ganha acesso às habilidades
    de raça e classe da criatura.
    +5 PM: enquanto a magia durar e você
    estiver dentro do alcance do seu corpo
    original, pode “saltar” de uma criatura
    possuída para outra. O novo alvo tem
    direito a um teste de Vontade. Se falhar,
    você assume o controle do corpo dele
    e o alvo anterior recobra a consciência.
    +5 PM: muda a duração para permanente,
    mas destrói seu corpo original
    no processo. Uma criatura possuída
    pode fazer um teste de Vontade no começo
    do dia para retomar seu corpo.
    Se passar, recobra a consciência (e a
    sua própria consciência fica inerte). O
    teste se repete no início de cada dia. Se
    o corpo de uma criatura possuída morrer
    e houver outra criatura em alcance
    curto, você pode tentar possuí-la como
    uma reação. Enquanto houver novos
    corpos para possuir, você é imortal!",
    },
    {
    circulo: 5,
    nome: "Barragem Elemental de Vectorius",
    execucao: "Padrão",
    alcance: "Longo",
    alvo: "4 esferas elementais",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Criada pelo arquimago Vectorius, esta
    magia produz quatro esferas elementais
    (ácido, eletricidade, fogo e frio)
    que voam até um ponto a sua escolha.
    Quando atingem o ponto escolhido,
    explodem causando 6d6 pontos de
    dano (cada uma do seu tipo) numa esfera
    com 12m de raio. Um teste de Reflexos
    reduz o dano à metade. Você
    pode mirar cada esfera em uma criatura
    ou ponto diferente. Uma criatura
    ao alcance da explosão de mais de uma
    esfera deve fazer um teste de resistência
    para cada uma. Além disso, as esferas
    causam os seguintes efeitos em
    criaturas que falharem em seus respectivos
    testes de resistência:
    • Esfera de ácido: vulnerável até o fim
    da cena.
    • Esfera elétrica: atordoado por uma
    rodada.
    • Esfera de fogo: em chamas.
    • Esfera de frio: lento até o fim da cena.
    +5 PM: aumenta o dano de cada esfera
    em +2d6.
    +5 PM: muda o tipo de dano de todas
    as esferas para essência (mas elas ainda
    causam os outros efeitos como se
    seu tipo de dano não mudasse).",
    },
    {
    circulo: 5,
    nome: "Deflagração de Mana",
    execucao: "Completa",
    alcance: "Pessoal",
    alvo: "Explosão de 15m de raio",
    duracao: "",
    escola: "Evocação",
    descricao: "Após concentrar seu mana, você emana
    energia, como uma estrela em plena
    terra. Todas as criaturas na área sofrem
    150 pontos de dano de essência e todos
    os itens mágicos (exceto artefatos) tornam-
    se mundanos. Você não é afetado
    pela magia. Alvos que passem no teste
    de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar
    após um dia.
    +1 PM: aumenta o dano em 10.
    +5 PM: afeta apenas criaturas a sua
    escolha.",
    },
    {
    circulo: 5,
    nome: "Mata-Dragão",
    execucao: "Duas rodadas",
    alcance: "Pessoal",
    alvo: "Cone de 30m",
    duracao: "Instantânea",
    escola: "Evocação",
    descricao: "Esta é uma das mais poderosas magias
    de destruição existentes. Após entoar
    longos cânticos, o conjurador dispara
    uma carga de energia que varre
    uma enorme área à sua frente, causando
    20d12 pontos de dano de essência
    em todas as criaturas, construções e
    objetos livres atingidos. Apesar de seu
    poder destrutivo, esta magia é lenta,
    tornando seu uso difícil em combate.
    Além disso, pode causar tantos danos
    colaterais que poucos conjuradores se
    arriscam a utilizá-la.
    +1 PM: aumenta o dano em 1d12.",
    },
    {
    circulo: 5,
    nome: "Réquiem",
    execucao: "Completa",
    alcance: "Curto",
    alvo: "Criaturas escolhidas",
    duracao: "Sustentada",
    escola: "Ilusão",
    descricao: "Esta magia cria uma ilusão particular
    para cada uma das criaturas que atingir.
    Enquanto a magia durar, no início
    de cada um de seus turnos, cada criatura
    afetada deve fazer um teste de Vontade;
    se falhar, acha que não tomou as
    ações que realmente fez no turno anterior
    e é obrigada a repetir as mesmas
    ações neste turno, com uma penalidade
    cumulativa de –5 em todos os testes
    para cada vez que se repetir (a penalidade
    não se aplica ao teste de Vontade
    contra esta magia). Por exemplo,
    se a criatura se aproximou de um alvo
    e o atacou, precisa se aproximar desse
    mesmo alvo e atacar novamente. A
    ação repetida consome PM e recursos
    normalmente e, caso exija um teste de
    resistência, qualquer alvo faz esse teste
    com um bônus igual ao da penalidade
    desta magia.",
    },
    {
    circulo: 5,
    nome: "Sombra Assassina",
    execucao: "Padrãp",
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Cena",
    escola: "Ilusão",
    descricao: "Esta magia cria uma duplicata ilusória
    do alvo na forma de uma silhueta, ligada
    a ele como se fosse uma manifestação
    sólida de sua própria sombra. A
    duplicata de sombras segue automaticamente
    o alvo. Sempre que o alvo faz
    uma ação hostil — fazer um ataque,
    usar uma habilidade, lançar uma magia
    — a sombra imediatamente realiza
    a mesma ação contra o alvo, usando as
    mesmas estatísticas e rolagens. A sombra
    pode ser atacada, tem as mesmas
    estatísticas do alvo e é destruída quando
    chega a 0 PV. Se o alvo passar no
    teste de resistência, a sombra desaparece
    no final do turno do alvo, depois
    de copiar sua ação dessa rodada.
    +10 PM: muda o alvo para criaturas
    escolhidas na área.",
    },
    {
    circulo: 5,
    nome: "Controlar o Tempo",
    execucao: "Padrão",
    alcance: "Curto",
    alvo: "Veja o texto",
    duracao: "Veja o texto",
    escola: "Transmutação",
    descricao: "Aquele que controla o tempo controla
    o mundo. Escolha um dos efeitos
    a seguir.
    Congelar o tempo: você entra em um estado
    atemporal que faz todas as criaturas
    e efeitos parecerem congelados.
    Você pode agir livremente por 3 rodadas
    de tempo aparente. Durante essas
    rodadas, efeitos contínuos não o afetam,
    mas criaturas e objetos em posse
    de criaturas ficam imunes a seus ataques
    e magias. Magias de área e com
    duração maior que este efeito vão
    agir normalmente quando o congelamento
    acabar. Este efeito costuma ser
    usado para fortalecer suas defesas e
    invocar criaturas.
    Saltar no tempo: você e até 5 criaturas
    voluntárias são transportadas de 1 a
    24 horas para o futuro, desaparecendo
    com um brilho. Vocês ressurgem
    no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de
    vista, nenhum tempo se passou. Se
    um objeto sólido agora ocupa o espaço
    de uma criatura, ela ressurge na
    área vazia mais próxima.
    Voltar no tempo: você revive os últimos
    segundos. Todas as ações da rodada anterior
    são desfeitas (incluindo perda de
    PV e PM). Tudo retorna à posição em
    que estava no início do seu turno na última
    rodada e você é o único que sabe
    o que acontecerá. Todos os outros personagens
    envolvidos na cena devem repetir
    as mesmas ações — exceto se você
    fizer algo a respeito (como avisar seus
    aliados sobre o que vai acontecer).",
    },
    {
    circulo: 5,
    nome: "Desejo",
    execucao: "Completa",
    alcance: "Veja o texto",
    alvo: "Veja o texto",
    duracao: "Veja o texto",
    escola: "Transmutação",
    descricao: "Esta é a mais poderosa das magias arcanas,
    permitindo alterar a realidade a
    seu bel-prazer. Você pode:
    • Dissipa os efeitos de qualquer magia
    de 4º círculo ou menor.
    • Transportar até 10 criaturas voluntárias
    em alcance longo para qualquer
    outro local, em qualquer plano.
    • Desfazer um acontecimento recente.
    A magia permite que um teste realizado
    por uma criatura em alcance longo na
    última rodada seja realizado novamente.
    Por exemplo, se um aliado morreu
    na última rodada devido ao ataque de
    um inimigo, você pode obrigar o inimigo
    a refazer esse ataque.
    Normalmente, Desejo não exige sacrifício
    de PM — mas você pode desejar
    por algo mais poderoso. Nesse caso,
    a magia requer o sacrifício de 2 PM e
    pode fazer coisas como:
    • Criar um item mundano de até T$
    25.000.
    • Duplicar os efeitos de qualquer magia
    de até 4º círculo. Caso a magia precise
    de um componente material para
    ser lançada, ainda é necessário providenciar
    o componente.
    • Aumentar um atributo de uma criatura
    em +1. Um mesmo atributo pode ser
    aumentado em até +5 através do uso
    de Desejo.
    Desejo pode gerar efeitos ainda mais
    poderosos, mas tenha cuidado! Desejar
    a fortuna de um rei pode transportá-
    lo para a sala de tesouro real, onde
    você será preso ou morto; desejar ser
    imortal pode transformá-lo em morto-
    vivo, e assim por diante. Qualquer
    efeito que não encaixe na lista acima
    deve ser decidido pelo mestre.",
    },
    ];