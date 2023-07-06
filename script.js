//**------------------- DECLARACIÓN DE VARIABLES -----------------------**
// const $ = (selector) => {
//     return document.querySelector(selector);
// }



// ----- Declaración de datos de las colecciones -----
// Se declaran como objetos porque necesito saber datos específicos de cada una
// Los campos fila y col muestran el número de filas y columnas que ocupa cada figura
// Los declaro sin comillas porque quiero que los tome como números para poder hacer operaciones

const colecciones = ["animales", "monumentos", "árboles"];   //Aquí irá el nombre de las colecciones existentes, definidas debajo
const sonidos = ["Assets/media/animales.mp3", "Assets/media/monumentos.mp3", "Assets/media/arboles.mp3"];

const sonidoAgua = "Assets/media/agua.mp3";
const sonidoTocado = "Assets/media/tocado.mp3";
const sonidoTodoEncontrado = "Assets/media/todoEncontrado.mp3";
const sonidoFracaso = "Assets/media/fracaso.mp3";
const sonidoRepetida = "Assets/media/repetida.mp3";


const animales = [{nombre: "León", fila: 2, col: 2, url: "Assets/images/leon.png", sonido: "Assets/media/leon.mp3",icono:"Assets/iconos/leon.png"},
                  {nombre: "Jirafa", fila: 3, col: 2, url: "Assets/images/jirafa.png", sonido: "Assets/media/jirafa.mp3", icono:"Assets/iconos/jirafa.png"}, 
                  {nombre: "Gato", fila: 2, col: 1, url: "Assets/images/gato.png", sonido: "Assets/media/gato.mp3", icono:"Assets/iconos/gato.png"}, 
                  {nombre: "Delfín", fila: 1, col:3, url: "Assets/images/delfin.jpg", sonido: "Assets/media/delfin.mp3", icono:"Assets/iconos/delfin.png"},  
                  {nombre: "Águila", fila: 2, col: 3, url: "Assets/images/aguila.png", sonido: "Assets/media/aguila.mp3", icono:"Assets/iconos/aguila.png"}
                ];

const monumentos = [{nombre: "Eiffel", fila: 3, col: 2, url: "Assets/images/eiffel.jpg", sonido: "Assets/media/eiffel.mp3",icono:"Assets/iconos/eiffel.png"},
                    {nombre: "Pisa", fila: 2, col: 1, url: "Assets/images/pisa.png", sonido: "Assets/media/pisa.mp3",icono:"Assets/iconos/pisa.png"}, 
                    {nombre: "Taj Mahal", fila: 1, col: 3, url: "Assets/images/tajmahal.jpg", sonido: "Assets/media/tajmahal.mp3",icono:"Assets/iconos/tajmahal.png"},
                    {nombre: "Giralda", fila: 2, col: 2, url: "Assets/images/giralda.png", sonido: "Assets/media/giralda.mp3",icono:"Assets/iconos/giralda.png"},
                    {nombre: "Keops", fila: 2, col: 3, url: "Assets/images/keops.jpg", sonido: "Assets/media/keops.mp3",icono:"Assets/iconos/keops.png"}
                ];

const árboles = [{nombre: "Encina", fila: 2, col: 2, url: "Assets/images/encina.png", sonido: "Assets/media/encina.mp3",icono:"Assets/iconos/encina.png"},
                 {nombre: "Abeto", fila: 2, col: 1, url: "Assets/images/abeto.png", sonido: "Assets/media/abeto.mp3",icono:"Assets/iconos/abeto.png"},  
                 {nombre: "Cerezo", fila: 2, col: 3, url: "Assets/images/cerezo.png", sonido: "Assets/media/cerezo.mp3",icono:"Assets/iconos/cerezo.png"}, 
                 {nombre: "Haya", fila: 1, col: 3, url: "Assets/images/haya.png", sonido: "Assets/media/haya.mp3",icono:"Assets/iconos/haya.png"},  
                 {nombre: "Pino", fila: 3, col: 2, url: "Assets/images/pino.png", sonido: "Assets/media/pino.mp3",icono:"Assets/iconos/pino.png"} 
                ];

//----- Fin declaración de colecciones -----

