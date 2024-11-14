import { unlink } from "node:fs/promises";

const rutaArchivo = 'files/carpeta/archivo.txt';
const rutaArchivo2 = 'files/segunda-carpeta/archivo.txt';

const copiarArchivo = async () => {
   const archivo = Bun.file(rutaArchivo);
   await Bun.write(rutaArchivo2, archivo);
   console.log("archivo creado")
};

const borrarArchivo = async () => {
   const path = rutaArchivo ;
   await unlink(path);
};


const moverArchivo = async () => {
   copiarArchivo().then( ()=>{
      borrarArchivo();
      console.log("archivo Borrado")
   } )
};
   
   
//moverArchivo()
//borrarArchivo()
//copiarArchivo()
