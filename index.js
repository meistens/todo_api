const express = require('express');
const app = express();
const path = require('path');
const models = require('./models/tasks');
const routes = require('./routes/todoRoute');
const Tasks = require('./controllers/todoController');
const testError = require('./error');
const { json, urlencoded } = require('express');

//mongoose setup
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongoose is live!'))
  .catch((err) => console.log(err));

//middlewares
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

//error middleware
app.use((err, req, res, next) => {
  const { status = 500, message = 'server error' } = err;
  res.status(status).send(message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is on ${port}`);
});
