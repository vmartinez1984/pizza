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