//array de variables que controla qué se ha encontrado
let piezas = [{cantidad:0, encontradas:0, terminada:0},
              {cantidad:0, encontradas:0, terminada:0},
              {cantidad:0, encontradas:0, terminada:0},
              {cantidad:0, encontradas:0, terminada:0},
              {cantidad:0, encontradas:0, terminada:0}
            ];




// Declaración del array tablero, más adelante se hará bidimensional. Se referencia como tablero[y][x]
let tablero = new Array(10);  //almacena el valor de cada posición del tablero
let tableroAux = new Array(10);     //almacena 0 si la posición no ha sido descubierta y 1 si ha sido descubierta


let colElegida = 0;  //almacena el número de la colección elegida, en array colecciones corresponde a colElegida-1
let coleccion;       //almacena el contenido del array de objetos de la colección elegida, se pasa el valor en un switch (in case)

let intentos = 10;   //almacena el número de intentos que ha introducido el usuario
let puntuacion = 0;  //almacena la puntuación que va ganando el jugador
let intentosRestantes = 0;  //almacena los intentos que quedan por jugar
let encontrados = 0;   //almacena los elementos encontrados 
let coordX;
let coordY;
let posicion;       //almacena el Id del grid correspondiente a la posición introducida
let posicionAux;    //almacena el Id de cada posición de la pieza terminada

let xmax=0;         //almacena el número de columnas de la pieza a colocar
let ymax=0;         //almacena el número de filas de la pieza a colocar
let nombre;         //almacena el nombre de la pieza colocada
let fila;           //tendrá un valor de fila aleatorio
let col;            //tendrá un valor de columna aleatorio
let x;              //se usará para colocar en el tablero las piezas
let y;              //se usará para colocar en el tablero las piezas
let error=0;        //controlará si hay un error al llenar el tablero por desborde o por choque
let imagencol;      // muestra la id de la imagen encontrada
let id;             //almacenará la id de la casilla clicada en el grid


let casilla;        //captura la id de la casilla donde se hizo clic
let sonidoaux;      //almacena el sonido adecuado en cada momento
let audio;          //se usa para almacenar el sonido de cada momento

let i=0;   //variables para usar en bucles
let j=0;
let k=0;
let ej;
let ei;
let posi;


//**-------------------------- FIN DECLARACIÓN DE VARIABLES ---------------------**


//**--------------------------- CONTROLES DE PANTALLA INICIAL ---------------------**

/**
 * EVENTOS QUE CONTROLAN EN QUÉ COLECCIÓN HA HECHO CLIC EN LA PANTALLA DE INICIO 
 * ASIGNA VALORES ADECUADOS tanto a variables como a colores en pantalla
 */
document.querySelector("#coleccion1").addEventListener("click", (e) =>{ 
    e.preventDefault();   /*borra los valores anteriores*/
    colElegida=1;    
    
    // Cambia el valor del input de colElegida a 1 para que aparezca en el formulario  
    document.querySelector("#coleccionElegida").setAttribute("value", "1");
    
    // Asigno la class de css adecuada a cada colección para que aparezca el borde correcto y la animación

    document.getElementById('coleccion1').className = 'animate_animated animate__heartBeat';
    // Le pongo un retraso de  sg para que se vea la animación
    setTimeout(() => {
        document.getElementById('coleccion1').className = 'seleccionado';
        document.getElementById('coleccion2').className = 'coleccion2';
        document.getElementById('coleccion3').className = 'coleccion3';
    }, 1000);
 
   })

document.querySelector("#coleccion2").addEventListener("click", (e) =>{ 
    e.preventDefault();    /*borra los valores anteriores*/
    colElegida=2;    
    
    // Cambia el valor del input de colElegida a 2 para que aparezca en el formulario  
    document.querySelector("#coleccionElegida").setAttribute("value", "2");
    
    // Asigno la class de css adecuada a cada colección para que aparezca el borde correcto y la animación
    document.getElementById('coleccion2').className = 'animate_animated animate__heartBeat';
    // Le pongo un retraso de  sg para que se vea la animación
    setTimeout(() => {
        document.getElementById('coleccion1').className = 'coleccion1';
        document.getElementById('coleccion2').className = 'seleccionado';
        document.getElementById('coleccion3').className = 'coleccion3';
    }, 1000);
    
})

