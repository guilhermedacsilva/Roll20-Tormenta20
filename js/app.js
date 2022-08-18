function prepararLinkPoder(nTd, sData, oData, iRow, iCol) {
  $(nTd).html(`<span class="nome-click">${oData[2]}</span>`);
  nTd.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fichaInserirPoder,
      args: [dbPoderes[oData[0]], $('#poderColunaD').prop("checked")],
    });
  });
}

function prepararLinkMagia(nTd, sData, oData, iRow, iCol) {
  $(nTd).html(`<span class="nome-click">${oData.nome}</span>`);
  nTd.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fichaInserirMagia,
      args: [oData],
    });
  });
}

function cortarTexto(nTd, sData, oData, iRow, iCol) {
  if (oData.descricao.length > 150) {
    $(nTd).html(oData.descricao.substring(0,150)+'...');
  }
}

$(document).ready(function () {
  //gerarArquivoMagias(); return;
  var tabelaPoderes = $('#tabelaPoderes').DataTable({
    data: dbPoderes,
    columns: [
        { title: 'Tipo', data: 1, orderData: [0,1] },
        {
          title: 'Nome',
          data: 2,
          orderData: 1,
          fnCreatedCell: prepararLinkPoder
        },
        { title: 'Descrição', data: 3, orderData: 2 },
    ],
  });
  
  var tabelaMagias = $('#tabelaMagias').DataTable({
    data: dbMagias,
    columns: [
        { title: 'C', data: 'circulo', orderData: [0,1,2] },
        { title: 'Escola', data: 'escola', orderData: [1,0,2] },
        {
          title: 'Nome',
          data: 'nome',
          orderData: 2,
          fnCreatedCell: prepararLinkMagia
        },
        { title: 'Descrição',
        data: 'descricao',
        orderData: 3,
        fnCreatedCell: cortarTexto },
    ],
  });

  $('#tabelaMagias').css('width', '');
  $('#tabelaMagias th').css('width', '');
});


function gerarArquivoMagias() {
  let html = 'dbMagias = [<br>';
  for (let [_, magia] of Object.entries(allSpells)) {
    html += '{<br>';
    html += 'circulo: '+ magia.spellCircle + ',<br>';
    html += 'nome: "'+ magia.nome + '",<br>';
    html += 'execucao: "'+ magia.execucao + '",<br>';
    html += 'alcance: "'+ magia.alcance + '",<br>';
    html += 'alvo: "'+ magia.alvo + '",<br>';
    html += 'duracao: "'+ magia.duracao + '",<br>';
    html += 'escola: "'+ magia.school + '",<br>';
    html += 'descricao: "",<br>';
    html += '},<br>';
  }
  html += '];';
  $('body').html(html);
}

function getFichaAtiva() {
  let fichasAbertas = document.querySelectorAll('div[role="dialog"]');

  if (fichasAbertas.length == 0) {
    alert("Nenhuma ficha encontrada.");
    return null;
  }
  
  let fichaAtual = Array.from(fichasAbertas)
           .map(a => [a,parseFloat(window.getComputedStyle(a).zIndex)] )
           .filter(a => !isNaN(a[1]))
           .sort((a,b) => a[1]-b[1])
           .pop()[0];

  return fichaAtual.querySelector('iframe').contentWindow.document.body;
}

function fichaInserirPoder(poder, colunaDireita) {
  let fichasAbertas = document.querySelectorAll('div[role="dialog"]');

  if (fichasAbertas.length == 0) {
    alert("Nenhuma ficha encontrada.");
    return null;
  }
  
  let fichaAtual = Array.from(fichasAbertas)
           .map(a => [a,parseFloat(window.getComputedStyle(a).zIndex)] )
           .filter(a => !isNaN(a[1]))
           .sort((a,b) => a[1]-b[1])
           .pop()[0];

  var fichaConteudo = fichaAtual.querySelector('iframe').contentWindow.document.body;

  let poderes = fichaConteudo.querySelectorAll('[class="sheet-container-reapeater"]');
  let htmlName = 'ability';
  if (colunaDireita) {
    poderes = poderes[1];
    htmlName = 'power';
  } else {
    poderes = poderes[0];
  }
  
  poderes.querySelector('[class="btn repcontrol_add"]').click();
  let itens = poderes.querySelectorAll('[class="repitem"]');
  var novoItem = itens[itens.length-1];

  novoItem.querySelector(`[name="attr_name${htmlName}"]`).value = poder[2];
  novoItem.querySelector(`[name="attr_${htmlName}description"]`).value = poder[3];

  setTimeout(function(){
    novoItem.querySelector(`[name="attr_name${htmlName}"]`).dispatchEvent(new Event('blur'));
    novoItem.querySelector(`[name="attr_${htmlName}description"]`).dispatchEvent(new Event('blur'));
  },10);

}

function fichaInserirMagia(magia) {
  let fichasAbertas = document.querySelectorAll('div[role="dialog"]');

  if (fichasAbertas.length == 0) {
    alert("Nenhuma ficha encontrada.");
    return null;
  }
  
  let fichaAtual = Array.from(fichasAbertas)
           .map(a => [a,parseFloat(window.getComputedStyle(a).zIndex)] )
           .filter(a => !isNaN(a[1]))
           .sort((a,b) => a[1]-b[1])
           .pop()[0];

  var fichaConteudo = fichaAtual.querySelector('iframe').contentWindow.document.body;

  let fieldset1 = fichaConteudo.querySelector('[class="repeating_spells1"]');
  let buttonAdd1 = fieldset1.nextElementSibling.nextElementSibling.getElementsByClassName('btn repcontrol_add');
  console.log(buttonAdd1);
  return;
  let htmlName = 'ability';
  if (colunaDireita) {
    poderes = poderes[1];
    htmlName = 'power';
  } else {
    poderes = poderes[0];
  }
  
  poderes.querySelector('[class="btn repcontrol_add"]').click();
  
}


/*
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

*/