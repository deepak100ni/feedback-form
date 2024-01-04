const path = require('path');
const multer = require('multer');

/* -------------------------------------------------------------------------- */
/*                                   Multer                                   */
/* -------------------------------------------------------------------------- */

function uploadFiles(folder) {
    const Storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, folder);
      },
  
      filename: (req, file, cb) => {
        const fileNameCheck = file.originalname.replace(
          /[-&\/\\#.,+()$~%'":*?<>{} ]/g,
          '',
        );
        cb(
          null,
          `${fileNameCheck}-${Date.now()}${path.extname(file.originalname)}`,
        );
      },
    });
  
    return multer({ storage: Storage });
  }
  
  module.exports = {
    uploadFiles
  };
  