document.querySelector("#coleccion3").addEventListener("click", (e) =>{
    e.preventDefault();
    colElegida=3;

    // Cambia el valor del input de colElegida a 3 para que aparezca en el formulario  
    document.querySelector("#coleccionElegida").setAttribute("value", "3");
    
    // Asigno la class de css adecuada a cada colección para que aparezca el borde correcto y la animación
    document.getElementById('coleccion3').className = 'animate_animated animate__heartBeat'; 
    // Le pongo un retraso de  sg para que se vea la animación
    setTimeout(() => {
        document.getElementById('coleccion1').className = 'coleccion1';
        document.getElementById('coleccion2').className = 'coleccion2';
        document.getElementById('coleccion3').className = 'seleccionado';
    },1000);
      
})
/**
 * FIN EVENTOS DE CONTROL DE CLIC EN COLECCIONES EN PANTALLA INICIAL
 */


/**
 * EVENTO QUE PIDE NÚMERO DE INTENTOS Y COLECCIÓN Y CAMBIA A PANTALLA DE JUEGO
 * controla que cambie el color de la colección seleccionada por si antes ya había hecho clic en alguna
 * Cambia de pantalla tras pulsar el botón Aceptar al grid de la pantalla de juego
 */

document.querySelector("#elecciones").addEventListener("submit", (e) =>{
    e.preventDefault();
    colElegida = e.target.colElegida.value;    
    intentos = e.target.intentos.value;

    
    // Cambia el formato a la colección elegida, 
    // no lo uno al switch para dar a opción a poner más colecciones, pero sólo 3 posiciones
    if(colElegida=="1"){
        document.getElementById('coleccion1').className = 'seleccionado';
        document.getElementById('coleccion1').className = 'animate_animated animate__heartBeat';
        document.getElementById('coleccion2').className = 'coleccion2';
        document.getElementById('coleccion3').className = 'coleccion3';
    }
    else {
        if (colElegida=="2"){
            document.getElementById('coleccion1').className = 'coleccion1';
            document.getElementById('coleccion2').className = 'seleccionado';
            document.getElementById('coleccion2').className = 'animate_animated animate__heartBeat';
            document.getElementById('coleccion3').className = 'coleccion3';
        }
        else{
            document.getElementById('coleccion1').className = 'coleccion1';
            document.getElementById('coleccion2').className = 'coleccion2';
            document.getElementById('coleccion3').className = 'seleccionado';
            document.getElementById('coleccion3').className = 'animate_animated animate__heartBeat';
        }
    }
    // animación del valor introducido
    document.getElementById('intentos').className = 'animate_animated animate__heartBeat';
    // Paso el valor del array de colecciones elegido a la variable "coleccion" para trabajar siempre con ella
    switch (colecciones[colElegida-1]){
        case "animales": 
            coleccion = animales;
            break;
        case "monumentos":
            coleccion = monumentos;
            break;
        case "árboles":
            coleccion = árboles;
            break;

    }

    //Establece la cantidad de piezas de cada posición en el array piezas
    for (i=0; i<5; i++){
        piezas[i].cantidad = coleccion[i].fila * coleccion[i].col;
                
    }

    // Establezco un delay de 1sg por si ha elegido una colección distinta por el formulario que aparezca en pantalla su color al clicar
    setTimeout(() => {
        console.log("1 Segundo esperado")
         
        /**
         * ----- CAMBIO A PANTALLA DE JUEGO - SIGUE DENTRO DEL EVENTO LISTENER -----
         */

        
        // Oculta la primera pantalla para continuar con el juego
        document.querySelector("#pantalla-inicio").className="ocultar";

        // Le quita la señal de oculto a la pantalla del juego
        document.querySelector("#Encuentra-los").className="Encuentra-los";

        // añade la colección elegida tras el título, le resto 1 porque el array comienza por 0
        document.getElementById("titulo").innerHTML += colecciones[colElegida-1];

    }, 1000);  // fin del delay

    //-------- Da los valores al lateral de la pantalla ----------
    document.getElementById("puntuacion").innerHTML = puntuacion;
    intentosRestantes = intentos;
    document.getElementById("intentosRestantes").innerHTML = intentosRestantes;
    document.getElementById("encontrados").innerHTML = encontrados;

        
    llenadoGrid();
    
    llenadoArrayBidimensional();

    colocarPiezasTablero();

    // mostrarTablero(); //Aquí no debe verse el valor del tablero, se usa sólo para pruebas

         

})
/**
 * FIN EVENTO NÚMERO DE INTENTOS, COLECCIÓN y CAMBIO A PANTALLA DE JUEGO
 * FIN DEL EVENTO LISTENER SUBMIT
 */



