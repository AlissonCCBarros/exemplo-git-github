const express = required('express');

const app = express();

app.get('/teste', (req, res) => {
  return res.json({hello: 'Alisson'});
});

app.listem(3333);