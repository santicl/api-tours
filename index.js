require('dotenv').config();
const express = require('express');
const app = express();
const databaseConnect =  require('./config/mongo');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


databaseConnect();


