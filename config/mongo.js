const mongoose = require('mongoose');

const databaseConnect = () => {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(
        DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err, res) => {
            if (!err) {
                console.log('Conexión a la base de datos establecida');
            } else {
                console.log('Conexión a la base de datos no establecida');
            }
        }
    );
}

module.exports = databaseConnect;