const shopcontent = document.getElementById('shopContent');

productos.forEach((contenido) => {
	let contenido = document.createElement('div');
	contenido.className = "tarjetas-productos";
	
	contenido.innerHTML = `
	<div class="container-card">
	<div class="card">
		<figure>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058">
		</figure>
		<div class="contenido-card">
			<h3>Diseño Gràfico</h3>
			
		</div>
	</div>
	</div>
	`;
	shopcontent.append(contenido);
}
)


