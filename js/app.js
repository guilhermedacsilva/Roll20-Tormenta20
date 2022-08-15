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

$(document).ready(function () {
  $('#tabelaPoderes').DataTable({
    //info: false,
    data: dbPoderes,
    columns: [
        { title: 'Tipo', data: 1 },
        {
          title: 'Nome',
          data: 2,
          fnCreatedCell: prepararLinkPoder
        },
        { title: 'Descrição', data: 3 },
    ],
  });
});

function fichaInserirPoder(poder, colunaDireita) {
  console.log('fichaInserirPoder()');
  console.log(colunaDireita);
  let fichasAbertas = document.querySelectorAll('div[role="dialog"]');

  if (fichasAbertas.length == 0) {
    alert("Nenhuma ficha encontrada.");
    return;
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