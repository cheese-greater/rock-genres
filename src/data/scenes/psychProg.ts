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
			description: 'Mind-expanding studio experiments, fuzz, feedback, Eastern drones and long acid-rock jams.',
			bands: [
				'The Jimi Hendrix Experience',
				'Jefferson Airplane',
				'The Doors',
				'Pink Floyd',
				'The 13th Floor Elevators',
				'Love',
				'Grateful Dead',
				'Cream',
				'Big Brother and the Holding Company',
				'Os Mutantes'
			],
			sources: [
				'https://www.allmusic.com/style/psychedelic-garage-ma0000002800',
				'https://en.wikipedia.org/wiki/Psychedelic_rock'
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
				'Spirit',
				'The Electric Prunes'
			],
			sources: [
				'https://www.allmusic.com/style/acid-rock-ma0000012327',
				'https://en.wikipedia.org/wiki/Acid_rock'
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
				'Flying Saucer Attack',
				'Monster Magnet',
				'Failure'
			],
			sources: [
				'https://www.allmusic.com/style/space-rock-ma0000012255',
				'https://en.wikipedia.org/wiki/Space_rock'
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
				'Popol Vuh'
			],
			sources: [
				'https://www.allmusic.com/style/kraut-rock-ma0000002687',
				'https://en.wikipedia.org/wiki/Krautrock'
			]
		},
		{
			name: 'Progressive Rock',
			year: 1967,
			heaviness: 25,
			font: 'condensed',
			description:
				'Long-form suites, classical ambition and virtuosic playing, from the late-60s symphonic pioneers to the 70s giants.',
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
				'The Moody Blues'
			],
			sources: [
				'https://www.allmusic.com/style/prog-rock-ma0000002798',
				'https://en.wikipedia.org/wiki/Progressive_rock'
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
				'Electric Light Orchestra',
				'Frank Zappa',
				'Radiohead'
			],
			sources: ['https://www.allmusic.com/style/art-rock-ma0000002431', 'https://en.wikipedia.org/wiki/Art_rock']
		},
		{
			name: 'Canterbury Scene',
			year: 1968,
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
			],
			sources: [
				'https://www.allmusic.com/style/canterbury-scene-ma0000012298',
				'https://en.wikipedia.org/wiki/Canterbury_scene'
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
			],
			sources: [
				'https://www.allmusic.com/style/jazz-rock-ma0000012014',
				'https://en.wikipedia.org/wiki/Jazz_fusion#Jazz_rock'
			]
		},
		{
			name: 'Avant-Prog',
			year: 1973,
			heaviness: 33,
			font: 'typewriter',
			description:
				"Uncompromising, chamber-influenced experimental rock, from Magma's Zeuhl to the Rock in Opposition movement.",
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
				'Magma'
			],
			sources: [
				'https://www.allmusic.com/style/avant-prog-ma0000011969',
				'https://en.wikipedia.org/wiki/Progressive_rock#Avant-prog'
			]
		},
		{
			name: 'Neo-Prog',
			year: 1981,
			heaviness: 22,
			font: 'condensed',
			description: '80s revival of melodic, keyboard-rich progressive rock.',
			bands: [
				'Marillion',
				'IQ',
				'Pendragon',
				'Pallas',
				'Twelfth Night',
				'Fish',
				'Saga',
				'Arena',
				'Galahad',
				'Jadis'
			],
			sources: ['https://www.allmusic.com/style/neo-prog-ma0000012218', 'https://en.wikipedia.org/wiki/Neo-prog']
		},
		{
			name: 'Neo-Psychedelia',
			year: 1978,
			heaviness: 17,
			font: 'groovy',
			description: "Later generations reviving 60s psychedelia's textures and studio tricks.",
			bands: [
				'The Teardrop Explodes',
				'Echo & the Bunnymen',
				'The Flaming Lips',
				'Mercury Rev',
				'The Brian Jonestown Massacre',
				'The Olivia Tremor Control',
				'The Black Angels',
				'Tame Impala',
				'MGMT',
				'Temples'
			],
			sources: [
				'https://www.allmusic.com/style/neo-psychedelia-ma0000012252',
				'https://en.wikipedia.org/wiki/Neo-psychedelia'
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
				'Red Krayola',
				'Sonic Youth',
				'Scott Walker'
			],
			sources: [
				'https://www.allmusic.com/style/experimental-rock-ma0000002583',
				'https://en.wikipedia.org/wiki/Experimental_rock'
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
				'Bark Psychosis',
				'Tortoise',
				'Godspeed You! Black Emperor',
				'Mogwai',
				'Sigur Rós',
				'Explosions in the Sky',
				'Mono',
				'This Will Destroy You'
			],
			sources: [
				'https://www.allmusic.com/style/post-rock-ma0000002790',
				'https://en.wikipedia.org/wiki/Post-rock'
			]
		},
		{
			name: 'Math Rock',
			year: 1989,
			heaviness: 31,
			font: 'condensed',
			description: 'Angular, rhythmically complex guitar music full of odd meters and finger tapping.',
			bands: [
				'Slint',
				'Don Caballero',
				'Polvo',
				'June of 44',
				'Hella',
				'Faraquet',
				'Battles',
				'toe',
				'Chon',
				'Covet'
			],
			sources: [
				'https://www.allmusic.com/style/math-rock-ma0000012250',
				'https://en.wikipedia.org/wiki/Math_rock'
			]
		}
	]
};
