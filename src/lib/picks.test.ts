import { describe, expect, it } from 'vitest';

import { restorePicks } from './picks';
import { bandKey } from './text';

describe('bandKey', () => {
	it('treats spelling-only differences as the same band', () => {
		expect(bandKey('Belkètre')).toBe(bandKey('Belketre'));
		expect(bandKey('Days N Daze')).toBe(bandKey("Days N' Daze"));
		expect(bandKey('Ros Sereysothea')).toBe(bandKey('Ros Serey Sothea'));
		expect(bandKey('County Medical Examiners')).toBe(bandKey('The County Medical Examiners'));
		expect(bandKey('Echo & the Bunnymen')).toBe(bandKey('Echo and the Bunnymen'));
	});

	it('keeps a disambiguated band apart from its namesake', () => {
		expect(bandKey('Embrace (DC)')).not.toBe(bandKey('Embrace'));
	});
});

describe('restorePicks', () => {
	const bands = new Set(['Belketre', "Days N' Daze", 'Embrace', 'Embrace (DC)', 'Motörhead']);

	it('keeps saved names that are still in the data', () => {
		expect(restorePicks(['Motörhead', 'Embrace (DC)'], bands)).toEqual({
			picks: new Set(['Motörhead', 'Embrace (DC)']),
			unmatchedNames: []
		});
	});

	// These are respellings from a real data edit, which used to drop the saved pick.
	it('carries a pick over to the current spelling of a respelled band', () => {
		expect(restorePicks(['Belkètre', 'Days N Daze'], bands).picks).toEqual(new Set(['Belketre', "Days N' Daze"]));
	});

	it('returns names that match no current band separately, once each', () => {
		expect(restorePicks(['Removed Band', 'Embrace', 'Removed Band'], bands)).toEqual({
			picks: new Set(['Embrace']),
			unmatchedNames: ['Removed Band']
		});
	});
});
