console.log("Servidor en uso");


Bun.serve(
    {
        port:8080,
        fetch(){
            return new Response(" Servidor Bun")
        }
    }

)