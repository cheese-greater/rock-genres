import type { SceneDefinition } from '../types';

export const metalcore: SceneDefinition = {
	id: 'core',
	kind: 'Metal',
	name: 'Metalcore & Deathcore',
	genres: [
		{
			name: 'Metalcore',
			year: 1995,
			heaviness: 76,
			font: 'metal',
			description: 'Metal riffs, hardcore breakdowns and screamed-to-clean vocals.',
			bands: [
				'Converge',
				'Killswitch Engage',
				'Shadows Fall',
				'Trivium',
				'Underoath',
				'Bullet for My Valentine',
				'August Burns Red',
				'Parkway Drive',
				'Bring Me the Horizon',
				'Architects'
			]
		},
		{
			name: 'Melodic Metalcore',
			year: 2002,
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
				'Miss May I',
				'Wage War'
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
			]
		},
		{
			name: 'Electronicore',
			year: 2007,
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
				'Issues',
				'Palisades'
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
			]
		}
	]
};
