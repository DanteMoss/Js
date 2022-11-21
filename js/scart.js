const pintarCarrito = () => {
	modalContainer.innerHTML = "";
	modalContainer.style.display = "flex";

	const modalHeader = document.createElement("div");
	modalHeader.className = "modal-header";
	modalHeader.innerHTML = `
	<h1 class = "modal-title">Su Compra</h1>
	`;
	modalContainer.append(modalHeader);
	const modalbutton = document.createElement("h1");
	modalbutton.innerText = "❌";
	modalbutton.className = "modal_header_button";

	modalbutton.addEventListener("click", () => {
		modalContainer.style.display = "none";
	});

	modalHeader.append(modalbutton);

	carrito.forEach((products) => {
		let carritoContent = document.createElement("div");
		carritoContent.className = "modal_content";
		carritoContent.innerHTML = `
		<img src="${products.img}">
		<h3>${products.nombre}</h3>
		<p>${products.precio} $</p>
		<p>Cantidad: ${products.cantidad}</p>
		<p>Total: ${products.cantidad * products.precio}</p>
	`;

		modalContainer.append(carritoContent);

		let eliminar = document.createElement("span");
		eliminar.innerText = "❌";
		eliminar.className = "delete_product";
		carritoContent.append(eliminar);

		eliminar.addEventListener("click", eliminarProducto)
	});

	const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

	const compratotal = document.createElement("div");
	compratotal.className = "total-content";
	compratotal.innerHTML = `Total a pagar: ${total} $`;
	modalContainer.append(compratotal);
};

verCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = () => {
	const foundId = carrito.find((Element) => Element.id);
	carrito = carrito.filter((carritoId) => {
		return carritoId !== foundId;
	});
	carritoCounter();
	saveLocal();
	pintarCarrito();
};

const carritoCounter = () => {
	cantidadCarrito.style.display = "block";

	const carritoLength = carrito.length;
	localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

	cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();