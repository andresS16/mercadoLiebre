
const express = require('express');
const app = express();
const path = require('path');





//app.use(express.static('/public'));

// Ruta para cargar index.html cuando se acceda a /home
app.get('/', (req, res) => {
    let rutaHtml = path.resolve(__dirname, './views/home.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});

app.get('/producto', (req, res) => {
    let rutaHtml = path.resolve(__dirname, './views/producto.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});

app.get('/login', (req, res) => {
    let rutaHtml = path.join(__dirname, './views/login.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});
app.get('/register', (req, res) => {
    let rutaHtml = path.join(__dirname, './views/register.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});
app.use(express.static(path.join(__dirname, '/public')));
const PORT  = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`) );

//app.listen(3030, () => {console.log("Servidor corriendo")});