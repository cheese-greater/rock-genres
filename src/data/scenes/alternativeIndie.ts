import type { SceneDefinition } from '../types';

export const alternativeIndie: SceneDefinition = {
	id: 'alternative',
	kind: 'Rock',
	name: 'Alternative & Indie',
	genres: [
		{
			name: 'Alternative Rock',
			year: 1981,
			heaviness: 31,
			font: 'condensed',
			description:
				'The umbrella for 80s and 90s rock that grew up outside the mainstream, starting on college radio.',
			bands: [
				'R.E.M.',
				'Pixies',
				"Jane's Addiction",
				'The Smashing Pumpkins',
				'Radiohead',
				'The Replacements',
				'Beck',
				'The Cranberries',
				'Garbage',
				'Muse'
			],
			sources: [
				'https://www.allmusic.com/style/alternative-pop-rock-ma0000002422',
				'https://en.wikipedia.org/wiki/Alternative_rock'
			]
		},
		{
			name: 'Jangle Pop',
			year: 1982,
			heaviness: 7,
			font: 'script',
			description: 'Bright, chiming Rickenbacker guitars and wistful melodies.',
			bands: [
				'R.E.M.',
				'The Smiths',
				'The Go-Betweens',
				'The Church',
				'Felt',
				'Orange Juice',
				'The Feelies',
				"The dB's",
				"The La's",
				'The Bangles'
			],
			sources: [
				'https://www.allmusic.com/style/jangle-pop-ma0000012349',
				'https://en.wikipedia.org/wiki/Jangle_pop'
			]
		},
		{
			name: 'Indie Rock',
			year: 1985,
			heaviness: 23,
			font: 'typewriter',
			description: 'Independent-label guitar rock, from DIY 80s roots to 2000s blog bands.',
			bands: [
				'Pavement',
				'Built to Spill',
				'Modest Mouse',
				'Dinosaur Jr.',
				'Yo La Tengo',
				'Superchunk',
				'Spoon',
				'Death Cab for Cutie',
				'The Shins',
				'Arcade Fire'
			],
			sources: [
				'https://www.allmusic.com/style/indie-rock-ma0000004453',
				'https://en.wikipedia.org/wiki/Indie_rock'
			]
		},
		{
			name: 'Lo-Fi',
			year: 1985,
			heaviness: 16,
			font: 'typewriter',
			description: 'Home-recorded, tape-hiss intimacy that wears its rough edges proudly.',
			bands: [
				'R. Stevie Moore',
				'Daniel Johnston',
				'Beat Happening',
				'Sebadoh',
				'Guided by Voices',
				'Pavement',
				'Liz Phair',
				'The Mountain Goats',
				'Neutral Milk Hotel',
				'Car Seat Headrest'
			],
			sources: ['https://www.allmusic.com/style/lo-fi-ma0000002701', 'https://en.wikipedia.org/wiki/Lo-fi_music']
		},
		{
			name: 'Slowcore',
			year: 1990,
			heaviness: 5,
			font: 'typewriter',
			description: 'Hushed, glacial tempos and sparse, melancholy arrangements.',
			bands: [
				'Galaxie 500',
				'Low',
				'Red House Painters',
				'Codeine',
				'American Music Club',
				'Bedhead',
				'Idaho',
				'Spain',
				'Duster',
				"Carissa's Wierd"
			],
			sources: ['https://www.allmusic.com/style/slowcore-ma0000012160', 'https://en.wikipedia.org/wiki/Slowcore']
		},
		{
			name: 'Noise Rock',
			year: 1983,
			heaviness: 57,
			font: 'typewriter',
			description: 'Abrasive, dissonant guitar rock that treats noise as a feature.',
			bands: [
				'Sonic Youth',
				'Swans',
				'Big Black',
				'Butthole Surfers',
				'Scratch Acid',
				'The Jesus Lizard',
				'Shellac',
				'Unsane',
				'Lightning Bolt',
				'Daughters'
			],
			sources: [
				'https://www.allmusic.com/style/noise-rock-ma0000004455',
				'https://en.wikipedia.org/wiki/Noise_rock'
			]
		},
		{
			name: 'Dream Pop',
			year: 1983,
			heaviness: 4,
			font: 'script',
			description: 'Ethereal, reverb-soaked melodies and hazy, half-heard vocals.',
			bands: [
				'Cocteau Twins',
				'This Mortal Coil',
				'A.R. Kane',
				'Julee Cruise',
				'Galaxie 500',
				'Mazzy Star',
				'The Sundays',
				'Beach House',
				'Wild Nothing',
				'Cigarettes After Sex'
			],
			sources: [
				'https://www.allmusic.com/style/dream-pop-ma0000012303',
				'https://en.wikipedia.org/wiki/Dream_pop'
			]
		},
		{
			name: 'Shoegaze',
			year: 1988,
			heaviness: 28,
			font: 'typewriter',
			description:
				'Walls of effects-pedal guitar noise and buried pop melodies, with vocals melted into the mix.',
			bands: [
				'My Bloody Valentine',
				'Slowdive',
				'Ride',
				'Lush',
				'The Jesus and Mary Chain',
				'Swervedriver',
				'Pale Saints',
				'Catherine Wheel',
				'Medicine',
				'Nothing'
			],
			sources: ['https://www.allmusic.com/style/shoegaze-ma0000004454', 'https://en.wikipedia.org/wiki/Shoegaze']
		},
		{
			name: 'Grunge',
			year: 1986,
			heaviness: 50,
			font: 'condensed',
			description: 'Murky, distorted Seattle rock mixing punk energy with metal weight.',
			bands: [
				'Nirvana',
				'Pearl Jam',
				'Soundgarden',
				'Alice in Chains',
				'Stone Temple Pilots',
				'Mudhoney',
				'Screaming Trees',
				'Green River',
				'Mother Love Bone',
				'Temple of the Dog'
			],
			sources: ['https://www.allmusic.com/style/grunge-ma0000002626', 'https://en.wikipedia.org/wiki/Grunge']
		},
		{
			name: 'Madchester',
			year: 1988,
			heaviness: 18,
			font: 'groovy',
			description: "Manchester's baggy fusion of indie guitars, acid house beats and rave culture.",
			bands: [
				'The Stone Roses',
				'Happy Mondays',
				'Inspiral Carpets',
				'The Charlatans',
				'James',
				'808 State',
				'Northside',
				'The Farm',
				'Paris Angels',
				'Primal Scream'
			],
			sources: [
				'https://www.allmusic.com/style/madchester-ma0000005017',
				'https://en.wikipedia.org/wiki/Madchester'
			]
		},
		{
			name: 'Britpop',
			year: 1993,
			heaviness: 14,
			font: 'condensed',
			description: 'Mid-90s British guitar bands drawing on 60s pop and Cool Britannia swagger.',
			bands: [
				'Oasis',
				'Blur',
				'Pulp',
				'Suede',
				'Elastica',
				'Supergrass',
				'The Verve',
				'Ocean Colour Scene',
				'Cast',
				'Sleeper'
			],
			sources: ['https://www.allmusic.com/style/britpop-ma0000002480', 'https://en.wikipedia.org/wiki/Britpop']
		},
		{
			name: 'Post-Grunge',
			year: 1994,
			heaviness: 39,
			font: 'condensed',
			description: 'Radio-friendly, polished descendants of grunge that ruled late-90s rock radio.',
			bands: [
				'Bush',
				'Foo Fighters',
				'Silverchair',
				'Collective Soul',
				'Candlebox',
				'Creed',
				'3 Doors Down',
				'Nickelback',
				'Puddle of Mudd',
				'Seether'
			],
			sources: [
				'https://www.allmusic.com/style/post-grunge-ma0000005020',
				'https://en.wikipedia.org/wiki/Post-grunge'
			]
		},
		{
			name: 'Post-Britpop',
			year: 1997,
			heaviness: 8,
			font: 'condensed',
			description: 'Earnest, anthemic and melancholy British guitar rock after the Britpop peak.',
			bands: [
				'Travis',
				'Stereophonics',
				'Coldplay',
				'Doves',
				'Elbow',
				'Starsailor',
				'Embrace',
				'Snow Patrol',
				'Keane',
				'Athlete'
			],
			sources: ['https://en.wikipedia.org/wiki/Post-Britpop']
		},
		{
			name: 'Post-Punk Revival',
			year: 2001,
			heaviness: 26,
			font: 'typewriter',
			description: '2000s return of wiry, angular guitars and disco-punk beats.',
			bands: [
				'The Strokes',
				'Interpol',
				'Yeah Yeah Yeahs',
				'The Rapture',
				'Franz Ferdinand',
				'Bloc Party',
				'The Killers',
				'Editors',
				'Arctic Monkeys',
				'Hot Hot Heat'
			],
			sources: [
				'https://www.allmusic.com/style/new-wave-post-punk-revival-ma0000012020',
				'https://en.wikipedia.org/wiki/Post-punk_revival'
			]
		},
		{
			name: 'Garage Rock Revival',
			year: 2000,
			heaviness: 36,
			font: 'marker',
			description: 'Back-to-basics, blown-out garage rock for a new millennium.',
			bands: [
				'The White Stripes',
				'The Strokes',
				'The Hives',
				'The Vines',
				'The Libertines',
				'The Black Keys',
				'Jet',
				'The Von Bondies',
				'Ty Segall',
				'Thee Oh Sees'
			],
			sources: [
				'https://www.allmusic.com/style/garage-rock-revival-ma0000012343',
				'https://en.wikipedia.org/wiki/Garage_rock#2000s_garage_rock_revival'
			]
		},
		{
			name: 'Indie Pop',
			year: 1979,
			heaviness: 9,
			font: 'marker',
			description:
				'Sweet, jangly, homemade guitar pop from the DIY fanzine underground, from C86 and twee to chamber-pop flourishes.',
			bands: [
				'Television Personalities',
				'The Pastels',
				'Talulah Gosh',
				'The Vaselines',
				'Beat Happening',
				'The Field Mice',
				'Heavenly',
				'Belle and Sebastian',
				'The Magnetic Fields',
				'The Pains of Being Pure at Heart'
			],
			sources: [
				'https://www.allmusic.com/style/indie-pop-ma0000004494',
				'https://en.wikipedia.org/wiki/Indie_pop'
			]
		}
	]
};
