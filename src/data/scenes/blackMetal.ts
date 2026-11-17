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
				'Emperor',
				'Immortal',
				'Gorgoroth',
				'Satyricon',
				'Marduk',
				'Dark Funeral',
				'Taake',
				'Watain'
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
				'Carach Angren',
				'Abigail Williams'
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
			]
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
			]
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
				'Mütiilation',
				'Vlad Tepes',
				'Belkètre',
				'Moonblood',
				'Judas Iscariot',
				'Sargeist',
				'Akitsa',
				'Black Cilice'
			]
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
				'Lifelover',
				'Nocturnal Depression',
				'Woods of Desolation',
				'Austere',
				'Hypothermia'
			]
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
			]
		},
		{
			name: 'Orthodox Black Metal',
			year: 2000,
			heaviness: 90,
			font: 'blackletter',
			description: 'Theologically serious, ritualistic black metal with dense, dissonant riffing.',
			bands: [
				'Funeral Mist',
				'Ofermod',
				'Watain',
				'Deathspell Omega',
				'Ondskapt',
				'Antaeus',
				'Acherontas',
				'Valkyrja'
			]
		},
		{
			name: 'Avant-Garde Black Metal',
			year: 1995,
			heaviness: 87,
			font: 'typewriter',
			description: 'Black metal deconstructed with dissonance, jazz, electronics and abstract song forms.',
			bands: [
				'Ved Buens Ende',
				'Dødheimsgard',
				'Virus',
				'Blut Aus Nord',
				'Deathspell Omega',
				'Dodecahedron',
				'Krallice',
				'Thy Catafalque',
				'Ihsahn',
				'Oranssi Pazuzu'
			]
		},
		{
			name: 'Industrial Black Metal',
			year: 1995,
			heaviness: 88,
			font: 'space',
			description: 'Black metal with drum machines, electronics and cold mechanical precision.',
			bands: ['Mysticum', 'Samael', 'The Kovenant', 'Thorns', 'Aborym', 'Dødheimsgard', 'Blacklodge']
		},
		{
			name: "Black 'n' Roll",
			year: 2000,
			heaviness: 79,
			font: 'rocker',
			description: "Black metal's filth wedded to punk and rock 'n' roll swagger.",
			bands: ['Darkthrone', 'Satyricon', 'Khold', 'Vreid', 'Glorior Belli', 'Kvelertak', 'Midnight']
		},
		{
			name: 'Cascadian Black Metal',
			year: 2003,
			heaviness: 80,
			font: 'blackletter',
			description: 'Pacific Northwest black metal steeped in forests, ecology and post-rock.',
			bands: ['Agalloch', 'Wolves in the Throne Room', 'Ash Borer', 'Fell Voices', 'Skagos', 'Alda', 'Addaura']
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
				'Harakiri for the Sky',
				'Sylvaine',
				'Unreqvited'
			]
		}
	]
};
