import type { SceneDefinition } from '../types';

export const metalcore: SceneDefinition = {
	id: 'core',
	kind: 'Metal',
	name: 'Metalcore & Deathcore',
	genres: [
		{
			name: 'Metalcore',
			year: 1990,
			heaviness: 76,
			font: 'metal',
			description: 'Metal riffs, hardcore breakdowns and screamed-to-clean vocals.',
			bands: [
				'Converge',
				'Killswitch Engage',
				'Integrity',
				'Trivium',
				'Underoath',
				'Bullet for My Valentine',
				'August Burns Red',
				'Parkway Drive',
				'Bring Me the Horizon',
				'Architects'
			],
			sources: [
				'https://www.allmusic.com/style/metalcore-ma0000013405',
				'https://en.wikipedia.org/wiki/Metalcore'
			]
		},
		{
			name: 'Melodic Metalcore',
			year: 1997,
			heaviness: 71,
			font: 'metal',
			description: 'Gothenburg-style harmonized leads and soaring clean choruses over breakdowns.',
			bands: [
				'Darkest Hour',
				'Heaven Shall Burn',
				'Caliban',
				'Unearth',
				'Killswitch Engage',
				'All That Remains',
				'Atreyu',
				'Avenged Sevenfold',
				'As I Lay Dying',
				'Shadows Fall'
			],
			sources: [
				'https://www.allmusic.com/style/metalcore-ma0000013405',
				'https://en.wikipedia.org/wiki/Melodic_metalcore'
			]
		},
		{
			name: 'Mathcore',
			year: 1995,
			heaviness: 89,
			font: 'typewriter',
			description: 'Chaotic, dissonant hardcore of stop-start rhythms and jagged time signatures.',
			bands: [
				'Deadguy',
				'Coalesce',
				'Botch',
				'Converge',
				'The Dillinger Escape Plan',
				'Norma Jean',
				'The Chariot',
				'Psyopus',
				'Car Bomb',
				'Frontierer'
			],
			sources: ['https://www.allmusic.com/style/math-rock-ma0000012250', 'https://en.wikipedia.org/wiki/Mathcore']
		},
		{
			name: 'Progressive Metalcore',
			year: 2004,
			heaviness: 75,
			font: 'condensed',
			description: 'Metalcore with djent rhythms, ambient textures and progressive song structures.',
			bands: [
				'After the Burial',
				'Veil of Maya',
				'Erra',
				'Northlane',
				'Architects',
				'Invent Animate',
				'Polaris',
				'Currents',
				'Silent Planet',
				'Make Them Suffer'
			],
			sources: [
				'https://www.allmusic.com/artist/mn0003174419',
				'https://en.wikipedia.org/wiki/Progressive_metalcore'
			]
		},
		{
			name: 'Electronicore',
			year: 2003,
			heaviness: 64,
			font: 'neon',
			description: 'Metalcore laced with trance synths, EDM drops and Auto-Tuned choruses.',
			bands: [
				'Enter Shikari',
				'Sky Eats Airplane',
				'Attack Attack!',
				'I See Stars',
				'Asking Alexandria',
				'Abandon All Ships',
				'Crossfaith',
				'Electric Callboy',
				'Palisades',
				'Crown the Empire'
			],
			sources: [
				'https://www.allmusic.com/style/electronicore-ma0000013527',
				'https://en.wikipedia.org/wiki/Electronicore'
			]
		},
		{
			name: 'Deathcore',
			year: 2003,
			heaviness: 92,
			font: 'pirate',
			description: 'Death metal blasts and guttural lows over metalcore breakdowns.',
			bands: [
				'Despised Icon',
				'Job for a Cowboy',
				'Suicide Silence',
				'Whitechapel',
				'Carnifex',
				'Thy Art Is Murder',
				'Chelsea Grin',
				'Fit for an Autopsy',
				'Shadow of Intent',
				'Lorna Shore'
			],
			sources: [
				'https://www.allmusic.com/style/deathcore-ma0000013528',
				'https://en.wikipedia.org/wiki/Deathcore'
			]
		}
	]
};
