const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hello World!'
  });
});

app.post('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({
      message: 'Name is required'
    });
  }

  res.send({
    message: `with an ID of ${id} and name of ${name}`
  });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
