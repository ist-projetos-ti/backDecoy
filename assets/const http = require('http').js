const http = require('http')
var fs = require ("fs");
var WebSocketServer = require('websocket').server;
//const app = require ('websocket')


const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end(fs.readFileSync("prateleiras.html"))
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})


http.get('192.168.0.105', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', function (request)  {

     //Aceita a conexão do client
    let client = request.accept(null, request.origin);
 
    //Chamado quando o client envia uma mensagem
    client.on('message', function (message) {
        //Se é uma mensagem string utf8
            //Mostra no console a mensagem
            console.log(message);
  });

    client.on('close', function(client) {
        console.log("Conexão fechada");
        //Remove o intervalo de envio de estado
        clearInterval(interval);
    });
});