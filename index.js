const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

//Rate limiter
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 5
})
app.use(limiter);
app.set('trust proxy', 1);


//Routes
app.use('/api', require('./routes'));


//Enable CORS
app.use(cors());

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

