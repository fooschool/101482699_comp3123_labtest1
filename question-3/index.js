import fs from 'fs'
import path from 'path'

// id of logs directory
const LOGS_ID = 'Logs';

if (fs.existsSync(LOGS_ID)) {
  // removes and names the files
  // was confused why but you must remove the files first
  let files = fs.readdirSync(LOGS_ID);
  for (const file of files) {
    const filePath = path.join(LOGS_ID, file);

    console.log('Removing file: ', filePath);
    fs.rmSync(filePath);
  }

  fs.rmdirSync(LOGS_ID);
}

fs.mkdirSync(LOGS_ID);

const originalDir = process.cwd();

process.chdir(path.join(originalDir, LOGS_ID));

for (let i = 0; i <= 10; i++) {
  const filePath = `log${i}.txt`;
  const fullFilePath = path.join(LOGS_ID, filePath);
  console.log('Writing file: ', fullFilePath);
  fs.writeFileSync(filePath, 'lemons');
}

process.chdir(originalDir);
