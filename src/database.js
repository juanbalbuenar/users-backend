const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-bd', {
        useNewUrlParser : true,
        useUnifiedTopology: true
        
    });
    console.log('Database: Connected');
};

module.exports= {connect};