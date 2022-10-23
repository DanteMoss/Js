alert("Tienda ElectroTech")
// pin de entrada
let acceso = "0115";

function login() {
	let ingresar = false;
	for (let i = 2; i >= 0; i--) {
		let code = prompt("Ingresa tu Codigo de Cliente");
		if (code === acceso) {
			alert("Bienvenido!");
			ingresar = true;
			break;
		} else {
			alert("Error, vuelva a intentarlo");
		}
	}
	return ingresar;
}
let entrada = login();



let elegir = (prompt("Bienvenido, que desea hacer? \n1 Comprar Computadora \n2 Comprar PlayStation 5 \n3 Comprar Celular"))

let billetera = 50000
let pc = 10000
let celu = 5000
let play = 8000

alert("Aclaracion!, su saldo actual es $ " + billetera)

while (elegir) {
	switch (elegir) {
		case "1":
			if (elegir == 1) {
				alert("Usted compro una computadora con un precio de $10000")
				billetera = billetera - pc
				alert("Su saldo actual es de $ " + billetera)
				break;
			}
		case "2":
			if (elegir == 2) {
				alert("Usted compro una PlayStation 5 con un precio de $8000")
				billetera = billetera - play
				alert("Su saldo actual es de $ " + billetera)
				break;
			}
		case "3":
			if (elegir == 3) {
				alert("Usted compro un celular con un precio de $5000")
				billetera = billetera - celu
				alert("Su saldo actual es de $ " + billetera)
				break;
			}
			default: 
			alert(prompt("Porfavor seleccione una de las siguientes opciones  \n1 Comprar Computadora \n2 Comprar PlayStation 5 \n3 Comprar Celular "))
		}break;
}

alert("Gracias por su compra, vuelva pronto!!")