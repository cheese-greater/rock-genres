import type { SceneDefinition } from '../types';

export const heavyPower: SceneDefinition = {
	id: 'heavy',
	kind: 'Metal',
	name: 'Heavy, Power & Glam',
	genres: [
		{
			name: 'Proto-Metal',
			year: 1968,
			heaviness: 52,
			font: 'rocker',
			description: 'Late-60s and early-70s heavy rock that laid the groundwork for metal.',
			bands: [
				'Steppenwolf',
				'Iron Butterfly',
				'Blue Cheer',
				'Budgie',
				'Sir Lord Baltimore',
				'Bang',
				'Vanilla Fudge',
				"Lucifer's Friend",
				'High Tide',
				'Mountain'
			],
			sources: [
				'https://www.allmusic.com/artist/blue-cheer-mn0000059537',
				'https://en.wikipedia.org/wiki/Heavy_metal_music#Origins:_late_1960s_and_early_1970s'
			]
		},
		{
			name: 'Heavy Metal',
			year: 1970,
			heaviness: 60,
			font: 'metal',
			description: 'The blueprint: loud distorted riffs, operatic vocals and twin-guitar leads.',
			bands: [
				'Black Sabbath',
				'Judas Priest',
				'Iron Maiden',
				'Motörhead',
				'Dio',
				'Ozzy Osbourne',
				'Saxon',
				'Accept',
				'Manowar',
				'Mercyful Fate'
			],
			sources: [
				'https://www.allmusic.com/style/heavy-metal-ma0000002721',
				'https://en.wikipedia.org/wiki/Heavy_metal_music'
			]
		},
		{
			name: 'NWOBHM',
			year: 1979,
			heaviness: 62,
			font: 'metal',
			description: 'The New Wave of British Heavy Metal: punk-fast, DIY and gloriously riff-driven.',
			bands: [
				'Iron Maiden',
				'Saxon',
				'Diamond Head',
				'Def Leppard',
				'Angel Witch',
				'Tygers of Pan Tang',
				'Raven',
				'Girlschool',
				'Samson',
				'Satan'
			],
			sources: [
				'https://www.allmusic.com/style/new-wave-of-british-heavy-metal-ma0000004491',
				'https://en.wikipedia.org/wiki/New_wave_of_British_heavy_metal'
			]
		},
		{
			name: 'Speed Metal',
			year: 1981,
			heaviness: 70,
			font: 'metal',
			description: 'Heavy metal pushed to breakneck tempos, bridging the NWOBHM and thrash.',
			bands: [
				'Motörhead',
				'Accept',
				'Anvil',
				'Exciter',
				'Agent Steel',
				'Razor',
				'Abattoir',
				'Living Death',
				'Running Wild',
				'Enforcer'
			],
			sources: [
				'https://www.allmusic.com/style/speed-thrash-metal-ma0000002874',
				'https://en.wikipedia.org/wiki/Speed_metal'
			]
		},
		{
			name: 'Glam Metal',
			year: 1983,
			heaviness: 45,
			font: 'rocker',
			description: 'Big hooks, big hair and arena-sized party anthems.',
			bands: [
				'Mötley Crüe',
				'Def Leppard',
				'Bon Jovi',
				'Twisted Sister',
				'Quiet Riot',
				'Poison',
				'Ratt',
				'Skid Row',
				'Cinderella',
				'Warrant'
			],
			sources: [
				'https://www.allmusic.com/style/hair-metal-ma0000011902',
				'https://en.wikipedia.org/wiki/Glam_metal'
			]
		},
		{
			name: 'US Power Metal',
			year: 1983,
			heaviness: 67,
			font: 'rocker',
			description:
				'The American take on power metal: heavier, darker, riffier and given to sword-and-sorcery epics.',
			bands: [
				'Riot',
				'Omen',
				'Jag Panzer',
				'Manilla Road',
				'Helstar',
				'Savatage',
				'Crimson Glory',
				'Vicious Rumors',
				'Metal Church',
				'Iced Earth'
			],
			sources: [
				'https://www.allmusic.com/style/power-metal-ma0000011913',
				'https://en.wikipedia.org/wiki/Power_metal#American_style'
			]
		},
		{
			name: 'Power Metal',
			year: 1985,
			heaviness: 61,
			font: 'rocker',
			description: 'Soaring clean vocals, speed, melody and fantasy themes.',
			bands: [
				'Helloween',
				'Blind Guardian',
				'Gamma Ray',
				'Stratovarius',
				'HammerFall',
				'Sonata Arctica',
				'Kamelot',
				'Edguy',
				'Sabaton',
				'DragonForce'
			],
			sources: [
				'https://www.allmusic.com/style/power-metal-ma0000011913',
				'https://en.wikipedia.org/wiki/Power_metal'
			]
		},
		{
			name: 'Neoclassical Metal',
			year: 1984,
			heaviness: 59,
			font: 'rocker',
			description: 'Shred guitar built on Bach and Paganini: harmonic minor scales at blinding speed.',
			bands: [
				'Rainbow',
				'Yngwie Malmsteen',
				'Impellitteri',
				'Vinnie Moore',
				'Tony MacAlpine',
				'Cacophony',
				'Jason Becker',
				'Artension',
				'Symphony X',
				'Stratovarius'
			],
			sources: [
				'https://www.allmusic.com/style/neo-classical-metal-ma0000011866',
				'https://en.wikipedia.org/wiki/Neoclassical_metal'
			]
		},
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
			name: 'NWOTHM',
			year: 2005,
			heaviness: 62,
			font: 'metal',
			description: 'The New Wave of Traditional Heavy Metal: young bands reviving 80s leather and leads.',
			bands: [
				'Enforcer',
				'Cauldron',
				'Holy Grail',
				'White Wizzard',
				'Skull Fist',
				'Night Demon',
				'Haunt',
				'Eternal Champion',
				'Wytch Hazel',
				'Striker'
			],
			sources: [
				'https://www.allmusic.com/artist/mn0001556316',
				'https://en.wikipedia.org/wiki/New_wave_of_traditional_heavy_metal'
			]
		}
	]
};
