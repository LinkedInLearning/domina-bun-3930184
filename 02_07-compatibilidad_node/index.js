import { readFileSync } from 'fs';

// Leer el archivo mensaje.txt de forma sincrónica
const contenido = readFileSync('./mensaje.txt', 'utf-8');

// Mostrar el contenido del archivo en la consola
console.log('Contenido del archivo:', contenido);