import type { SceneDefinition } from '../types';

export const punk: SceneDefinition = {
	id: 'punk',
	kind: 'Rock',
	name: 'Punk',
	genres: [
		{
			name: 'Proto-Punk',
			year: 1967,
			heaviness: 40,
			font: 'marker',
			description: 'Raw, nihilistic garage rock that anticipated punk by a decade.',
			bands: [
				'The Velvet Underground',
				'The Stooges',
				'MC5',
				'The Sonics',
				'New York Dolls',
				'The Modern Lovers',
				'Suicide',
				'Rocket from the Tombs',
				'Patti Smith'
			]
		},
		{
			name: 'Punk Rock',
			year: 1976,
			heaviness: 50,
			font: 'marker',
			description: 'Short, fast, loud and anti-establishment: three chords and the truth.',
			bands: [
				'Ramones',
				'Sex Pistols',
				'The Clash',
				'The Damned',
				'Buzzcocks',
				'Television',
				'The Saints',
				'Dead Boys',
				'X',
				'Stiff Little Fingers'
			]
		},
		{
			name: 'Pop Punk',
			year: 1977,
			heaviness: 36,
			font: 'marker',
			description: 'Punk speed with bubblegum hooks and lovesick, snotty lyrics.',
			bands: [
				'Buzzcocks',
				'The Undertones',
				'Descendents',
				'Screeching Weasel',
				'Green Day',
				'Blink-182',
				'Sum 41',
				'New Found Glory',
				'Fall Out Boy',
				'The Wonder Years'
			]
		},
		{
			name: 'Skate Punk',
			year: 1983,
			heaviness: 52,
			font: 'marker',
			description: 'Fast, melodic punk with double-time drums and tight harmonies, made for skateparks.',
			bands: [
				'JFA',
				'Suicidal Tendencies',
				'Bad Religion',
				'NOFX',
				'Pennywise',
				'The Offspring',
				'Lagwagon',
				'Millencolin',
				'No Use for a Name',
				'Strung Out'
			]
		},
		{
			name: 'Oi! & Street Punk',
			year: 1978,
			heaviness: 56,
			font: 'marker',
			description: 'Working-class, terrace-chant punk with gang vocals and boots.',
			bands: [
				'Cock Sparrer',
				'Sham 69',
				'Cockney Rejects',
				'Angelic Upstarts',
				'The Business',
				'The 4-Skins',
				'Blitz',
				'The Exploited',
				'The Casualties',
				'Rancid'
			]
		},
		{
			name: 'Anarcho-Punk',
			year: 1977,
			heaviness: 55,
			font: 'marker',
			description: 'Politically radical punk preaching DIY, pacifism and animal rights.',
			bands: [
				'Crass',
				'Poison Girls',
				'Flux of Pink Indians',
				'Conflict',
				'Subhumans',
				'Zounds',
				'Rudimentary Peni',
				'Dirt',
				'Chumbawamba',
				'Antisect'
			]
		},
		{
			name: 'Horror Punk',
			year: 1977,
			heaviness: 51,
			font: 'blackletter',
			description: 'B-movie gore, devil locks and doo-wop-tinged punk hooks.',
			bands: [
				'Misfits',
				'Samhain',
				'The Crimson Ghosts',
				'Balzac',
				'Calabrese',
				'Blitzkid',
				'Murderdolls',
				'Wednesday 13'
			]
		},
		{
			name: 'Psychobilly',
			year: 1980,
			heaviness: 47,
			font: 'script',
			description: 'Rockabilly slap bass rammed into punk speed and horror imagery.',
			bands: [
				'The Cramps',
				'The Meteors',
				'Demented Are Go',
				'Guana Batz',
				'King Kurt',
				'Batmobile',
				'The Quakes',
				'Mad Sin',
				'Nekromantix',
				'Tiger Army'
			]
		},
		{
			name: 'Ska Punk',
			year: 1985,
			heaviness: 38,
			font: 'groovy',
			description: 'Upstroke guitars and horn sections played at punk speed.',
			bands: [
				'Operation Ivy',
				'The Mighty Mighty Bosstones',
				'Voodoo Glow Skulls',
				'Less Than Jake',
				'Reel Big Fish',
				'Goldfinger',
				'Sublime',
				'Catch 22',
				'Streetlight Manifesto',
				'Big D and the Kids Table'
			]
		},
		{
			name: 'Celtic Punk',
			year: 1982,
			heaviness: 42,
			font: 'pirate',
			description: 'Pipes, fiddles and tin whistles in a pub-brawl punk band.',
			bands: [
				'The Pogues',
				'Black 47',
				'Dropkick Murphys',
				'Flogging Molly',
				'The Real McKenzies',
				'The Tossers',
				'Flatfoot 56',
				'The Mahones',
				'Greenland Whalefishers'
			]
		},
		{
			name: 'Folk Punk',
			year: 1983,
			heaviness: 26,
			font: 'typewriter',
			description: 'Acoustic guitars, banjos and accordions played with punk ethics.',
			bands: [
				'Violent Femmes',
				'Billy Bragg',
				'Against Me!',
				'Mischief Brew',
				'AJJ',
				'Defiance, Ohio',
				'This Bike Is a Pipe Bomb',
				'Days N Daze'
			]
		},
		{
			name: 'Garage Punk',
			year: 1986,
			heaviness: 48,
			font: 'marker',
			description: "Trashy, lo-fi rock 'n' roll at punk velocity.",
			bands: [
				'The Gories',
				'Thee Headcoats',
				'The Mummies',
				'The Dwarves',
				'Devil Dogs',
				'New Bomb Turks',
				'The Oblivians',
				'Teengenerate',
				'Jay Reatard'
			]
		},
		{
			name: 'Punk Blues',
			year: 1980,
			heaviness: 41,
			font: 'western',
			description: 'Primal blues stripped down and played with a punk snarl.',
			bands: [
				'The Gun Club',
				'The Cramps',
				'The Birthday Party',
				'The Gories',
				'Flat Duo Jets',
				'Jon Spencer Blues Explosion',
				'Bob Log III',
				'The White Stripes',
				'The Kills'
			]
		},
		{
			name: 'Art Punk',
			year: 1977,
			heaviness: 39,
			font: 'typewriter',
			description: 'Punk with conceptual ambition and avant-garde edges.',
			bands: [
				'Wire',
				'Pere Ubu',
				'Devo',
				'Swell Maps',
				'The Raincoats',
				'Mission of Burma',
				'Minutemen',
				'The Ex',
				'Parquet Courts',
				'Ought'
			]
		},
		{
			name: 'Riot Grrrl',
			year: 1991,
			heaviness: 47,
			font: 'marker',
			description: 'Feminist punk from the Pacific Northwest, built on zines, DIY and fury.',
			bands: [
				'Bikini Kill',
				'Bratmobile',
				'Heavens to Betsy',
				'Huggy Bear',
				'Excuse 17',
				'Sleater-Kinney',
				'Team Dresch',
				"Emily's Sassy Lime",
				'Skinned Teen',
				'Le Tigre'
			]
		},
		{
			name: 'Cowpunk',
			year: 1981,
			heaviness: 37,
			font: 'western',
			description: 'Punk rock crossed with country twang and rockabilly.',
			bands: [
				'Jason & the Scorchers',
				'The Gun Club',
				'Rank and File',
				'Meat Puppets',
				'The Mekons',
				'Blood on the Saddle',
				'Tex and the Horseheads',
				'The Beat Farmers',
				'Lone Justice'
			]
		},
		{
			name: 'Dance-Punk',
			year: 1979,
			heaviness: 29,
			font: 'neon',
			description: 'Punk and post-punk wired to disco and funk rhythms.',
			bands: [
				'ESG',
				'A Certain Ratio',
				'Liquid Liquid',
				'Delta 5',
				'The Rapture',
				'LCD Soundsystem',
				'!!!',
				'Radio 4',
				'Death from Above 1979'
			]
		}
	]
};
