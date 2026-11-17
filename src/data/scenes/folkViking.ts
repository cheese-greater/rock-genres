import type { SceneDefinition } from '../types';

export const folkSymphonic: SceneDefinition = {
	id: 'folk',
	kind: 'Metal',
	name: 'Folk, Viking & Symphonic',
	genres: [
		{
			name: 'Symphonic Metal',
			year: 1995,
			heaviness: 55,
			font: 'rocker',
			description: 'Orchestral arrangements and choirs layered over metal.',
			bands: [
				'Nightwish',
				'Epica',
				'Within Temptation',
				'Therion',
				'Rhapsody of Fire',
				'After Forever',
				'Delain',
				'Xandria',
				'Haggard',
				"Leaves' Eyes"
			],
			sources: [
				'https://www.allmusic.com/style/symphonic-metal-ma0000013526',
				'https://en.wikipedia.org/wiki/Symphonic_metal'
			]
		},
		{
			name: 'Folk Metal',
			year: 1990,
			heaviness: 62,
			font: 'blackletter',
			description: 'Metal played with fiddles, bagpipes, accordions and traditional melodies.',
			bands: [
				'Skyclad',
				'Cruachan',
				'Finntroll',
				'Korpiklaani',
				'Ensiferum',
				'Eluveitie',
				'Turisas',
				'Equilibrium',
				'Orphaned Land',
				'The Hu'
			],
			sources: [
				'https://www.allmusic.com/style/folk-metal-ma0000013581',
				'https://en.wikipedia.org/wiki/Folk_metal'
			]
		},
		{
			name: 'Viking Metal',
			year: 1988,
			heaviness: 76,
			font: 'blackletter',
			description: 'Epic, Norse-themed metal of longships, battle and Valhalla.',
			bands: [
				'Bathory',
				'Enslaved',
				'Einherjer',
				'Falkenbach',
				'Windir',
				'Moonsorrow',
				'Thyrfing',
				'Amon Amarth',
				'Månegarm',
				'Týr'
			],
			sources: [
				'https://www.allmusic.com/style/scandinavian-metal-ma0000012324',
				'https://en.wikipedia.org/wiki/Viking_metal'
			]
		},
		{
			name: 'Pagan Metal',
			year: 1994,
			heaviness: 74,
			font: 'blackletter',
			description: 'Pre-Christian heritage and nature worship rendered in folk-tinged black metal.',
			bands: [
				'Primordial',
				'Kampfar',
				'Moonsorrow',
				'Negură Bunget',
				'Menhir',
				'In the Woods...',
				'Heidevolk',
				'Skyclad',
				'Arkona',
				'Skyforger'
			],
			sources: ['https://en.wikipedia.org/wiki/Pagan_metal']
		},
		{
			name: 'Celtic Metal',
			year: 1992,
			heaviness: 63,
			font: 'pirate',
			description: 'Irish, Scottish and Gaulish folk melodies and instruments woven into metal.',
			bands: [
				'Cruachan',
				'Waylander',
				'Primordial',
				'Mael Mórdha',
				'Geasa',
				'Suidakra',
				'Eluveitie',
				'Darkest Era',
				'Mägo de Oz',
				'Skiltron'
			],
			sources: [
				'https://www.allmusic.com/artist/darkest-era-mn0002615588',
				'https://en.wikipedia.org/wiki/Celtic_metal'
			]
		},
		{
			name: 'Pirate Metal',
			year: 1987,
			heaviness: 60,
			font: 'pirate',
			description:
				'Shanty choruses, accordion jigs and rum-soaked swashbuckling lyrics over power, folk or thrash metal.',
			bands: ['Running Wild', 'Alestorm', 'Swashbuckle', 'Lagerstein', 'Red Rum', 'Storm Seeker', 'Rumahoy'],
			sources: [
				'https://www.allmusic.com/artist/running-wild-mn0000302026',
				'https://en.wikipedia.org/wiki/Pirate_metal'
			]
		},
		{
			name: 'Medieval Metal',
			year: 1995,
			heaviness: 50,
			font: 'blackletter',
			description: 'Mostly German metal where bagpipes, hurdy-gurdies and shawms meet distorted guitars.',
			bands: [
				'In Extremo',
				'Subway to Sally',
				'Tanzwut',
				'Schandmaul',
				'Saltatio Mortis',
				'Letzte Instanz',
				'Feuerschwanz',
				'Folkstone'
			],
			sources: [
				'https://www.allmusic.com/artist/saltatio-mortis-mn0000298456',
				'https://en.wikipedia.org/wiki/Medieval_metal'
			]
		}
	]
};
