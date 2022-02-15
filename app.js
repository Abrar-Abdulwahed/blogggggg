const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let path = './views/';
  switch (req.url) {
    case '/':
    case '/blog':
    case '/blog.html':
    case '/home':
    case '/home.html':
    case '/index':
    case '/index.html':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
    case '/about.html':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    case '/contact':
    case '/contact.html':
      path += 'contact.html';
      res.statusCode = 200;
      break;
    case '/contact-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contact');
      res.end();
      break;
    case '/admin':
    case '/admin.html':
      path += 'login.html';
      res.statusCode = 200;
      break;
    case '/admin?role=admin':
      res.write("<h1>welcome admin</h1>")
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end();
    }
    // res.write(data);
    res.end(data);
  });
});
// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
