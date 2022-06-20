import express  from 'express' 
import usuarioRoutes from './routes/usuarioRoutes.js'


// crear la app
const app = express()

//Habilitar Pug 
app.set('view engine', 'pug')
app.set('views','./views')

// Routing 
app.use('/auth', usuarioRoutes)

// definir un puerto y arrancar el proyecto 
const port = 3000;
app.listen(port, () => {
    console.log(`el servidor esta funcionado en el port ${port}`)
});