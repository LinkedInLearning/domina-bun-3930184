console.log("Servidor en uso");


Bun.serve(
    {
        port:8080,
        static:{
            "/": new Response('<h1>Servidor activo</h1><p>utilizando bun</p>', { headers: { "Content-Type": "text/html" } } ),
            "/plantilla": new Response( await Bun.file("./src/static/index.html").text() , { headers: { "Content-Type": "text/html" } } ),
        },
        fetch(){
            return new Response("  Error")
        }
    }

)