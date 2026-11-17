import type { SceneDefinition } from '../types';

export const thrashGroove: SceneDefinition = {
	id: 'thrash',
	kind: 'Metal',
	name: 'Thrash & Groove',
	genres: [
		{
			name: 'Thrash Metal',
			year: 1981,
			heaviness: 76,
			font: 'metal',
			description:
				'Fast, aggressive palm-muted riffing born from metal meeting hardcore punk, from the Bay Area to the Ruhr.',
			bands: [
				'Metallica',
				'Slayer',
				'Megadeth',
				'Anthrax',
				'Exodus',
				'Testament',
				'Overkill',
				'Kreator',
				'Sodom',
				'Havok'
			],
			sources: [
				'https://www.allmusic.com/style/speed-thrash-metal-ma0000002874',
				'https://en.wikipedia.org/wiki/Thrash_metal'
			]
		},
		{
			name: 'Teutonic Thrash',
			year: 1983,
			heaviness: 79,
			font: 'metal',
			description: "Germany's rawer, more savage thrash, led by the Big Teutonic Four.",
			bands: [
				'Kreator',
				'Sodom',
				'Destruction',
				'Tankard',
				'Holy Moses',
				'Exumer',
				'Assassin',
				'Paradox',
				'Deathrow'
			],
			sources: [
				'https://www.allmusic.com/artist/destruction-mn0000201593',
				'https://en.wikipedia.org/wiki/Teutonic_thrash_metal'
			]
		},
		{
			name: 'Crossover Thrash',
			year: 1984,
			heaviness: 73,
			font: 'marker',
			description: 'Thrash metal and hardcore punk smashed together, skate decks included.',
			bands: [
				'D.R.I.',
				'Suicidal Tendencies',
				'Corrosion of Conformity',
				'S.O.D.',
				'Cryptic Slaughter',
				'Nuclear Assault',
				'Excel',
				'Municipal Waste',
				'Gama Bomb',
				'Power Trip'
			],
			sources: [
				'https://www.allmusic.com/style/punk-metal-ma0000012022',
				'https://en.wikipedia.org/wiki/Crossover_thrash'
			]
		},
		{
			name: 'Technical Thrash',
			year: 1985,
			heaviness: 75,
			font: 'space',
			description: 'Thrash with progressive structures, jazz chords and tricky time changes.',
			bands: [
				'Watchtower',
				'Voivod',
				'Coroner',
				'Mekong Delta',
				'Toxik',
				'Anacrusis',
				'Sadus',
				'Believer',
				'Annihilator',
				'Vektor'
			],
			sources: [
				'https://www.allmusic.com/artist/mn0000122138',
				'https://en.wikipedia.org/wiki/Thrash_metal#Technical_thrash_metal'
			]
		},
		{
			name: 'Groove Metal',
			year: 1990,
			heaviness: 72,
			font: 'condensed',
			description: 'Mid-tempo, syncopated, chugging riffs over thrash foundations.',
			bands: [
				'Pantera',
				'Exhorder',
				'Prong',
				'Sepultura',
				'Machine Head',
				'Lamb of God',
				'Gojira',
				'DevilDriver',
				'Chimaira',
				'Five Finger Death Punch'
			],
			sources: [
				'https://www.allmusic.com/artist/pantera-mn0000005441',
				'https://en.wikipedia.org/wiki/Groove_metal'
			]
		},
		{
			name: 'Southern Metal',
			year: 1990,
			heaviness: 68,
			font: 'western',
			description: 'Sludgy groove metal soaked in Southern rock swagger and whiskey.',
			bands: [
				'Down',
				'Corrosion of Conformity',
				'Pride & Glory',
				'Black Label Society',
				'Alabama Thunderpussy',
				'Sixty Watt Shaman',
				'Maylene and the Sons of Disaster',
				'Texas Hippie Coalition'
			],
			sources: [
				'https://www.allmusic.com/artist/corrosion-of-conformity-mn0000105422',
				'https://en.wikipedia.org/wiki/Southern_rock#Southern_metal'
			]
		}
	]
};
