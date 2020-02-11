function pesquisar(){
    var main = document.getElementById("resultado");
    var Profissao = document.getElementById("Profissao").value;
    
    firebase.database().ref('Usuarios').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            
                if(Profissao==item.val().Profissao){
                    var resultado = "<h1>"+item.val().Nome+"</h1>"
                }
                if(Profissao==item.val().Profissao){
                    
                }
                if(Profissao==item.val().Profissao){
                    
                }
                if(Profissao==item.val().Profissao){
                    
                }
                if(Profissao=="Todos"){
                }
  
         
            main.innerHTML = resultado;
          
          

        });
    });

}