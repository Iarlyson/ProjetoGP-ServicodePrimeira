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


        });
    });

}