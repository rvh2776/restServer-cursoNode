
const {Router} = require('express');

const { usuriosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuriosGet); // Envio la referencia (usuariosGet) a la funcion no la ejecuto.

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);


module.exports = router;