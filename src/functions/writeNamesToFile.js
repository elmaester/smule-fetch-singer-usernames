const fs = require("fs");

function writeNamesToFile(query, names) {
  for (let name of names) {
    fs.writeFileSync(
      `/home/morket/code/scraping/smule/names/${query}.txt`,
      name + "\n",
      { flag: "a+" }
    );
  }
}

module.exports = writeNamesToFile;
