##Crear un proyecto

1. Crear un proyecto nuevo 
´´´
    mkdir mi-api
    cd mi-api
    npm init -y // crea el archivo package.json
    npm install express // instala Express
´´´

2. Crear un archivo `index.js`
```javascript
const express = require('express');

```
3. Ejecutar el archivo `indes.js`
```bash
node index.js
```

4. Crear el servidor, en el archivo index.js
```javascript
const express = require('express');
const app = express();
const PORT = 8000;

