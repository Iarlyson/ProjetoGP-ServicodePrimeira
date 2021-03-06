function crudCliente(){
    var user = firebase.auth().currentUser;
    var email;

    // Definindo o email do usuário logado
    if (user != null) {
        email = user.email;
    }
 
    var main = document.getElementById("crud");
    var resultado="<h3 class=\"center-align\">Crud dos meus Dados</h3>";
    resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
    resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
    resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
    resultado+="<input type=\"tel\" id=\"telefone\" placeholder=\"Telefone:\" >";
    resultado+="<label for=\"cidade\">Cidade:</label><select id=\"cidade\"><option value=\"Cajazeiras\">Cajazeiras</option></select>";
    resultado+="<input type=\"text\" id=\"bairro\" placeholder=\"Bairro:\" >";
    resultado+="<input type=\"text\" id=\"rua\" placeholder=\"Rua:\" >";
    resultado+="<input type=\"number\" id=\"numero\" placeholder=\"Numero:\" >";
    resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
    resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>"
    resultado+="<input type=\"password\" id=\"senhaatual\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Senha Atual:\" >";
    resultado+="<input type=\"submit\" id='update' value=\"Salvar Alterações\" onclick=\"atualizarConta()\" style=\"border-radius: 15px; width: 300px; margin-right: 10px; margin-top: 30px;\" class=\"waves-effect waves-light btn-small\">";
    resultado+="<input type=\"submit\" id='delete' value=\"Excluir Conta\" onclick=\"deleteConta()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-small\">";
    resultado+="<input type=\"password\" id=\"novasenha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Nova Senha:\" >";
    resultado+="<input type=\"password\" id=\"novasenhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Nova Senha:\" >";
    resultado+="<input type=\"password\" id=\"senhaatual\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Senha Atual:\" >";
    resultado+="<input type=\"submit\" id='delete' value=\"Mudarsenha\" onclick=\"atualizaSenha()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
    resultado+="</center>"
    main.innerHTML = resultado; 

    //Preenche os dados do usuário
    firebase.database().ref('Usuarios').on('value', function (snapshot){
        snapshot.forEach(function (item) {
            if (email === item.val().Email){
                document.getElementById("nome").value = item.val().Nome;
                document.getElementById("cpf").value = item.val().CPF;
                document.getElementById("telefone").value = item.val().Telefone;
                document.getElementById("nascimento").value= item.val().Nascimento
                document.getElementById("email").value = item.val().Email;
                document.getElementById("cidade").value = item.val().Cidade;
                document.getElementById("bairro").value = item.val().Bairro;
                document.getElementById("rua").value = item.val().Rua;
                document.getElementById("numero").value = item.val().Numero;
                document.getElementById("sexo").value = item.val().Sexo;
                document.getElementById("telefone").value = item.val().Telefone;
            }
        });
    });
}

