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

async function readText() {
  try {
    const response = await getText('file.txt');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

readText();
