const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
{
  const hitRouter = require('./routes/hits');
  app.use('/api/hits', hitRouter);
}

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
