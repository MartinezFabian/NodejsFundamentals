const fs = require('fs');

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

getText('file.txt')
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
