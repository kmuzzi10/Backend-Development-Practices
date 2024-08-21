const http = require('http');
const url = require('url');
const querystring = require('querystring');

const port = 3000;

// Dummy user data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Welcome</h1>
      <form action="/create-user" method="POST">
        <input type="text" name="username" placeholder="Enter username" required>
        <button type="submit">Create User</button>
      </form>
    `);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else if (req.method === 'POST' && parsedUrl.pathname === '/create-user') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      const username = parsedBody.username;
      console.log(`New user: ${username}`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>User ${username} created</h1><a href="/">Back to home</a>`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
