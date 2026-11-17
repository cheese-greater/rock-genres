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
			],
			sources: [
				'https://www.allmusic.com/style/alternative-metal-ma0000012328',
				'https://en.wikipedia.org/wiki/Alternative_metal'
			]
		},
		{
			name: 'Funk Metal',
			year: 1986,
			heaviness: 53,
			font: 'groovy',
			description: 'Slap bass and funky grooves driving heavy metal guitars.',
			bands: [
				'Red Hot Chili Peppers',
				'Living Colour',
				'Fishbone',
				'Faith No More',
				'Primus',
				'Infectious Grooves',
				'Mordred',
				'24-7 Spyz',
				'Electric Boys',
				'Extreme'
			],
			sources: [
				'https://www.allmusic.com/style/funk-metal-ma0000012114',
				'https://en.wikipedia.org/wiki/Funk_metal'
			]
		},
		{
			name: 'Rap Metal',
			year: 1987,
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
			],
			sources: [
				'https://www.allmusic.com/style/rap-metal-ma0000002817',
				'https://en.wikipedia.org/wiki/Rap_metal'
			]
		},
		{
			name: 'Nu Metal',
			year: 1994,
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
			],
			sources: [
				'https://www.allmusic.com/style/n%C3%BC-metal-ma0000004547',
				'https://en.wikipedia.org/wiki/Nu_metal'
			]
		},
		{
			name: 'Industrial Metal',
			year: 1988,
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
			],
			sources: [
				'https://www.allmusic.com/style/industrial-metal-ma0000012276',
				'https://en.wikipedia.org/wiki/Industrial_metal'
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
				'Joachim Witt',
				'Lindemann',
				'Hämatom'
			],
			sources: [
				'https://www.allmusic.com/artist/megaherz-mn0000405300',
				'https://en.wikipedia.org/wiki/Neue_Deutsche_H%C3%A4rte'
			]
		},
		{
			name: 'Christian Metal',
			year: 1978,
			heaviness: 62,
			font: 'rocker',
			description: 'Metal of every style carrying Christian lyrics, from glam to metalcore.',
			bands: [
				'Resurrection Band',
				'Stryper',
				'Bloodgood',
				'Barren Cross',
				'Tourniquet',
				'Believer',
				'Mortification',
				'Living Sacrifice',
				'Demon Hunter',
				'Becoming the Archetype'
			],
			sources: [
				'https://www.allmusic.com/style/christian-metal-ma0000002975',
				'https://en.wikipedia.org/wiki/Christian_metal'
			]
		},
		{
			name: 'Kawaii Metal',
			year: 2010,
			heaviness: 60,
			font: 'neon',
			description: 'J-pop idol vocals and choreography over full-throttle metal.',
			bands: ['Babymetal', 'Ladybaby', 'Necronomidol', 'Passcode', 'Hanabie.', 'Ladybeard'],
			sources: [
				'https://www.allmusic.com/artist/babymetal-mn0003176966',
				'https://en.wikipedia.org/wiki/Kawaii_metal'
			]
		}
	]
};
