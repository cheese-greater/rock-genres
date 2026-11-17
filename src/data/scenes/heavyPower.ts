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
				'Dust',
				"Lucifer's Friend",
				'High Tide',
				'Atomic Rooster'
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
			]
		},
		{
			name: 'US Power Metal',
			year: 1983,
			heaviness: 67,
			font: 'rocker',
			description: 'The American take on power metal: heavier, darker and riffier than the European style.',
			bands: [
				'Riot',
				'Omen',
				'Jag Panzer',
				'Liege Lord',
				'Helstar',
				'Savatage',
				'Crimson Glory',
				'Vicious Rumors',
				'Metal Church',
				'Iced Earth'
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
			]
		},
		{
			name: 'Epic Heavy Metal',
			year: 1980,
			heaviness: 63,
			font: 'pirate',
			description: 'Sword-and-sorcery heavy metal with marching tempos and heroic sagas.',
			bands: [
				'Manowar',
				'Manilla Road',
				'Cirith Ungol',
				'Warlord',
				'Virgin Steele',
				'Brocas Helm',
				'Battleroar',
				'Atlantean Kodex',
				'Eternal Champion',
				'Visigoth'
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
				'Christian Mistress',
				'Skull Fist',
				'Night Demon',
				'Haunt',
				'Ambush',
				'Screamer',
				'Riot City'
			]
		}
	]
};