/**
 * Evento para la INTRODUCCIÓN DE COORDENADAS y COMPROBACIONES
 */
document.querySelector("#coordenadas").addEventListener("submit", (e) =>{
    e.preventDefault();
    coordX = e.target.coordenadaX.value;  //toma el valor introducido
    coordY = e.target.coordenadaY.value;
    coordX= coordX * 1;     //Lo multiplico por 1 para prevenir que introduzca un 0 inicial, que daría error al calcular el grid
    coordY = coordY *1
    posicion = "grid-"+coordX+"-"+coordY;

    e.target.coordenadaX.value = "";     //Reinicio a vacío los valores de las coordenadas del formulario para borrar las anteriores
    e.target.coordenadaY.value = "";
    

    comprobarCoordenadas();
    
    })
/**
 * FIN EVENTO DE COORDENADAS */
/**


/** 
 * Evento CLICAR EN GRID 
 * Comprueba en cuál de las casillas del grid se ha clicado
 */
    
document.querySelectorAll(".grid-container").forEach((element) => {
    element.addEventListener("click", cogerCoordenada,false);
    
})


/** FIN EVENTO CLICAR EN GRID */



/**
 * EVENTO BOTONES SI y NO para continuar jugando
 */
document.querySelector("#Si").addEventListener("click", (e) =>{
    e.preventDefault();
    location.href = '/Index.html'
    
})

document.querySelector("#No").addEventListener("click", (e) =>{
    e.preventDefault();
    
    document.getElementById("gracias").className="gracias";
    document.getElementById("Encuentra-los").className="ocultar";

})
/**
 * Fin Evento botones SI y NO
 ** 



/********************************************************************** */
// *********************   FUNCIONES   ********************************    
//********************************************************************* */
    
/**
 * -------Muestra el GRID DEL TABLERO del juego-------
 * La estructura del grid es: primera columna class="fil-item", primera fila: class="cab-item"
 * Cada celda tiene: class="grid-item grid-x-y" siendo la x y la y, las coordenadas x,y de su posición
 * La estructura completa puede verse en "Encuentra-losPRUEBA.html"
 */    
function llenadoGrid()
{ 
    
    // cabecera, primera línea,  
    // se asigna una class="fil-item" a la primera columna y de "cab-item"también pone en pantalla el número de fila
    i=0;
    while (i<=11){
        if (i==0){
            document.getElementById("grid-container").innerHTML+=`<div class="fil-item"></div>`;
        }
        else{
            document.getElementById("grid-container").innerHTML+=`<div class="cab-item">${i}</div>`;
        }
        i++;
    }
    // celdas interiores del grid, les asigno un id="grid-columna-fila" y dos class= "grid-columna-fila grid-item",
    for(j=1; j<=10; j++){
        document.getElementById("grid-container").innerHTML+=`<div class="fil-item">${j}</div>`;  //primera columna saca el nº de columna
        for(i=1; i<=11; i++){
        //    lo he cambiado a button para poder clicar sobre ellos
            document.getElementById("grid-container").innerHTML+=
            `<button id="grid-${i}-${j}" class="grid-${i}-${j} grid-item">
                ${i}-${j}
            </button>
            `; 
           
        }

    }
    
}
//* ------ Fin grid del juego -------


/**
 *----- Función que llena el ARRAY BIDIMENSIONAL para elementos a encontrar -------
 */
function llenadoArrayBidimensional()
{
    // Declaración del array bidimensional, antes ya se declaró tablero
    for (i=0; i<10; i++){
        tablero[i] = new Array(11);
        tableroAux[i] = new Array(11);
    }
    
    //Lleno el array bidimensional con 0.¡OJO! El tablero es [fila][columna], o sea [y][x] y comienza en 0
    for (j=0; j<10; j++){
        for (i=0; i<11; i++){
            tablero[j][i] = "0";
            tableroAux[j][i] = "0";
        }
    }
       
}
//---------- Fin función llenar array Bidimensional


