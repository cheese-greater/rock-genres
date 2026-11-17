import type { SceneDefinition } from '../types';

export const hardcoreEmo: SceneDefinition = {
	id: 'hardcore',
	kind: 'Rock',
	name: 'Hardcore & Emo',
	genres: [
		{
			name: 'Hardcore Punk',
			year: 1980,
			heaviness: 65,
			font: 'marker',
			description: 'Faster, harder, shorter: punk stripped down to pure aggression.',
			bands: [
				'Bad Brains',
				'Black Flag',
				'Minor Threat',
				'Dead Kennedys',
				'Circle Jerks',
				'Negative Approach',
				'Fear',
				'MDC',
				'Agnostic Front',
				'Void'
			]
		},
		{
			name: 'New York Hardcore',
			year: 1981,
			heaviness: 70,
			font: 'marker',
			description: 'Tough, groove-driven hardcore with metal crunch and crew pride.',
			bands: [
				'Agnostic Front',
				'Cro-Mags',
				"Murphy's Law",
				'Warzone',
				'Sick of It All',
				'Youth of Today',
				'Gorilla Biscuits',
				'Biohazard',
				'Madball',
				'H2O'
			]
		},
		{
			name: 'Youth Crew',
			year: 1985,
			heaviness: 66,
			font: 'marker',
			description: 'Straight-edge hardcore with X-ed hands, gang vocals and positive messages.',
			bands: [
				'Youth of Today',
				'Gorilla Biscuits',
				'Judge',
				'Bold',
				'Chain of Strength',
				'Insted',
				'Uniform Choice',
				'Side by Side',
				'Project X',
				'Champion'
			]
		},
		{
			name: 'Melodic Hardcore',
			year: 1985,
			heaviness: 58,
			font: 'marker',
			description: 'Hardcore speed with soaring melodic leads and earnest, shouted vocals.',
			bands: [
				'7 Seconds',
				'Dag Nasty',
				'Kid Dynamite',
				'Lifetime',
				'Ignite',
				'Strike Anywhere',
				'Comeback Kid',
				'Modern Life Is War',
				'Have Heart',
				'Defeater'
			]
		},
		{
			name: 'Crust Punk',
			year: 1985,
			heaviness: 76,
			font: 'pirate',
			description: 'Filthy, metallic anarcho-punk with grinding guitars and growled vocals.',
			bands: [
				'Amebix',
				'Antisect',
				'Hellbastard',
				'Doom',
				'Nausea',
				'Extreme Noise Terror',
				'Disrupt',
				'His Hero Is Gone',
				'Tragedy',
				'Wolfbrigade'
			]
		},
		{
			name: 'D-Beat',
			year: 1980,
			heaviness: 74,
			font: 'marker',
			description: 'The Discharge drumbeat: relentless, pounding and politically furious.',
			bands: [
				'Discharge',
				'Anti Cimex',
				'Mob 47',
				'Totalitär',
				'Avskum',
				'Disclose',
				'Skitsystem',
				'Wolfbrigade',
				'Driller Killer',
				'Disfear'
			]
		},
		{
			name: 'Powerviolence',
			year: 1990,
			heaviness: 93,
			font: 'marker',
			description: 'Hardcore at its most extreme: tiny songs lurching between blast beats and sludge.',
			bands: [
				'Infest',
				'Neanderthal',
				'Crossed Out',
				'No Comment',
				'Man Is the Bastard',
				'Spazz',
				'Despise You',
				'Capitalist Casualties',
				'Charles Bronson',
				'Weekend Nachos'
			]
		},
		{
			name: 'Metallic Hardcore',
			year: 1990,
			heaviness: 80,
			font: 'metal',
			description: 'Hardcore with thrash and death metal heft, built for the pit.',
			bands: [
				'Integrity',
				'Ringworm',
				'Earth Crisis',
				'Merauder',
				'Strife',
				'Disembodied',
				'Hatebreed',
				'Buried Alive',
				'Terror',
				'Knocked Loose'
			]
		},
		{
			name: 'Post-Hardcore',
			year: 1985,
			heaviness: 54,
			font: 'condensed',
			description: 'Hardcore pushed beyond its limits with dynamics, melody and experimentation.',
			bands: [
				'Hüsker Dü',
				'Rites of Spring',
				'Fugazi',
				'Jawbox',
				'Quicksand',
				'At the Drive-In',
				'Glassjaw',
				'Thursday',
				'La Dispute',
				'Touché Amoré'
			]
		},
		{
			name: 'Emo',
			year: 1985,
			heaviness: 35,
			font: 'typewriter',
			description: 'Emotional hardcore that grew into confessional, twinkling Midwest guitar rock.',
			bands: [
				'Rites of Spring',
				'Embrace',
				'Jawbreaker',
				'Sunny Day Real Estate',
				"Cap'n Jazz",
				'Mineral',
				'Braid',
				'The Promise Ring',
				'Texas Is the Reason',
				'American Football'
			]
		},
		{
			name: 'Emo Pop',
			year: 1999,
			heaviness: 30,
			font: 'typewriter',
			description: "Emo's glossier, pop-punk-leaning breakout into the mainstream.",
			bands: [
				'The Get Up Kids',
				'Jimmy Eat World',
				'Saves the Day',
				'Dashboard Confessional',
				'Taking Back Sunday',
				'Brand New',
				'The Starting Line',
				'Motion City Soundtrack',
				'My Chemical Romance',
				'Paramore'
			]
		},
		{
			name: 'Screamo',
			year: 1991,
			heaviness: 64,
			font: 'marker',
			description: 'Chaotic, cathartic emotional hardcore with throat-shredding screams.',
			bands: [
				'Heroin',
				'Antioch Arrow',
				'Swing Kids',
				'Orchid',
				'Saetia',
				'I Hate Myself',
				'Jeromes Dream',
				'pg.99',
				'City of Caterpillar',
				'Envy'
			]
		},
		{
			name: 'Emo Revival',
			year: 2009,
			heaviness: 33,
			font: 'typewriter',
			description: 'A new wave of twinkly, Midwest-style emo from basements and DIY venues.',
			bands: [
				'Algernon Cadwallader',
				'Snowing',
				'Into It. Over It.',
				'Tigers Jaw',
				'Modern Baseball',
				'The Hotelier',
				'The World Is a Beautiful Place & I Am No Longer Afraid to Die',
				'Foxing',
				'Hop Along',
				'Mom Jeans'
			]
		}
	]
};
