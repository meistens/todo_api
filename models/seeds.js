// poulating database. One-time use only

const Tasks = require('./tasks');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoose is live!');
  })
  .catch((err) => {
    console.log(err);
  });

const task = [
  {
    title: 'Design patterns',
    description: 'A chapeter of Nodejs ddsign patterns then practice',
  },
  {
    title: 'C programming language',
    description: 'A chapter on C and do the exercises and projects',
  },
  {
    title: 'ES6',
    description: 'undertand how ES6 works',
  },
];

Tasks.insertMany(task)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
