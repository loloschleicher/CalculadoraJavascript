
window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("display"); //elemento pantalla de salida
} //Sirve para poder escribir en pantalla;



var x="0"; //guardar número en pantalla
var xi=1; //iniciar número en pantalla: 1=si; 0=no;
var coma = 0; //estado coma decimal 0=no, 1=si;
var ni = 0;
var op = "no";
var total;

function numero(xx) {  //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) {  // inicializar un número
            display.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número;
            if (xx==".") { //si escribimos una coma al principio del número
               display.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
             }
           }
         else { //continuar un número
           if (xx=="." && coma == 0){//si escribimos una coma decimal pòr primera vez
             display.innerHTML+=xx; //añadimos y mostramos en pantalla.
             x+=xx; //añadimos y guardamos
             coma = 1; //cambio valor de coma para no poder agregar mas
           }
            else if (xx=="." && coma==1) {}//si intentamos escribir una segunda coma decimal no realiza ninguna acción.
            else {
              if(display.innerHTML.length <= 7){
              display.innerHTML+=xx;
            }
              x+=xx;
            }
            }
         xi=0; //el número está iniciado y podemos ampliarlo.
     }

function operar(s) {
    igualar();
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    display.innerHTML=op;
    xi=1; //inicializar pantalla.
  }

  function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            display.innerHTML=x;	//mostramos el mismo número
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            total = String(sol);
            total1= total.substring(0,8);
            display.innerHTML=total1 //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function opuest() {
  nx=Number(x); //convertir en número
  nx=-nx; //cambiar de signo
  x=String(nx); //volver a convertir a cadena
  t=x.substring(0,8);
  display.innerHTML=t; //mostrar en pantalla.
}

function raiz() {
         x=Math.sqrt(x) //resolver raíz cuadrada.
         display.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla
         }

function reiniciar() {
         pantalla.innerHTML=0; //poner pantalla a 0
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
         }

/* Disminuir y aumentar botones*/
function disminuir1(){
  document.getElementById('1').style='width: 76px';
}

function aumentar1(){
  document.getElementById('1').style='width: 80px';
}

function disminuir2(){
  document.getElementById('2').style='width: 76px';
}

function aumentar2(){
  document.getElementById('2').style='width: 80px';
}

function disminuir3(){
  document.getElementById('3').style='width: 76px';
}

function aumentar3(){
  document.getElementById('3').style='width: 80px';
}

function disminuir4(){
  document.getElementById('4').style='width: 76px';
}

function aumentar4(){
  document.getElementById('4').style='width: 80px';
}

function disminuir5(){
  document.getElementById('5').style='width: 76px';
}

function aumentar5(){
  document.getElementById('5').style='width: 80px';
}

function disminuir6(){
  document.getElementById('6').style='width: 76px';
}

function aumentar6(){
  document.getElementById('6').style='width: 80px';
}

function disminuir7(){
  document.getElementById('7').style='width: 76px';
}

function aumentar7(){
  document.getElementById('7').style='width: 80px';
}

function disminuir8(){
  document.getElementById('8').style='width: 76px';
}

function aumentar8(){
  document.getElementById('8').style='width: 80px';
}

function disminuir9(){
  document.getElementById('9').style='width: 76px';
}

function aumentar9(){
  document.getElementById('9').style='width: 80px';
}

function disminuir0(){
  document.getElementById('0').style='width: 76px';
}

function aumentar0(){
  document.getElementById('0').style='width: 80px';
}

function disminuirmas(){
  document.getElementById('mas').style='width: 78px';
}

function aumentarmas(){
  document.getElementById('mas').style='width: 80px';
}

function disminuirmenos(){
  document.getElementById('menos').style='width: 76px';
}

function aumentarmenos(){
  document.getElementById('menos').style='width: 80px';
}

function disminuirpor(){
  document.getElementById('por').style='width: 76px';
}

function aumentarpor(){
  document.getElementById('por').style='width: 80px';
}

function disminuirdividir(){
  document.getElementById('dividido').style='width: 76px';
}

function aumentardividir(){
  document.getElementById('dividido').style='width: 80px';
}

function disminuirpunto(){
  document.getElementById('punto').style='width: 76px';
}

function aumentarpunto(){
  document.getElementById('punto').style='width: 80px';
}

function disminuirigual(){
  document.getElementById('igual').style='width: 76px';
}

function aumentarigual(){
  document.getElementById('igual').style='width: 80px';
}

function disminuiron(){
  document.getElementById('on').style='width: 76px';
}

function aumentaron(){
  document.getElementById('on').style='width: 80px';
}

function disminuirsigno(){
  document.getElementById('sign').style='width: 76px';
}

function aumentarsigno(){
  document.getElementById('sign').style='width: 80px';
}

function disminuirraiz(){
  document.getElementById('raiz').style='width: 76px';
}

function aumentarraiz(){
  document.getElementById('raiz').style='width: 80px';
}

document.getElementById('raiz').onmousedown=disminuirraiz;
document.getElementById('raiz').onmouseup=aumentarraiz;
document.getElementById('sign').onmousedown=disminuirsigno;
document.getElementById('sign').onmouseup=aumentarsigno;
document.getElementById('1').onmousedown=disminuir1;
document.getElementById('1').onmouseup=aumentar1;
document.getElementById('2').onmouseodown=disminuir2;
document.getElementById('2').onmouseup=aumentar2;
document.getElementById('3').onmousedown=disminuir3;
document.getElementById('3').onmouseup=aumentar3;
document.getElementById('4').onmousedown=disminuir4;
document.getElementById('4').onmouseup=aumentar4;
document.getElementById('5').onmousedown=disminuir5;
document.getElementById('5').onmouseup=aumentar5;
document.getElementById('6').onmousedown=disminuir6;
document.getElementById('6').onmouseup=aumentar6;
document.getElementById('7').onmousedown=disminuir7;
document.getElementById('7').onmouseup=aumentar7;
document.getElementById('8').onmousedown=disminuir8;
document.getElementById('8').onmouseup=aumentar8;
document.getElementById('9').onmousedown=disminuir9;
document.getElementById('9').onmouseup=aumentar9;
document.getElementById('0').onmousedown=disminuir0;
document.getElementById('0').onmouseup=aumentar0;
document.getElementById('mas').onmousedown=disminuirmas;
document.getElementById('mas').onmouseup=aumentarmas;
document.getElementById('menos').onmousedown=disminuirmenos;
document.getElementById('menos').onmouseup=aumentarmenos;
document.getElementById('dividido').onmousedown=disminuirdividir;
document.getElementById('dividido').onmouseup=aumentardividir;
document.getElementById('por').onmousedown=disminuirpor;
document.getElementById('por').onmouseup=aumentarpor;
document.getElementById('punto').onmousedown=disminuirpunto;
document.getElementById('punto').onmouseup=aumentarpunto;
document.getElementById('on').onmousedown=disminuiron;
document.getElementById('on').onmouseup=aumentaron;
document.getElementById('igual').onmousedown=disminuirigual;
document.getElementById('igual').onmouseup=aumentarigual;
