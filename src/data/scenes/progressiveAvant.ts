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
			],
			sources: [
				'https://www.allmusic.com/style/progressive-metal-ma0000002797',
				'https://en.wikipedia.org/wiki/Progressive_metal'
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
				'Volumes'
			],
			sources: ['https://www.allmusic.com/artist/periphery-mn0002681783', 'https://en.wikipedia.org/wiki/Djent']
		},
		{
			name: 'Avant-Garde Metal',
			year: 1987,
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
				'Blut Aus Nord',
				'Diablo Swing Orchestra',
				'Igorrr'
			],
			sources: [
				'https://www.allmusic.com/style/avant-garde-metal-ma0000013583',
				'https://en.wikipedia.org/wiki/Avant-garde_metal'
			]
		}
	]
};
