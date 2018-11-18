const express = require('express');
const next = require('next');
const path = require('path');

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || null;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/images/', express.static(path.join(__dirname, 'images')));
    server.use('/css/', express.static(path.join(__dirname, 'static')));

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`ssr ready on ${URL || `http://localhost:${PORT}`}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
