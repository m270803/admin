const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projects: [{
        position: { type: String, required: true },
        skills: { type: String, required: true },
        description: { type: String, required: true}
    }]
});

const workSchema = new Schema({
    projects: [projectSchema]
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;
