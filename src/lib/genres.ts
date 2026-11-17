import type { FontStyle, Genre, GenreKind } from '../data/types';
import { normalizeText } from './text';

export type SortMode = 'heaviness' | 'timeline' | 'favorites';

export type KindFilter = 'All' | GenreKind;

export const fontStacks: Record<FontStyle, string> = {
	blackletter: "'UnifrakturMaguntia', 'Pirata One', Georgia, serif",
	condensed: "Oswald, Impact, 'Arial Narrow', sans-serif",
	groovy: "Shrikhand, 'New Rocker', Georgia, serif",
	marker: "'Permanent Marker', 'Comic Sans MS', cursive",
	metal: "'Metal Mania', 'Pirata One', Georgia, serif",
	neon: 'Monoton, Oswald, Impact, sans-serif',
	pirate: "'Pirata One', Georgia, serif",
	rocker: "'New Rocker', Georgia, serif",
	script: "Pacifico, 'Brush Script MT', cursive",
	space: 'Audiowide, Oswald, Impact, sans-serif',
	typewriter: "'Special Elite', 'Courier New', monospace",
	western: 'Rye, Georgia, serif'
};

export function eraLabel(year: number): string {
	const decade = Math.floor(year / 10) * 10;
	const yearInDecade = year % 10;
	const decadePart = yearInDecade <= 3 ? 'Early' : yearInDecade <= 6 ? 'Mid' : 'Late';
	return `${decadePart} ${decade}s`;
}

export function countPicked(genre: Genre, picks: ReadonlySet<string>): number {
	return genre.bands.filter((band) => picks.has(band)).length;
}

export function compareByHeaviness(first: Genre, second: Genre): number {
	return first.heaviness - second.heaviness || first.year - second.year || first.name.localeCompare(second.name);
}

function compareByYear(first: Genre, second: Genre): number {
	return first.year - second.year || compareByHeaviness(first, second);
}

// Most-picked first; ties go to the genre where the picks cover more of its list, then softest first.
export function rankByPicks(genres: readonly Genre[], picks: ReadonlySet<string>): Genre[] {
	const pickedCounts = new Map(genres.map((genre) => [genre.id, countPicked(genre, picks)]));
	return [...genres].sort((first, second) => {
		const firstCount = pickedCounts.get(first.id) ?? 0;
		const secondCount = pickedCounts.get(second.id) ?? 0;
		const firstShare = firstCount / first.bands.length;
		const secondShare = secondCount / second.bands.length;
		return secondCount - firstCount || secondShare - firstShare || compareByHeaviness(first, second);
	});
}

// Favorites follow the current picks, so the board re-ranks as bands are picked.
export function sortGenres(genres: readonly Genre[], sortMode: SortMode, picks: ReadonlySet<string>): Genre[] {
	if (sortMode === 'timeline') return [...genres].sort(compareByYear);
	if (sortMode === 'favorites') return rankByPicks(genres, picks);
	return [...genres].sort(compareByHeaviness);
}

export function bandMatchesQuery(band: string, normalizedQuery: string): boolean {
	return normalizedQuery.length > 0 && normalizeText(band).includes(normalizedQuery);
}

export function genreMatchesQuery(genre: Genre, normalizedQuery: string): boolean {
	if (!normalizedQuery) return true;
	const genreText = normalizeText(`${genre.name} ${genre.scene.name} ${genre.description}`);
	return genreText.includes(normalizedQuery) || genre.bands.some((band) => bandMatchesQuery(band, normalizedQuery));
}

const cardColors: Record<GenreKind, [number, number, number]> = { Metal: [21, 21, 23], Rock: [27, 26, 23] };
const hotColor: [number, number, number] = [110, 26, 16];

// Blends a tile from its resting card color toward deep red as more of its bands are picked.
export function tileTint(kind: GenreKind, pickedShare: number): string {
	const channels = cardColors[kind].map((channel, index) =>
		Math.round(channel + (hotColor[index] - channel) * pickedShare)
	);
	return `rgb(${channels.join(', ')})`;
}
