const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

//connected to mongo
connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//route
app.use('/', require('./loanRoute'));

//for heroku
if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
}

// listening the express app
app.listen(
    PORT,
    () => {
        console.log(`Server is running at port no ${PORT}`);
    }
);