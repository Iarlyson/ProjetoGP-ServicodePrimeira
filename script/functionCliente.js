function pesquisar(){
    var main = document.getElementById("resultado");
    var Profissao = document.getElementById("Profissao").value;
    var resultado= "<h3 class=\"center-align\">Profissionais</h3>";
    firebase.database().ref('Usuarios').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
                if(Profissao==item.val().Profissao){
                    resultado += "<div style=\"border: 1px solid black;padding: 10px; margin-top: 10px; border-radius: 15px;\">";
                    resultado += "<h3>"+item.val().Nome+"</h3>";
                    resultado += "<p><span>"+item.val().Profissao+"</span><br>";
                    resultado += "<span>"+item.val().Descricao+"</span><br>";
                    resultado +="<a href=\"tel:"+item.val().Telefone+"\">"+ item.val().Telefone+"</a><br>"
                    resultado += "<span>Avaliação: " +item.val().Media+"</span></p>";
                    resultado += "</div>"
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