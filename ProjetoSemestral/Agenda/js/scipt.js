// Teste
document.addEventListener('DOMContentLoaded', function(){
	console.log("Hey");
	//mostrarError();

	//Function createRecordatorio
	document.getElementById("buttomSave").onclick = createRecordatorio;
});

//Function para verificar de há texto...
function textoValido(texto){
	if(texto == null || texto == "" || texto.lenght < 1){
		return false;
	}else{
		return true;
	}
}

//Function para mostrar error...
function mostrarError(){
	var html = "";
	html += '<div class="alert alert-danger" role="alert">';
	html += 'Insira uma tarefa!';
	html += '</div>';
	document.getElementById('error').innerHTML = html;
}

//Function limpar campo  erro
function limparError(){
	document.getElementById("error").innerHTML = "";
}
//Function for create to lembrete...
function createRecordatorio(){
	var conteudoTextArea = document.getElementById("texto").value;
	if(!textoValido(conteudoTextArea)){
       mostrarError();
       return;
	}
	limparError();
}