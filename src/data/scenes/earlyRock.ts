import type { SceneDefinition } from '../types';

export const earlyRock: SceneDefinition = {
	id: 'early',
	kind: 'Rock',
	name: 'Early Rock & Roll',
	genres: [
		{
			name: 'Rock and Roll',
			year: 1954,
			heaviness: 14,
			font: 'script',
			description: 'Rhythm and blues, country and boogie-woogie fused into the backbeat that started it all.',
			bands: [
				'Chuck Berry',
				'Little Richard',
				'Elvis Presley',
				'Buddy Holly',
				'Jerry Lee Lewis',
				'Bill Haley & His Comets',
				'Fats Domino',
				'Bo Diddley',
				'Eddie Cochran',
				'Ritchie Valens'
			]
		},
		{
			name: 'Rockabilly',
			year: 1954,
			heaviness: 17,
			font: 'script',
			description: 'Hillbilly country meets rhythm and blues: slapback echo, upright bass and twangy guitar.',
			bands: [
				'Carl Perkins',
				'Gene Vincent',
				'Wanda Jackson',
				'Johnny Burnette',
				'Charlie Feathers',
				'Billy Lee Riley',
				'Sonny Burgess',
				'Janis Martin',
				'Stray Cats',
				'The Reverend Horton Heat'
			]
		},
		{
			name: 'Surf Rock',
			year: 1961,
			heaviness: 16,
			font: 'script',
			description: 'Reverb-drenched instrumental guitar and Southern California beach harmonies.',
			bands: [
				'Dick Dale',
				'The Ventures',
				'The Chantays',
				'The Surfaris',
				'The Trashmen',
				'The Beach Boys',
				'Jan and Dean',
				'The Bel-Airs',
				'Los Straitjackets',
				'Man or Astro-man?'
			]
		},
		{
			name: 'Merseybeat',
			year: 1961,
			heaviness: 10,
			font: 'condensed',
			description: "Liverpool's driving, harmony-rich guitar pop that powered the British Invasion.",
			bands: [
				'The Beatles',
				'Gerry and the Pacemakers',
				'The Searchers',
				'The Hollies',
				'The Swinging Blue Jeans',
				'Billy J. Kramer & the Dakotas',
				'The Merseybeats',
				'The Fourmost'
			]
		},
		{
			name: 'British Invasion',
			year: 1964,
			heaviness: 13,
			font: 'condensed',
			description: 'The mid-60s wave of UK bands that took over the American charts.',
			bands: [
				'The Beatles',
				'The Rolling Stones',
				'The Kinks',
				'The Who',
				'The Animals',
				'The Yardbirds',
				"Herman's Hermits",
				'The Dave Clark Five',
				'Them',
				'Manfred Mann'
			]
		},
		{
			name: 'Garage Rock',
			year: 1963,
			heaviness: 30,
			font: 'marker',
			description: 'Raw, amateurish and loud: teenage bands bashing out fuzz-toned three-chord songs.',
			bands: [
				'The Sonics',
				'The Kingsmen',
				'The Seeds',
				'The Standells',
				'? and the Mysterians',
				'Count Five',
				'The Shadows of Knight',
				'The Remains',
				'The Music Machine',
				'The Chocolate Watchband'
			]
		},
		{
			name: 'Freakbeat',
			year: 1965,
			heaviness: 26,
			font: 'condensed',
			description: "Britain's harder, mod-fueled answer to garage rock, full of feedback and pounding drums.",
			bands: [
				'The Creation',
				'The Action',
				'The Eyes',
				'The Pretty Things',
				'The Move',
				'Small Faces',
				'The Smoke',
				"John's Children",
				'The Birds',
				'The Craig'
			]
		},
		{
			name: 'Folk Rock',
			year: 1965,
			heaviness: 6,
			font: 'typewriter',
			description: 'Folk songwriting plugged in: chiming twelve-strings and close harmonies.',
			bands: [
				'The Byrds',
				'Bob Dylan',
				'Simon & Garfunkel',
				'The Mamas & the Papas',
				'Buffalo Springfield',
				'Fairport Convention',
				'Crosby, Stills, Nash & Young',
				'The Turtles',
				"The Lovin' Spoonful",
				'Steeleye Span'
			]
		}
	]
};
