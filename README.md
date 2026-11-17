# Find Your Rock & Metal Genre

Tap the bands you like and see which of 197 rock and metal genres you love most. Each genre tile lights up as you pick
its bands, a podium shows your top three, and the board can be filtered by rock or metal, by scene, or by search, and
sorted softest to hardest, oldest first, or by your favorites. Picks are saved in the browser's local storage.

Built with React, TypeScript and Vite, and deployed to GitHub Pages by GitHub Actions.

## Development

Requires Node 20.19+ or 22.12+.

```sh
npm install
npm run dev       # local dev server with hot reload
npm test          # data integrity and sorting tests
npm run build     # type-check and build into dist/
npm run preview   # serve the production build locally
npm run format    # Prettier
```

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` tests, builds and publishes the site on every push to `main` (it can also be run by hand
from the Actions tab).

One-time setup: in the repository on GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**. The site
is then served at `https://<owner>.github.io/rock-genres/`.

The Vite `base` is `./`, so the build works under the project path or at any other URL without changes.

## Editing genres

Genres live in `src/data/scenes/`, one file per scene (Punk, Black Metal, and so on). Each genre has:

| Field         | Meaning                                                          |
| ------------- | ---------------------------------------------------------------- |
| `name`        | Display name; must be unique                                     |
| `year`        | Approximate year the style took shape (drives the era label)     |
| `heaviness`   | 1 to 100 position on the softest-to-hardest scale                |
| `font`        | Display font style for the tile title (see `FontStyle` in types) |
| `description` | One sentence, ending with a period                               |
| `bands`       | 5 to 10 representative bands                                     |

Picks are stored per band name, so a band listed under several genres counts toward each of them. Spell a band the same
way everywhere it appears; `npm test` fails if two spellings of the same band are found. To add a scene, create a file
in `src/data/scenes/` and add it to the list in `src/data/index.ts`.
