const express = require('express');
const os = require('os');
const shell = require('shelljs');
const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/pullFromGit', function(req, res) {
  switch (code = shell.exec('git pull').code) {
    case 0:
      res.send('Git pull successful!');
      break;
    case 1:
    case 2:
    default:
      res.send('Git pull failed?' + code);
      break;
  }
});
app.listen(8080, () => console.log('Listening on port 8080!'));
