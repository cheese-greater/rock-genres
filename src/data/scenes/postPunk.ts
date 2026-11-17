import type { SceneDefinition } from '../types';

export const postPunk: SceneDefinition = {
	id: 'postpunk',
	kind: 'Rock',
	name: 'Post-Punk, New Wave & Goth',
	genres: [
		{
			name: 'Post-Punk',
			year: 1978,
			heaviness: 32,
			font: 'typewriter',
			description: "Punk's restless aftermath: angular guitars, dub bass and art-school ideas.",
			bands: [
				'Joy Division',
				'Wire',
				'Gang of Four',
				'Public Image Ltd',
				'Siouxsie and the Banshees',
				'The Fall',
				'Magazine',
				'The Pop Group',
				'Echo & the Bunnymen',
				'Killing Joke'
			],
			sources: [
				'https://www.allmusic.com/style/post-punk-ma0000004450',
				'https://en.wikipedia.org/wiki/Post-punk'
			]
		},
		{
			name: 'New Wave',
			year: 1977,
			heaviness: 12,
			font: 'neon',
			description: 'Punk-born pop with synths, quirky hooks and skinny ties.',
			bands: [
				'Blondie',
				'The Cars',
				'Talking Heads',
				'Devo',
				"The B-52's",
				'Elvis Costello',
				'The Police',
				'The Psychedelic Furs',
				'Duran Duran',
				'Tears for Fears'
			],
			sources: [
				'https://www.allmusic.com/style/new-wave-ma0000002750',
				'https://en.wikipedia.org/wiki/New_wave_music'
			]
		},
		{
			name: 'No Wave',
			year: 1977,
			heaviness: 45,
			font: 'typewriter',
			description: 'Short-lived New York scene of atonal, confrontational anti-music.',
			bands: [
				'Suicide',
				'Teenage Jesus and the Jerks',
				'DNA',
				'Mars',
				'James Chance and the Contortions',
				'Theoretical Girls',
				'Lydia Lunch',
				'Glenn Branca',
				'Bush Tetras'
			],
			sources: ['https://www.allmusic.com/style/no-wave-ma0000005018', 'https://en.wikipedia.org/wiki/No_wave']
		},
		{
			name: 'Gothic Rock',
			year: 1979,
			heaviness: 34,
			font: 'blackletter',
			description: 'Post-punk turned dark: baritone vocals, flanged guitars and drum machines.',
			bands: [
				'Bauhaus',
				'Siouxsie and the Banshees',
				'The Cure',
				'The Sisters of Mercy',
				'Southern Death Cult',
				'Christian Death',
				'Xmal Deutschland',
				'Fields of the Nephilim',
				'The Mission',
				'Clan of Xymox'
			],
			sources: [
				'https://www.allmusic.com/style/goth-rock-ma0000002623',
				'https://en.wikipedia.org/wiki/Gothic_rock'
			]
		},
		{
			name: 'Deathrock',
			year: 1981,
			heaviness: 41,
			font: 'blackletter',
			description: "Los Angeles' punkier, horror-steeped cousin of gothic rock.",
			bands: [
				'Christian Death',
				'45 Grave',
				'Super Heroines',
				'Kommunity FK',
				'Voodoo Church',
				'Alien Sex Fiend',
				'Specimen',
				'Sex Gang Children',
				'Mephisto Walz',
				'Bloody Dead and Sexy'
			],
			sources: ['https://en.wikipedia.org/wiki/Deathrock']
		},
		{
			name: 'Industrial Rock',
			year: 1980,
			heaviness: 52,
			font: 'space',
			description: 'Machine rhythms, samples and distorted guitars in a rock song format.',
			bands: [
				'Killing Joke',
				'Ministry',
				'Nine Inch Nails',
				'Pigface',
				'Filter',
				'Stabbing Westward',
				'Gravity Kills',
				'Chemlab',
				'16Volt',
				'Orgy'
			],
			sources: ['https://en.wikipedia.org/wiki/Industrial_rock']
		},
		{
			name: 'Neue Deutsche Welle',
			year: 1979,
			heaviness: 15,
			font: 'neon',
			description: 'German-language new wave, from DIY punk experiments to chart pop.',
			bands: [
				'DAF',
				'Fehlfarben',
				'Palais Schaumburg',
				'Ideal',
				'Trio',
				'Extrabreit',
				'Nena',
				'Spliff',
				'Hubert Kah',
				'Geier Sturzflug'
			],
			sources: ['https://de.wikipedia.org/wiki/Neue_Deutsche_Welle']
		},
		{
			name: 'Darkwave',
			year: 1981,
			heaviness: 24,
			font: 'space',
			description:
				'The gloomy, synth-laden shadow of new wave and goth, from cold drum-machine pulse to ethereal, neoclassical soundscapes.',
			bands: [
				'Clan of Xymox',
				'Dead Can Dance',
				'In the Nursery',
				'Psyche',
				'Die Form',
				'Deine Lakaien',
				'Lycia',
				'Black Tape for a Blue Girl',
				'Love Spirals Downwards',
				'She Past Away'
			],
			sources: ['https://www.allmusic.com/style/darkwave-ma0000012108', 'https://en.wikipedia.org/wiki/Dark_wave']
		}
	]
};
