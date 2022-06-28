const { writePath } = require("../../config");
const fs = require("fs");

function writeNamesToFile(query, names) {
  for (let name of names) {
    fs.writeFileSync(
      `${writePath}/${query.replaceAll("+", " ")}.txt`,
      name + "\n",
      { flag: "a+" }
    );
  }
}

module.exports = writeNamesToFile;
