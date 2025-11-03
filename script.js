// Espera a que todo el HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // PARTE 1: LÓGICA DEL BUSCADOR
    // ===============================================
    const searchInput = document.querySelector('.search-container input');
    const sections = document.querySelectorAll('main section'); // Selecciona todas las secciones

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        sections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(searchTerm)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });


    // ===============================================
    // PARTE 2: LÓGICA PARA AÑADIR PACIENTES
    // ===============================================

    // 1. Seleccionar los elementos del DOM (el formulario y el cuerpo de la tabla)
    const formRegistrarPaciente = document.getElementById('form-registrar-paciente');
    const tablaPacientesBody = document.getElementById('tabla-pacientes-tbody');

    // 2. Escuchar el evento "submit" (envío) del formulario
    formRegistrarPaciente.addEventListener('submit', (event) => {
        
        // 3. Prevenir que el formulario recargue la página (comportamiento por defecto)
        event.preventDefault();

        // 4. Obtener los valores de los campos del formulario
        const nombre = document.getElementById('pac-nombre').value;
        const apellido = document.getElementById('pac-apellido').value;
        const cedula = document.getElementById('pac-cedula').value;
        const email = document.getElementById('pac-email').value;

        // 5. Validar que los campos no estén vacíos
        if (nombre === '' || apellido === '' || cedula === '') {
            alert('Por favor, completa los campos de Nombre, Apellido y Cédula.');
            return; // Detiene la ejecución si faltan datos
        }

        // 6. Crear la nueva fila (<tr>) y las celdas (<td>)
        const nuevaFila = document.createElement('tr');
        
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = nombre;

        const celdaApellido = document.createElement('td');
        celdaApellido.textContent = apellido;

        const celdaCedula = document.createElement('td');
        celdaCedula.textContent = cedula;

        const celdaEmail = document.createElement('td');
        celdaEmail.textContent = email;

        // 7. Añadir las celdas a la fila
        nuevaFila.appendChild(celdaNombre);
        nuevaFila.appendChild(celdaApellido);
        nuevaFila.appendChild(celdaCedula);
        nuevaFila.appendChild(celdaEmail);

        // 8. Añadir la nueva fila al cuerpo de la tabla
        tablaPacientesBody.appendChild(nuevaFila);

        // 9. Limpiar los campos del formulario después de registrar
        formRegistrarPaciente.reset();

    }); // Fin del addEventListener 'submit'

}); // Fin del addEventListener 'DOMContentLoaded'
