// ------------  Creando FUNCION CONSTRUCTORA  ----------------

function Equipo(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// ---------------  Creando Objetos con la Funcion Constructora  --------------

const BMWS1000RR = new Equipo("BMWS1000RR", 21.350, 3);
const DucatiPanigaleV4 = new Equipo("Ducati Panigale V4", 38.700, 2);
const Hondacbr1000 = new Equipo("Honda CBR 1000", 30.700, 1);
const kawasakininjah2r = new Equipo("Kawasaki Ninja H2R", 45.000, 2);

// ------------------  Creando Array de Objetos  --------------------

const stockEquipos = [BMWS1000RR, DucatiPanigaleV4, Hondacbr1000, kawasakininjah2r];

alert("Bienvenido a Motomat, tienda de motos");

let seleccionUsuario = prompt("Desea ingresar como Cliente o Administrador? Escriba la respuesta en el siguiente campo").toLowerCase();

while (seleccionUsuario) {
    if (seleccionUsuario === "cliente") {

        let decisionCliente = confirm("¿Desea buscar algún equipo en específico?");
        if (decisionCliente) {
            const equipoBuscado = prompt("Ingrese el nombre de la moto que quieras comprar:").toLowerCase();
            const equipoEncontrado = [];
            for (let i = 0; i < stockEquipos.length; i++) {
                if (stockEquipos[i].nombre.toLowerCase() === equipoBuscado) {
                    equipoEncontrado.push(stockEquipos[i]);
                }
            }
            if (equipoEncontrado.length > 0) {
                console.table(equipoEncontrado);
                alert("¡Felicitaciones! La moto " + equipoBuscado + " se encuentra disponible");
            } else {
                alert("No contamos con " + equipoBuscado + " en nuestro stock, o no ha ingresado una moto válida, en ese caso reintente la búsqueda.");
            }
        } else {
            alert("A continuación le mostraremos la lista de stock disponible en Motomat");
            console.table(stockEquipos);
        }
    } else if (seleccionUsuario === "administrador" || seleccionUsuario === "admin") {

        alert("Bienvenido, a continuación vamos a verificar su identidad con su nombre de usuario y contraseña, recuerde que tiene solo 3 intentos");

        // Creando funcion para ingreso de usuario con limite de intentos.
        function ingresoAdmin() {

            // Usuario y contraseña 
            const usuarioAdmin = "admin";
            const contraseniaAdmin = "admin";

            let intentos = 3;

            while (intentos > 0) {
                const usuario = prompt("Ingrese su nombre de usuario");
                const contrasenia = prompt("Ingrese su contraseña");

                if (usuario === usuarioAdmin && contrasenia === contraseniaAdmin) {
                    alert("¡Validación de administrador exitosa! A continuación podrá agregar equipos a la lista de stock");

                    // Función para agregar un nuevo producto
                    function ingresoEquipo() {
                        const nombre = prompt("Ingrese el nombre del producto:");
                        const precio = parseFloat(prompt("Ingrese el precio del producto:"));
                        const stock = parseInt(prompt("Ingrese el stock del producto:"));

                        const ingresoEquipo = new Equipo(nombre, precio, stock);

                        stockEquipos.push(ingresoEquipo);

                        alert("¡Moto agregada satisfactoriamente! A continuación se muestra el stock actualizado:");

                        console.table(stockEquipos);
                    }

                    ingresoEquipo();

                    return;
                } else {
                    intentos--;
                    alert("Usuario o contraseña incorrectos. Le quedan " + intentos + " intentos.");
                }
            }

            alert("Ha agotado el número de intentos permitidos. Por favor, inténtelo más tarde.");
        }

        ingresoAdmin();
    }
    break;
}