/**
 * ----- Función que COLOCA LAS PIEZAS de la colección elegida, aleatoriamente en el tablero
 * Controla que no haya errores de desbordamiento de tablero ni de superposición
 */
function colocarPiezasTablero()
{
    for (k=0; k<5; k++){
        xmax = coleccion[k].col;
        ymax = coleccion[k].fila;
        nombre = coleccion[k].nombre;
        error=1;
        while (error==1){                   //controla que no haya error de desborde o superposición
            error=0;
            fila = numeroRandom(1,10);
            col = numeroRandom(1,11);
            x = col;
            y = fila;
            i = 0;
            j = 0;
            while ((i<xmax) & (error==0)){
                while ((j<ymax) & (error==0)){
                    if ((x>11) | (y>10)){     //comprueba si hay error de desborde 
                        error=1;
                    }
                    else{
                        //o error de superposición, debe ponerse en el "else" porque si desborda esta condición daría error de lectura
                        if (tablero[y-1][x-1] != "0"){  
                            error=1;
                        }
                    }
                    if (error == 1){
                            for (ej=0; ej<10; ej++){                    //recorre el tablero para borrar los valores puestos del mismo elemento que dio error
                            for (ei=0; ei<11; ei++){
                                if (tablero[ej][ei] == nombre){
                                    tablero[ej][ei] = "0";
                                }
                            }
                        }

                    }
                    else{                                 //si no hay error ponemos el nombre correspondiente en el tablero
                        tablero[y-1][x-1] = nombre;
                        y++;
                        j++;
                    }
                }
                y = fila;
                i++;
                j = 0;
                x++;
            }
        }
        
    }
}
//---- Fin función colocar piezas en tablero


/**
 *----- Función que devuelve un NÚMERO ALEATORIO entre dos valores dados (min y max)
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function numeroRandom(min, max) {
    min = Math.ceil(min);             //redondea al integer superior
    max = Math.floor(max);            // redondea al integer inferior
    return Math.floor(Math.random() * (max - min) + min);  // El máximo es exclusivo, el mínimo es inclusivo
}
//----- Fin función dar un número aleatorio


/**
 *----- Función que MUESTRA EL TABLERO en el grid de pantalla, las POSICIONES DEL TABLERO
 SOLO ES PARA PRUEBAS
 */
function mostrarTablero()
{
    for(j=1; j<=10; j++){
        for(i=1; i<=11; i++){
            casilla = "grid-"+i+"-"+j;
            document.getElementById(casilla).innerHTML = tablero[j-1][i-1]; 

        }
    }
}   

// MUESTRA EL TABLERO marcando en COLOR distinto las piezas no encontradas.
function mostrarTableroColor()
{
    for(j=1; j<=10; j++){
        for(i=1; i<=11; i++){
            casilla = "grid-"+i+"-"+j;
            
            // Si la casilla no ha sido descubierta pone en pantalla un 0
            if(tableroAux[j-1][i-1] == "0")
            {
                document.getElementById(casilla).innerHTML = tablero[j-1][i-1]; 

                // No ha sido descubierto y hay una pieza ahí, se marca con color distinto
                if (tablero[j-1][i-1] != "0"){
                                        
                    document.getElementById(casilla).className = "sinEncontrar";
                }
            }
  
        }
    }
}   
//----- Fin función que muestra tablero en pantalla    


/**
 * Función que coge la POSICION DEL GRID DONDE SE HIZO CLICK a través de un evento
 * Hace llamadas a calcularCoordenadas y ComprobarCoordenadas
 * 
 * @param {*} evento 
 */
function cogerCoordenada(evento){
    
    id=evento.target.id;    //pasa a la variable "id" el valor de la id de la posición clicada

    console.log(id);
    
    calcularCoordenadas();

    comprobarCoordenadas();
 
}
/* Fin función de coger coordenada */


/**
 * Función que calcula la coordenada donde se ha clicado en el grid.
 * Como el id del grid es: grid-x-y vamos comprobando esa variable por posiciones para averiguar la "x" y la "y"
 * comprobando si tienes 1 ó 2 dígitos 
 */
