import { describe, expect, it } from 'vitest';

import type { Genre } from '../data/types';
import { eraLabel, genreMatchesQuery, rankByPicks, sortGenres, tileTint } from './genres';
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

describe('sortGenres', () => {
	const soft = makeGenre('Soft', { heaviness: 10, year: 1990 });
	const heavy = makeGenre('Heavy', { heaviness: 90, year: 1970 });

	it('sorts by heaviness or by year', () => {
		expect(sortGenres([heavy, soft], 'heaviness', []).map((genre) => genre.name)).toEqual(['Soft', 'Heavy']);
		expect(sortGenres([soft, heavy], 'timeline', []).map((genre) => genre.name)).toEqual(['Heavy', 'Soft']);
	});

	it('follows the captured favorite order', () => {
		expect(sortGenres([soft, heavy], 'favorites', ['heavy', 'soft']).map((genre) => genre.name)).toEqual([
			'Heavy',
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
