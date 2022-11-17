const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    work_name: { type: String}

});

module.exports = mongoose.model('work', workSchema);