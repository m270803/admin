const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    bio: { type: String, required: true },
    skills: [{ type: String, required: true }],
    services: [{
        position: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String,required: true}
    }],
    achievement: { type: String, required: true },
    resume: { type: String } 
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
