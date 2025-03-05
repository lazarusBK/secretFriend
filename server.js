const express = require("express");
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta del proyecto
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});