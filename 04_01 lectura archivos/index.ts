

const leerArchivoTexto = async () => {
   try{
    const texto = Bun.file("files/mensaje.error");
    console.log( await texto.text())

   }catch (error){
    console.error("Error al leer el archivo:", error);
    return [];
   }
   
};
 

leerArchivoTexto()
