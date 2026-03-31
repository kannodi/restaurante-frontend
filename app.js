const express = require('express');

const menuRouter = require('./routes/menu.routes');
const logger = require('./middlewares/logger');
const conectarDB = require('./database/connection');
const authRouter = require('./routes/auth.routes');
import cors from 'cors'
const app = express();

app.use(cors())

if (process.env.NODE_ENV !== 'test') {
    conectarDB();
}

const {port} = require('./config');

app.use(express.json());
app.use(logger); // ← se ejecuta en TODAS las peticiones

app.use('/menu', menuRouter);
app.use('/auth', authRouter);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'Restaurante Node API',
        version: '2.0.0',
        rutas: ['/menu']
    });
});

module.exports = app;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Restaurante corriendo en http://localhost:${port}`);
    });
}

