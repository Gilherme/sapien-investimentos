
    let variacao = document.querySelectorAll('.variacao');
    for(let i in variacao){
        let valor = parseInt(variacao[i].innerHTML)
        if(valor < 0){
            variacao[i].className = 'text-red variacao';
        }else{
            variacao[i].className = 'text-green variacao'
        }
    }

// ticket decotações 
let tickers = document.querySelector(".tickers")

fetch('../acoes.json')
    .then(response => response.json())
    .then(data => data.forEach(acao => {
        
        let ticker = document.querySelector(".ticker")
        tickers.appendChild(ticker)

        ticker.innerHTML =`
        <span class="ativo">${acao.codigo}</span>
        <span class="variacao">${acao.variacao}</span>
        <span class="preco">${acao.preco}</span>
        ` 
    })
    )



