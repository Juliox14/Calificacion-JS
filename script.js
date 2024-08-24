function calcular(){    
    const cal1 = document.getElementById('calificacion1').value;
    const imgCal1 = document.getElementById('img_cal');


    if(cal1 == ""){
        alert("Por favor, ingrese una calificación");
        return;
    }
    else if(cal1 > 100){
        alert("Por favor, ingrese una calificación válida");
        return;
    }
    else{
        const cal1Letra = calificacionALetra(cal1);
        imgCal1.src = `public/img/${cal1Letra}.png`;
        animarHoja();
    }

}


function calificacionALetra(calificacion){
    if(calificacion >= 90){
        return "A";
    }else if(calificacion >= 80){
        return "B";
    }else if(calificacion >= 70){
        return "C";
    }else if(calificacion == 69){
        return "D";
    }else{
        return "F";
    }
}

function animarHoja() {
    const hoja_entrada = document.querySelector('.hoja_entrada');
    const hoja_salida = document.querySelector('.hoja_salida');
    const boton = document.getElementById('boton_imprimir');
    const audio = new Audio('public/audio/impresora.mp3');

    boton.disabled = true;
    audio.play();
    hoja_entrada.classList.add('animar');
    hoja_salida.classList.add('animar');

    setTimeout(() => {
        hoja_entrada.classList.remove('animar');
        hoja_salida.classList.remove('animar');
        boton.disabled = false;
        audio.remove();
    }, 20000);
}
