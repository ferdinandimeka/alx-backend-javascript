const http = require('http');

const Port = 1245;
const Host = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
    const text = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length',Buffer.byteLength(text));
    res.statusCode = 200;
    res.write(Buffer.from(text));
});

app.listen(Port, Host, () => {
    process.stdout.write(`Server running at http://${Host}:${Port}\n`);
});

module.exports = app;