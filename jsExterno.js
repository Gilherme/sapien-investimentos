let containerIndex01 = document.getElementById('containerIndex01')
let containerNoticias01 = document.getElementById('containerNoticias01')
let containerCotacoes = document.getElementById('containerCotacoes')
let antPenultimaNoticia = document.getElementById('antPenultimaNoticia')

function ajustaLayoult(larguraDaTela){
 	larguraDaTela = window.innerWidth

 	if(larguraDaTela < 850){
 		containerIndex01.className = 'containerIndex01ml'
 		containerNoticias01.className ='containerNoticias01ml'
 		containerCotacoes.className ='containerCotacoesml'
    }else{
 		containerIndex01.className = ''
 		containerNoticias01.className =''
 		containerCotacoes.className =''
 	}
 	if(larguraDaTela >= 850 && larguraDaTela < 1100){
 		antPenultimaNoticia.className = 'none'
 	}else{
 		antPenultimaNoticia.className = 'block'
 		}
 	}