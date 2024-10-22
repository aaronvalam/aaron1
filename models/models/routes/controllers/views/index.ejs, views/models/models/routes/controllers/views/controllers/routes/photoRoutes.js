const express = require('express');
const router = express.Router();
const { uploadPhoto, getPhotos } = require('../controllers/photoController');
const multer = require('multer');

// Cấu hình Multer để tải lên ảnh
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req,
