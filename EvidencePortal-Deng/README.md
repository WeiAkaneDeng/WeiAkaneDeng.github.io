# Wei Q. Deng Evidence Portal

This folder is ready to publish with GitHub Pages. In a repository, set GitHub Pages to deploy from the `docs/` folder on the default branch.

Contents:

- `index.html` - the static evidence portal.
- `data.js` - publication metadata generated from `MyManuscript/WQ_Deng_Peer_Reviewed_Publications.xlsx`.
- `papers/` - bundled PDFs matched from local files.
- `assets/thumbs/` - first-page thumbnails rendered from bundled PDFs.

To rebuild after editing the spreadsheet or adding PDFs, run from the repository root:

```bash
/Users/weideng/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/build_portal_data.py
```
