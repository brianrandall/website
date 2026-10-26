const fs = require('node:fs');
const path = require('node:path');
const build = path.resolve(__dirname, '../build');
for (const route of ['portfolio', 'resume', 'contact']) {
  fs.mkdirSync(path.join(build, route), {recursive:true});
  fs.copyFileSync(path.join(build, 'index.html'), path.join(build, route, 'index.html'));
}
fs.writeFileSync(path.join(build, '.nojekyll'), '');
// Historical résumé and contact materials in source are not included in the published site.
fs.rmSync(path.join(build, 'doc'), {recursive:true, force:true});
