const platoService = require('../services/plato.services');


exports.obtenerMenu = async (req, res) => {
    try {
        const platos = await platoService.obtenerTodos();
        res.status(200).json(platos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPlato = async (req, res) => {
    try {
        const { nombre } = req.query
        const { id } = req.params

        // Si viene ?nombre= en la URL
        if (nombre) {
            const platos = await platoService.buscarPorNombre(nombre)
            return res.status(200).json(platos)
        }

        // Si no hay nombre, valida que haya id
        if (!id || id === 'buscar') {
            return res.status(400).json({ error: 'El parámetro nombre es obligatorio' })
        }

        // Busca por id
        const plato = await platoService.buscarPorId(id)
        if (!plato) {
            return res.status(404).json({ error: 'Plato no encontrado' })
        }
        res.status(200).json(plato)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
exports.buscarCategoria = async (req, res) => {
    try {
        const { categoria } = req.params
        if (categoria) {
            const platos = await platoService.buscarPorCategoria(categoria)
            if(platos.length > 0)
                res.status(200).json(platos)
            else                
                res.status(404).json({ error: 'No se encontraron platos para esta categoría' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Equivalente a agregarPlato() del Sprint 0
exports.agregarPlato = async(req, res) => {
    try {
        const { nombre, precio, stock, categoria } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ error: 'nombre y precio son obligatorios' });
        }
    
        const nuevo = await platoService.crear(req.body);
        res.status(201).json({ mensaje: 'Plato creado', plato: nuevo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar plato por id
exports.eliminarPlato = async (req, res) => {
    try{
        const { id } = req.params;
        const eliminado = await platoService.eliminar(id);
        if (!eliminado) {
        return res.status(404).json({ error: 'Plato no encontrado' });
        }
        res.status(200).json({ mensaje: 'Plato eliminado', eliminado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar stock de un plato — equivalente a actualizarStock() del Sprint 0
exports.actualizarPlato = async(req, res) => {
    try {
        const { id } = req.params;
        const plato = await platoService.actualizar(id, req.body);
        if (!plato) {
        return res.status(404).json({ error: 'Plato no encontrado' });}
        res.status(200).json({ mensaje: 'Plato actualizado', plato });
    }catch (error) {        
        res.status(500).json({ error: error.message });
}
};

