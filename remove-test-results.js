const fse = require('fs-extra');

async function removeTestResults() {
  await fse.remove('mochawesome-report');
}

removeTestResults();
