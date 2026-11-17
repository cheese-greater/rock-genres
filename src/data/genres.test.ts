import { describe, expect, it } from 'vitest';

import { bandKey } from '../lib/text';
import { genres, sceneDefinitions, scenes } from '.';

// Matches em dash, en dash and typographic quotes, which would split one band into two pick keys.
const disallowedCharacters = /[–—‘’“”]/;

describe('genre data', () => {
	it('has unique genre names and ids', () => {
		expect(new Set(genres.map((genre) => genre.name)).size).toBe(genres.length);
		expect(new Set(genres.map((genre) => genre.id)).size).toBe(genres.length);
	});

	it('has unique scene ids and no empty scenes', () => {
		expect(new Set(scenes.map((scene) => scene.id)).size).toBe(scenes.length);
		for (const definition of sceneDefinitions) expect(definition.genres.length, definition.name).toBeGreaterThan(0);
	});

	it.each(genres.map((genre) => [genre.name, genre] as const))('%s has well-formed fields', (_name, genre) => {
		expect(genre.bands.length).toBeGreaterThanOrEqual(5);
		expect(genre.bands.length).toBeLessThanOrEqual(10);
		expect(new Set(genre.bands).size).toBe(genre.bands.length);
		expect(genre.heaviness).toBeGreaterThanOrEqual(1);
		expect(genre.heaviness).toBeLessThanOrEqual(100);
		expect(genre.year).toBeGreaterThanOrEqual(1950);
		expect(genre.year).toBeLessThanOrEqual(new Date().getFullYear());
		expect(genre.description).toMatch(/^\S.*\.$/);
		expect(genre.description).not.toMatch(disallowedCharacters);
		for (const band of genre.bands) {
			expect(band).toBe(band.trim());
			expect(band).not.toMatch(disallowedCharacters);
		}
		expect(genre.sources.length).toBeGreaterThanOrEqual(1);
		for (const source of genre.sources) expect(source).toMatch(/^https:\/\/[^\s]+$/);
	});

	// A band listed under several genres must be spelled identically everywhere, or picks would not carry across.
	it('spells each band the same way in every genre', () => {
		const spellingsByKey = new Map<string, Set<string>>();
		for (const band of genres.flatMap((genre) => genre.bands)) {
			spellingsByKey.set(bandKey(band), (spellingsByKey.get(bandKey(band)) ?? new Set()).add(band));
		}
		const inconsistent = [...spellingsByKey.values()]
			.filter((spellings) => spellings.size > 1)
			.map((spellings) => [...spellings]);
		expect(inconsistent).toEqual([]);
	});
});
