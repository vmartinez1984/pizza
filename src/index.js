import express from 'express'
import { obtenerMasasDePizzas, obtenerMenus, obtenerPizzas, obtenerProductos, obtenerTamaniosDePizzas } from './services/dominos.service.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
const port = 3000
const app = express()
app.use(express.json())

/**
 * Configuración Swagger
 */
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pizzas',
            version: '1.0.0',
            description: 'API de pizzas'
        },
        servers: [
            {
                url: 'http://localhost:' + port,
            },
        ],
    },
    apis: ['./src/index.js'], // archivos donde están los comentarios
};

const swaggerSpec = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 * /api/saludo/{nombre}:
 *   get:
 *     summary: Devuelve un saludo personalizado
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la persona
 *     responses:
 *       200:
 *         description: Saludo generado correctamente
 */
app.get('/api/saludo/:nombre', (req, res) => {
    const { nombre } = req.params;
    res.json({ mensaje: `Hola ${nombre}` });
});

/**
 * @swagger
 * /images/{carpeta}/{nombre}:
 *  get:
 *      summary: Devuelve la imagen, en cada item viene la ruta de la imagen asociada.
 *      parameters:
 *          - in: path
 *            name: carpeta
 *            example: pizzas
 *            description: carpeta de imagenes
 *            required: true  
 *            schema:
 *              type: string
 *              description: Nombre de la carpeta
 *          - in: path
 *            name: nombre
 *            example: 022238e3-ac62-45af-b765-379a077a9b26.jpg
 *            description: vea el detalle de cada producto
 *            required: true  
 *            schema:
 *              type: string
 *              description: nombre del archivo
 *      responses:
 *          200:
 *              description: Pan y salsas
 */

/**
 * @swagger
 * /api/menus:
 *  get:
 *      responses:
 *          200:
 *              description: Lista de menus
 */
app.get("/api/menus", (req, res) => {
    const json = obtenerMenus()
    res.status(200).json(json)
})

/**
 * @swagger
 * /api/pizzas:
 *  get:
 *      responses:
 *          200:
 *              description: Lista de pizzas
 */
app.get("/api/pizzas", (req, res) => {
    const json = obtenerPizzas()
    res.status(200).json(json)
})

/**
 * @swagger
 * /api/pizzas/tamanios:
 *  get:
 *      responses:
 *          200:
 *              description: Tamaños de pizzas
 */
app.get("/api/pizzas/tamanios", (req, res) => {
    const json = obtenerTamaniosDePizzas()
    res.status(200).json(json)
})

/**
 * @swagger
 * /api/pizzas/masas:
 *  get:
 *      responses:
 *          200:
 *              description: Masas de pizzas
 */
app.get("/api/pizzas/masas", (req, res) => {
    const json = obtenerMasasDePizzas()
    res.status(200).json(json)
})

/**
 * @swagger
 * /api/pollos:
 *  get:
 *      responses:
 *          200:
 *              description: Alitas o boneless
 */
app.get("/api/pollos", (req, res) => {
    let lista = obtenerProductos()
    lista = lista.filter(x => x.menu == "pollos")
    res.status(200).json(lista)
})

/**
 * @swagger
 * /api/adicionales:
 *  get:
 *      responses:
 *          200:
 *              description: Pan y salsas
 */
app.get("/api/adicionales", (req, res) => {
    let lista = obtenerProductos()
    lista = lista.filter(x => x.menu == "adicionales")
    res.status(200).json(lista)
})

app.get("/api/bebidas", (req, res) => {

    res.status(200).json("En contrucción")
})

app.get("/api/tiendas", (req, res) => {

    res.status(200).json("En contrucción")
})



// Servir archivos estáticos
app.use(express.static('public'))

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:' + port);
    console.log('Swagger en http://localhost:' + port + '/api-docs');
});