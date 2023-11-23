function apostar(){
    //calcular numero apostado del 1 al 10
    var a=Math.round(Math.random()*10);
    //tranferencia de var a JS al formulario
    document.getElementById("resultado").value=a;
    //transferencia de datos del formulario al JS
    var b=document.getElementById("apostado").value;
    //resultado
    if (a==b){
        document.getElementById("salida").value="ganó";
    }else{
        document.getElementById("salida").value="perdió";
    }
}
//funcion cancelar 
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}
