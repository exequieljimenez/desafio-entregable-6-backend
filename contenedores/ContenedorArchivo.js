class ContenedorArchivo {
    constructor() {
        this.productos = [
            {
                title: 'Ten',
                band: 'Pearl Jam',
                cover: 'https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/0223194507ten.jpg',
                id: 1
            },
            {
                title: 'Superunknown',
                band: 'Soundgarden',
                cover: 'https://static.metacritic.com/images/products/music/3/a47e22c2dde263266c0b7294f68ffee9.jpg',
                id: 2
            }
        ]
        this.id = 0
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
        return this.productos
    }

    guardar(prod) {
        let products = this.productos
        let id = 0
        this.productos.length == 0 ? (id=1) : (id=products[products.length-1].id + 1);
        const nuevoProducto = {...prod, id};
        this.productos.push(nuevoProducto)
        return('producto guardado')
    }

    actualizar(prod, id) {
        const posicion = this.productos.findIndex(e => e.id == id)
        if(posicion >= 0) {
            this.productos[posicion] = prod
            return('producto actualizado')
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
            return({producto:productoEliminado})
        }
    }
}

module.exports = ContenedorArchivo