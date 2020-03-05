var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error : File not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.write(data);
          res.end();
        }
      });
      break;

    case '/numOfMatchesPerYear':
      fs.readFile('../output/numberOfMatchesPlayedPerYear.JSON', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error : File not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.write(data);
          res.end();
        }
      });
      break;

    case '/EconomicalBowlersForYear':
      fs.readFile('../output/EconomicalBowlersForYear.JSON', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error : File not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.write(data);
          res.end();
        }
      });
      break;

    case '/extraRunsIn2016':
      fs.readFile('../output/extraRunsIn2016.JSON', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error : File not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.write(data);
          res.end();
        }
      });
      break;

    case '/numberOfMatchesPlayedPerYear':
      fs.readFile('../output/numberOfMatchesPlayedPerYear.JSON', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error : File not Found');
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.write(data);
          res.end();
        }
      });
      break;


    default:
      res.write('Route does not exist at ' + req.url);
      res.end();
      break;
  }
})
server.listen(3000, () => {
  console.log('server started');
});