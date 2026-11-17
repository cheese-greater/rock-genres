import type { SceneDefinition } from '../types';

export const popArena: SceneDefinition = {
	id: 'pop',
	kind: 'Rock',
	name: 'Pop & Arena Rock',
	genres: [
		{
			name: 'Soft Rock',
			year: 1970,
			heaviness: 3,
			font: 'script',
			description: 'Mellow, melodic and lushly produced rock for the AM dial.',
			bands: [
				'Carole King',
				'James Taylor',
				'Bread',
				'America',
				'Fleetwood Mac',
				'Chicago',
				'Hall & Oates',
				'The Doobie Brothers',
				'Christopher Cross',
				'Air Supply'
			]
		},
		{
			name: 'Pop Rock',
			year: 1964,
			heaviness: 8,
			font: 'rocker',
			description: 'Catchy, hook-first songs dressed up in rock instrumentation.',
			bands: [
				'The Monkees',
				'Elton John',
				'Billy Joel',
				'Rick Springfield',
				'Hootie & the Blowfish',
				'Matchbox Twenty',
				'Goo Goo Dolls',
				'Third Eye Blind',
				'Train',
				'INXS'
			]
		},
		{
			name: 'Power Pop',
			year: 1971,
			heaviness: 14,
			font: 'rocker',
			description: 'Crunchy guitars, Beatles-style melodies and big harmonies.',
			bands: [
				'Badfinger',
				'Big Star',
				'Raspberries',
				'Cheap Trick',
				'The Knack',
				'The Records',
				'The Jam',
				'Teenage Fanclub',
				'Weezer',
				'Fountains of Wayne'
			]
		},
		{
			name: 'Glam Rock',
			year: 1971,
			heaviness: 28,
			font: 'groovy',
			description: 'Glitter, platform boots, androgyny and stomping singalong rock.',
			bands: [
				'T. Rex',
				'David Bowie',
				'Roxy Music',
				'Slade',
				'Sweet',
				'Mott the Hoople',
				'New York Dolls',
				'Suzi Quatro',
				'Alice Cooper',
				'Mud'
			]
		},
		{
			name: 'Arena Rock',
			year: 1975,
			heaviness: 35,
			font: 'rocker',
			description: 'Stadium-sized choruses, power ballads and polished, larger-than-life production.',
			bands: [
				'Queen',
				'Journey',
				'Boston',
				'Foreigner',
				'REO Speedwagon',
				'Styx',
				'Kansas',
				'Toto',
				'Heart',
				'Survivor'
			]
		},
		{
			name: 'Funk Rock',
			year: 1970,
			heaviness: 29,
			font: 'groovy',
			description: 'Slap bass and syncopated funk grooves under rock guitars.',
			bands: [
				'Sly and the Family Stone',
				'Funkadelic',
				"Mother's Finest",
				'Wild Cherry',
				'Red Hot Chili Peppers',
				'Fishbone',
				'Lenny Kravitz',
				'Incubus'
			]
		},
		{
			name: 'Christian Rock',
			year: 1969,
			heaviness: 24,
			font: 'rocker',
			description: 'Rock with openly Christian lyrics, from Jesus music to arena-sized CCM.',
			bands: [
				'Larry Norman',
				'Petra',
				'DC Talk',
				'Jars of Clay',
				'Newsboys',
				'Third Day',
				'Switchfoot',
				'Relient K',
				'Skillet',
				'Kutless'
			]
		},
		{
			name: 'Rap Rock',
			year: 1986,
			heaviness: 40,
			font: 'condensed',
			description: 'Rapped vocals over live rock bands and distorted guitars.',
			bands: [
				'Run-DMC',
				'Beastie Boys',
				'Urban Dance Squad',
				'311',
				'Kid Rock',
				'Sugar Ray',
				'Crazy Town',
				'Hollywood Undead',
				'Gym Class Heroes',
				'Twenty One Pilots'
			]
		},
		{
			name: 'Post-Grunge',
			year: 1994,
			heaviness: 39,
			font: 'condensed',
			description: 'Radio-friendly, polished descendants of grunge that ruled late-90s rock radio.',
			bands: [
				'Bush',
				'Foo Fighters',
				'Silverchair',
				'Collective Soul',
				'Candlebox',
				'Creed',
				'3 Doors Down',
				'Nickelback',
				'Puddle of Mudd',
				'Seether'
			]
		}
	]
};
