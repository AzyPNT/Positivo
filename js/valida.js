function validaForm(form){
    var valida = false
    nome = form.nome.value;
    if(!validaNome(nome)){
        var msg = 'Por favor!! digite somente letras';
        mesagensDeErro(msg,'#mensagem-de-erro',0)
    }else{
        if(form.nome.value.length >=3 && form.nome.value.length <= 255){
            var nota = validaNotas([form.querySelectorAll('.nota')]);
            if(nota == 0){
                var msg = 'Aluno adicionado com sucesso !!!';
                mesagensDeErro(msg,"#mensagem-de-erro",1)
                valida = true;
            }else{
                var msg = 'A nota deve está entre 1 e 10!'
                mesagensDeErro(msg,"#mensagem-de-erro",0);
            }
        }else{
            var msg = 'O nome deve está entre 3 e 15 caracteres'
            mesagensDeErro(msg,'#mensagem-de-erro',0)
        }
    }
    return valida
}

function validaNotas(notas){
    var erro = 0;
    notas[0].forEach(function(nota){
        if(nota.value <= 0 || nota.value > 10 ){
             erro += 1;
        }
    })

    return erro;

}

function mesagensDeErro(text,id,zeroMsgDeErroUmDeSucesso ){
    var ul = document.querySelector(id);
    ul.innerHTML = ''
    var li = document.createElement('li');
    if(zeroMsgDeErroUmDeSucesso === 0){
        li.classList.add('notas-erro');
    }else{
        li.classList.add('notas-certas');
    }
    li.textContent += text;
    
    ul.appendChild(li);
    return ul
}


function validaNome(teste){
    const valida = /^[a-zA-zãõ]+\s?[a-zA-Zãõ]+?$/
    return valida.test(teste)
    
}