function calcularCoordenadas(){

    if (id[6] != "-"){     //la X tiene 2 dígitos
        coordX = id[5] + id[6];
        if (id.length < 10){        //la Y tiene  dígito (la X tiene 2) 
            coordY = id[8];
        }
        else{             //la Y tiene 2 dígitos  (la X tiene 2)
            coordY = id[8] + id[9];
        }
    }
    else{       //la X tiene  dígito
        coordX = id[5];
        if (id.length < 9){    //la Y tiene 1 dígito (la X tiene 1)
            coordY = id[7];
        }
        else {      //la Y tiene 2 dígitos (la X tiene 1)
            coordY = id[7] + id[8];
        }
    }
    posicion = "grid-"+coordX+"-"+coordY;


    console.log(id.length);
    console.log(id[7]);
    // console.log("X= ", coordX);
    // console.log("Y= ", coordY);

}
/*Fin Función Calcular Coordenadas*/


/**
 * Función que COMPRUEBA SI LAS COORDENADAS INTRODUCIDAS SON REPETIDAS, si tocan una pieza o no
 * Actúa según la circunstancia
 */    
function comprobarCoordenadas()
{
    //-- Ese lugar YA SE HA DESCUBIERTO antes
    console.log("X= ", coordX);
    console.log("Y= ", coordY);

    if (tableroAux[coordY-1][coordX-1] == "1"){  
        sonido(sonidoRepetida);                     //reproduce el sonido llamando a la función Sonido  
        document.querySelector("#elegido").className="elegido";  //Muestra el apartado con class "elegido" que muestra en pantalla un aviso
        
       setTimeout(() => {
            document.querySelector("#elegido").className="ocultar"; //Vuelve a ocultar el apartado con el aviso
            
       
       }, 1000);                                      //delay para borrar el aviso de que ya ha sido descubierto 
       
        
    }
    // ese LUGAR NO ha sido DESCUBIERTO antes
    else{     
            
        tableroAux[coordY-1][coordX-1]="1";    //marcamos en el tableroAux un "1" como que ya ha sido descubierto

        //-- HAY UNA PIEZA en ese lugar --
        if (tablero[coordY-1][coordX-1] != "0"){              

            document.getElementById(posicion).className = "tocado";   //le añadimos la class "tocado" para que tome sus características
            casilla = "grid-"+coordX+"-"+coordY;
            document.getElementById(casilla).innerHTML = tablero[coordY-1][coordX-1];

            console.log(casilla);
            console.log(tablero[coordY-1][coordX-1]);
            
            posi=0;  //Localizo el lugar que ocupa el descubierto en el array "coleccion"
            
            for (k=0; k<5; k++){
                if (coleccion[k].nombre == tablero[coordY-1][coordX-1]){  
                    posi=k;                            //En posi estará el lugar de la pieza en coleccion y en piezas
                    
                }
            }

            piezas[posi].encontradas = piezas[posi].encontradas+1;        //Como el lugar "posi" será el mismo que en piezas, le sumo 1 a las encontradas
            

            //Si las encontradas son igual al total es que se ha ENCONTRADO COMPLETO
            if (piezas[posi].encontradas == piezas[posi].cantidad){      
                piezas[posi].finalizadas = 1;                         //Marcamos que se ha finalizado esa pieza
                puntuacion = puntuacion + 10;
                encontrados = encontrados + 1;
                                
                //Recorro el tablero para cambiar el class a "finalizado" a todos los que tengan ese nombre
                for (j=0; j<10; j++){                             
                    for(i=0; i<11; i++){                           
                        if (tablero[j][i] == coleccion[posi].nombre){
                            x = i+1;
                            y = j+1;
                            posicionAux = "grid-"+ x +"-"+ y;
                            document.getElementById(posicionAux).className = "finalizado";

                            // Le añadimos una imagen a esa posición del grid para poner la imagen encontrada
                            document.getElementById(posicionAux).innerHTML = `<img class="imgGrid" id="imgGrid" src="${coleccion[posi].icono}">`;
                  
                        }
                    }
                }
                //popup de la imagen encontrada y sonido
                imagencol = "imagen"+posi;
                sonido(coleccion[posi].sonido);   //reproduce el sonido correspondiente a la pieza

                //Muestra un pop-up con la imagen que ha encontrado
                document.getElementById("imagenEncontrada").setAttribute("src", coleccion[posi].url);  //añade la url de la imagen
                imagenPopup();
                
                //pone la imagen encontrada en el lateral y reproduce su sonido
                imagencol = "imagen"+posi;
                document.getElementById(imagencol).setAttribute("src", coleccion[posi].url);
       
                            
            }
            //No ha sido encontrado completo
            else{          
                puntuacion = puntuacion + 1;
                sonido(sonidoTocado);   //reproduce el sonido de tocado
                
            }
            
        }
        // no hay pieza en ese lugar
        else{
            document.getElementById(posicion).className = "agua";
            document.getElementById(posicion).innerHTML = "";
            sonido(sonidoAgua);
            
        }
        intentosRestantes = intentosRestantes - 1;

        document.getElementById("puntuacion").innerHTML = puntuacion;
        document.getElementById("intentosRestantes").innerHTML = intentosRestantes;
        document.getElementById("encontrados").innerHTML = encontrados;
    }

    // si no queda intentos o se han encontrado todos
    if ((intentosRestantes == 0) || (encontrados == 5)){
        document.querySelector("#coordenadas").className="ocultar";
        document.querySelector("#final").className="final";
        
        //Ha encontrado todas las imágenes
        if (encontrados == 5){   
                     
            // Le pongo un delay de  sg para que se escuche el sonido del último encontrado y se vea la última imagen
            setTimeout(() => {
                sonido(sonidoTodoEncontrado);
                document.getElementById("fin").innerHTML = '¡¡ENHORABUENA!! HA ENCONTRADO TODAS LAS IMÁGENES';
                document.getElementById("resultado").innerHTML = 
                `<h2>¡¡ENHORABUENA!! </h2>
                <p>¡HA ENCONTRADO TODAS LAS IMÁGENES!</p>
                <p>(Cierre esta ventana para ver el resultado del tablero)</p>
                `;
                document.getElementById("imgResultado").setAttribute("src", "Assets/images/adios rana.png");
                abrePopup();
            },2000);
        
                                     
        }
        //Se han terminado los intentos sin encontrar todas las imágenes
        else{
            setTimeout(() => {   //pongo un delay por si en el último movimiento ha encontrado una imagen
                sonido(sonidoFracaso);
                document.getElementById("fin").innerHTML = '¡VAYA! Se ha quedado sin intentos';

                document.getElementById("resultado").innerHTML = 
                    `<h2>¡¡QUÉ PENA!! </h2>
                    <p>Se ha quedado sin intentos</p>
                    <p>(Cierre esta ventana para ver el resultado del tablero)</p>
                    `;
                    document.getElementById("imgResultado").setAttribute("src", "Assets/images/triste.png");

                abrePopup();
            }, 1000);
            

        }
        document.querySelectorAll(".grid-container").forEach((element) => {
            element.removeEventListener("click", cogerCoordenada,false);
        });

        mostrarTableroColor();
        

    }

}
/*------ Fin función comprobarCoordenadas -----*/
  
