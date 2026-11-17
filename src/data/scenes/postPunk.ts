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
			]
		},
		{
			name: 'No Wave',
			year: 1977,
			heaviness: 45,
			font: 'typewriter',
			description: 'Short-lived New York scene of atonal, confrontational anti-music.',
			bands: [
				'Teenage Jesus and the Jerks',
				'DNA',
				'Mars',
				'James Chance and the Contortions',
				'Theoretical Girls',
				'Lydia Lunch',
				'Glenn Branca',
				'Bush Tetras'
			]
		},
		{
			name: 'Gothic Rock',
			year: 1979,
			heaviness: 34,
			font: 'blackletter',
			description:
				'Post-punk turned dark, from British goth to LA deathrock: baritone vocals, flanged guitars and drum machines.',
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
			]
		},
		{
			name: 'Industrial Rock',
			year: 1985,
			heaviness: 52,
			font: 'space',
			description: 'Machine rhythms, samples and distorted guitars in a rock song format.',
			bands: [
				'Killing Joke',
				'Nine Inch Nails',
				'Pigface',
				'Filter',
				'Stabbing Westward',
				'Gravity Kills',
				'Chemlab',
				'16Volt',
				'Orgy',
				'Celldweller'
			]
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
			]
		}
	]
};
