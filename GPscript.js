// Referencias a elementos
const productList = document.getElementById("product-list");
const addProductButton = document.getElementById("add-product");

// Datos iniciales
let products = [];

// Función para renderizar los productos
function renderProducts() {
    productList.innerHTML = ""; // Limpia la lista
    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-3", "mb-4");
        const imageUrl = product.image || "https://via.placeholder.com/150"; // Imagen predeterminada
        productCard.innerHTML = `
      <div class="card">
        <img src="${imageUrl}" alt="Producto">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5> <!-- Agregar el nombre del producto -->
          <p class="card-text">${product.description}</p>
          <p class="card-text"><strong>$${product.price}</strong></p>
        </div>
        <button class="btn-edit" onclick="editProduct(${index})">Editar</button>
      </div>
    `;
        productList.appendChild(productCard);
    });
}

// Función para agregar un producto
function addProduct() {
    const name = prompt("Nombre del producto:");
    const description = prompt("Descripción del producto:");
    const price = prompt("Precio del producto:");
    const image = prompt("URL de la imagen del producto:");

    if (name && description && price && image) {
        products.push({ name, description, price, image });
        renderProducts();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para editar un producto
function editProduct(index) {
    const product = products[index];
    const name = prompt("Editar nombre del producto:", product.name);
    const description = prompt("Editar descripción del producto:", product.description);
    const price = prompt("Editar precio del producto:", product.price);
    const image = prompt("Editar URL de la imagen del producto:", product.image);

    if (name && description && price && image) {
        products[index] = { name, description, price, image };
        renderProducts();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Inicializar eventos
addProductButton.addEventListener("click", addProduct);