function crudProfissional(){
    var user = firebase.auth().currentUser;
    var email;

    // Definindo o email do usuário logado
    if (user != null) {
        email = user.email;
    }


    var main = document.getElementById("crud");
    var resultado="<h3 class=\"center-align\">Crud dos meus Dados</h3>";
    resultado+="<center><input type=\"text\" name=\"nome\" size=\"20\" placeholder=\"Nome Completo:\" id=\"nome\">";
    resultado+="<input type=\"text\" id=\"cpf\" placeholder=\"CPF\": class=\"form-control cpf-mask\" min=\"11\" max=\"14\">";
    resultado+="<input type=\"email\" id=\"email\" placeholder=\"E-mail:\" >";
    resultado+="<input type=\"tel\" id=\"telefone\" placeholder=\"Telefone:\" >";
    resultado+="<label for=\"cidade\">Cidade:</label><select id=\"cidade\"><option value=\"Cajazeiras\">Cajazeiras</option></select>";
    resultado+="<input type=\"text\" id=\"bairro\" placeholder=\"Bairro:\" >";
    resultado+="<input type=\"text\" id=\"rua\" placeholder=\"Rua:\" >";
    resultado+="<input type=\"number\" id=\"numero\" placeholder=\"Numero:\" >";
    resultado+="<input type=\"date\" id=\"nascimento\" name=\"Nascimento\" placeholder=\"Data de Nascimento:\" >";
    resultado+="<label for=\"sexo\">Sexo:</label><select id=\"sexo\"><option value=\"Masculino\">Masculino</option><option value=\"Feminino\">Feminino</option><option value=\"Outro\">Outro</option></select>"
    resultado+="<label for=\"Profissão\">Profissão:</label><select id=\"Profissao\"><option value=\"Pedreiro\">Pedreiro</option><option value=\"Encanador\">Encanador</option><option value=\"Eletricista\">Eletricista</option><option value=\"Outro\">Outro</option></select>";
    resultado+="<label for=\"sexo\">Descreva sobre seus serviços:</label><textarea id=\"descricao\"></textarea>";
    resultado+="<label for=\"banco\">Banco:</label><select id=\"banco\"><option value=\"BancodoBrasil\">Banco do Brasil</option><option value=\"BancoCaixa\">Banco Caixa</option><option value=\"BancoSantader\">Banco Santader</option><option value=\"BancoBradesco\">Banco Bradesco</option></select>";
    resultado+=" <input type=\"text\" name=\"agencia\" id=\"agencia\" placeholder=\"Agência:\" >"    
    resultado+="<input type=\"number\" name=\"conta\" id=\"conta\" placeholder=\"Conta:\" >"
    resultado+="<input type=\"password\" id=\"senhaatual\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Senha Atual:\" >";
    resultado+="<input type=\"submit\" id='update' value=\"Salvar Alterações\" onclick=\"atualizarConta()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\ margin-right: 10px\" class=\"waves-effect waves-light btn-small\">";
    resultado+="<input type=\"submit\" id='delete' value=\"Excluir Conta\" onclick=\"deleteConta()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-small\">";
    resultado+="<input type=\"password\" id=\"novasenha\" name=\"senha\" size=\"16\" min=\"8\" max=\"16\"  placeholder=\"Nova Senha:\" >";
    resultado+="<input type=\"password\" id=\"novasenhaconfirmar\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Confirmar Nova Senha:\" >";
    resultado+="<input type=\"password\" id=\"senhaatual\" name=\"senha2\" size=\"16\" min=\"8\" max=\"16\"placeholder=\"Senha Atual:\" >";
    resultado+="<input type=\"submit\" id='delete' value=\"Mudar Senha\" onclick=\"atualizaSenha()\" style=\"border-radius: 15px; width: 300px; margin-top: 30px;\" class=\"waves-effect waves-light btn-large\">";
    resultado+="</center>"
    main.innerHTML = resultado; 

    //Preenche os dados do usuário
    firebase.database().ref('Usuarios').on('value', function (snapshot){
        snapshot.forEach(function (item) {

         if (email == item.val().Email){
            document.getElementById("nome").value = item.val().Nome;
            document.getElementById("cpf").value = item.val().CPF;
            document.getElementById("telefone").value = item.val().Telefone;
            document.getElementById("nascimento").value= item.val().Nascimento
            document.getElementById("email").value = item.val().Email;
            document.getElementById("cidade").value = item.val().Cidade;
            document.getElementById("bairro").value = item.val().Bairro;
            document.getElementById("rua").value = item.val().Rua;
            document.getElementById("numero").value = item.val().Numero;
            document.getElementById("sexo").value = item.val().Sexo;
            document.getElementById("telefone").value = item.val().Telefone;
            document.getElementById("Profissao").value = item.val().Profissao;
            document.getElementById("descricao").value = item.val().Descricao;
            document.getElementById("banco").value = item.val().Banco;
            document.getElementById("agencia").value = item.val().Agencia;
            document.getElementById("conta").value = item.val().Conta;
            }
        });
    });
      
  
}

 function atualizarConta(){

        var user = firebase.auth().currentUser;
        var email;
        // Definindo o email do usuário logado
        if (user != null) {
            email = user.email;
        }
        
        
                firebase.database().ref('Usuarios').on('value', function (snapshot) {
                    snapshot.forEach(function (item) {
                        if (email === item.val().Email) {

                            //Definição das variáveis do lado cliente e profissional
                            var key = item.val().Chave;
                            var Nome = document.getElementById("nome").value;
                            var CPF = document.getElementById("cpf").value;
                            var Email = document.getElementById("email").value;
                            var Nascimento = document.getElementById("nascimento").value;
                            var Bairro = document.getElementById("bairro").value;
                            var Rua = document.getElementById("rua").value;
                            var Numero = document.getElementById("numero").value;
                            var Sexo = document.getElementById("sexo").value;
                            var Telefone = document.getElementById("telefone").value;
                           
                           
                            if (item.val().Nome !== Nome && Nome !== ""){
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Nome: Nome
                                    });
                                    alert("Nome Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }


                            if (item.val().CPF !== CPF && CPF !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        CPF: CPF
                                    });
                                    alert("CPF Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            if (Email !== item.val().Email) {
                                console.log("Emails diferentes");
                                //Atualizando email na autenticação
                                var EmailAntigo = item.val().Email;
                                atualizaEmail(key, EmailAntigo, Email);
                            }



                            if (item.val().Nascimento !== Nascimento && Nascimento !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Nascimento: Nascimento
                                        
                                    });
                                    alert("Data de Nascimento Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            
                            if (item.val().Bairro !== Bairro && Bairro !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Bairro: Bairro
                                    });
                                    alert("Bairro Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }


                            if (item.val().Rua !== Rua && Rua !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Rua: Rua
                                    });
                                    alert("Rua Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            if (item.val().Numero !== Numero && Numero !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Numero: Numero
                                    });
                                    alert("Numero Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            
                            if (item.val().Sexo !== Sexo && Sexo !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Sexo: Sexo
                                    });
                                    alert("Sexo Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            
                            if (item.val().Telefone !== Telefone && Telefone !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Telefone: Telefone
                                    });
                                    alert("Telefone Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }
                        if(item.val().Profissional == "true"){
                            //Definição das variáveis exclusivas do lado profissional
                            var Descricao = document.getElementById("descricao").value
                            var Profissao = document.getElementById("Profissao").value;
                            var Banco = document.getElementById("banco").value;
                            var Agencia = document.getElementById("agencia").value;
                            var Conta = document.getElementById("conta").value;
                            if (item.val().Profissao !== Profissao) {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Profissao: Profissao
                                    });
                                    alert("Profissao Atualizada");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            
                            if (item.val().Banco !== Banco && Banco !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Banco: Banco
                                    });
                                    alert("Banco Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }

                            if (item.val().Agencia !== Agencia && Agencia !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Agencia: Agencia
                                    });
                                    alert("Agencia Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }


                            if (item.val().Conta !== Conta && Conta !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Conta: Conta
                                    });
                                    alert("Conta Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }
                            if (item.val().Descricao !== Descricao && Descricao !== "") {
                                
                                var Email = document.getElementById("email");
                                var Senha = document.getElementById("senhaatual");
                            
                                firebase
                                .auth()
                                .signInWithEmailAndPassword(Email.value, Senha.value)
                                .then(function(result) {
                                    firebase.database().ref('/Usuarios/' + key).update({
                                        Descricao: Descricao
                                    });
                                    alert("Descricao Atualizado");
                                    abrir();
                                })
                                .catch(function (error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    alert("Sua Senha atual digitada errada!");
                            });
                            
                            }
                    }


                        }
                        });
                    });

       
}

