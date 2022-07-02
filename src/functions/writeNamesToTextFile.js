const { writePath } = require("../../config");
const fs = require("fs");

function writeNamesToTextFile(query, names) {
  for (let name of names) {
    fs.writeFileSync(
      `${writePath}/textfiles/${query}.txt`,
      name + "\n",
      { flag: "a+" }
    );
  }
}

module.exports = writeNamesToTextFile;
