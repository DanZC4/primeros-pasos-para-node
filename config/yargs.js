const argv = require('yargs').options(
    {"b": {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la tabla de multiplicar"
    }},
    {"l" : {
        alias: "listar",
        type: "boolean",
        demandOption: false,
        default: false,
        describe: "Muestra ta labla en la consola"
    }},
    {"h" : {
            alias: "hasta",
            type: "number",
            default: 10,
            demandOption: false,
            describe: "Te deja establecer hasta que numero multiplicar"
    }}
)
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw "la base tiene que ser un numero";
    }
    return true;
})
.argv;

module.exports = argv;