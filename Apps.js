// Menú de ejemplo
const menu = [
    { nombre: "Taco de carne asada", precio: 25 },
    { nombre: "Taco al pastor", precio: 22 },
    { nombre: "Quesadilla", precio: 30 },
    { nombre: "Burrito", precio: 45 },
    { nombre: "Refresco", precio: 18 },
    { nombre: "Agua fresca", precio: 16 }
];

function mostrarMenu() {
    const menuList = document.getElementById('menu-list');
    menu.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<strong>${item.nombre}</strong><br><span>$${item.precio}</span>`;
        menuList.appendChild(div);
    });

    // Llenar select de productos
    const select = document.getElementById('productos-select');
    menu.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.nombre;
        opt.text = `${item.nombre} ($${item.precio})`;
        select.appendChild(opt);
    });
}

window.onload = mostrarMenu;

// Función para sugerir combo aleatorio
function eligePorMi() {
    // Ejemplo de combos posibles
    const combos = [
        ["Taco de carne asada", "Refresco"],
        ["Burrito", "Agua fresca"],
        ["Quesadilla", "Taco al pastor", "Refresco"],
        ["Taco al pastor", "Taco de carne asada", "Agua fresca"]
    ];
    const random = combos[Math.floor(Math.random() * combos.length)];
    document.getElementById('combo-sugerido').innerText = "Te sugerimos: " + random.join(", ");
}

// Simulación de pedido y pago (solo frontend)
document.getElementById('pedido-form').onsubmit = function(e) {
    e.preventDefault();
    // Aquí normalmente se mandaría la info a un backend y a una pasarela de pago
    document.getElementById('pago-exito').innerHTML = "<p style='color:green;'>¡Pedido recibido! Pronto te contactaremos. (Simulación, no se realizó pago real)</p>";
    this.reset();
};
