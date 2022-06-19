import express  from 'express' 


// crear la app

const app = express()

// Routing 



// definir un puerto y arrancar el proyecto 

const port = 3000;
app.listen(port, () => {
    console.log(`el servidor esta funcionado en el port ${port}`)
});