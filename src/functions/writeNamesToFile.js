require('dotenv').config();
const fs = require("fs");

function writeNamesToFile(query, names) {
  for (let name of names) {
    fs.writeFileSync(
      `${process.env.WRITE_PATH}/${query.replaceAll("+", " ")}.txt`,
      name + "\n",
      { flag: "a+" }
    );
  }
}

module.exports = writeNamesToFile;
