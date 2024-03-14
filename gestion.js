// Función para mostrar el submenú
function showSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    subMenu.style.display = "block";

    // Obtener todos los elementos de menú
    var menuItems = document.querySelectorAll('.menu li a');

    // Ocultar submenú cuando se hace clic en otro lugar del menú
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            if (menuItem.getAttribute('onclick') !== "showSubMenu('" + subMenuId + "')") {
                setTimeout(function() {
                    subMenu.style.display = "none";
                }, 100);
            }
        });
    });
// Función para mostrar los servicios disponibles para agregar al vehículo
function mostrarServicios() {
    const mainContent = document.getElementById('mainContent');

    // Limpiar el contenido anterior del mainContent
    mainContent.innerHTML = '';

    // Cargar el contenido de "serviciosRealizados.html" en el área principal
    mainContent.innerHTML = '<object type="text/html" data="D:/raiz/serviciosRealizados.html" style="width:100%;height:100%;"></object>';
}


    // Cargar el contenido de "serviciosRealizados.html" en el área principal
    fetch('D:/raiz/serviciosRealizados.html') // Ruta al archivo serviciosRealizados.html
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}
