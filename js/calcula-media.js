
var alunos = document.querySelectorAll('.alunos');

adicionaMedia(alunos);
function adicionaMedia(alunos){

    
    alunos.forEach(function(aluno){
        
        var media = calculaMedia(aluno);
        var tdMedia = aluno.querySelector('.info-media');
        tdMedia.textContent = media.toFixed(1);
        var situacao = aluno.querySelector('.info-situacao');
        if(media > 7.0){
            situacao.classList.add('aluno-aprovado')
            situacao.textContent = 'Aprovado';
        }else if(media > 5.0 && media <= 7.0){
            situacao.classList.add('aluno-recuperacao')
            situacao.textContent = 'Recuperação';
        }else{
            situacao.classList.add('aluno-reprovado')
            situacao.textContent = 'Reprovado';
        }
        
    });
}

function calculaMedia(aluno){
    var notas = aluno.querySelectorAll('.info-nota');
    var soma = 0;
    notas.forEach(function(notas){
        var nota = notas.textContent;
        soma = parseInt(soma) + parseFloat(nota);
    });

   return  soma / 4;
}



