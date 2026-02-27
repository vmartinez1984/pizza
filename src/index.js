import express from 'express'
import { obtenerMasasDePizzas, obtenerMenus, obtenerPizzas, obtenerProductos, obtenerTamaniosDePizzas } from './services/dominos.service.js'
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/api/menus", (req, res) => {
    const json = obtenerMenus()
    res.status(200).json(json)
})

app.get("/api/pizzas", (req, res) => {
    const json = obtenerPizzas()
    res.status(200).json(json)
})

app.get("/api/pizzas/tamanios", (req, res) => {
    const json = obtenerTamaniosDePizzas()
    res.status(200).json(json)
})

app.get("/api/pizzas/masas", (req, res) => {
    const json = obtenerMasasDePizzas()
    res.status(200).json(json)
})

app.get("/api/pollos", (req, res) => {
    let lista = obtenerProductos()
    lista = lista.filter(x => x.menu == "pollos")
    res.status(200).json(lista)
})

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

app.listen(3000, () => {
    console.log('Server running on port 3000');
});