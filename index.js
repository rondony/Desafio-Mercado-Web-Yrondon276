// Se Importan las Dependencias //
import express from 'express';
import { create } from 'express-handlebars';
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Se llama a la instancia de express //
const app = express();

// Se define el Servidor y se llama //
app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});

// Se inicia cofiguración de Handlebars //

const hbs = create({
    partialsDir: [
        path.resolve(__dirname, "./views/partials/"),
    ],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


// Fin de la configuración Handlebars //

// Se inicia configuración de Middlewares //
app.use(express.static("public"));

// Se deja públicos los archivos de jquery y bootstrap //
app.use('/bootstrap', express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));

app.use('/jquery', express.static(path.join(__dirname, "/node_modules/jquery/dist")));

// Fin configuración de Middlewares //

// Se agregan las rutas //
app.get("/", (req, res) => {
    res.render("home", {
        titulo: "Bienvenido al <strong>Mercado Web</strong>, seleccione sus productos",
        productos: [
            { id: 1, nombre: "Banana", img: "/assets/img/banana.png" },
            { id: 2, nombre: "Cebolla", img: "/assets/img/cebolla.png" },
            { id: 3, nombre: "Guayaba", img: "/assets/img/guayaba.png" },
            { id: 4, nombre: "Lechosa", img: "/assets/img/lechosa.png" },
            { id: 5, nombre: "Lehuga", img: "/assets/img/lechuga.png" },
            { id: 6, nombre: "Papas", img: "/assets/img/papas.png" },
            { id: 7, nombre: "Pimenton", img: "/assets/img/pimenton.png" },
            { id: 8, nombre: "Pitahaya", img: "/assets/img/pitahaya.png" },
            { id: 9, nombre: "Tomate", img: "/assets/img/tomate.png" }
        ]
    });
})



