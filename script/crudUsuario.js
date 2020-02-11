function crudCliente(){

    var main = document.getElementById("cadastro");

    var resultado="<h3 class=\"center-align\">Cadastro Cliente</h3>";
    resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
    resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
    resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
    resultado+="<input type=\"tel\" id=\"telefone\" placeholder=\"Telefone:\" >";
    resultado+="<input type=\"password\" id=\"senha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Senha:\" >";
    resultado+="<input type=\"password\" id=\"senhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Senha:\" >";
    resultado+="<input type=\"text\" id=\"endereco\" name=\"endereço\" placeholder=\"Endereço:\" >";
    resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
    resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>"
    resultado+="<input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserCliente()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
    resultado+="</center>"
    main.innerHTML = resultado; 
}

function crudProfissional(){

}