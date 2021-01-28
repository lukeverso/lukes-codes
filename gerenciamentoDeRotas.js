const http = require("http");

const host = 'localhost';
const port = 8000;

const livros = JSON.stringify([
    { tituloDoLivro: "O alquimista", autorDoLivro: "Paulo Coelho", anoDePublicacao: 1988 },
    { tituloDoLivro: "O profeta", autorDoLivro: "Kahlil Gibran", anoDePublicacao: 1923 }
]);

const autores = JSON.stringify([
    { nomeDoAutor: "Paulo Coelho", paisDeNascimento: "Brasil", anoDeNascimento: 1947 },
    { nomeDoAutor: "Kahlil Gibran", paisDeNascimento: "Líbano", anoDeNascimento: 1883 }
]);

const editoras = JSON.stringify([
    { nomeDaEditora: "Paralela", numeroDePaginas: 208, anoDoLivro: 2017 },
    { nomeDaEditora: "Planeta", numeroDePaginas: 144, anoDoLivro: 2019 }
])

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(livros);
            break
        case "/authors":
            res.writeHead(200);
            res.end(autores);
            break
        case "/publishers":
            res.writeHead(200);
            res.end(editoras);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Nada foi encontrado."}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});