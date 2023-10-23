// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const mostrarModalSerie = (idBoton) => {

    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/HomeController/ModalSeries",
            data: {Id: idBoton},
            success: () => {
                $("#titulo").html(response.Nombre),
                $("#contenido").html(`<img src="${response.ImagenSerie}"/> <p>${response.Sinopsis}<p/>`)
            }
        }
    )
}

const mostrarModalActores = (idBoton) => {

    $.ajax(
        {
            type: "POST",
            datatype: "JSON",
            url: "/HomeController/ModalActores",
            data: {Id: idBoton},
            success: () => {
                $("#titulo").html(response.Nombre)
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
            success: () => {
                $("#titulo").html(response.Nombre)
            }
        }
    )
}