var tabela = document.querySelector("#tabela-alunos");
var lixeira = document.querySelector(".lixeira");
var seleciona = document.querySelector('.selecionar');
var sair = document.querySelector('.sair');

seleciona.addEventListener('click',function(){
    sair.classList.remove('invisivel');
    lixeira.classList.remove('invisivel')
    tabela.classList.add('tabela-seleciona');

    tabela.addEventListener('click', function(evento){
         if(lixeira.classList.length === 1){
             var aluno = selecionaAluno(evento);
             removerAluno(aluno);
             
         }
         
    })
    tabela.addEventListener('dblclick',function(evento){
        removeSelecinadoDoAluno(evento)
    })
   
})

sair.addEventListener('click',function(evento){
    tabela.classList.remove('tabela-seleciona');
    sair.classList.add('invisivel');
    lixeira.classList.add('invisivel');

})



function selecionaAluno(evento){
    var aluno = evento.target.parentNode;
    aluno.classList.add('seleciona-aluno');
    return aluno;
}





function removeSelecinadoDoAluno(evento){
    var aluno = evento.target.parentNode;
    aluno.classList.remove('seleciona-aluno');
}


 function removerAluno(aluno){
    
    var verificaRemove = aluno.classList;
    lixeira.addEventListener('click',function(sucesso){
        if(verificaRemove.length > 1){
            verificaRemove = []
            aluno.remove();
            swal("Aluno removido com sucesso!", {
            icon: "success",
            buttons: false,
            timer: 900,
          });

        }else if(verificaRemove < 1){
            swal("Selecione um aluno", {
            icon: "error",
            buttons: false,
            timer: 900,
          });
        }
    })
   
}

