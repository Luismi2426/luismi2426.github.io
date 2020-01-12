function MuestraPista(digito, posicion, enlace_correcto) {
    var es_correcta = document.getElementById("si").checked;
    if (es_correcta) {
        window.alert("El dígito número " + posicion + " de la combinación es " + digito);
        window.location.href = enlace_correcto;
    } else {
        window.alert("¡Has fallado!");
    }
    return es_correcta;
}

function SeleccionFinal(enlace) {
    var es_correcta = document.getElementById("si").checked;
    if (es_correcta) {
        window.location.href = enlace;
    } else {
        window.alert("¡Venga!");
    }
    return es_correcta;
}
