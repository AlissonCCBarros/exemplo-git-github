const express = required('express');

const app = express();

app.get('/teste2', (req, res) => {
  return res.json({hello: 'Alisson'});
});

app.listem(3333);