const {response, request} = require('express');


const usuriosGet = (req = request, res = response) => {

    const {q, nombre = "no name", apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req = request, res = response) => {

    const {nombre, edad, id} = req.body;
    
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad,
        id
    });
}

const usuariosPut = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuriosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}