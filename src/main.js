const express = require("express");

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')

const ContenedorArchivo = require('../contenedores/ContenedorArchivo')
const ContenedorMemoria = require('../contenedores/ContenedorMemoria')

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const contenedorArchivos = new ContenedorArchivo()
const contenedorMemoria = new ContenedorMemoria()

io.on('connection', socket => {
    products = contenedorArchivos.listarAll()
    socket.emit('productos', products)

    socket.on('producto', datat => {
        contenedorArchivos.guardar(datat)
    })

    socket.emit('mensajes', contenedorMemoria.listarAll())

    socket.on('message', data => {
        contenedorMemoria.guardar(data)

        io.sockets.emit('mensajes', contenedorMemoria.listarAll())
    })
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))