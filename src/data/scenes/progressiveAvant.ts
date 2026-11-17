import type { SceneDefinition } from '../types';

export const progressiveAvant: SceneDefinition = {
	id: 'progressive',
	kind: 'Metal',
	name: 'Progressive & Avant-Garde',
	genres: [
		{
			name: 'Progressive Metal',
			year: 1988,
			heaviness: 64,
			font: 'condensed',
			description: 'Complex structures, odd time signatures and virtuosic playing.',
			bands: [
				'Dream Theater',
				'Queensrÿche',
				'Fates Warning',
				'Tool',
				'Opeth',
				'Symphony X',
				'Devin Townsend',
				'Between the Buried and Me',
				'Haken',
				'Leprous'
			]
		},
		{
			name: 'Progressive Death Metal',
			year: 1991,
			heaviness: 84,
			font: 'pirate',
			description: 'Death metal stretched into long, dynamic compositions with clean interludes.',
			bands: [
				'Death',
				'Pestilence',
				'Edge of Sanity',
				'Opeth',
				'Disillusion',
				'Persefone',
				'Ne Obliviscaris',
				'Fallujah',
				'Rivers of Nihil',
				'Allegaeon'
			]
		},
		{
			name: 'Djent',
			year: 2005,
			heaviness: 77,
			font: 'condensed',
			description: 'Palm-muted, polyrhythmic extended-range guitar, rooted in Meshuggah.',
			bands: [
				'Meshuggah',
				'Textures',
				'Periphery',
				'TesseracT',
				'Animals as Leaders',
				'Vildhjarta',
				'Monuments',
				'After the Burial',
				'Born of Osiris',
				'Northlane'
			]
		},
		{
			name: 'Avant-Garde Metal',
			year: 1990,
			heaviness: 80,
			font: 'typewriter',
			description: 'Metal that breaks its own rules: theatrical, eclectic and deliberately strange.',
			bands: [
				'Celtic Frost',
				'Sigh',
				'Arcturus',
				'Ved Buens Ende',
				'Solefald',
				'Maudlin of the Well',
				'Fantômas',
				'Unexpect',
				'Diablo Swing Orchestra',
				'Igorrr'
			]
		}
	]
};
