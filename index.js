const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;



// body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



// db-config
const db = require('./config/keys').MongoURI;
// db-connection
mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Database has been connected...`))
    .catch((err) => console.log({
        msg: 'Database was not connected....'
    }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));