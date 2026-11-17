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
			]
		},
		{
			name: 'Folk Metal',
			year: 1990,
			heaviness: 62,
			font: 'blackletter',
			description:
				'Metal played with fiddles, bagpipes, hurdy-gurdies and traditional melodies, Celtic and medieval alike.',
			bands: [
				'Skyclad',
				'Cruachan',
				'Finntroll',
				'Korpiklaani',
				'Ensiferum',
				'Eluveitie',
				'Turisas',
				'Equilibrium',
				'In Extremo',
				'The Hu'
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
				'Helheim',
				'Heidevolk',
				'Svartsot',
				'Arkona',
				'Skyforger'
			]
		},
		{
			name: 'Pirate Metal',
			year: 2006,
			heaviness: 60,
			font: 'pirate',
			description: 'Shanty choruses, accordion jigs and swashbuckling, rum-soaked power metal.',
			bands: ['Running Wild', 'Alestorm', 'Swashbuckle', 'Lagerstein', 'Red Rum', 'Storm Seeker', 'Rumahoy']
		},
		{
			name: 'Oriental Metal',
			year: 1991,
			heaviness: 71,
			font: 'pirate',
			description: 'Middle Eastern scales, instruments and melodies fused with metal.',
			bands: ['Orphaned Land', 'Melechesh', 'Nile', 'Arallu', 'Al-Namrood', 'Acrassicauda', 'Myrath', 'Amaseffer']
		}
	]
};
