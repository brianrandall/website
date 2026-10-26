# Brian Randall — Technical Solutions & Automation Portfolio

This React portfolio is hosted with GitHub Pages at **https://brianrandall.github.io/website/**.

## Positioning (October 2026)

The current presentation leads with client-facing software, systems integration, practical automation and technical problem-solving. Previous creative-technology, physical-computing and fabrication work is preserved in the selected work section.

### Featured projects

- **Farm Inventory & Ordering:** Paid client engagement. Currently in development; business-wide launch is *planned for spring 2027*, not yet a production success claim. No client source, sensitive configuration, private customer data or credentials are published in this repository.
- **PyMuz:** Independent construction/CAD geometry and cut-list research and prototyping. Active development; not marketed as validated production software.
- **Content Engine:** Local-first Python/AI/media automation, working prototype.
- **PLEASE:** Local AI terminal assistant with published source.

Case study copy lives in `client/src/components/projectCopy.json`.

## Résumé

`/resume` is a responsive résumé page with a **Print / Save as PDF** action that invokes the browser print dialog. It uses the current technical-solutions résumé content rather than the retired 2023 PDF. Direct-entry GitHub Pages support is prepared by `client/scripts/prepare-pages.cjs`, which includes a `resume/index.html` export. The old archived résumé source is deliberately omitted from the public build.

## Development

```sh
cd client
npm ci
npm start
```

Check:

```sh
CI=true npm test -- --watchAll=false
npm run build
```

Deploys are handled via `.github/workflows/pages.yml` on pushes to `main`. Keep client/project claims consistent with development status. Original artistic project media and credits are retained, including collaborative attribution. Do not publish screenshots of internal farm dashboards without the owner's approval and appropriate data sanitization.
