import type { SceneDefinition } from '../types';

export const alternativeNu: SceneDefinition = {
	id: 'modern',
	kind: 'Metal',
	name: 'Alternative, Nu & Industrial',
	genres: [
		{
			name: 'Alternative Metal',
			year: 1986,
			heaviness: 58,
			font: 'condensed',
			description: "Metal weight with alternative rock's experimentation and unconventional song forms.",
			bands: [
				'Faith No More',
				"Jane's Addiction",
				'Living Colour',
				'Helmet',
				'Tool',
				'Life of Agony',
				'Deftones',
				'System of a Down',
				'Chevelle',
				'Breaking Benjamin'
			]
		},
		{
			name: 'Funk Metal',
			year: 1986,
			heaviness: 53,
			font: 'groovy',
			description: 'Slap bass and funky grooves driving heavy metal guitars.',
			bands: [
				'Living Colour',
				'Fishbone',
				'Faith No More',
				'Primus',
				'Infectious Grooves',
				'Mordred',
				'24-7 Spyz',
				'Electric Boys',
				'Extreme'
			]
		},
		{
			name: 'Rap Metal',
			year: 1990,
			heaviness: 63,
			font: 'condensed',
			description: 'Rapped vocals and hip-hop rhythms over heavy metal riffing.',
			bands: [
				'Body Count',
				'Biohazard',
				'Rage Against the Machine',
				'Clawfinger',
				'Downset',
				'Stuck Mojo',
				'Dog Eat Dog',
				'Senser',
				'Hed PE',
				'Prophets of Rage'
			]
		},
		{
			name: 'Nu Metal',
			year: 1995,
			heaviness: 66,
			font: 'condensed',
			description: 'Downtuned grooves mixed with hip-hop, rapping and electronics.',
			bands: [
				'Korn',
				'Deftones',
				'Limp Bizkit',
				'Linkin Park',
				'Slipknot',
				'System of a Down',
				'Disturbed',
				'Papa Roach',
				'Staind',
				'P.O.D.'
			]
		},
		{
			name: 'Industrial Metal',
			year: 1985,
			heaviness: 70,
			font: 'space',
			description: 'Electronics, samples and mechanical rhythms fused with metal.',
			bands: [
				'Ministry',
				'Godflesh',
				'KMFDM',
				'Fear Factory',
				'White Zombie',
				'Marilyn Manson',
				'Rammstein',
				'Static-X',
				'Rob Zombie',
				'Strapping Young Lad'
			]
		},
		{
			name: 'Neue Deutsche Härte',
			year: 1994,
			heaviness: 65,
			font: 'space',
			description: 'German-language, industrial-tinged metal of marching riffs and booming vocals.',
			bands: [
				'Oomph!',
				'Rammstein',
				'Megaherz',
				'Eisbrecher',
				'Stahlmann',
				'Ost+Front',
				'Heldmaschine',
				'Emigrate',
				'Lindemann'
			]
		},
		{
			name: 'Christian Metal',
			year: 1984,
			heaviness: 62,
			font: 'rocker',
			description: 'Metal of every style carrying Christian lyrics, from glam to metalcore.',
			bands: [
				'Stryper',
				'Bloodgood',
				'Barren Cross',
				'Tourniquet',
				'Believer',
				'Mortification',
				'Living Sacrifice',
				'Demon Hunter',
				'Becoming the Archetype'
			]
		},
		{
			name: 'Kawaii Metal',
			year: 2010,
			heaviness: 60,
			font: 'neon',
			description: 'J-pop idol vocals and choreography over full-throttle metal.',
			bands: ['Babymetal', 'Ladybaby', 'Necronomidol', 'Passcode', 'Hanabie.']
		}
	]
};
