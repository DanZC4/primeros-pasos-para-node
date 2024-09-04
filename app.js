

const { crearArchivo } =  require("./helpers/multiplicar");

const argv = require("./config/yargs");

const res = crearArchivo(parseInt(argv.b), Boolean(argv.l), parseInt(argv.h));

 res.then(nombreArchvio => console.log(nombreArchvio, "creado"))
     .catch(err => console.log(err));
