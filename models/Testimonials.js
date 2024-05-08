const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
    author: { type: String, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    testimonial: { type: String, required: true }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
