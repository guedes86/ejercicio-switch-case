function edad(){
    var edad = prompt("Por favor ingressar su Edad");
    parseInt(edad);
    switch(true) {

        case (edad >0 && edad <= 12):
          alert("Niño");
          break;
        case (edad >= 13 && edad <= 17):
          alert("Adolescente");
          break;
        case (edad >= 18 && edad <= 64):
          alert("Adulto");
          break;
        case (edad > 65):
          alert("Mayor");
          break;
        default:
          alert("Edad no válida en caso de que edad sea negativa o no corresponda a los rangos especificados.")
      
      }
      
}



function estacion(){
    var mes = prompt("Por favor ingressar el mes del ano");
    parseInt(mes);
    switch(true) {
        case (mes == 1 || mes == 2 || mes == 12 ):
          alert("Invierno");
          break;
        case (mes == 3 || mes == 4 || mes == 5 ):
          alert("Primavera");
          break;
        case (mes == 6 || mes == 7 || mes == 8 ):
          alert("Verano");
          break;
        case (mes == 9 || mes == 10 || mes == 11 ):
          alert("Otoño");
          break;
        default:
          alert("Mes no válido");
      }
}

function animal(){
    var animal = prompt("Por favor ingressar el animal").toLowerCase();
    
    switch(true) {    
        case (animal == "perro" || animal == "gato" || animal == "elefante" ):
          alert("Es un mamífero");
          break;
        case (animal == "aguila" || animal == "canario" ):
          alert("Es un ave");
          break;
        case (animal == "serpiente" || animal == "lagarto"):
          alert("Es un reptil");
          break;
        case (animal == "rana" || animal == "sapo"):
          alert("Es un anfibio");
          break;
        default:
          alert("Tipo de animal desconocido");      
      }
      
}

function membresia(){
    alert("Por favor ingressar cual nivel de membresia deseas informacion - bronce / plata / oro / platino ");
    var membresia = prompt("ingressar - bronce / plata / oro / platino").toLowerCase();

    switch(true){
        case (membresia == "bronce" ):
          alert("Beneficios: Acceso limitado a contenido básico");
          break;
        case (membresia == "plata"):
          alert("Beneficios: Acceso a contenido básico y algunos extras");
          break;
        case (membresia == "oro"):
          alert("Beneficios: Acceso a todo el contenido, incluyendo extras y soporte");
          break;
        case (membresia == "platino"):
          alert("Todos los beneficios + atención personalizada");
          break;
        default:
          alert("Nivel de membresía no reconocido");
      }
      

}