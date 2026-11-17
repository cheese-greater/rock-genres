import type { SceneDefinition } from '../types';

export const psychProg: SceneDefinition = {
	id: 'psych',
	kind: 'Rock',
	name: 'Psychedelic & Progressive',
	genres: [
		{
			name: 'Psychedelic Rock',
			year: 1966,
			heaviness: 22,
			font: 'groovy',
			description: 'Mind-expanding studio experiments, fuzz, feedback and Eastern drones.',
			bands: [
				'The Jimi Hendrix Experience',
				'Jefferson Airplane',
				'The Doors',
				'Pink Floyd',
				'The 13th Floor Elevators',
				'Love',
				'Grateful Dead',
				'Cream',
				'The Electric Prunes',
				'Os Mutantes'
			]
		},
		{
			name: 'Acid Rock',
			year: 1966,
			heaviness: 34,
			font: 'groovy',
			description: "Psychedelia's louder, heavier strain, built on long distorted jams.",
			bands: [
				'Blue Cheer',
				'Iron Butterfly',
				'Quicksilver Messenger Service',
				'Vanilla Fudge',
				'Steppenwolf',
				'Big Brother and the Holding Company',
				'Country Joe and the Fish',
				'The Amboy Dukes',
				'Spirit'
			]
		},
		{
			name: 'Space Rock',
			year: 1969,
			heaviness: 30,
			font: 'space',
			description: 'Cosmic, hypnotic jams with synth swooshes and science-fiction themes.',
			bands: [
				'Hawkwind',
				'Pink Floyd',
				'Gong',
				'Amon Düül II',
				'Ozric Tentacles',
				'Spacemen 3',
				'Spiritualized',
				'Monster Magnet',
				'Failure'
			]
		},
		{
			name: 'Krautrock',
			year: 1968,
			heaviness: 21,
			font: 'space',
			description: 'West German experiments in motorik grooves, electronics and repetition.',
			bands: [
				'Can',
				'Neu!',
				'Kraftwerk',
				'Faust',
				'Amon Düül II',
				'Tangerine Dream',
				'Ash Ra Tempel',
				'Cluster',
				'Harmonia',
				'La Düsseldorf'
			]
		},
		{
			name: 'Progressive Rock',
			year: 1968,
			heaviness: 25,
			font: 'condensed',
			description: 'Long-form suites, classical ambition and virtuosic instrumental passages.',
			bands: [
				'King Crimson',
				'Yes',
				'Genesis',
				'Pink Floyd',
				'Emerson, Lake & Palmer',
				'Jethro Tull',
				'Rush',
				'Van der Graaf Generator',
				'Gentle Giant',
				'Camel'
			]
		},
		{
			name: 'Symphonic Rock',
			year: 1967,
			heaviness: 18,
			font: 'rocker',
			description: 'Rock bands working with orchestras, Mellotron and classical themes.',
			bands: [
				'The Moody Blues',
				'Procol Harum',
				'The Nice',
				'Electric Light Orchestra',
				'Renaissance',
				'Barclay James Harvest',
				'Emerson, Lake & Palmer',
				'Kansas',
				'Premiata Forneria Marconi',
				'The Enid'
			]
		},
		{
			name: 'Art Rock',
			year: 1967,
			heaviness: 19,
			font: 'typewriter',
			description: 'Rock as a vehicle for avant-garde ideas, concepts and literary lyrics.',
			bands: [
				'The Velvet Underground',
				'David Bowie',
				'Roxy Music',
				'Brian Eno',
				'Sparks',
				'Kate Bush',
				'Peter Gabriel',
				'Talking Heads',
				'Frank Zappa',
				'Radiohead'
			]
		},
		{
			name: 'Canterbury Scene',
			year: 1966,
			heaviness: 15,
			font: 'typewriter',
			description: 'Whimsical, jazz-inflected English prog with a very British sense of humor.',
			bands: [
				'Soft Machine',
				'Caravan',
				'Gong',
				'Kevin Ayers',
				'Egg',
				'Matching Mole',
				'Robert Wyatt',
				'Hatfield and the North',
				'National Health',
				'Gilgamesh'
			]
		},
		{
			name: 'Jazz Rock',
			year: 1969,
			heaviness: 20,
			font: 'condensed',
			description: 'Rock power meets jazz harmony, horn sections and improvisation.',
			bands: [
				'Mahavishnu Orchestra',
				'Weather Report',
				'Return to Forever',
				'Chicago',
				'Blood, Sweat & Tears',
				'Colosseum',
				'Soft Machine',
				'Steely Dan',
				'Frank Zappa',
				'Brand X'
			]
		},
		{
			name: 'Zeuhl',
			year: 1970,
			heaviness: 36,
			font: 'space',
			description: "Magma's own invented style: martial, choral and sung in a constructed language.",
			bands: ['Magma', 'Weidorje', 'Eskaton', 'Zao', 'Dün', 'Shub-Niggurath', 'Rhùn', 'Koenjihyakkei', 'Ruins']
		},
		{
			name: 'Avant-Prog',
			year: 1978,
			heaviness: 33,
			font: 'typewriter',
			description: 'Uncompromising, chamber-influenced experimental rock from the Rock in Opposition movement.',
			bands: [
				'Henry Cow',
				'Univers Zéro',
				'Art Zoyd',
				'Stormy Six',
				'Samla Mammas Manna',
				'Etron Fou Leloublan',
				'Art Bears',
				'Thinking Plague',
				'Present',
				'Miriodor'
			]
		},
		{
			name: 'Neo-Prog',
			year: 1980,
			heaviness: 22,
			font: 'condensed',
			description: '80s revival of melodic, keyboard-rich progressive rock.',
			bands: ['Marillion', 'IQ', 'Pendragon', 'Pallas', 'Twelfth Night', 'Arena', 'Galahad', 'Jadis']
		},
		{
			name: 'Neo-Psychedelia',
			year: 1980,
			heaviness: 17,
			font: 'groovy',
			description: "Later generations reviving 60s psychedelia's textures and studio tricks.",
			bands: [
				'The Teardrop Explodes',
				'Julian Cope',
				'The Flaming Lips',
				'Mercury Rev',
				'The Brian Jonestown Massacre',
				'The Olivia Tremor Control',
				'The Black Angels',
				'Tame Impala',
				'MGMT',
				'Temples'
			]
		},
		{
			name: 'Experimental Rock',
			year: 1966,
			heaviness: 38,
			font: 'typewriter',
			description: 'Rock pulled apart: found sound, noise, odd structures and anything else.',
			bands: [
				'The Velvet Underground',
				'Captain Beefheart',
				'Frank Zappa',
				'Can',
				'The Residents',
				'Pere Ubu',
				'This Heat',
				'Swans',
				'Sonic Youth',
				'Scott Walker'
			]
		},
		{
			name: 'Post-Rock',
			year: 1991,
			heaviness: 27,
			font: 'condensed',
			description: 'Rock instruments used for texture and dynamics instead of riffs and choruses.',
			bands: [
				'Talk Talk',
				'Slint',
				'Tortoise',
				'Godspeed You! Black Emperor',
				'Mogwai',
				'Sigur Rós',
				'Explosions in the Sky',
				'Do Make Say Think',
				'Mono',
				'This Will Destroy You'
			]
		},
		{
			name: 'Math Rock',
			year: 1989,
			heaviness: 31,
			font: 'condensed',
			description: 'Angular, rhythmically complex guitar music full of odd meters and finger tapping.',
			bands: [
				'Don Caballero',
				'Polvo',
				'June of 44',
				'Hella',
				'Faraquet',
				'Battles',
				'toe',
				'Tera Melos',
				'Chon',
				'Covet'
			]
		}
	]
};
