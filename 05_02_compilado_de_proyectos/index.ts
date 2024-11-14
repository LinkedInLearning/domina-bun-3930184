import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'
import { Page } from './src/Page';

const app = new Elysia()
    .use(html())
    .get("/", () =>{
        return Bun.file('static/index.html').text()
    })
    .get("/opcion_a", () =>{
        const contenido = new Page("A");
        return contenido.render();
    })
    .get("/opcion/:opcion_seleccionada", ({ params: { opcion_seleccionada }}) =>{
        const contenido = new Page(opcion_seleccionada);
        return contenido.render();
    })

    .listen(8080)