var adicionar = document.querySelector('.adicionar');
var tabela = document.querySelector('#tabela-alunos');
var removeAlunosExemplos = document.querySelectorAll('.exmplos')
var formulario = document.querySelector('.adiciona-aluno');

adicionar.addEventListener("click", function(event){
    event.preventDefault();

    if(!validaForm(formulario)){
        alert('preencha os campos')
        return
    }

    if(removeAlunosExemplos.length > 1){{
        removeAlunosExemplos.forEach( (element) => {
            element.remove()
        })
    }}
    
    
    if(validaForm(formulario)){
        var alunoForm = obterDadosDoFormulario(formulario);
        var alunoTr = montaTr(alunoForm);
        tabela.appendChild(alunoTr);
        formulario.reset();
        var aluno = [alunoTr];
        adicionaMedia(aluno);
    }else{
        formulario.reset();
    }
})


function obterDadosDoFormulario(form){
    let name = form.nome.value
    name = name.toLowerCase()

    var aluno = {
        nome: name,
        primeiraNota: form.primeira.value,
        segundaNota: form.segunda.value,
        terceiraNota: form.terceira.value,
        quartaNota: form.quarta.value,
        media: '',
        situacao: '',
    }
    return aluno; 
    
}

function montaTr(conteudo){
    var alunoTr = document.createElement('tr');
    alunoTr.classList.add('alunos');
    alunoTr.appendChild(montaTd(conteudo.nome, 'info-nome'));
    alunoTr.appendChild(montaTd(conteudo.primeiraNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.segundaNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.terceiraNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.quartaNota, 'info-nota'));
    alunoTr.appendChild(montaTd(conteudo.media, 'info-media'));
    alunoTr.appendChild(montaTd(conteudo.situacao, 'info-situacao'))
    return alunoTr
    
}


function montaTd(tr, classe){
    var alunoTd = document.createElement('td');
    alunoTd.classList.add(classe);
    alunoTd.textContent = tr
    return alunoTd

}

