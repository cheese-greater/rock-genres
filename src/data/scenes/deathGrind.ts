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
				'Entombed',
				'Dismember',
				'Grave',
				'Unleashed',
				'Carnage',
				'Edge of Sanity',
				'God Macabre',
				'Entrails',
				'Bloodbath'
			]
		},
		{
			name: 'Melodic Death Metal',
			year: 1993,
			heaviness: 78,
			font: 'pirate',
			description: 'The Gothenburg sound: death metal with harmonized melodic leads.',
			bands: [
				'At the Gates',
				'In Flames',
				'Dark Tranquillity',
				'Arch Enemy',
				'Soilwork',
				'Children of Bodom',
				'Insomnium',
				'Omnium Gatherum',
				'Scar Symmetry',
				'Kalmah'
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
				'Gorguts',
				'Cryptopsy',
				'Necrophagist',
				'Spawn of Possession',
				'Origin',
				'Obscura',
				'Beyond Creation',
				'Archspire'
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
				'Cannibal Corpse',
				'Deeds of Flesh',
				'Disgorge',
				'Internal Bleeding',
				'Dying Fetus',
				'Skinless',
				'Devourment',
				'Defeated Sanity',
				'Pyrexia'
			]
		},
		{
			name: 'Blackened Death Metal',
			year: 1991,
			heaviness: 90,
			font: 'blackletter',
			description: "Death metal riffs with black metal's tremolo picking, atmosphere and blasphemy.",
			bands: [
				'Necrophobic',
				'Dissection',
				'Angelcorpse',
				'Vital Remains',
				'Behemoth',
				'Belphegor',
				'Zyklon',
				'Akercocke',
				'Hate'
			]
		},
		{
			name: 'Dissonant Death Metal',
			year: 1998,
			heaviness: 91,
			font: 'typewriter',
			description: "Atonal chord clusters and cavernous atmospheres from death metal's avant-garde.",
			bands: [
				'Gorguts',
				'Portal',
				'Ulcerate',
				'Pyrrhon',
				'Ad Nauseam',
				'Artificial Brain',
				'Gigan',
				'Baring Teeth',
				'Imperial Triumphant'
			]
		},
		{
			name: 'Grindcore',
			year: 1985,
			heaviness: 97,
			font: 'pirate',
			description: 'Extremely short, fast songs fusing death metal and hardcore punk.',
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
			]
		},
		{
			name: 'Goregrind',
			year: 1987,
			heaviness: 98,
			font: 'pirate',
			description: 'Grindcore obsessed with medical gore, pitch-shifted gurgles and morbid humor.',
			bands: [
				'Carcass',
				'Impetigo',
				'General Surgery',
				'Regurgitate',
				'Dead Infection',
				'Haemorrhage',
				'Last Days of Humanity',
				'Gut',
				'Exhumed',
				'County Medical Examiners'
			]
		}
	]
};
