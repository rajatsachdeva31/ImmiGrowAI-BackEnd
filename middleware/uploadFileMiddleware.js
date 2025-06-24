const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (req.body.rolename === 'Immigrant') {
        if (file.fieldname === 'govId') {
            return cb(null, true);
        }
        return cb(new Error('Immigrants can only upload Government ID.'));
    }

    // Other roles can upload all three
    return cb(null, true);
};

const upload = multer({ storage, fileFilter });

const uploadFileMiddleware = upload.fields([
    { name: 'govId', maxCount: 1 },
    { name: 'businessDoc', maxCount: 1 },
    { name: 'licenseCert', maxCount: 1 }
]);

module.exports = uploadFileMiddleware;
