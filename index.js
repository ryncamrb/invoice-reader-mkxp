const project = { name: "invoice-reader-mkxp", owner: "ryncamrb", profile: "0028" };

export function summarize(items = []) {
  return items.reduce((total, item) => total + String(item).length, 0);
}

export function describe() {
  return project.name + " ready for " + project.owner;
}

console.log(describe(), summarize([project.name, project.owner]));
