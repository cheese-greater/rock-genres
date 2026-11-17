import type { SceneDefinition } from '../types';

export const deathGrind: SceneDefinition = {
	id: 'death',
	kind: 'Metal',
	name: 'Death Metal & Grind',
	genres: [
		{
			name: 'Death Metal',
			year: 1985,
			heaviness: 88,
			font: 'pirate',
			description: 'Growled vocals, downtuned guitars, blast beats and dark subject matter.',
			bands: [
				'Possessed',
				'Death',
				'Morbid Angel',
				'Obituary',
				'Deicide',
				'Cannibal Corpse',
				'Entombed',
				'Bolt Thrower',
				'Suffocation',
				'Nile'
			],
			sources: [
				'https://www.allmusic.com/style/death-metal-ma0000002547',
				'https://en.wikipedia.org/wiki/Death_metal'
			]
		},
		{
			name: 'Swedish Death Metal',
			year: 1988,
			heaviness: 86,
			font: 'pirate',
			description: "Stockholm's buzzsaw HM-2 guitar tone, punky d-beat drive and later death 'n' roll swagger.",
			bands: [
				'Nihilist',
				'Morbid',
				'Entombed',
				'Dismember',
				'Grave',
				'Unleashed',
				'Carnage',
				'Edge of Sanity',
				'God Macabre',
				'Bloodbath'
			],
			sources: [
				'https://www.allmusic.com/style/scandinavian-metal-ma0000012324',
				'https://en.wikipedia.org/wiki/Swedish_death_metal'
			]
		},
		{
			name: 'Melodic Death Metal',
			year: 1993,
			heaviness: 78,
			font: 'pirate',
			description: 'The Gothenburg sound: death metal with harmonized melodic leads.',
			bands: [
				'Carcass',
				'At the Gates',
				'In Flames',
				'Dark Tranquillity',
				'Arch Enemy',
				'Soilwork',
				'Children of Bodom',
				'Insomnium',
				'Scar Symmetry',
				'Kalmah'
			],
			sources: [
				'https://www.allmusic.com/album/slaughter-of-the-soul-mw0000646486',
				'https://en.wikipedia.org/wiki/Melodic_death_metal'
			]
		},
		{
			name: 'Technical Death Metal',
			year: 1991,
			heaviness: 89,
			font: 'space',
			description: 'Death metal with dazzling musicianship, jazz detours and constant tempo shifts.',
			bands: [
				'Atheist',
				'Cynic',
				'Pestilence',
				'Gorguts',
				'Cryptopsy',
				'Necrophagist',
				'Origin',
				'Obscura',
				'Ulcerate',
				'Archspire'
			],
			sources: [
				'https://www.allmusic.com/style/technical-death-metal-ma0000013580',
				'https://en.wikipedia.org/wiki/Technical_death_metal'
			]
		},
		{
			name: 'Brutal Death Metal',
			year: 1991,
			heaviness: 94,
			font: 'pirate',
			description: 'Maximum heaviness: guttural vocals, relentless blasts, gore and crushing slam breakdowns.',
			bands: [
				'Suffocation',
				'Mortician',
				'Deeds of Flesh',
				'Disgorge',
				'Internal Bleeding',
				'Dying Fetus',
				'Skinless',
				'Devourment',
				'Defeated Sanity',
				'Pyrexia'
			],
			sources: ['https://en.wikipedia.org/wiki/Brutal_death_metal']
		},
		{
			name: "Death 'n' Roll",
			year: 1993,
			heaviness: 80,
			font: 'rocker',
			description: "Death metal growls over swaggering rock 'n' roll riffs.",
			bands: [
				'Entombed',
				'Xysma',
				'Gorefest',
				'Carcass',
				'Pungent Stench',
				'Convulse',
				'Six Feet Under',
				'Debauchery',
				'Phazm',
				'Entombed A.D.'
			],
			sources: [
				'https://www.allmusic.com/artist/entombed-mn0000741177',
				'https://en.wikipedia.org/wiki/Death_%27n%27_roll'
			]
		},
		{
			name: 'Grindcore',
			year: 1985,
			heaviness: 97,
			font: 'pirate',
			description: 'Extremely short, fast songs fusing heavy metal and hardcore punk.',
			bands: [
				'Repulsion',
				'Napalm Death',
				'Carcass',
				'Terrorizer',
				'Cattle Decapitation',
				'Brutal Truth',
				'Nasum',
				'Discordance Axis',
				'Pig Destroyer',
				'Agoraphobic Nosebleed'
			],
			sources: [
				'https://www.allmusic.com/style/grindcore-ma0000004452',
				'https://en.wikipedia.org/wiki/Grindcore'
			]
		},
		{
			name: 'Goregrind',
			year: 1987,
			heaviness: 98,
			font: 'pirate',
			description: 'Grindcore obsessed with medical gore, pitch-shifted gurgles and morbid humor.',
			bands: [
				'Repulsion',
				'Carcass',
				'Impetigo',
				'General Surgery',
				'Regurgitate',
				'Dead Infection',
				'Haemorrhage',
				'Last Days of Humanity',
				'Exhumed',
				'The County Medical Examiners'
			],
			sources: ['https://en.wikipedia.org/wiki/Goregrind']
		}
	]
};
