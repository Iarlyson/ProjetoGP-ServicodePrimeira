function pesquisar(){
    var main = document.getElementById("resultado");
    var Profissao = document.getElementById("Profissao").value;
    var resultado = "<h1>Profissionais</h1>"
    firebase.database().ref('Usuarios').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
                if(Profissao==item.val().Profissao){
                    resultado += "<h3>"+item.val().Nome+"</h3>";
                    resultado += "<p>"+item.val().Profissao+"</p>";
                    resultado += "<p>"+item.val().Descricao+"</p>";
                    resultado +="<a href=\"tel:"+item.val().Telefone+"\">"+ item.val().Telefone+"</a>"
                    resultado += "<p>Avaliação: " +item.val().Media+"</p><br/>";
                }
                if(Profissao=="Todos" && item.val().Profissional=="true"){
                    resultado += "<h3>"+item.val().Nome+"</h3>";
                    resultado += "<p>"+item.val().Profissao+"</p>";
                    resultado += "<p>"+item.val().Descricao+"</p>";
                    resultado +="<a href=\"tel:"+item.val().Telefone+"\">"+ item.val().Telefone+"</a>"
                    resultado += "<p>Avaliação: " +item.val().Media+"</p><br/>";
    
                }
            main.innerHTML = resultado;
                abrir();
        });
    });

}

function criarServico(){

 
            var Titulo = document.getElementById("titulo");
            var Descricao = document.getElementById("descricao");
            var TipoServico = document.getElementById("tipoServico");
            var Pagamento = document.getElementById("metPagamento");
            var DataAgendada = document.getElementById("dataagendade");
            var Valor = document.getElementById("valor");
            var Key;
            var user = firebase.auth().currentUser;
            var email;
            // Definindo o email do usuário logado
            if (user != null) {
                email = user.email;
            }
            
                    firebase.database().ref('Usuarios').on('value', function (snapshot) {
                        snapshot.forEach(function (item) {
                            if (email === item.val().Email) {
                                Key = item.val().Chave;
                            }
                        });
                    });


                    var chave = firebase.database().ref().child('Servico').push().key;
                    var Servico = {
                        Titulo : Titulo.value,
                        Descricao : Descricao.value,
                        TipoServico : TipoServico.value,
                        Pagamento: Pagamento.value,
                        DataAgendada: DataAgendada.value,
                        Valor : Valor.value,
                        Key :  Key,
                        chave: chave,
                      };
                      firebase.database().ref().child('Servico/'+chave).set(Servico);

            Titulo.value="";
            Descricao.value="";
            TipoServico.value="";
            DataAgendada.value="";
            Pagamento.value="";
            Valor.value="";
            
}