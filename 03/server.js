// Require http module
const http = require('http');

// Require fs module
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));
args["port"];

// Define `port`constant
const port = args.port || process.env.PORT || 5555;

fs.readFile('./public/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  });
});
