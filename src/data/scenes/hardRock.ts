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
			],
			sources: [
				'https://www.allmusic.com/style/hard-rock-ma0000002636',
				'https://en.wikipedia.org/wiki/Hard_rock'
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
				'Bachman-Turner Overdrive',
				'George Thorogood and the Destroyers'
			],
			sources: [
				'https://www.allmusic.com/style/boogie-rock-ma0000011815',
				'https://en.wikipedia.org/wiki/Boogie_rock'
			]
		},
		{
			name: 'Aussie Pub Rock',
			year: 1971,
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
				'INXS',
				'Hunters & Collectors',
				'Jimmy Barnes',
				'Airbourne'
			],
			sources: [
				'https://www.allmusic.com/style/aussie-rock-ma0000012330',
				'https://en.wikipedia.org/wiki/Pub_rock_(Australia)'
			]
		},
		{
			name: 'Sleaze Rock',
			year: 1987,
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
			],
			sources: [
				'https://www.allmusic.com/style/hair-metal-ma0000011902',
				'https://en.wikipedia.org/wiki/Glam_metal#Second_wave_(1986%E2%80%931991)'
			]
		},
		{
			name: 'Stoner Rock',
			year: 1990,
			heaviness: 54,
			font: 'pirate',
			description:
				'Groovy, fuzzed-out, bass-heavy riffs from early-90s California, with a heavy debt to the 70s.',
			bands: [
				'Kyuss',
				'Queens of the Stone Age',
				'Fu Manchu',
				'Monster Magnet',
				'Clutch',
				'Kadavar',
				'Orange Goblin',
				'Masters of Reality',
				'Wolfmother',
				'Red Fang'
			],
			sources: [
				'https://www.allmusic.com/style/stoner-metal-ma0000011961',
				'https://en.wikipedia.org/wiki/Stoner_rock'
			]
		}
	]
};
