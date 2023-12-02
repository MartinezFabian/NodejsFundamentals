const { writeFile } = require('fs/promises');
const { createReadStream } = require('fs');

async function createBigFile() {
  try {
    await writeFile('file.txt', 'Hello, World!'.repeat(1000000));
  } catch (error) {
    console.error(error);
  }
}

createBigFile();

const stream = createReadStream('file.txt', { encoding: 'utf-8' });

// chunk son fragmentos de datos que se han leido del archivo
stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('end', () => {
  console.log('Finalizo la lectura del archivo');
});

stream.on('error', (error) => {
  console.error(error);
});
