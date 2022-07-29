function crearHorca(){
    var horca =new Image();
    horca.src = "../images/horca.png"
    horca.style.width = "250px"
    horca.style.height = "250px"
    
    horca.onload = function(){
        pincel.scale(0.5,0.5)
        pincel.drawImage(horca,1000,0)
    }
}

function sortearPalabra(){
    var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];
    return aleatorio;
}

function alinearGuiones(palabra){
    if(palabra.length >= 9){
        guionInicio = 300;
    } else if(palabra.length >= 7){
        guionInicio = 400;
    }else if(palabra.length == 6){
        guionInicio = 440;
    }else if(palabra.length == 5){
        guionInicio = 470;
    }else if(palabra.length == 4){
        guionInicio = 490;
    }else{
        guionInicio = 520;
    }
    return guionInicio;
}

function crearLineasPalabra(palabra){
    pincel.fillStyle="black";
    pincel.font = "100px Arial";
    switch(palabra.length){
        case 3:
            pincel.fillRect(510, 350, 50, 3);
            pincel.fillRect(590, 350, 50, 3);
            pincel.fillRect(670, 350, 50, 3);
            break;

        case 4:
            pincel.fillRect(470, 350, 50, 3);
            pincel.fillRect(550, 350, 50, 3);
            pincel.fillRect(630, 350, 50, 3);
            pincel.fillRect(710, 350, 50, 3);
            break;
        
        case 5:
            pincel.fillRect(440, 350, 50, 3);
            pincel.fillRect(520, 350, 50, 3);
            pincel.fillRect(600, 350, 50, 3);
            pincel.fillRect(680, 350, 50, 3);
            pincel.fillRect(760, 350, 50, 3);
            break;

        case 6:
            pincel.fillRect(390, 350, 50, 3);
            pincel.fillRect(470, 350, 50, 3);
            pincel.fillRect(550, 350, 50, 3);
            pincel.fillRect(630, 350, 50, 3);
            pincel.fillRect(710, 350, 50, 3);
            pincel.fillRect(790, 350, 50, 3);
            break;

        case 7:
            pincel.fillRect(350, 350, 50, 3);
            pincel.fillRect(430, 350, 50, 3);
            pincel.fillRect(510, 350, 50, 3);
            pincel.fillRect(590, 350, 50, 3);
            pincel.fillRect(670, 350, 50, 3);
            pincel.fillRect(750, 350, 50, 3);
            pincel.fillRect(830, 350, 50, 3);
            break;

        case 8:
            pincel.fillRect(310, 350, 50, 3);
            pincel.fillRect(390, 350, 50, 3);
            pincel.fillRect(470, 350, 50, 3);
            pincel.fillRect(550, 350, 50, 3);
            pincel.fillRect(630, 350, 50, 3);
            pincel.fillRect(710, 350, 50, 3);
            pincel.fillRect(790, 350, 50, 3);
            pincel.fillRect(870, 350, 50, 3);
            break;

        case 9:
            pincel.fillRect(300, 350, 50, 3);
            pincel.fillRect(370, 350, 50, 3);
            pincel.fillRect(440, 350, 50, 3);
            pincel.fillRect(510, 350, 50, 3);
            pincel.fillRect(580, 350, 50, 3);
            pincel.fillRect(650, 350, 50, 3);
            pincel.fillRect(720, 350, 50, 3);
            pincel.fillRect(790, 350, 50, 3);
            pincel.fillRect(860, 350, 50, 3);
            break;

        case 10:
            pincel.fillRect(320, 350, 50, 3);
            pincel.fillRect(380, 350, 50, 3);
            pincel.fillRect(440, 350, 50, 3);
            pincel.fillRect(500, 350, 50, 3);
            pincel.fillRect(560, 350, 50, 3);
            pincel.fillRect(620, 350, 50, 3);
            pincel.fillRect(680, 350, 50, 3);
            pincel.fillRect(740, 350, 50, 3);
            pincel.fillRect(800, 350, 50, 3);
            pincel.fillRect(860, 350, 50, 3);
            break;
    }
}

