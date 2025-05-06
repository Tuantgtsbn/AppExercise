const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*'
  })
);

app.use(express.static('public'));
app.use(cookieParser());
routes(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
