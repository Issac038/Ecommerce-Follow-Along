const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, path.join(__dirname,'..uploads'));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;