function dibujarLetraCorrecta(palabra, letra, i){
    pincel.fillStyle = "blue";

    switch(palabra.length){
        case 3:

            if(i == 0){
                pincel.fillText(letra, 1035,690);
            }else if(i == 1){
                pincel.fillText(letra, 1190,690);
            }else{
                pincel.fillText(letra, 1355,690);
            }
            break;

            case 4:
            if(i == 0){
                pincel.fillText(letra, 955,690);
            }else if(i == 1){
                pincel.fillText(letra, 1110,690);
            }else if(i == 2){
                pincel.fillText(letra, 1285,690);
            }else{
                pincel.fillText(letra, 1440,690);
            }
            break;
        
        case 5:
            if(i == 0){
                pincel.fillText(letra, 900,690);
            }else if(i == 1){
                pincel.fillText(letra, 1050,690);
            }else if(i == 2){
                pincel.fillText(letra, 1225,690);
            }else if(i == 3){
                pincel.fillText(letra, 1375,690);
            }else{
                pincel.fillText(letra, 1540,690);
            }
            break;

        case 6:
            if(i == 0){
                pincel.fillText(letra, 795,690);
            }else if(i == 1){
                pincel.fillText(letra, 950,690);
            }else if(i == 2){
                pincel.fillText(letra, 1125,690);
            }else if(i == 3){
                pincel.fillText(letra, 1275,690);
            }else if(i == 4){
                pincel.fillText(letra, 1435,690);
            }else{
                pincel.fillText(letra, 1590,690);
            }
            break;

        case 7:
            if(i == 0){
                pincel.fillText(letra, 715,690);
            }else if(i == 1){
                pincel.fillText(letra, 870,690);
            }else if(i == 2){
                pincel.fillText(letra, 1045,690);
            }else if(i == 3){
                pincel.fillText(letra, 1195,690);
            }else if(i == 4){
                pincel.fillText(letra, 1360,690);
            }else if(i == 5){
                pincel.fillText(letra, 1510,690);
            }else{
                pincel.fillText(letra, 1675,690);
            }
            break;

        case 8:
            if(i == 0){
                pincel.fillText(letra, 640,690);
            }else if(i == 1){
                pincel.fillText(letra, 790,690);
            }else if(i == 2){
                pincel.fillText(letra, 965,690);
            }else if(i == 3){
                pincel.fillText(letra, 1115,690);
            }else if(i == 4){
                pincel.fillText(letra, 1280,690);
            }else if(i == 5){
                pincel.fillText(letra, 1430,690);
            }else if(i == 6){
                pincel.fillText(letra, 1596,690);
            }else{
                pincel.fillText(letra, 1750,690);
            }
            break;

        case 9:
            if(i == 0){
                pincel.fillText(letra, 615,690);
            }else if(i == 1){
                pincel.fillText(letra, 750,690);
            }else if(i == 2){
                pincel.fillText(letra, 900,690);
            }else if(i == 3){
                pincel.fillText(letra, 1035,690);
            }else if(i == 4){
                pincel.fillText(letra, 1180,690);
            }else if(i == 5){
                pincel.fillText(letra, 1315,690);
            }else if(i == 6){
                pincel.fillText(letra, 1455,690);
            }else if(i == 7){
                pincel.fillText(letra, 1590,690);
            }else{
                pincel.fillText(letra, 1740,690);
            }
            break;

        case 10:
            if(i == 0){
                pincel.fillText(letra, 660,690);
            }else if(i == 1){
                pincel.fillText(letra, 770,690);
            }else if(i == 2){
                pincel.fillText(letra, 900,690);
            }else if(i == 3){
                pincel.fillText(letra, 1020,690);
            }else if(i == 4){
                pincel.fillText(letra, 1135,690);
            }else if(i == 5){
                pincel.fillText(letra, 1250,690);
            }else if(i == 6){
                pincel.fillText(letra, 1380,690);
            }else if(i == 7){
                pincel.fillText(letra, 1490,690);
            }else if(i == 8){
                pincel.fillText(letra, 1615,690);
            }else{
                pincel.fillText(letra, 1730,690);
            }
            break;
    }
}   

function dibujarLetraIncorrecta(letra, error){
    pincel.fillStyle = "black";
    switch(error){
        case 0:
            pincel.fillText(letra, 700, 1000);
            break;
        case 1:
            pincel.fillText(letra, 900, 1000);
            break
        case 2:
            pincel.fillText(letra, 1100, 1000);
            break
        case 3:
            pincel.fillText(letra, 1300, 1000);
            break
        case 4:
            pincel.fillText(letra, 1500, 1000);
            break
        case 5:
            pincel.fillText(letra, 1700, 1000);
            break
    }    
}

function dibujarHorca(errores){
    switch(errores){
        case 0:
        //cabeza
        var cabeza = new Image();
        cabeza.src = "../images/cabeza.png";
        cabeza.onload = function(){
        pincel.drawImage(cabeza, 1305, 225, 120, 100)
        }
        break;




        case 1:
        //cuerpo
        var cuerpo = new Image();
        cuerpo.src = "../images/cuerpo.png";
        cuerpo.onload = function(){
        pincel.drawImage(cuerpo, 1303, 325, 130, 140)
        }
        break;
        
        case 2:
        //mano izq
        var brazo = new Image();
        brazo.src = "../images/brazo.png";
        brazo.onload = function(){
        pincel.drawImage(brazo, 1223, 326, 80, 170)
        }
        break;

        case 3:
        //mano der
        var brazo1 = new Image();
        brazo1.src = "../images/brazo1.png";
        brazo1.onload = function(){
        pincel.drawImage(brazo1, 1432, 325, 60, 170)
        }
        break;

        case 4:
        //pie izq
        var pierna = new Image();
        pierna.src = "../images/pierna.png";
        pierna.onload = function(){
        pincel.drawImage(pierna, 1300, 466  , 60, 140)
        }
        break;

        case 5:
        //pie der
        var pierna1 = new Image();
        pierna1.src = "../images/pierna1.png";
        pierna1.onload = function(){
        pincel.drawImage(pierna1, 1374, 466, 60, 140)
        }
        break;

    }
    
}