/**
 * Función que reproduce un sonido
 * tiene como parámetro el archivo de audio correspondiente
 * @param {*} archivoAudio 
 */
function sonido(archivoAudio)
{
    audio = document.createElement("audio");
    audio.setAttribute("src", archivoAudio);
    audio.setAttribute("controls", "none");  //no muestra controles
    audio.style.display = "none";    //permanece oculto
    audio.play();
}
/**Fin función sonido */

/**
 * Función que abre el pop-up del final en pantalla
 */
function abrePopup(){
     // abre el popup
     document.getElementById("finPartida").style.display = "block";

     //cierra popup al clicar en cerrar
     document.getElementsByClassName("close")[0].onclick = function(){
         document.getElementById("finPartida").style.display ="none";
     }

     // si clica en cualquier sitio fuera cierra el popup
     window.onclick = function(event){
         if (event.target == document.getElementById("finPartida")){
             document.getElementById("finPartida").style.display="none";
         }
     }
}
/**Fin función pop-up del final */


/**
 * Función que muestra un pop-up con la imagen encontrada durante 1 sg
 */
function imagenPopup(){
    // abre el popup
    document.getElementById("imagenEncontrada").style.display = "block";

    setTimeout(() => {
        document.getElementById("imagenEncontrada").style.display ="none";
    }, 1000);

}
/* Fin función de pop-up de imagen */