// Funções auxiliares

function atualizaEmail(key, emailantigo, novoEmail) {
    var Email = novoEmail.toLowerCase()
    console.log("entrou na função"+key);
    console.log("Email para atualizar: "+novoEmail);
    var Senha = document.getElementById("senhaatual");
    firebase
    .auth()
    .signInWithEmailAndPassword(emailantigo, Senha.value)
    .then(function(result) {
    var user = firebase.auth().currentUser;

    //Atualizando email no Authentication
    user.updateEmail(Email).then(function () {
        //Atualizando email no banco de dados
        firebase.database().ref('/Usuarios/'+key).update({
            Email: Email
            
        });
        alert("Email atualizado!");
    }).catch(function (error) {
        window.alert("Email não pôde ser autualizado");
    });
})
.catch(function (error) {
    console.error(error.code);
    console.error(error.message);
    alert("Sua Senha atual digitada errada!");
});

}



function atualizaSenha(){
    var Senhanova = document.getElementById("novasenha");
    var SenhanovaConfirmar = document.getElementById("novasenhaconfirmar");
    
    var Email = document.getElementById("email");
    var Senha = document.getElementById("senhaatual");

if(Senhanova.value==SenhanovaConfirmar.value){
    
    firebase
    .auth()
    .signInWithEmailAndPassword(Email.value, Senha.value)
    .then(function(result) {
        console.log(result);
        var user = firebase.auth().currentUser;
        user.updatePassword(Senhanova.value).then(function (){
            alert("Senha Atualizada!")
            Senhanova.value="";
            SenhanovaConfirmar.value="";
            Senha.value="";
        }).catch(function (error) {
            alert("Não foi possível atualizar a sua senha!");
        });
    })
    .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert("Sua Senha atual digitada errada!");
});
    
}else{
    alert("Senhas imcopativeis!");
}
}



//Função para deltar conta no autenticação e no banco de dados
function deleteConta() {

    var user = firebase.auth().currentUser;
    var email;

    // Definindo o email do usuário logado
    if (user != null) {
        email = user.email;
    }
    var key;

    var Senha = document.getElementById("senhaatual");
    firebase
    .auth()
    .signInWithEmailAndPassword(email, Senha.value)
    .then(function(result) {
    firebase.database().ref('Usuarios').on('value', function (snapshot){
    snapshot.forEach(function (item) {
    
            if (email === item.val().Email){
                key = item.val().Chave; 

            }
        });
    });

    user.delete().then(function() {
         firebase.database().ref('/Usuarios/'+key).remove();
    }).catch(function (error) {
        window.alert("Não foi possível remover a sua conta!");
    });
})
.catch(function (error) {
    console.error(error.code);
    console.error(error.message);
    alert("Sua Senha atual digitada errada!");
});
}