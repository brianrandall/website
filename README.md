# Brian Randall — creative technology portfolio

Working copy of the original brianrandall.dev React site.

## Local development

```sh
cd client
npm start
```

`npm run build` creates the static production output. `CI=true npm test -- --watchAll=false` runs the portfolio test.

## Content

Edit `client/src/components/projectCopy.json` for the current case studies. Original creative media references live in `projectInfo.jsx`. Project selections can be linked using `/portfolio?project=wildman` (and other project IDs).

The two clone projects and their asset folders have been removed from the working application. Git history is retained as copied, including historical versions; nothing has been pushed or published.

The March 2023 résumé remains in public/doc as an archive but is no longer promoted in navigation. Replace it with the current creative-technology résumé before publishing.

## Editorial provenance and next pass

Body Language, Wildman, Soaked and Brain Wave Viz draw on the original site descriptions. Liberia, fabrication and current software entries draw on the prior portfolio conversation. Good Nature is Truckee, California; Tensorpunk was a four-month role in 2023. Do not imply CalArts attendance or sole authorship of collaborative work.

Recover and review media for Liberia, Good Nature and Nelson Treehouse; capture current software examples; verify project credits and external videos/features before publication. No missing media has been fabricated. Large original GIFs remain unchanged pending preparation of smaller video derivatives.

PLEASE case study added from GitHub commit `9314c067cf2dd7515a96488520e0042698b35dbf`: README, CLI, model client, safety checks, photo organizer and package configuration reviewed. Its roadmap is not presented as shipped functionality.

## Publishing

GitHub Actions builds, tests and publishes main to https://brianrandall.github.io/website/. Enable GitHub Actions as the Pages source in repository settings. The postbuild script creates direct-entry pages for portfolio and contact; the retired resume is excluded from the public build.
