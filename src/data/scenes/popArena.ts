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
			],
			sources: [
				'https://www.allmusic.com/style/soft-rock-ma0000011841',
				'https://en.wikipedia.org/wiki/Soft_rock'
			]
		},
		{
			name: 'Pop Rock',
			year: 1958,
			heaviness: 8,
			font: 'rocker',
			description: 'Catchy, hook-first songs dressed up in rock instrumentation.',
			bands: [
				'The Monkees',
				'Elton John',
				'Peter Frampton',
				'Billy Joel',
				'Rick Springfield',
				'Hootie & the Blowfish',
				'Matchbox Twenty',
				'Goo Goo Dolls',
				'Third Eye Blind',
				'Train'
			],
			sources: [
				'https://www.allmusic.com/style/contemporary-pop-rock-ma0000004443',
				'https://en.wikipedia.org/wiki/Pop_rock'
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
			],
			sources: [
				'https://www.allmusic.com/style/power-pop-ma0000002793',
				'https://en.wikipedia.org/wiki/Power_pop'
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
			],
			sources: [
				'https://www.allmusic.com/style/glam-rock-ma0000002619',
				'https://en.wikipedia.org/wiki/Glam_rock'
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
			],
			sources: [
				'https://www.allmusic.com/style/arena-rock-ma0000012329',
				'https://en.wikipedia.org/wiki/Arena_rock'
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
				'Sugar Ray',
				'Incubus'
			],
			sources: [
				'https://www.allmusic.com/style/funk-metal-ma0000012114',
				'https://en.wikipedia.org/wiki/Funk_rock'
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
			],
			sources: [
				'https://www.allmusic.com/style/christian-rock-ma0000002945',
				'https://en.wikipedia.org/wiki/Christian_rock'
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
				'Linkin Park',
				'Crazy Town',
				'Hollywood Undead',
				'Gym Class Heroes',
				'Twenty One Pilots'
			],
			sources: ['https://www.allmusic.com/style/rap-rock-ma0000011992', 'https://en.wikipedia.org/wiki/Rap_rock']
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
			],
			sources: [
				'https://www.allmusic.com/style/post-grunge-ma0000005020',
				'https://en.wikipedia.org/wiki/Post-grunge'
			]
		},
		{
			name: 'Baroque Pop',
			year: 1966,
			heaviness: 5,
			font: 'script',
			description:
				'Harpsichords, strings, horns and layered harmonies giving 60s pop and rock a stately, classical grandeur.',
			bands: [
				'The Beach Boys',
				'The Zombies',
				'The Beatles',
				'The Left Banke',
				'The Walker Brothers',
				'The Moody Blues',
				'Procol Harum',
				'Scott Walker',
				'Nick Drake',
				'The Divine Comedy'
			],
			sources: [
				'https://www.allmusic.com/style/baroque-pop-ma0000012101',
				'https://en.wikipedia.org/wiki/Baroque_pop'
			]
		}
	]
};
