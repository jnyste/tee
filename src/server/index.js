const express = require('express');
const os = require('os');
const shell = require('shelljs');
const app = express();

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
app.listen(8080, () => console.log('Listening on port 8080!'));
