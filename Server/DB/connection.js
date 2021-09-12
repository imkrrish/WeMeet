const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`connection from DB successsful`);
}).catch((err) => {
    console.log(err);
});