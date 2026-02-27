export function obtenerMenus() {
    return [
        { id: 1, titulo: "pizzas", sutitulo: "Escoge tu especialidad preferida", ruta: "/images/menus/pizza.png" },
        { id: 2, titulo: "pollo", subtitulo: "Jugosas y deliciosas opciones de pollo en una variedad de sabores", ruta: "/images/menus/chicken.png" },
        { id: 3, titulo: "adicionesles", subtitulo: "Complementa tu comida con tus adicionales favoritos", ruta: "/images/menus/breads.png" },
        { id: 4, titulo: "bebidas", subtitulo: "Para saciar tu sed", ruta: "/images/menus/drinks.png" },
        { id: 5, titulo: "postres", subtitulo: "Para satisfacer tus antojos", ruta: "/images/menus/desert.png" }
    ]
}

export function obtenerPizzas() {
    return [
        {
            id: 1, nombre: "Carbonara",
            descripcion: "Queso crema, mozzarella, champiñones frescos, tocino y cebolla: la combinación perfecta para una pizza tan cremosa como irresistible",
            ruta: "/images/pizzas/022238e3-ac62-45af-b765-379a077a9b26.jpg"
        },
        {
            id: 2,
            nombre: "Triple peperoni",
            descripcion: "Disfruta tres veces mas de tu ingrediente favorito en esta especialidad",
            ruta: "/images/pizzas/00455854-40f9-45e2-a241-b03e70dfe6cc.jpg"
        },
        {
            id: 3, nombre: "Peperoni",
            descripcion: "Tu ingrediente favorito en una masa fresca y hecha a mano. (290 Cal)",
            ruta: "/images/pizzas/be242cad-08db-4b00-becd-be48a9fb86a4.jpg"
        },
        {
            id: 4, nombre: "Hawaiina",
            descripcion: "La pizza que unos cuestionan pero todos aman. Jamón, piña. (290 Cal)",
            ruta: "images/pizzas/75b89c2b-2c59-4225-8478-4e9ab4432ec9.jpg"
        },
        {
            id: 5, nombre: "Mexicana",
            descripcion: "La pizza con los sabores auténticos de nuestro país. Chorizo, carne molida, jalapeño, cebolla. (310 Cal)",
            ruta: "images/pizzas/7f339d0c-bf13-4839-a9dc-de6721210a5b.jpg"
        },
        {
            id: 6,
            nombre: "Texas bbq",
            descripcion: "¡Ajúaa! Arre por esta pizza con salsa BBQ, queso mozzarella, tocino, pollo fresco y carne molida bien cocida, sabores que te harán amarla. (320 Cal)",
            ingredientes: "Salsa BBQ, Salsa de tomate, Carne molida, Pollo, Tocino",
            ruta: "images/pizzas/67734d82-5c38-40f8-a311-255c0d157bd5.jpg"
        },
        { id: 7, nombre: "Cuatro quesos", ruta: "images/pizzas/0ad30a1e-d7ed-4384-9b1e-b8a5c9587174.jpg" },
        { id: 8, nombre: "Pepperoni especial", ruta: "images/pizzas/8be27c50-bb3c-4774-ac8f-a41f42029617.jpg" },
        { id: 9, nombre: "Carnes frias", ruta: "images/pizzas/f8748c06-e178-4d38-b99c-a522ad450a86.jpg" },
        { id: 10, nombre: "Chicken hawaiina", ruta: "images/pizzas/49249843-d9af-4356-bcac-ae94e3357742.jpg" },
        { id: 11, nombre: "Honolulu", ruta: "images/pizzas/cdcef20a-407a-488e-9751-6f481a871048.jpg" },
        { id: 12, nombre: "Veggie", ruta: "images/pizzas/3f362b55-3f56-47f9-b67a-ff49eb10f66a.jpg" },
        { id: 13, nombre: "Extravaganzza", ruta: "images/pizzas/db99ef86-f2b8-4a8e-8afb-5ad4409e4233.jpg" },
        { id: 14, nombre: "Deluxe", ruta: "images/pizzas/9614b6f3-0def-4ace-8c5d-e0954d899a5b.jpg" },
    ]
}

export function obtenerTamaniosDePizzas() {
    return [
        { id: 30, descripcion: "Mediana 30 cm", precio: 199 },
        { id: 35, descripcion: "Grande 35 cm", precio: 229 },
        { id: 40, descripcion: "Italiana 40 cm", precio: 279 },
        { id: 45, descripcion: "Dominator 45 cm", precio: 379 }
    ]
}

export function obtenerMasasDePizzas() {
    return [
        {
            id: 1,
            nombre: "Original",
            descripcion: "La original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único."
        },
        {
            id: 2,
            nombre: "Orilla rellena de queso",
            descripcion: "Masa fresca hecha al momento con deliciosa orilla dorada rellena de queso mozzarella derretido y espolvoreada con especias."
        },
        {
            id: 3,
            nombre: "Sartén",
            descripcion: "Masa dorada y esponjosa con toque de mantequilla, doble capa de queso (provolone y mozzarella) e ingredientes hasta la orilla.",
        },
        {
            id: 4,
            nombre: "Crunchy",
            descripcion: "Masa delgada y horneada con textura crujiente especiada con hierbas finas y cortada en pequeños cuadros."
        }
    ]
}

