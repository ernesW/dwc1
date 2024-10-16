function subirFlor() {
    // Pedir los datos al usuario
    nombrePlanta = prompt("Nombre: ");
    ubicacionPlanta = prompt("Ubicacion: ");
    ejemplaresPlanta = prompt("Ejemplares: ");
    florPlanta = prompt("Flor: ");

    // Acceder al tbody de la tabla
    tablaPlantas = document.getElementById("tablaPlantas").getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    nuevaFila = document.createElement("tr");

    // Crear las celdas
    nuevoDato = document.createElement("td");
    nuevoDato1 = document.createElement("td");
    nuevoDato2 = document.createElement("td");
    nuevoDato3 = document.createElement("td");

    // Asignar texto a cada celda
    nuevoDato.textContent = nombrePlanta;
    nuevoDato1.textContent = ubicacionPlanta;
    nuevoDato2.textContent = ejemplaresPlanta;
    nuevoDato3.textContent = florPlanta;

    // Añadir las celdas a la nueva fila
    nuevaFila.appendChild(nuevoDato);
    nuevaFila.appendChild(nuevoDato1);
    nuevaFila.appendChild(nuevoDato2);
    nuevaFila.appendChild(nuevoDato3);

    // Añadir la nueva fila al tbody de la tabla
    tablaPlantas.appendChild(nuevaFila);
};


function borrarFlor() {
    // Acceder al tbody de la tabla
   tablaPlantas = document.getElementById("tablaPlantas").getElementsByTagName('tbody')[0];

    // Comprobar si hay filas en el tbody
    if (tablaPlantas.rows.length > 0) {
        // Borrar la última fila
        tablaPlantas.deleteRow(tablaPlantas.rows.length - 1);
    } else {
        alert("No hay más filas para borrar.");
    }
};