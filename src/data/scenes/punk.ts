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
			description: 'Raw, nihilistic garage, art and glam rock that anticipated punk by a decade.',
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
			],
			sources: [
				'https://www.allmusic.com/style/proto-punk-ma0000005021',
				'https://en.wikipedia.org/wiki/Proto-punk'
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
			],
			sources: ['https://www.allmusic.com/style/punk-ma0000002806', 'https://en.wikipedia.org/wiki/Punk_rock']
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
			],
			sources: ['https://www.allmusic.com/style/pop-punk-ma0000004449', 'https://en.wikipedia.org/wiki/Pop-punk']
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
			],
			sources: [
				'https://www.allmusic.com/style/skatepunk-ma0000011954',
				'https://en.wikipedia.org/wiki/Skate_punk'
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
			],
			sources: ['https://www.allmusic.com/style/oi%21-ma0000002761', 'https://en.wikipedia.org/wiki/Oi%21']
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
				'Dead Kennedys',
				'Chumbawamba',
				'Antisect'
			],
			sources: [
				'https://www.allmusic.com/style/anarchist-punk-ma0000011967',
				'https://en.wikipedia.org/wiki/Anarcho-punk'
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
				'The Undead',
				'Balzac',
				'Calabrese',
				'Blitzkid',
				'Murderdolls',
				'Wednesday 13',
				'45 Grave'
			],
			sources: ['https://en.wikipedia.org/wiki/Horror_punk']
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
				'The Reverend Horton Heat',
				'Mad Sin',
				'Nekromantix',
				'Tiger Army'
			],
			sources: [
				'https://www.allmusic.com/style/psychobilly-ma0000002801',
				'https://en.wikipedia.org/wiki/Psychobilly'
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
			],
			sources: ['https://www.allmusic.com/style/ska-punk-ma0000002640', 'https://en.wikipedia.org/wiki/Ska_punk']
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
			],
			sources: [
				'https://www.allmusic.com/style/celtic-rock-ma0000005023',
				'https://en.wikipedia.org/wiki/Celtic_punk'
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
				'The Pogues',
				'Billy Bragg',
				'Against Me!',
				'Mischief Brew',
				'AJJ',
				'Defiance, Ohio',
				'This Bike Is a Pipe Bomb',
				"Days N' Daze"
			],
			sources: [
				'https://www.allmusic.com/style/anti-folk-ma0000004417',
				'https://en.wikipedia.org/wiki/Folk_punk'
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
				'The Birthday Party',
				'The Gories',
				'Flat Duo Jets',
				'Jon Spencer Blues Explosion',
				'Bob Log III',
				'The Immortal Lee County Killers',
				'The White Stripes',
				'The Kills',
				'The Oblivians'
			],
			sources: [
				'https://www.allmusic.com/style/punk-blues-ma0000012191',
				'https://en.wikipedia.org/wiki/Punk_blues'
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
			],
			sources: [
				'https://www.allmusic.com/style/punk-new-wave-ma0000011872',
				'https://en.wikipedia.org/wiki/Art_punk'
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
			],
			sources: [
				'https://www.allmusic.com/style/riot-grrrl-ma0000011837',
				'https://en.wikipedia.org/wiki/Riot_grrrl'
			]
		},
		{
			name: 'Cowpunk',
			year: 1981,
			heaviness: 37,
			font: 'western',
			description: 'Punk energy and attitude crossed with the twang of classic country, folk and blues.',
			bands: [
				'Jason & the Scorchers',
				'The Gun Club',
				'Rank and File',
				'Meat Puppets',
				'The Mekons',
				'The Long Ryders',
				'Blood on the Saddle',
				'The Beat Farmers',
				'Lone Justice',
				'Mojo Nixon'
			],
			sources: ['https://www.allmusic.com/style/cowpunk-ma0000012106', 'https://en.wikipedia.org/wiki/Cowpunk']
		},
		{
			name: 'Dance-Punk',
			year: 1979,
			heaviness: 29,
			font: 'neon',
			description: 'Punk and post-punk wired to disco, funk and four-on-the-floor dance beats.',
			bands: [
				'ESG',
				'A Certain Ratio',
				'Liquid Liquid',
				'Gang of Four',
				'The Rapture',
				'LCD Soundsystem',
				'!!!',
				'Radio 4',
				'Death from Above 1979',
				'New Order'
			],
			sources: ['https://en.wikipedia.org/wiki/Dance-punk']
		}
	]
};
