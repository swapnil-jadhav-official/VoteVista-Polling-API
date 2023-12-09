const express = require('express');
const bodyParser = require('body-parser');
const questionRoutes = require('./routes/questionRoutes');
const connect = require('./db/db')
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/questions', questionRoutes);

connect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
