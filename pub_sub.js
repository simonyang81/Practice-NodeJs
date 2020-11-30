let event = require('events');
let net = require('net');

let channel = new event.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function (id, client) {

    this.clients[id] = client;

    this.subscriptions = function (senderId, message) {
        if (id !== senderId) {
            this.clients[id].write(message);
        }
    }

    this.on('broadcast', this.subscriptions[id]);
});

let server = net.createServer(function (client) {
    let id = client.remoteAddress + ':' + client.remotePort;
    client.on('connect', function () {
       channel.emit('join', id, client);
    });
    client.on('data', function (data) {
       data = data.toString();
       channel.emit('broadcast', id, data);
    });

});

server.listen(8888);
