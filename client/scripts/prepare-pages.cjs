const fs = require('node:fs');
const path = require('node:path');
const build = path.resolve(__dirname, '../build');
for (const route of ['portfolio', 'contact']) {
  fs.mkdirSync(path.join(build, route), {recursive:true});
  fs.copyFileSync(path.join(build, 'index.html'), path.join(build, route, 'index.html'));
}
fs.writeFileSync(path.join(build, '.nojekyll'), '');
// The retired resume is retained in source history, not included in the public site.
fs.rmSync(path.join(build, 'doc'), {recursive:true, force:true});
