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