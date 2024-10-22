const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Photo', PhotoSchema);
