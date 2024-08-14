const express = require('express'); // Importamos express
const app = express(); // Creamos una instancia de express
const port = 8000; // Definimos el puerto en el que va a correr nuestro servidor

// Ruta para obtener un saludo personalizado
app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'mundo'; // Si no se pasa un nombre, usamos 'mundo' como valor por defecto
    res.send(`Hola ${nombre}!`); // Enviamos una respuesta con el nombre personalizado
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`); // Mostramos un mensaje en la consola
});