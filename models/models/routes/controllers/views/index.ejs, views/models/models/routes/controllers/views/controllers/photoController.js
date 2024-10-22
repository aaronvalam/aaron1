const Photo = require('../models/Photo');

// Tải ảnh lên
exports.uploadPhoto = async (req, res) => {
    try {
        const newPhoto = new Photo({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.file.filename,
            uploadedBy: req.user.id
        });
        await newPhoto.save();
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Lấy danh sách ảnh
exports.getPhotos = async (req, res) => {
    try {
        const photos = await Photo.find().populate('uploadedBy');
        res.render('index', { photos });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
