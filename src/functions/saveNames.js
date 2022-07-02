const { storeType } = require("../../config");
const writeNamesToTextFile = require("./writeNamesToTextFile");
const writeNamesToLMDB = require("./writeNamesToLMDB");
const writeNamesToRealm = require("./writeNamesToRealm");

function saveNames(_query, names) {
  const query = _query.replaceAll("+", " ");
  switch (storeType) {
    case "realm":
      return writeNamesToRealm(query, names);
    case "lmdb":
      return writeNamesToLMDB(query, names);
    case "textfile":
      return writeNamesToTextFile(query, names);
    default:
      return writeNamesToTextFile(query, names);
  }
}

module.exports = saveNames;
