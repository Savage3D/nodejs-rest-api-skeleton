if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const db = require('./services/dbService');
const app = require('./app');

db.setupConnection(process.env.DB_CONNECTION_STRING);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('Server is running');
});
