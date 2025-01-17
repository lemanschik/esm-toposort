const exports = {
  "name": "toposort",
  "version": "2.0.2",
  "description": "Topological sort of directed ascyclic graphs (like dependecy lists)",
  "main": "module-topsort.js",
  "type": "module",
  "repository": { "type": "git", "url": "https://github.com/marcelklehr/toposort.git" },
  "devDependencies": { "vows": "0.7.x" },
  "keywords": [ "topological", "sort", "sorting", "graphs", "graph", "dependency", "list","dependencies",  "acyclic" ],
  "author": "Marcel Klehr <mklehr@gmx.net>",
  "license": "MIT",
  importSpecifier: ['test.js','module-topsort.js'],
}

export { exports };
