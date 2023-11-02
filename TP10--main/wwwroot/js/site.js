// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const mostrarModalSerie = (idBoton) => {
mostrarModalActores
    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/Home/ModalSeries",
            data: {Id: idBoton},
            success: (response) => {
                console.log(response);
                $("#contenido__img").attr('src',response.imagenSerie),
                $("#contenido__parrafo").html(response.nombre)
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

const mostrarModalTemporada = (idBoton) => {

    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/HomeController/ModalTemporada",
            data: {Id: idBoton},
            success: (response) => {
                $("#contenido__parrafo").html(response.tituloTemporada)
                $("#contenido__img").attr('src', "#")
            }
        }
    )
}