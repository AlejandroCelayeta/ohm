//LEY DE OHM - Simulador de cálculo de Valores Eléctricos
/* V corresponde a VOLTS, R a resistencia e I a corriente */

let opcion = prompt('Seleccione la opción: 1 - Voltaje 2 - Resistencia 3 - Intensidad');


// Cálculo del voltaje es ( voltaje = resistencia * intensidad)
switch (opcion) {

    case "1":
        let resistencia1 = prompt('Ingrese la resistencia en ohms');
        alert("Usted ha ingresado " + resistencia1 + " ohms");

        let intensidad1 = prompt('Ingrese la corriente de trabajo en amperes');
        alert("Usted ha ingresado " + intensidad1 + " amperes");

        let voltaje1 = (resistencia1 * intensidad1);
        alert("El voltaje es  " + voltaje1 + " volts");
        break


        // Cálculo de la resistencia es (resistencia = voltaje / intensidad)
    case "2":

        let voltaje2 = prompt('Ingrese la tensión en volts');
        alert("Usted ha ingresado " + voltaje2 + " volts");

        let intensidad2 = prompt('Ingrese la corriente de trabajo en amperes');
        alert("Usted ha ingresado " + intensidad2 + " amperes");

        let resistencia2 = (voltaje2 / intensidad2);
        alert("La resistencia es de " + resistencia2 + " ohms");
        break


        // Cálculo de la intensidad es (intensidad = voltaje / resistencia)
    case "3":

        let voltaje3 = prompt('Ingrese la tensión en volts');
        alert("Usted ha ingresado " + voltaje3 + " volts");

        let resistencia3 = prompt('Ingrese la resistencia de trabajo en ohms');
        alert("Usted ha ingresado " + resistencia3 + " ohms");

        let intensidad3 = (voltaje3 / resistencia3);
        alert("La intensidad es de " + intensidad3 + " amper");


}