const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

async function readText() {
  try {
    const response = await readFilePromise('file.txt', 'utf-8');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

readText();
