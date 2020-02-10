function CadastroProfissional(){


    var main = document.getElementById("cadastro");
  
    var resultado="<h3 class=\"center-align\">Cadastro Profissional</h3>";
    resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
    resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
    resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
    resultado+="<input type=\"password\" id=\"senha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Senha:\" >";
    resultado+="<input type=\"password\" id=\"senhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Senha:\" >";
    resultado+="<input type=\"text\" id=\"endereco\" name=\"endereço\" placeholder=\"Endereço:\" >";
    resultado+="<label for=\"Profissão\">Profissão:</label><select id=\"Profissao\"><option value=\"Pedreiro\">Pedreiro</option><option value=\"Encanador\">Encanador</option><option value=\"Eletricista\">Eletricista</option><option value=\"Outro\">Outro</option></select>";
    resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>";
    resultado+="<h5>Dados Bancários</h5>";
    resultado+=" <input type=\"text\" name=\"banco\" id=\"banco\" placeholder=\"Banco:\" >"
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
  resultado+="<input type=\"password\" id=\"senha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Senha:\" >";
  resultado+="<input type=\"password\" id=\"senhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Senha:\" >";
  resultado+="<input type=\"text\" id=\"endereco\" name=\"endereço\" placeholder=\"Endereço:\" >";
  resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
  resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>"
  resultado+="<input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserCliente()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
  resultado+="</center>"
  main.innerHTML = resultado; 
          
  
}


function UserProfissional(){
//Variaveis  

var Profissional = true;
var Nome = document.getElementById("nome");
var CPF = document.getElementById("cpf");
var EmailPuro = document.getElementById("email");
var Senha = document.getElementById("senha");
var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");
var Endereco = document.getElementById("endereco");
var Sexo = document.getElementById("sexo");
var Profissao = document.getElementById("Profissao");
var Banco = document.getElementById("banco");
var Agencia = document.getElementById("agencia");
var Conta = document.getElementById("conta");


//Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
   // Cadastrar.addEventListener('click', function () {
      
        if (Senha.value==ConfirmacaodeSenha.value) {
          

            var Minusculo = EmailPuro.value;
            var Email = Minusculo.toLowerCase()
            var chave = firebase.database().ref().child('Usuarios').push().key;
            var Users = {
                nome : Nome.value,
                profissional: Profissional.value,
                email : Email,
                cpf: CPF.value,
                chave: chave,
                endereço: Endereco.value,
                sexo: Sexo.value,
                profissao: Profissao.value,
                banco: Banco.value,
                agencia: Agencia.value,
                conta: Conta.value,
            };
              

              firebase
              .auth()
              .createUserWithEmailAndPassword(EmailPuro.value, Senha.value)
              .then(function() {
            firebase.database().ref().child('Usuarios/'+chave).set(Users);

        alert(EmailPuro.value + " - Conta cadastrada com sucesso!");
        Nome.value="";
        CPF.value="";
        EmailPuro.value="";
        Senha.value="";
        ConfirmacaodeSenha.value="";
        Endereço.value="";
        Sexo.value="";
        Profissao.value="";
        Banco.value="";
        Agencia.value="";
        Conta.value="";
        
       setTimeout(function() {
        window.location.href ="../index.html"  ;
        }, 1000);

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
        alert("Senhas incompatíveis!");
    }

}

function UserCliente(){
  
    //Variaveis  
    var Cliente = true;
    var Nome = document.getElementById("nome");
    var CPF = document.getElementById("cpf");
    var EmailPuro = document.getElementById("email");
    var Senha = document.getElementById("senha");
    var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");
    var Endereco = document.getElementById("endereco");
    var Sexo = document.getElementById("sexo");
    
 

    
    //Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
       // Cadastrar.addEventListener('click', function () {
          
            if (Senha.value==ConfirmacaodeSenha.value) {
                var Minusculo = EmailPuro.value;
                var Email = Minusculo.toLowerCase()
                var chave = firebase.database().ref().child('Usuarios').push().key;
                var Users = {
                    nome : Nome.value,
                    cliente: Cliente.value,
                    email : Email,
                    cpf: CPF.value,
                    chave: chave,
                    endereço: Endereco.value,
                    sexo: Sexo.value,
                  };
                  
            firebase
            .auth()
            .createUserWithEmailAndPassword(EmailPuro.value, Senha.value).then(function() {
                alert("Entrei")
                firebase.database().ref().child('Usuarios/'+chave).set(Users);
                
            alert(EmailPuro.value + " - Conta cadastrada com sucesso!");
            Nome.value="";
            CPF.value="";
            EmailPuro.value="";
            Senha.value="";
            ConfirmacaodeSenha.value="";
            Endereço.value="";
            Sexo.value="";

            setTimeout(function() {
              window.location.href ="../index.html"  ;
            }, 1000);
    
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

