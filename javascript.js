
// alert para irse de la página
 function alerta(){
    alert("Atención, se va a redirigir a otro enlace")
 }

 //Para 'Ejemplo', cambio de usuario
let opcion1_Btn = document.getElementById("opcion1")
let opcion2_Btn = document.getElementById("defaultboton")
let imgchange= document.getElementById("imgchange")


opcion1_Btn.onclick=function(){

    imgchange.src=" https://st2.depositphotos.com/1017732/9796/i/600/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg"
    document.getElementById("titulo1").innerHTML="German Da Silva"
    document.getElementById("titulo2").innerHTML="Jefe de seguridad"
}

opcion2_Btn.onclick=function(){

    imgchange.src="https://img.freepik.com/fotos-premium/joven-mujer-bonita-caucasica-blanco_1187-75943.jpg?w=2000"
    document.getElementById("titulo1").innerHTML="Romina Brikenia"
    document.getElementById("titulo2").innerHTML="Administrativa contable"
}

