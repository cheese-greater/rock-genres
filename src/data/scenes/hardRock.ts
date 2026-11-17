import type { SceneDefinition } from '../types';

export const hardRock: SceneDefinition = {
	id: 'hard',
	kind: 'Rock',
	name: 'Hard Rock & Stoner',
	genres: [
		{
			name: 'Hard Rock',
			year: 1968,
			heaviness: 48,
			font: 'rocker',
			description: 'Blues-based, riff-driven rock that directly fathered heavy metal.',
			bands: [
				'Led Zeppelin',
				'Deep Purple',
				'AC/DC',
				'Aerosmith',
				'Thin Lizzy',
				'Kiss',
				'Scorpions',
				'Van Halen',
				'Whitesnake',
				"Guns N' Roses"
			]
		},
		{
			name: 'Boogie Rock',
			year: 1969,
			heaviness: 37,
			font: 'western',
			description: 'Relentless, shuffling boogie grooves played loud and long.',
			bands: [
				'Canned Heat',
				'Status Quo',
				'Foghat',
				'ZZ Top',
				'Savoy Brown',
				'Humble Pie',
				'Black Oak Arkansas',
				'George Thorogood and the Destroyers'
			]
		},
		{
			name: 'Oz Rock',
			year: 1974,
			heaviness: 46,
			font: 'rocker',
			description: "Australia's loud, beer-soaked pub rock circuit and the hard rock it bred.",
			bands: [
				'AC/DC',
				'Rose Tattoo',
				'Billy Thorpe & the Aztecs',
				'Cold Chisel',
				'The Angels',
				'Midnight Oil',
				'Jimmy Barnes',
				'The Screaming Jets',
				'Airbourne'
			]
		},
		{
			name: 'Heavy Psych',
			year: 1968,
			heaviness: 50,
			font: 'groovy',
			description: 'Fuzz-saturated, jam-heavy rock where psychedelia and proto-metal meet.',
			bands: [
				'Blue Cheer',
				'Vanilla Fudge',
				'Captain Beyond',
				'Pink Fairies',
				'Earthless',
				'Graveyard',
				'Kadavar',
				'Radio Moscow',
				'Elder',
				'All Them Witches'
			]
		},
		{
			name: 'Sleaze Rock',
			year: 1980,
			heaviness: 49,
			font: 'marker',
			description: 'Street-level, glammed-up hard rock about excess and trouble.',
			bands: [
				'Hanoi Rocks',
				"Guns N' Roses",
				'Faster Pussycat',
				'L.A. Guns',
				"The Dogs D'Amour",
				'Backyard Babies',
				'Hardcore Superstar',
				'Crashdïet',
				'Buckcherry'
			]
		},
		{
			name: 'Stoner Rock',
			year: 1990,
			heaviness: 54,
			font: 'pirate',
			description:
				'Groovy, fuzzed-out riffs born at Palm Desert generator parties, with a heavy debt to the 70s.',
			bands: [
				'Kyuss',
				'Queens of the Stone Age',
				'Fu Manchu',
				'Monster Magnet',
				'Clutch',
				'Nebula',
				'Orange Goblin',
				'Masters of Reality',
				'Wolfmother',
				'Red Fang'
			]
		}
	]
};
