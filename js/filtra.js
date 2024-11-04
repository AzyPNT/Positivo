var filtra = document.querySelector('#filtra');

filtra.addEventListener('input', function(){
    var classe =  document.querySelectorAll('.alunos'); 
    if(this.value.length > 0){
        classe.forEach(function(aluno){
            var nome = aluno.querySelector('.info-nome').textContent;
            var expressao = new RegExp(filtra.value, 'i');
            if(!expressao.test(nome)){
                aluno.classList.add('fadeOut');
            }else{
                aluno.classList.remove('fadeOut');
            }
        });
    }else{
        alunos.forEach(function(aluno){
            aluno.classList.remove('fadeOut')
        })
    }
})  