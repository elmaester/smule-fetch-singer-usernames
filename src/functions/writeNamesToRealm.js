const { writePath } = require("../../config");
const Realm = require("realm");

const SongSchema = {
  name: "Song",
  properties: {
    name: "string",
    singers: "string[]",
  },
};

async function writeNamesToRealm(query, names) {
  let song;
  const realm = await Realm.open({
    path: writePath + "/RealmDB/Songs.realm",
    schema: [SongSchema],
  });
  await realm.write(() => {
    song = realm.create("Song", {
      name: query,
      singers: names,
    });
  });
  realm.close();
}

module.exports = writeNamesToRealm;
