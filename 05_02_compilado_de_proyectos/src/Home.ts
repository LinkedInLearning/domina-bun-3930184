export class Home {

    constructor() {
    }

    render() {
                return (
            `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>

<body>

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi sitio Bun</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="/opcion_a">Opción A</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="/opcion/b">Opción B</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="/opcion/c">Opción C</a>
                    </li>
                   
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <main class="container">
        <section class="row">
            <h2>Home</h2>
            <p>Bienvenidos a mi servidor web Bun.</p>
        </section>

        <section  class="row">
            <div class="card col-md-3 mx-3">
                <div class="card-body">
                    <h5 class="card-title">Opción A</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                    <a href="/opcion_a" class="btn btn-primary">Ir a Opción A</a>
                </div>
            </div>

            <div class="card col-md-3 mx-3">
                <div class="card-body">
                    <h5 class="card-title">Opción B</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                    <a href="/opcion/b" class="btn btn-primary">Ir a Opción B</a>
                </div>
            </div>

            <div class="card col-md-3 mx-3">
                <div class="card-body">
                    <h5 class="card-title">Opción C</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
                    <a href="/opcion/c" class="btn btn-primary">Ir a Opción C</a>
                </div>
            </div>

               
        </section>
    </main>


</body>

</html>
            `
        );
    }
}