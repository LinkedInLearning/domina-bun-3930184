import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

const app = new Elysia()
    .use(html())
    .get("/", () =>{
        return Bun.file('static/index.html').text()
    })
    .listen(8080)