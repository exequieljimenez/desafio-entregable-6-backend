class ContenedorMemoria {
    constructor() {
        this.mensajes = [
            {email: 'judy@blacklodge.org', text: 'This is the water, and this is the well'}
        ]
    }

    listar(id) {
        const posicion = this.productos.findIndex(e => e.id == id)

        if(posicion == -1) {
            return ({error: 'producto no encontrado'})
        } else {
            return (this.productos[posicion])
        }
    }

    listarAll() {
        return this.mensajes
    }

    guardar(obj) {
        this.mensajes.push(obj)
    }

    actualizar(elem, id) {
        const posicion = this.productos.findIndex(e => e.id == id)
        if(posicion >= 0) {
            this.productos[posicion] = elem
            return('producto acualizado')
        } else {
            return({error: 'producto no encontrado'})
        }
    }

    borrar(id) {
        const posicion = this.productos.findIndex(e => e.id == id)
        if(posicion == -1) {
            return({error: 'producto no encontrado'})
        } else {
            const productoEliminado = this.productos.splice(posicion, 1)
            return({producto: productoEliminado})
        }
    }

    borrarAll() {
        this.productos = []
    }
}

module.exports = ContenedorMemoria