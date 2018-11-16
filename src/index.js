const express = require('express');
const app = express();
const path = require('path');
const router = require('./routers/routers');// requerimos la ruta y el nombre del archivo.


//setting
app.set('port', 8080);
app.set('views',path.join(__dirname,'views'));//path une la ruta absoluta con views.
app.set('view engine', 'ejs');
//middleware
//staticFile
app.use(express.static(path.join(__dirname, 'public')));
/*todo lo que sea para el cliente, para acceder desde el navegador: imagenes, videos,pdf, etc.*/ 


//routes
app.use(router);

//listening the server
app.listen(app.get('port'), ()=>{
    console.log('se inicio')
});