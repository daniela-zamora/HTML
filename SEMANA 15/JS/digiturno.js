function info(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            var letra="F";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es..."+letra+"\n"+"espere su llamado..");
            num++;
        }else{
            alert("ERROR EN TURNO");
            break;
        }
    }
}
//pago 
function pago(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            var letra="P";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es..."+letra+"\n"+"espere su llamado..");
            num++;
        }else{
            alert("ERROR EN TURNO");
            break;
        }
    }
}
//pqr
function pqr(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            var letra="Q";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es..."+letra+"\n"+"espere su llamado..");
            num++;
        }else{
            alert("ERROR EN TURNO");
            break;
        }
    }
}
//MATRICULA
function matri(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            var letra="M";
            var letra=letra.concat(n);
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es..."+letra+"\n"+"espere su llamado..");
            num++;
        }else{
            alert("ERROR EN TURNO");
            break;
        }
    }
}
