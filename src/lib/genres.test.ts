import { describe, expect, it } from 'vitest';

import type { Genre } from '../data/types';
import {
	eraLabel,
	genreMatchesQuery,
	lastFmArtistUrl,
	rankByPicks,
	rankScenesByPicks,
	sortGenres,
	sourceLabel,
	tileTint
} from './genres';
import { normalizeText } from './text';

const testScene = { id: 'test', kind: 'Metal', name: 'Test Scene' } as const;

function makeGenre(name: string, overrides: Partial<Genre> = {}): Genre {
	return {
		bands: ['Band A', 'Band B', 'Band C', 'Band D', 'Band E'],
		description: 'A test genre.',
		font: 'metal',
		heaviness: 50,
		id: name.toLowerCase(),
		name,
		scene: testScene,
		sources: ['https://en.wikipedia.org/wiki/Test_genre'],
		year: 1980,
		...overrides
	};
}

describe('eraLabel', () => {
	it('splits each decade into early, mid and late', () => {
		expect(eraLabel(1981)).toBe('Early 1980s');
		expect(eraLabel(1954)).toBe('Mid 1950s');
		expect(eraLabel(1968)).toBe('Late 1960s');
		expect(eraLabel(2009)).toBe('Late 2000s');
	});
});

describe('normalizeText', () => {
	it('folds accents and standalone letters', () => {
		expect(normalizeText('Motörhead')).toBe('motorhead');
		expect(normalizeText('Boøwy')).toBe('boowy');
		expect(normalizeText('Barış Manço')).toBe('baris manco');
	});
});

describe('genreMatchesQuery', () => {
	const genre = makeGenre('Doom', { bands: ['Candlemass', 'Saint Vitus', 'Trouble', 'Pentagram', 'Cathedral'] });

	it('matches on genre name, scene name or band', () => {
		expect(genreMatchesQuery(genre, '')).toBe(true);
		expect(genreMatchesQuery(genre, 'doom')).toBe(true);
		expect(genreMatchesQuery(genre, 'test scene')).toBe(true);
		expect(genreMatchesQuery(genre, 'vitus')).toBe(true);
		expect(genreMatchesQuery(genre, 'slayer')).toBe(false);
	});
});

describe('lastFmArtistUrl', () => {
	it('uses + for spaces and percent-encodes slashes, plus signs and accents', () => {
		expect(lastFmArtistUrl('Black Sabbath')).toBe('https://www.last.fm/music/Black+Sabbath');
		expect(lastFmArtistUrl('AC/DC')).toBe('https://www.last.fm/music/AC%2FDC');
		expect(lastFmArtistUrl('Ost+Front')).toBe('https://www.last.fm/music/Ost%2BFront');
		expect(lastFmArtistUrl('Motörhead')).toBe('https://www.last.fm/music/Mot%C3%B6rhead');
	});

	it('leaves out the site-only disambiguator after a band name', () => {
		expect(lastFmArtistUrl('Embrace (DC)')).toBe('https://www.last.fm/music/Embrace');
	});
});

describe('sourceLabel', () => {
	it('names known publishers and falls back to the host name', () => {
		expect(sourceLabel('https://www.allmusic.com/style/acid-rock-ma0000012327')).toBe('AllMusic');
		expect(sourceLabel('https://en.wikipedia.org/wiki/Acid_rock')).toBe('Wikipedia');
		expect(sourceLabel('https://daily.bandcamp.com/lists/x')).toBe('daily.bandcamp.com');
	});
});

describe('rankByPicks', () => {
	it('orders by picked count, then share of the list, then heaviness', () => {
		const tenBands = Array.from({ length: 10 }, (_unused, index) => `Ten ${index}`);
		const fiveBands = Array.from({ length: 5 }, (_unused, index) => `Five ${index}`);
		const bigList = makeGenre('Big', { bands: tenBands, heaviness: 10 });
		const smallList = makeGenre('Small', { bands: fiveBands, heaviness: 90 });
		const untouched = makeGenre('Untouched', { heaviness: 1 });
		const picks = new Set(['Ten 0', 'Ten 1', 'Five 0', 'Five 1']);

		expect(rankByPicks([untouched, bigList, smallList], picks).map((genre) => genre.name)).toEqual([
			'Small',
			'Big',
			'Untouched'
		]);
	});
});

describe('rankScenesByPicks', () => {
	it('counts each picked band once per scene, most first, and skips scenes with no picks', () => {
		const otherScene = { id: 'other', kind: 'Rock', name: 'Other Scene' } as const;
		const quietScene = { id: 'quiet', kind: 'Rock', name: 'Quiet Scene' } as const;
		const first = makeGenre('First', { bands: ['Shared', 'Band B', 'Band C', 'Band D', 'Band E'] });
		const second = makeGenre('Second', { bands: ['Shared', 'Band F', 'Band G', 'Band H', 'Band I'] });
		const other = makeGenre('Other', {
			bands: ['Other A', 'Other B', 'Other C', 'Other D', 'Other E'],
			scene: otherScene
		});
		const quiet = makeGenre('Quiet', { scene: quietScene });
		const picks = new Set(['Shared', 'Band F', 'Other A']);

		const ranked = rankScenesByPicks([other, first, second, quiet], picks);
		expect(ranked.map(({ bandTotal, pickedCount, scene }) => [scene.id, pickedCount, bandTotal])).toEqual([
			['test', 2, 9],
			['other', 1, 5]
		]);
	});
});

describe('sortGenres', () => {
	const soft = makeGenre('Soft', { heaviness: 10, year: 1990 });
	const heavy = makeGenre('Heavy', { heaviness: 90, year: 1970 });

	const noPicks: ReadonlySet<string> = new Set();

	it('sorts by heaviness or by year', () => {
		expect(sortGenres([heavy, soft], 'heaviness', noPicks).map((genre) => genre.name)).toEqual(['Soft', 'Heavy']);
		expect(sortGenres([soft, heavy], 'timeline', noPicks).map((genre) => genre.name)).toEqual(['Heavy', 'Soft']);
	});

	it('re-ranks favorites from the current picks', () => {
		const pickedHeavy = makeGenre('Picked Heavy', {
			bands: ['Heavy A', 'Heavy B', 'Heavy C', 'Heavy D', 'Heavy E'],
			heaviness: 90
		});
		expect(sortGenres([pickedHeavy, soft], 'favorites', noPicks).map((genre) => genre.name)).toEqual([
			'Soft',
			'Picked Heavy'
		]);
		expect(sortGenres([soft, pickedHeavy], 'favorites', new Set(['Heavy A'])).map((genre) => genre.name)).toEqual([
			'Picked Heavy',
			'Soft'
		]);
	});
});

describe('tileTint', () => {
	it('runs from the card color to deep red', () => {
		expect(tileTint('Metal', 0)).toBe('rgb(21, 21, 23)');
		expect(tileTint('Metal', 1)).toBe('rgb(110, 26, 16)');
	});
});
