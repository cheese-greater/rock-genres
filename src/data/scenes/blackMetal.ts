import type { SceneDefinition } from '../types';

export const blackMetal: SceneDefinition = {
	id: 'black',
	kind: 'Metal',
	name: 'Black Metal',
	genres: [
		{
			name: 'First-Wave Black Metal',
			year: 1982,
			heaviness: 77,
			font: 'blackletter',
			description: 'The originators: thrashy, satanic and raw, before black metal had rules.',
			bands: [
				'Venom',
				'Bathory',
				'Mercyful Fate',
				'Hellhammer',
				'Celtic Frost',
				'Sodom',
				'Bulldozer',
				'Tormentor',
				'Sarcófago',
				"Master's Hammer"
			],
			sources: [
				'https://www.allmusic.com/style/black-metal-ma0000002463',
				'https://en.wikipedia.org/wiki/First-wave_black_metal'
			]
		},
		{
			name: 'Black Metal',
			year: 1991,
			heaviness: 89,
			font: 'blackletter',
			description: "Norway's second wave: tremolo-picked riffs, shrieked vocals and raw, cold production.",
			bands: [
				'Mayhem',
				'Darkthrone',
				'Burzum',
				'Emperor',
				'Immortal',
				'Gorgoroth',
				'Satyricon',
				'Marduk',
				'Dark Funeral',
				'Watain'
			],
			sources: [
				'https://www.allmusic.com/style/black-metal-ma0000002463',
				'https://en.wikipedia.org/wiki/Black_metal#Second_wave_(1991%E2%80%931997)'
			]
		},
		{
			name: 'Symphonic Black Metal',
			year: 1994,
			heaviness: 84,
			font: 'blackletter',
			description: 'Black metal with keyboards, orchestras and grandiose, cinematic arrangements.',
			bands: [
				'Emperor',
				'Dimmu Borgir',
				'Cradle of Filth',
				'Limbonic Art',
				'Arcturus',
				"Old Man's Child",
				'Anorexia Nervosa',
				'Graveworm',
				'Chthonic',
				'Carach Angren'
			],
			sources: [
				'https://www.allmusic.com/style/symphonic-black-metal-ma0000012290',
				'https://en.wikipedia.org/wiki/Symphonic_black_metal'
			]
		},
		{
			name: 'Melodic Black Metal',
			year: 1993,
			heaviness: 85,
			font: 'blackletter',
			description: 'Black metal with memorable, harmonized melodies and a Swedish-leaning sense of song.',
			bands: [
				'Dissection',
				'Sacramentum',
				'Dawn',
				'Naglfar',
				'Unanimated',
				'Vinterland',
				'Lord Belial',
				'Thulcandra',
				'Uada',
				'Mgła'
			],
			sources: ['https://en.wikipedia.org/wiki/Blackened_death_metal#Melodic_black-death']
		},
		{
			name: 'Atmospheric Black Metal',
			year: 1993,
			heaviness: 81,
			font: 'blackletter',
			description: 'Long, immersive black metal built on ambience, repetition and nature themes.',
			bands: [
				'Summoning',
				'Ulver',
				"Paysage d'Hiver",
				'Drudkh',
				'Agalloch',
				'Wolves in the Throne Room',
				'Darkspace',
				'Saor',
				'Midnight Odyssey',
				'Mare Cognitum'
			],
			sources: ['https://en.wikipedia.org/wiki/Black_metal#Ambient_black_metal']
		},
		{
			name: 'Raw Black Metal',
			year: 1991,
			heaviness: 92,
			font: 'blackletter',
			description: 'Deliberately lo-fi, harsh and hissing black metal at its most primitive.',
			bands: [
				'Darkthrone',
				'Ildjarn',
				'Gorgoroth',
				'Mütiilation',
				'Vlad Tepes',
				'Belketre',
				'Moonblood',
				'Judas Iscariot',
				'Sargeist',
				'Black Cilice'
			],
			sources: ['https://en.wikipedia.org/wiki/Black_metal#Raw_black_metal']
		},
		{
			name: 'Depressive Black Metal',
			year: 1995,
			heaviness: 82,
			font: 'blackletter',
			description: 'Slow, despairing black metal with anguished shrieks and bleak atmospheres.',
			bands: [
				'Strid',
				'Bethlehem',
				'Xasthur',
				'Shining',
				'Silencer',
				'Forgotten Tomb',
				'Lifelover',
				'Nocturnal Depression',
				'Austere',
				'Hypothermia'
			],
			sources: ['https://en.wikipedia.org/wiki/Black_metal#Depressive_suicidal_black_metal']
		},
		{
			name: 'War Metal',
			year: 1990,
			heaviness: 99,
			font: 'blackletter',
			description: 'Bestial, chaotic black and death metal of blasting drums and machine-gun riffs.',
			bands: [
				'Sarcófago',
				'Blasphemy',
				'Beherit',
				'Archgoat',
				'Bestial Warlust',
				'Conqueror',
				'Revenge',
				'Black Witchery',
				'Teitanblood',
				'Diocletian'
			],
			sources: ['https://en.wikipedia.org/wiki/Blackened_death_metal#War_metal']
		},
		{
			name: 'Blackgaze',
			year: 2005,
			heaviness: 69,
			font: 'typewriter',
			description: "Black metal blasts and shrieks fused with shoegaze's shimmering walls of sound.",
			bands: [
				'Alcest',
				'Amesoeurs',
				'Lantlôs',
				'Les Discrets',
				'Deafheaven',
				'An Autumn for Crippled Children',
				'Heretoir',
				'Oathbreaker',
				'Sylvaine',
				'Unreqvited'
			],
			sources: [
				'https://www.allmusic.com/style/blackgaze-ma0000013584',
				'https://en.wikipedia.org/wiki/Blackgaze'
			]
		}
	]
};
