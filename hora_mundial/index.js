const express = require('express'); // Importamos express
const app = express(); // Creamos una instancia de express
const moment = require('moment-timezone'); // Importamos moment-timezone

// Rutas de la aplicación
app.get('/', (req, res) => { 
    res.send('Hola mundo');
    }
);

// Ruta que devuelve la hora de tres ciudades
app.get('/hora', (req, res) => {
    const ciudades = ['Asia/Tokyo', 'America/Argentina/Buenos_Aires', 'America/Santiago'];
    const hora = ciudades.map(ciudad => {
        return `${ciudad}: ${moment().tz(ciudad).format('HH:mm:ss')}`;
    });
    res.send(hora.join('\n'));
}
);

// Ruta que devuelve la hora de una ciudad específica
app.get('/hora/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad;
    if (moment.tz.zone(ciudad)) {
        const hora = `${ciudad}: ${moment().tz(ciudad).format('HH:mm:ss')}`; 
        res.send(hora);
    } else {
        res.status(404).send('Ciudad no encontrada');
    }
});


// Iniciamos el servidor en el puerto 9000
app.listen(9000, () => {
    console.log('Servidor corriendo en http://localhost:9000');
}
);