function ingresar(){
    let nombre,edad,estado,institucion;
    nombre=document.getElementById('nom').value;
    edad=document.getElementById('ed').value;
    institucion=document.getElementById('ins').value;

    if(document.getElementById('radio1').checked){
        estado="sin nivel de estudio";
    }else if(document.getElementById('radio2').checked){
        estado="Primaria"
    }else if(document.getElementById('radio3').checked){
        estado="Secundaria"
    }else if(document.getElementById('radio4').checked){
        estado="Tecnico"
    }else if(document.getElementById('radio5').checked){
        estado="universitario"
    }else if(document.getElementById('radio6').checked){
        bot.style.visibility='visible';
        estado="otro tipo de estudio";
}
alert ('El estudiante:'+nombre+'cuya edad es '+edad+' años'+'\n'+'nivel de estudio: '+estado+'\n'+'graduado en la institucion: '+institucion);
}