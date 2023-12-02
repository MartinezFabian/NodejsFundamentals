const { readFile } = require('fs/promises');

async function readText() {
  try {
    const response = await readFile('file.txt', 'utf-8');

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

readText();
