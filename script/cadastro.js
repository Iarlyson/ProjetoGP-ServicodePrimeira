function CadastroProfissional(){


    var main = document.getElementById("cadastro");
  
    var resultado="<h3 class=\"center-align\">Cadastro Profissional</h3>";
    resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
    resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
    resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
    resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
    resultado+="<input type=\"tel\" id=\"telefone\" placeholder=\"Telefone:\" >";
    resultado+="<input type=\"password\" id=\"senha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Senha:\" >";
    resultado+="<input type=\"password\" id=\"senhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Senha:\" >";
    resultado+="<label for=\"cidade\">Cidade:</label><select id=\"cidade\"><option value=\"Cajazeiras\">Cajazeiras</option></select> ";
    resultado+="<input type=\"text\" id=\"bairro\" name=\"bairro\" placeholder=\"Bairro:\" size=\"16\" > ";
    resultado+="<input type=\"text\" id=\"rua\" name=\"rua\" placeholder=\"Rua:\" size=\"16\" > ";
    resultado+="<input type=\"number\" id=\"numerocasa\" name=\"numero\" placeholder=\"Numero:\" size=\"4\" > ";
    resultado+="<label for=\"Profissão\">Profissão:</label><select id=\"Profissao\"><option value=\"Pedreiro\">Pedreiro</option><option value=\"Encanador\">Encanador</option><option value=\"Eletricista\">Eletricista</option><option value=\"Outro\">Outro</option></select>";
    resultado+="<label for=\"sexo\">Descreva sobre seus serviços:</label><textarea id=\"descricao\"></textarea>"
    resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>";
    resultado+="<h5>Dados Bancários</h5>";
    resultado+="<label for=\"sexo\">Banco:</label><select id=\"conta\"><option value=\"BancodoBrasil\">Banco do Brasil</option><option value=\"BancoCaixa\">Banco Caixa</option><option value=\"BancoSantader\">Banco Santader</option><option value=\"BancoBradesco\">Banco Bradesco</option></select>"  
    resultado+=" <input type=\"text\" name=\"agencia\" id=\"agencia\" placeholder=\"Agência:\" >"    
    resultado+=" <input type=\"number\" name=\"conta\" id=\"conta\" placeholder=\"Conta:\" >"  
    resultado+="<input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserProfissional()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
    resultado+="</center>"
    main.innerHTML = resultado;
  
  }

function CadastroCliente(){


  var main = document.getElementById("cadastro");

  var resultado="<h3 class=\"center-align\">Cadastro Cliente</h3>";
  resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
  resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
  resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
  resultado+="<input type=\"tel\" id=\"telefone\" placeholder=\"Telefone:\" >";
  resultado+="<input type=\"password\" id=\"senha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Senha:\" >";
  resultado+="<input type=\"password\" id=\"senhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Senha:\" >";
  resultado+="<label for=\"cidade\">Cidade:</label><select id=\"cidade\"><option value=\"Cajazeiras\">Cajazeiras</option></select> ";  resultado+="<input type=\"text\" id=\"bairro\" name=\"bairro\" placeholder=\"Bairro:\" size=\"16\" > ";
  resultado+="<input type=\"text\" id=\"rua\" name=\"rua\" placeholder=\"Rua:\" size=\"16\" > ";
  resultado+="<input type=\"number\" id=\"numerocasa\" name=\"numero\" placeholder=\"Numero:\" size=\"4\" > ";
  resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
  resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>"
  resultado+="<input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserCliente()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
  resultado+="</center>"
  main.innerHTML = resultado; 
          
  
}

