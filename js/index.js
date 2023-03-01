
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

        let ticker = document.createElement('div')
        ticker.className = 'ticker'
        tickers.appendChild(ticker)

        ticker.innerHTML =`
        <span class="ativo">${acao.codigo}</span>
        <span class="variacao">${acao.variacao}</span>
        <span class="preco">${acao.preco}</span>
        ` 
    })
    )

// Nav Ações
let navAcoes = document.querySelector('.navAcoes')

fetch('../acoes.json')
    .then(response => response.json())
    .then(data => data.forEach(acao => {
        
        let navAcoesNav = document.createElement('div')
        navAcoesNav.className = 'navAcoesNav'
        navAcoes.appendChild(navAcoesNav)

        navAcoesNav.innerHTML =`
        <span class="ativo">${acao.codigo}</span>
        <span class="variacao">${acao.variacao}</span>
        <span class="preco">${acao.preco}</span>
        <button class="mais">+</button>
        ` 
    })
    )

// Gráfico

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else {
        menuMobile.classList.add('open')
    }
}




