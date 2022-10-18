require('dotenv').config();

const express = require('express')
const cors = require('cors');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPatch = '/api/usuarios';
        
        // Middlewares
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();
    }
    
    middlewares(){
        // Cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());


        // Directorio publico
        this.app.use(express.static('public'));
    }
    
    routes(){
        this.app.use(this.usuariosPatch, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto:${this.port}`)
        })
    }
}

module.exports = Server;