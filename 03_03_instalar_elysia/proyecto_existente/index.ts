import {Elysia} from 'elysia'

const app = new Elysia()

    .get("/" , ()=> 'Servidor Elysia' )
    .listen(8080)