function derrota(palabra){
    Swal.fire({
        title: "DERROTA",
        text: "La palabra era "+palabra+ ". Mas Suerte la Proxima Vez...",
        icon: "error",
        confirmButtonText: "Volver al Inicio",
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        customClass:{
            title: "tituloDerrota",
            closeButton: "botonDerrota"
        },
        confirmButtonColor:"#c20000",
        color: "#c20000"
    }).then(function(){
        window.location= "../html/index.html"
    })
}

function victoria(palabra){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    Swal.fire({
        title: "VICTORIA",
        text: "Felicidades...Ganaste!",
        icon: "success",
        confirmButtonText: "Volver al Inicio",
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        customClass:{
            title: "tituloVictoria",
            closeButton: "botonVictoria"
        },
        confirmButtonColor:"#258d19",
        color: "#258d19"
    }).then(function(){
        window.location= "../html/index.html"
    })  
}

function agregarPalabra(){
    Swal.fire({
        icon: "info",
        title: 'Ingrese una palabra: ',
        footer: "&#9888; Solo mayusculas y palabras menores a los 10 caracteres.",
        confirmButtonText: "Agregar",
        width: 600,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        padding: '3em',
        color: '#716add',
        backdrop: `
        rgba(0,0,123,0.4)
        url("../images/nyan-cat.gif")
        left top
        no-repeat
        `,  
        input:"text"
        }).then((palabra) =>{
            console.log(palabra.value);
            var res = /^\p{Lu}{3,10}$/gu.test(palabra.value);
            if(res){
                Swal.fire({
                    title: "Palabra agregada"
                })
                palabras.push(palabra.value);
            }else{
                Swal.fire({
                    title: "Palabra escrita en formato incorrecto"
                })
            }

        });


}

function registrarTeclas(palabra){
    var letraCorrecta = 0; 
    var letraUsada = [];
    window.addEventListener('keydown', function(e){
        var letraPresionada = e.key.toUpperCase()
        if(letraUsada.includes(letraPresionada)){
        }
        else{
            if(abecedario.includes(letraPresionada)){
                if(palabra.includes(letraPresionada)){       
                    for(var i = 0; i < palabra.length; i++){
                        if(letraPresionada == palabra[i]){
                            ++letraCorrecta;
                            dibujarLetraCorrecta(palabra, letraPresionada, i);
                            letraUsada.push(letraPresionada);
                        }
                        if(letraCorrecta == palabra.length){
                            victoria(palabra);
                        }
                    }
                }else{
                    dibujarHorca(error);
                    dibujarLetraIncorrecta(letraPresionada, error);
                    error++;
                    letraUsada.push(letraPresionada);
                    if(error == 6){
                        derrota(palabra);
                    }
                    
                }
            }
        }

    }) 

}

function iniciarJuego(){
        document.getElementById("iniciar").style.display = "none";
        document.getElementById("agregar").style.display = "none";
        crearHorca();
        var palabra = sortearPalabra();
        crearLineasPalabra(palabra);
        registrarTeclas(palabra)
}   

var palabras= ["PALABRA", "COMIDA", "PERRO", "GATO", "ANIMAL", "RICHARD","SOL", "COCO", "PATO", "MICAELA","PIZZA","CARRO","AVION","MOTO","PASTEL","LECHE","CHOCOLATE","CASA","MONTAÑA","MANZANA","PIÑA","LIBRO","CANCION","TELEFONO","CIUDAD","ACTOR","LAMPARA","COCINA","COCINERO","POLICIA","PALMERA","COCO","TELEVISION","PELICULA","PANADERO","EDIFICIO","PELOTA","JUGO","TECLADO","RATON","CAMA","TECHO","SUELO","CABLE","INTERNET","FOTO","PLANTA","MUÑECA","ZAPATO","VENTILADOR","CORTINA","CUADRO","PUERTA","ESPEJO","ESTATUA","BARCO","CAJA","ARAÑA","CUCHARA","LICUADORA","HORNO","ORANGUTAN","RELOJ","OSO","VASO","PLATO","TAZON","AVENA","BAÑO","PLAYA","SOL","LUNA","CANELA","FRESA","CEREZA","CORAZON","CELULAR", "PARLANTE", "TECLADO", "MESSI","AHORCADO","CAMA", "ESTERNON", "PIERNA", "FUTBOL"];
var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var pantalla = document.getElementById("canvas");
var pincel = pantalla.getContext("2d");
var muerte1 = new Image();

muerte1.src = "../images/muerte.png";
muerte1.onload = function(){
    pincel.drawImage(muerte1,0,0)
}

var muerte2 = new Image();
muerte2.src = "../images/muerte.png";
muerte2.onload = function(){
    pincel.drawImage(muerte2,920,0)
}

var error = 0




