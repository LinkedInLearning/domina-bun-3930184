import { appendFile } from "node:fs/promises";

const crearArchivo = async () => {


   const runtime = `Bun.js`;
   const datos = `archivo creado usando ${runtime}`;

   await Bun.write("carpeta/archivo.txt" , datos)
};

const escribirDatosArchivo = () => {

   const archivo = Bun.file("carpeta/archivo.txt");
   const agregar = archivo.writer();

   const lineas = 5;

   for (let counter = 1; counter <= lineas; counter++) {
      agregar.write(`Línea ${counter} \n`)
   }

   agregar.end();

};


const agregarDatosArchivo = async () => {
   const agrega = "\n ==== línea extra === \n"
   await appendFile("carpeta/archivo.txt", agrega); 
};
   
   
//crearArchivo()
//escribirDatosArchivo()
agregarDatosArchivo()
