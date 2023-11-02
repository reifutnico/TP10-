// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const mostrarModalSerie = (idBoton) => {
    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/Home/ModalSeries",
            data: {Id: idBoton},
            success: (response) => {
                console.log(response);
                $("#titulo").html("Sinopsis");
                $("#contenido").html("<p>"+response.sinopsis+"</p>")
            }
        }
    )
}

const mostrarModalActores = (idBoton) => {
    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/Home/ModalActores",
            data: {Id: idBoton},
            success: (response) => {
                
                console.log(response);
                $("#contenido__img").attr('src', "#"),
                response.forEach(a => {
                    $("#contenido__parrafo").append(a.nombre)
                });

            
        }
        }
    )
}

﻿function mostrarModalTemporada(idSerie){
    $.ajax(
        {
            type:'POST',
            dataType:'JSON',
            url:'/Home/ModalTemporada',
            data:{Id:idSerie},
            success:
            function(response){

                let temporadas=[];
                for (const temp of response) {
                   temporadas.push("<li>"+temp.numeroTemporada+"- "+temp.tituloTemporada+"</li>");

                }
                console.log(response)

                $("#titulo").html("Temporadas");
                $("#contenido").html(temporadas);

            }
        }
    )
}