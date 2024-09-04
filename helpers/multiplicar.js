const fs = require("fs");
const colors = require('colors');

const randomColor = (text)=> {

    const colorsOptions =  [
         colors.black,
         colors.red,
         colors.green,
         colors.yellow,
         colors.blue,
         colors.magenta,
         colors.cyan,
         colors.white,
         colors.gray,
         colors.grey
    ]

    const random = Math.floor(Math.random() * (colorsOptions.length - 1));

   return colorsOptions[random](text);
}

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try{

        if(typeof base !== "number"){
            throw `el parametro "base" debe se de tipo number no de tipo ${typeof base}`;
        }

        if(typeof hasta !== "number"){
            throw `el parametro "hasta" debe se de tipo number no de tipo ${typeof base}`;
        }

        
        let salida = '';
        
        for(let i = 1; i <= (hasta || 10) ; i++) {
            salida +=`${randomColor(base)} ${randomColor('x')} ${randomColor(i)} = ${randomColor(base*i)}\n`;
        }
        
        if(listar){ 
            console.log(randomColor("=================="));
            console.log(randomColor("Tab la del: ", base));
            console.log(randomColor("=================="));
            console.log(salida);
        }  


        //console.log(typeof listar);
        
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return randomColor(`tabla-${base}.txt`)
      
    } catch(err) {
        throw err;
    }



}

module.exports = {crearArchivo: crearArchivo}