import type { SceneDefinition } from '../types';

export const thrashGroove: SceneDefinition = {
	id: 'thrash',
	kind: 'Metal',
	name: 'Thrash & Groove',
	genres: [
		{
			name: 'Thrash Metal',
			year: 1981,
			heaviness: 76,
			font: 'metal',
			description: 'Fast, aggressive palm-muted riffing born from metal meeting hardcore punk.',
			bands: [
				'Metallica',
				'Slayer',
				'Megadeth',
				'Anthrax',
				'Exodus',
				'Testament',
				'Overkill',
				'Kreator',
				'Sodom',
				'Destruction'
			]
		},
		{
			name: 'Teutonic Thrash',
			year: 1983,
			heaviness: 79,
			font: 'metal',
			description: "Germany's rawer, more savage thrash, led by the Big Teutonic Four.",
			bands: [
				'Kreator',
				'Sodom',
				'Destruction',
				'Tankard',
				'Holy Moses',
				'Exumer',
				'Assassin',
				'Darkness',
				'Deathrow',
				'Iron Angel'
			]
		},
		{
			name: 'Crossover Thrash',
			year: 1984,
			heaviness: 73,
			font: 'marker',
			description: 'Thrash metal and hardcore punk smashed together, skate decks included.',
			bands: [
				'D.R.I.',
				'Suicidal Tendencies',
				'Corrosion of Conformity',
				'S.O.D.',
				'Cryptic Slaughter',
				'Nuclear Assault',
				'Excel',
				'Municipal Waste',
				'Iron Reagan',
				'Power Trip'
			]
		},
		{
			name: 'Technical Thrash',
			year: 1987,
			heaviness: 75,
			font: 'space',
			description: 'Thrash with progressive structures, jazz chords and tricky time changes.',
			bands: [
				'Watchtower',
				'Voivod',
				'Coroner',
				'Mekong Delta',
				'Toxik',
				'Realm',
				'Sieges Even',
				'Believer',
				'Annihilator',
				'Vektor'
			]
		},
		{
			name: 'Blackened Thrash',
			year: 1993,
			heaviness: 83,
			font: 'blackletter',
			description: "Thrash riffing fused with black metal's evil atmosphere and raw tone.",
			bands: [
				'Aura Noir',
				'Nifelheim',
				'Desaster',
				'Deströyer 666',
				'Bewitched',
				'Witchery',
				'Toxic Holocaust',
				'Midnight',
				'Hellripper'
			]
		},
		{
			name: 'Thrash Revival',
			year: 2005,
			heaviness: 74,
			font: 'marker',
			description: 'New-millennium bands reviving 80s thrash with high-tops, denim and party energy.',
			bands: [
				'Municipal Waste',
				'Toxic Holocaust',
				'Warbringer',
				'Havok',
				'Evile',
				'Bonded by Blood',
				'Gama Bomb',
				'Fueled by Fire',
				'Lost Society',
				'Power Trip'
			]
		},
		{
			name: 'Groove Metal',
			year: 1990,
			heaviness: 72,
			font: 'condensed',
			description: 'Mid-tempo, syncopated, chugging riffs over thrash foundations.',
			bands: [
				'Pantera',
				'Exhorder',
				'Prong',
				'Sepultura',
				'Machine Head',
				'Lamb of God',
				'Gojira',
				'DevilDriver',
				'Chimaira',
				'Five Finger Death Punch'
			]
		},
		{
			name: 'Southern Metal',
			year: 1990,
			heaviness: 68,
			font: 'western',
			description: 'Sludgy groove metal soaked in Southern rock swagger and whiskey.',
			bands: [
				'Down',
				'Corrosion of Conformity',
				'Crowbar',
				'Black Label Society',
				'Alabama Thunderpussy',
				'Weedeater',
				'Maylene and the Sons of Disaster',
				'Black Tusk',
				'Hellyeah',
				'Texas Hippie Coalition'
			]
		}
	]
};