function UserProfissional(){
//Variaveis  

var Nome = document.getElementById("nome");
var CPF = document.getElementById("cpf");
var EmailPuro = document.getElementById("email");
var Nascimento = document.getElementById("nascimento");
var Telefone = document.getElementById("telefone");
var Senha = document.getElementById("senha");
var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");
var Cidade = document.getElementById("cidade");
var Bairro = document.getElementById("bairro");
var Rua = document.getElementById("rua");
var Numero = document.getElementById("numerocasa");
var Descricao = document.getElementById("descricao");
var Sexo = document.getElementById("sexo");
var Profissao = document.getElementById("Profissao");
var Banco = document.getElementById("banco");
var Agencia = document.getElementById("agencia");
var Conta = document.getElementById("conta");
var Profissional = "true";
var Media = 0;
var NumerodeServicos = 0;


//Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
   // Cadastrar.addEventListener('click', function () {
      
if (Senha.value==ConfirmacaodeSenha.value) {
    var Minusculo = EmailPuro.value;
    var Email = Minusculo.toLowerCase()
    var chave = firebase.database().ref().child('Usuarios').push().key;
    var Users = {
        Nome : Nome.value,
        Email : Email,
        Telefone : Telefone.value,
        Nascimento : Nascimento.value,
        Profissional: Profissional,
        Cidade : Cidade.value,
        Bairro :  Bairro.value,
        Rua: Rua.value,
        Numero: Numero.value,
        Descricao: Descricao.value,
        CPF: CPF.value,
        Chave: chave,
        Sexo: Sexo.value,
        Profissao: Profissao.value,
        Banco: Banco,
        Agencia: Agencia.value,
        Conta: Conta.value,
        Media: Media,
        NumerodeServicos: NumerodeServicos,
    };

      
firebase
.auth()
.createUserWithEmailAndPassword(EmailPuro.value, Senha.value)
.then(function() {
    firebase.database().ref().child('Usuarios/'+chave).set(Users);

alert(EmailPuro.value + " - Conta cadastrada com sucesso!");

setTimeout(function() {
window.location.href ="../index.html"  ;
}, 500);


Nome.value="";
CPF.value="";
EmailPuro.value="";
Nascimento.value="";
Telefone.value="";
Bairro.value=""; 
Rua.value="";
Numero.value="";
Descricao.value="";
Senha.value="";
ConfirmacaodeSenha.value="";
Sexo.value="";
Profissao.value="";
Banco.value="";
Agencia.value="";
Conta.value="";
})


.catch(function (error) {
    // Handle Errors here.
    console.error(error.code);
    console.error(error.message);
    firebase.database().ref('Usuários').on('value', function (snapshot){
        snapshot.forEach(function (item){ 
    if(EmailPuro.value==item.val().Email){
        alert("Esse email já foi usado em uma conta cadastrada no ACAM."); 
    }
    else{
        alert("Falha ao cadastrar, falta dados a serem preenchidos!");
    }
    // ...

        })
    }
    )})
}
else{
    alert("Senhas imcompativeis!");
}

}

function UserCliente(){
  
    var Nome = document.getElementById("nome");
    var CPF = document.getElementById("cpf");
    var EmailPuro = document.getElementById("email");
    var Nascimento = document.getElementById("nascimento");
    var Cidade = document.getElementById("cidade");
    var Bairro = document.getElementById("bairro");
    var Rua = document.getElementById("rua");
    var Numero = document.getElementById("numerocasa");
    var Senha = document.getElementById("senha");
    var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");
    var Sexo = document.getElementById("sexo");
    var Telefone = document.getElementById("telefone");
    var Cliente = "true"
    var Media = 0;
    var NumerodeServicos = 0;


    
    //Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
       // Cadastrar.addEventListener('click', function () {
          
 

//Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
   // Cadastrar.addEventListener('click', function () {
      
    if (Senha.value==ConfirmacaodeSenha.value) {
        var Minusculo = EmailPuro.value;
        var Email = Minusculo.toLowerCase()
        var chave = firebase.database().ref().child('Usuarios').push().key;
        var Users = {
            Cliente : Cliente,
            Nome : Nome.value,
            Email : Email,
            Nascimento: Nascimento.value,
            Cidade : Cidade.value,
            Bairro :  Bairro.value,
            Rua: Rua.value,
            Numero: Numero.value,
            Telefone : Telefone.value,
            CPF: CPF.value,
            Chave: chave,
            Sexo: Sexo.value,
            Media: Media,
            NumerodeServicos: NumerodeServicos,
          };
          
    firebase
    .auth()
    .createUserWithEmailAndPassword(EmailPuro.value, Senha.value)
    .then(function() {
        firebase.database().ref().child('Usuarios/'+chave).set(Users);

    alert(EmailPuro.value + " - Conta cadastrada com sucesso!");
    
   setTimeout(function() {
    window.location.href ="../index.html"  ;
    }, 500);

    Nome.value="";
    CPF.value="";
    EmailPuro.value="";
    Nascimento.value="";
    Bairro.value=""; 
    Rua.value="";
    Numero.value="";
    Telefone.value="";
    Senha.value="";
    ConfirmacaodeSenha.value="";
    Sexo.value="";

})

.catch(function (error) {
    // Handle Errors here.
    console.error(error.code);
    console.error(error.message);
    firebase.database().ref('Usuários').on('value', function (snapshot){
        snapshot.forEach(function (item){ 
    if(EmailPuro.value==item.val().Email){
        alert("Esse email já foi usado em uma conta cadastrada no Serviço de Primeira."); 
    }
    else{
        alert("Falha ao cadastrar, falta dados a serem preenchidos!");
    }
    // ...

        })
    }
    )})
}
else{
    alert("Senhas imcompativeis!");
}

}