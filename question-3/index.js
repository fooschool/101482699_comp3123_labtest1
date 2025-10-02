import fs from 'fs'

// id of logs directory
const LOGS_ID = 'Logs';

if (fs.existsSync(LOGS_ID)) {
  // removes and names the files
  // was confused why but you must remove the files first
  let files = fs.readdirSync(LOGS_ID);
  for (const file of files) {
    const filePath = `${LOGS_ID}/${file}`;

    console.log('Removing file: ', filePath);
    fs.rmSync(filePath);
  }

  fs.rmdirSync(LOGS_ID);
}

fs.mkdirSync(LOGS_ID);

// enter the directory as requested
// would perfer to write to the full path, that is much safer
process.chdir(LOGS_ID);

for (let i = 0; i <= 10; i++) {
  const filePath = `logd-${i}.txt`;
  const fullFilePath = `${LOGS_ID}/${filePath}`;
  console.log('Writing file: ', fullFilePath);
  fs.writeFileSync(filePath, 'lemons');
}

// go back
process.chdir('../');
