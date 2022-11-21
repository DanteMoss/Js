const shopcontent = document.getElementById('shopContent');
const paycheck = document.getElementById('verCarrito');
const modal = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((products) => {
	let content = document.createElement("div");
	content.className = "card";

	content.innerHTML = `
		<img src= "${products.img}">
		<h3>${products.nombre}</h3>
		<p class = "price">${products.precio} $</p>
	`;
	shopContent.append(content);

	let comprar = document.createElement("button");
	comprar.innerText = "Agregar al carrito!";
	comprar.className = "comprar";
	content.append(comprar);

	comprar.addEventListener("click", () => {

		const repeat = carrito.some((repeatProduct) => repeatProduct.id === products.id);

		if (repeat) {
			carrito.map((prod) => {
				if (prod.id === products.id) {
					prod.cantidad++;
				}
			});
		}else {
			carrito.push({
				id: products.id,
				img: products.img,
				nombre: products.nombre,
				precio: products.precio,
				cantidad: products.cantidad,
			});
		}
		console.log(carrito);
		carritoCounter();
		saveLocal();
	});
});


//set item local storage
const saveLocal = () => {
	localStorage.setItem("carrito",JSON.stringify(carrito));
}


