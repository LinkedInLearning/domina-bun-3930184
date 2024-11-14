

const leerLibros =  async () => {
  try {
    const archivoJson = Bun.file("./files/libros.json");
    const libros = await archivoJson.json();

    console.log( libros[2].titulo)
    
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error);
    return [];
  }
};

leerLibros()
