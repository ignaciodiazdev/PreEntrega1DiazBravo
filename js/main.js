const pedirNombres = () => {
    let nombre = prompt('Ingrese el Nombre y Apellido del Alumno:');
    return nombre;
}
const sumarNotas =  () => {
    let sumaNotas = 0;

    for(let i = 1; i <= 3; i++){
        sumaNotas += parseFloat(prompt('Ingrese la ' + i + '° Nota: '));
    }
    return sumaNotas;
}

const calcularPromedio = (suma) => {
    let promedio = suma / 3;
    return promedio;
}

let registros = '';
let conteoRegistros = 0;
let opc;

do {
    opc = Number(prompt('----------------- MENÚ DE REGISTROS -----------------\n\n'
                        +'1. Registrar Notas \n'
                        +'2. Visualizar Notas \n'
                        +'3. Salir \n\n'
                        +'Eligir Opción:'));
    
    if(opc === 1){
        let nombre = pedirNombres();
        let suma = sumarNotas();
        let promedio = calcularPromedio(suma);
        
        registros += 'Nombre: ' + nombre + ' - Promedio Final: ' + Math.round(promedio) + '\n'; 
        conteoRegistros++;

    }else if(opc === 2){
        if(registros != ''){
            alert(registros + '\nSe encontraron ' + conteoRegistros + ' alumno(s) registrado(s)');
        }
        else{
            alert('Aún no hay Registros')
        }
    }else if( opc < 1 || opc > 3){
        alert('¡Opción No Valida!')
    }

} while (opc !== 3);

