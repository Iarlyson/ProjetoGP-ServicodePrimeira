//Função para reiniciar o menu a cada modificação no banco.
function abrir(){
    var mainmenu = document.getElementById("OpcoesMenu");
    var resultado="<ul class=\"MenuDesktop\">"
    var mainmobile = document.getElementById("OpcoesMenu-Monile");
    var resultado2="<input type=\"checkbox\" id=\"marcadorMenu\"><label for=\"marcadorMenu\" class=\"marc\">&#9776;</label><ul class=\"MenuMob\">"
    firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        console.log( user );            
        var user = firebase.auth().currentUser;
        var email = user.email;
       

        firebase.database().ref('Usuarios').on('value', function (snapshot) {
            snapshot.forEach(function (item) {

            if(email==item.val().Email){
                //Função para menu cliente
                if(item.val().Cliente=="true"){
                    resultado+="<li><a href='../index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                    resultado+="<li><a onclick='sair()' href='./html/buscaprofissional.html' class=\"LinkMenu\">Buscar Profissional</a></li></ul>"
                    resultado+="<li><a onclick='sair()' href='./html/criarServico.html' class=\"LinkMenu\">Buscar Profissional</a></li></ul>"
                    resultado+="<li><a onclick='' href='../html/crudCliente.html' class=\"LinkMenu\">Minha Conta</a></li>"
                    resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"

                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li></ul>"
             
                }
                if(item.val().Profissional=="true"){
                    resultado+="<li><a href='../index.html' class=\"LinkMenu\">Página Inicial</a></li>"
                    resultado+="<li><a onclick='' href='../html/crudProfissional.html' class=\"LinkMenu\">Minha Conta</a></li>"
                    resultado+="<li><a onclick='' href='../html/buscaProfissional.html' class=\"LinkMenu\">Buscar Profissional</a></li></ul>"
                    resultado+="<li><a onclick='sair()' href='' class=\"LinkMenu\">Sair</a></li></ul>"

                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
                    resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li></ul>"
             
                }

                mainmenu.innerHTML = resultado;
                mainmobile.innerHTML = resultado2;
            }            
            });
        }); 
    
            
    
        } else {
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
            resultado+="<li><a onclick=\"\" class=\"LinkMenu\">Teste</a></li>"
            resultado+="<li><a href=\"html/Cadastro.html\" class=\"LinkTelaCadastro\">Cadastrar-se</a></li>"
            resultado+="<li><a href=\"html/login.html\" class=\"LinkLogin\">Login</a></li></ul>"
        
            mainmenu.innerHTML = resultado;
        
        
           
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkMenuM\">Teste</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkL\">Login</a></li>"
            resultado2+="<li><a href=\"#\" class=\"LinkL\">Cadastrar-se</a></li></ul>"
        
            mainmobile.innerHTML = resultado2;
            
        }
      });
    }

