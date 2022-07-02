const { writePath } = require("../../config");
const { open } = require("lmdb");

async function writeNamesToLMDB(query, names) {
  const MyDB = open({ path: writePath + "/LMDB" });
  const objectToWrite = { [query]: names };
  const songsInDB = await MyDB.get("songs");
  await MyDB.put(
    "songs",
    songsInDB ? Object.assign(songsInDB, objectToWrite) : objectToWrite
  );
  await MyDB.close();
}

module.exports = writeNamesToLMDB;
