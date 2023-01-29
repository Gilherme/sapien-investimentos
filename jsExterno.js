
let containerIndex01 = document.getElementById('containerIndex01')
let containerNoticias01 = document.getElementById('containerNoticias01')
let containerCotacoes = document.getElementById('containerCotacoes')
let antPenultimaNoticia = document.getElementById('antPenultimaNoticia')

let ticker = document.querySelectorAll('.tickers div');


function ajustaLayoult(larguraDaTela){
 	larguraDaTela = window.innerWidth

 	if(larguraDaTela < 850){
 		containerIndex01.className = 'containerIndex01ml'
 		containerNoticias01.className ='containerNoticias01ml'
 		containerCotacoes.className ='containerCotacoesml'
        for( let i in ticker){
           ticker[i].className = 'tickerMl'
        }
        
    }else{
 		containerIndex01.className = ''
 		containerNoticias01.className =''
 		containerCotacoes.className =''
        for(let i in ticker){
            ticker[i].className = 'ticker'
        }
 	}
 	if(larguraDaTela >= 850 && larguraDaTela < 1100){
 		antPenultimaNoticia.className = 'none'
 	}else{
 		antPenultimaNoticia.className = 'block'
 		}
 	}

/* MUDAR A COR DA VARIAÇÃO DO ATIVO */

    let variacao = document.querySelectorAll('.variacao');
        
    console.log(variacao)
    for(let i in variacao){
        let valor = parseInt(variacao[i].innerHTML)
        if(valor < 0){
            variacao[i].className = 'text-red variacao';
        }else{
            variacao[i].className = 'text-green variacao'
        }
    
    
    }
    
   



