import { slugify } from '../lib/text';
import { alternativeIndie } from './scenes/alternativeIndie';
import { alternativeNu } from './scenes/alternativeNu';
import { blackMetal } from './scenes/blackMetal';
import { deathGrind } from './scenes/deathGrind';
import { doomSludge } from './scenes/doomSludge';
import { earlyRock } from './scenes/earlyRock';
import { folkSymphonic } from './scenes/folkSymphonic';
import { hardcoreEmo } from './scenes/hardcoreEmo';
import { hardRock } from './scenes/hardRock';
import { heavyPower } from './scenes/heavyPower';
import { metalcore } from './scenes/metalcore';
import { popArena } from './scenes/popArena';
import { postPunk } from './scenes/postPunk';
import { progressiveAvant } from './scenes/progressiveAvant';
import { psychProg } from './scenes/psychProg';
import { punk } from './scenes/punk';
import { rootsRock } from './scenes/rootsRock';
import { thrashGroove } from './scenes/thrashGroove';
import { worldRock } from './scenes/worldRock';
import type { Genre, Scene, SceneDefinition } from './types';

// Order here is the order scenes appear in the scene picker.
export const sceneDefinitions: SceneDefinition[] = [
	earlyRock,
	rootsRock,
	psychProg,
	popArena,
	hardRock,
	punk,
	hardcoreEmo,
	postPunk,
	alternativeIndie,
	worldRock,
	heavyPower,
	thrashGroove,
	deathGrind,
	blackMetal,
	doomSludge,
	folkSymphonic,
	progressiveAvant,
	alternativeNu,
	metalcore
];

export const scenes: Scene[] = sceneDefinitions.map(({ id, kind, name }) => ({ id, kind, name }));

export const genres: Genre[] = sceneDefinitions.flatMap((definition, sceneIndex) =>
	definition.genres.map((entry) => ({ ...entry, id: slugify(entry.name), scene: scenes[sceneIndex] }))
);

export const allBands: ReadonlySet<string> = new Set(genres.flatMap((genre) => genre.bands));