export function obtenerProductos(){
    return [        
        {
            id:  1, 
            nombre: "Alitas cayene", 
            descripcion: "Salsa picosita con un toque de diferentes chiles (490 Cal)",
            precio: 139,
            ruta: "images/pollos/1ecf11f9-4e5d-460a-bead-521c53502a30.jpg",
            menu: "pollos"
        },
        {
            id: 2,
            nombre: "Alitas BBQ",
            descripcion: "Con el sabor tradicional dulce ahumado que ya canoces (490 Cal)",
            precio: 139,
            ruta: "images/pollos/48365980-9741-410e-87db-57b760d6c941.jpg",
            menu: "pollos"
        },
        {
            id: 3,
            nombre: "Alitas Mango habanero",
            descripcion: "Una mezcla picosita de sabores dulce con habanero (490 Cal)",
            precio: 139,
            ruta: "images/pollos/fa57713d-549f-45c8-9d5c-9ba97f103c69.jpg",
            menu: "pollos"
        },
        {
            id: 4,
            nombre: "Alitas Naturales",
            descripcion: "Deliciosas y horneadas con gran sabor al natural (490 Cal)",
            precio: 139,
            ruta: "images/pollos/61b65a6c-ae9c-44a1-8f9e-b54a0a83ffd2.jpg",
            menu: "pollos"
        },
        {
            id:  5, 
            nombre: "Boneless Cayenne", 
            descripcion: "Salsa picosita con un toque de diferentes chiles (360 Cal)",
            precio: 139,
            ruta: "images/pollos/1ecf11f9-4e5d-460a-bead-521c53502a30.jpg",
            menu: "pollos" 
        },
        {
            id: 6,
            nombre: "Boneless BBQ",
            descripcion: "Con el sabor tradicional dulce ahumado que ya canoces (390 Cal)",
            precio: 139,
            ruta: "images/pollos/0287fd68-2857-418e-b672-64a253107531.jpg",
            menu: "pollos"
        },
        {
            id: 7,
            nombre: "Boneless Mango habanero",
            descripcion: "Una mezcla picosita de sabores dulce con habanero (390 Cal)",
            precio: 139,
            ruta: "images/pollos/09959116-b5ef-4bbf-802f-85c57025226e.jpg",
            menu: "pollos"
        },
        {
            id: 8,
            nombre: "Boneless Naturales",
            descripcion: "Deliciosas y horneadas con gran sabor al natural (490 Cal)",
            precio: 139,
            ruta: "images/pollos/fafc0900-9fb2-4c12-9a85-f15830e0bfd0.jpg",
            menu: "pollos"
        },
        {
            id: 9, 
            nombre: "Papotas", 
            descripcion: "Gajos de papa horneada, con un toque picosito(250 Cal)",
            precio:79, 
            ruta: "images/adicionale/f1dfde0b-b388-4b7f-9a56-f9f1df41d11b.jpg",
            menu: "adicionales"
        },
        {
            id: 10, 
            nombre: "Cheesy Bread", 
            descripcion: "Delicioso pan horneado relleno de queso crema y mozzarella gratinado con queso mozzarella, cheddar y parmesano",
            precio: 99, 
            ruta: "images/adicionale/893340b6-16ab-4d86-90a3-6ea90d31edb6.jpg",
            menu: "adicionales"
        },
        {
            id: 11, 
            nombre: "Cheesy Bread chorizo jalapeño", 
            descripcion: "Delicioso pan horneado al momento, relleno de queso crema, queso mozzarella, chorizo y jalapeño con un toque de finas hierbas. Gratinado con una capa de queso mozzarella, cheddar y parmesano",
            precio: 99, 
            ruta: "images/adicionale/7decf559-592d-4891-b655-95284358b2c5.jpg",
            menu: "adicionales"
        },
        {
            id: 12, 
            nombre: "Mango Habanero", 
            descripcion: "Gajos de papa horneada, con un toque picosito(250 Cal)",
            precio:79, 
            ruta: "images/adicionale/12a5d87c-d067-47d1-a445-db77a2fbf557.jpg",
            menu: "adicionales"
        },
        {
            id: 13, 
            nombre: "Cheespeño", 
            descripcion: "Dip sabor queso con jalapeño (213 kcal)",
            precio: 20, 
            ruta: "images/adicionale/32996a18-c4d4-4e54-bc94-03b4db402038.jpg",
            menu: "adicionales"
        },
        {
            id: 14, 
            nombre: "Brava", 
            descripcion: "Salsa picante (21.8 kcal)",
            precio: 20, 
            ruta: "images/adicionale/10716b71-e4b6-4875-831f-57d934290e51.jpg",
            menu: "adicionales"
        },
        {
            id: 15, 
            nombre: "BBQ", 
            descripcion: "Salsa de chiles con especias (31.4 kcal) ",
            precio: 20, 
            ruta: "images/adicionale/5406d44a-5607-44b0-876d-7bb931d3a28d.jpg",
            menu: "adicionales"
        },
        {
            id: 16, 
            nombre: "Ranch", 
            descripcion: "Aderezo sabor queso parmesano y ajo (203.3 kcal)",
            precio: 20, 
            ruta: "images/adicionales/9c5ab2c7-14cb-4cdd-8e6a-7b836ceb1411.jpg",
            menu: "adicionales"
        },
    ]
}