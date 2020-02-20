var mongoose = require('mongoose');

const URL = 'mongodb+srv://user:password@vuttr-evkan.mongodb.net/vuttr';

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.error('Error occured in db connection');
});

db.on('open', () => {
  console.log('DB Connection established successfully');
});
