function CadastroProfissional(){


    var main = document.getElementById("cadastro");
  
    var resultado="<div class=\"caixaCadastro\">";
    resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Profissional</br></h1>";
    resultado+="<h2 id=\"Segundotitulo\">Dados Pessoais</h2>"
    resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
    resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
    resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
    resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
    resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
    resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserProfissional()\" class=\"botãoCadastro\"></div>";
    resultado+="</div>"
    main.innerHTML = resultado;
  
  
  }

function CadastroCliente(){


  var main = document.getElementById("cadastro");

  var resultado="<div class=\"caixaCadastro\">";
  resultado+="<div id=\"caixaTitulo\"><h1 class=\"tituloCadastros\">Cadastro Cliente</br></h1>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"nome\" placeholder=\"Nome:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"email\" id=\"email\" placeholder=\"E-mail:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senha\" placeholder=\"Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"camposCadastro\"><input type=\"password\" id=\"senhaconfirmar\" placeholder=\"Confirmar Senha:\" class=\"Cadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Criar conta\" id=\"cadastrar\" onclick=\"UserCliente()\" class=\"botãoCadastro\"></div>";
  resultado+="<div id=\"criarConta\"><input type=\"submit\" value=\"Teste\" id=\"cadastrar\" onclick=\"UserCliente()\" class=\"botãoCadastro\"></div>";
  resultado+="</div>"
  main.innerHTML = resultado;

}


function UserProfissional(){
//Variaveis  

var Nome = document.getElementById("nome");
var CPF = document.getElementById("cpf");
var SUS = document.getElementById("sus");
var EmailPuro = document.getElementById("email");
var Senha = document.getElementById("senha");
var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");


//Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
   // Cadastrar.addEventListener('click', function () {
      
        if (Senha.value==ConfirmacaodeSenha.value) {
            var Minusculo = EmailPuro.value;
            var Email = Minusculo.toLowerCase()
            var chave = firebase.database().ref().child('Usuarios').push().key;
            var Users = {
                Nome : Nome.value,
                Email : Email,
                CPF : CPF.value,
                SUS : SUS.value,
                Chave: chave,
              };
              
        firebase
        .auth()
        .createUserWithEmailAndPassword(EmailPuro.value, Senha.value)
        .then(function() {
            firebase.database().ref().child('Usuarios/'+chave).set(Users);

        alert(EmailPuro.value + " - Conta cadastrada com sucesso!");
        Nome.value="";
        CPF.value="";
        SUS.value="";
        EmailPuro.value="";
        Senha.value="";
        ConfirmacaodeSenha.value="";
        
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
    var Funcionario = false;
    var Nome = document.getElementById("nome");
    var CPF = document.getElementById("cpf");
    var EmailPuro = document.getElementById("email");
    var Senha = document.getElementById("senha");
    var ConfirmacaodeSenha = document.getElementById("senhaconfirmar");
    
    
    
    //Função para criar conta de Email e Senha no autenticador e para cadastrar dados no realtime
       // Cadastrar.addEventListener('click', function () {
          
            if (Senha.value==ConfirmacaodeSenha.value) {
                var Minusculo = EmailPuro.value;
                var Email = Minusculo.toLowerCase()
                var chave = firebase.database().ref().child('Usuarios').push().key;
                var Users = {
                    Nome : Nome.value,
                    Funcionario: Funcionario,
                    Email : Email,
                    CPF: CPF.value,
                    Chave: chave,
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

