import type { SceneDefinition } from '../types';

export const alternativeIndie: SceneDefinition = {
	id: 'alternative',
	kind: 'Rock',
	name: 'Alternative & Indie',
	genres: [
		{
			name: 'Alternative Rock',
			year: 1984,
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
				'The Mountain Goats',
				'Neutral Milk Hotel',
				'Car Seat Headrest'
			]
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
				'Duster',
				"Carissa's Wierd"
			]
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
				'Julee Cruise',
				'Galaxie 500',
				'Mazzy Star',
				'The Sundays',
				'Lush',
				'Beach House',
				'Wild Nothing',
				'Cigarettes After Sex'
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
			]
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
			]
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
				'Northside',
				'The Farm',
				'Paris Angels',
				'The High',
				'Primal Scream'
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
			]
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
				'The Hives',
				'The Vines',
				'The Libertines',
				'The Black Keys',
				'Jet',
				'The Datsuns',
				'The Von Bondies',
				'Ty Segall',
				'Thee Oh Sees'
			]
		}
	]
};
