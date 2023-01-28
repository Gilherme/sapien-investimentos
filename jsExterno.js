let container01 = document.getElementById('container01')
let containerNoticias01 = document.getElementById('containerNoticias01')
let containerCotacoes = document.getElementById('containerCotacoes')
let antPenultimaNoticia = document.getElementById('antPenultimaNoticia')

function ajustaLayoult(larguraDaTela){
 	larguraDaTela = window.innerWidth

 	if(larguraDaTela < 850){
 		container01.className = 'container01ml'
 		containerNoticias01.className ='containerNoticias01ml'
 		containerCotacoes.className ='containerCotacoesml'
    }else{
 		container01.className = ''
 		containerNoticias01.className =''
 		containerCotacoes.className =''
 	}
 	if(larguraDaTela >= 850 && larguraDaTela < 1100){
 		antPenultimaNoticia.className = 'none'
 	}else{
 		antPenultimaNoticia.className = 'block'
 		}
 	}