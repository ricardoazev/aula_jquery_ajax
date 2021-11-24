

function consultaCep(){
    $(".barra-progresso").show();

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax ({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
           $("#logradouro").html(response.logradouro);//em jquery exemplo
           $("#uf").html(response.uf);
           $("#localidade").html(response.localidade);
           $("#bairro").html(response.bairro);
           $("#titulo_cep").html("CEP " + response.cep);
           $(".cep").show();//função faz aparecer a div
           $(".barra-progresso").hide();




            //document.getElementById("logradouro").innerHTML = response.logradouro;
           // document.getElementById("bairro").innerHTML = response.bairro;
           /// document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //alert(response.logradouro)
        }

    })
}
// funcão em jquery desaparece a div
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});