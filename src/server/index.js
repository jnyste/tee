const express = require('express');
const os = require('os');
const shell = require('shelljs');
const app = express();
const ping = require('ping');

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/pullFromGit', function(req, res) {
  let pull = shell.exec('git pull');
  let output = pull.stdout;
  switch (code = shell.exec('git pull').code) {
    case 0:
      res.send(output);
      break;
    case 1:
    case 2:
    default:
      res.send(output);
      break;
  }
});

app.get('/api/shellPing/*', function(req, res) {
  host = req.url.substring(15);
  ping.sys.probe(host, function(isAlive) {
      var msg = isAlive ? host +' is alive.' : host + ' is dead.';
      res.send(msg);
  });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
