function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:
    
     numero >=0 ?"Es positivo": "es negativo";
   

}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:

    let bisiesto = anio %4==0 && anio%100==0 && !anio%400 ==0 ? " true":"false" ;

}

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
 calificacion >=60 ? "Aprobo": "Reprobó"

}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:

    if(num1 > num2 && num1 >num3 ){
        "es mayor" + num1;
    }else if (num2 > num1 && num2 >num3){
        "es mayor " + num2 
    }else if (num3 > num1 && num3 >num2){
        "es mayor "+ num3
    }


}

function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:

    num%num==0 && num%1==num ? "Es primo": "no es primo"

}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}