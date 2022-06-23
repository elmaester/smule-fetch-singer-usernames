function getUniqueNames(nodelist) {
  const allNames = Array.from(nodelist).map(node => node.innerText);
  const names = [...new Set(nodelist)];
  return names;
}

module.exports = getUniqueNames;