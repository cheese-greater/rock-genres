import type { SceneDefinition } from '../types';

export const worldRock: SceneDefinition = {
	id: 'world',
	kind: 'Rock',
	name: 'Rock Around the World',
	genres: [
		{
			name: 'Latin Rock',
			year: 1969,
			heaviness: 21,
			font: 'groovy',
			description: 'Rock fused with Afro-Cuban percussion and Latin American rhythms.',
			bands: ['Santana', 'Malo', 'El Chicano', 'War', 'Azteca', 'Tierra', 'Mandrill', 'Los Lobos', 'Ozomatli'],
			sources: [
				'https://www.allmusic.com/style/latin-rock-ma0000011908',
				'https://en.wikipedia.org/wiki/Latin_rock'
			]
		},
		{
			name: 'Rock en Español',
			year: 1985,
			heaviness: 24,
			font: 'condensed',
			description:
				'Spanish-language rock from Mexico, Argentina, Spain and beyond, which broke out internationally in the mid-80s.',
			bands: [
				'Soda Stereo',
				'Los Prisioneros',
				'Héroes del Silencio',
				'Los Fabulosos Cadillacs',
				'Enanitos Verdes',
				'Caifanes',
				'Café Tacvba',
				'Maná',
				'Molotov',
				'Zoé'
			],
			sources: [
				'https://www.allmusic.com/style/rock-en-espa%C3%B1ol-ma0000002826',
				'https://en.wikipedia.org/wiki/Rock_en_espa%C3%B1ol'
			]
		},
		{
			name: 'Anatolian Rock',
			year: 1966,
			heaviness: 22,
			font: 'groovy',
			description: 'Turkish folk melodies and saz-inspired lines played on fuzz guitars.',
			bands: [
				'Erkin Koray',
				'Barış Manço',
				'Cem Karaca',
				'Moğollar',
				'Mavi Işıklar',
				'Selda Bağcan',
				'3 Hürel',
				'Fikret Kızılok',
				'Edip Akbayram',
				'Altın Gün'
			],
			sources: [
				'https://www.allmusic.com/artist/erkin-koray-mn0000803481',
				'https://en.wikipedia.org/wiki/Anatolian_rock'
			]
		},
		{
			name: 'Zamrock',
			year: 1971,
			heaviness: 30,
			font: 'groovy',
			description: "Zambia's 70s blend of fuzz psychedelia, garage rock and African rhythms.",
			bands: [
				'WITCH',
				'Amanaz',
				'Musi-O-Tunya',
				'Rikki Ililonga',
				'Paul Ngozi',
				'Chrissy Zebby Tembo',
				'The Peace'
			],
			sources: [
				'https://www.allmusic.com/album/welcome-to-zamrock!-vol-1-how-zambias-liberation-led-to-a-rock-revolution-1972-77-mw0003052714',
				'https://en.wikipedia.org/wiki/Zamrock'
			]
		},
		{
			name: 'Cambodian Rock',
			year: 1959,
			heaviness: 13,
			font: 'script',
			description: "Phnom Penh's 60s and 70s blend of Khmer melodies with surf, garage and psych.",
			bands: [
				'Sinn Sisamouth',
				'Ros Serey Sothea',
				'Pen Ran',
				'Yol Aularong',
				'Baksey Cham Krong',
				'The Drakkars',
				'Dengue Fever'
			],
			sources: [
				'https://www.allmusic.com/album/cambodian-rocks-mw0000010619',
				'https://en.wikipedia.org/wiki/Cambodian_rock_(1960s%E2%80%931970s)'
			]
		},
		{
			name: 'Celtic Rock',
			year: 1970,
			heaviness: 16,
			font: 'pirate',
			description: 'Traditional Irish, Scottish and Breton music electrified with rock instrumentation.',
			bands: [
				'Horslips',
				'Alan Stivell',
				'Runrig',
				'Moving Hearts',
				'Big Country',
				'The Waterboys',
				'Capercaillie',
				'Black 47',
				'Wolfstone',
				'Great Big Sea'
			],
			sources: [
				'https://www.allmusic.com/style/celtic-rock-ma0000005023',
				'https://en.wikipedia.org/wiki/Celtic_rock'
			]
		},
		{
			name: 'J-Rock',
			year: 1980,
			heaviness: 34,
			font: 'condensed',
			description: "Japan's rock scene, from the 80s band boom to anime-theme anthems.",
			bands: [
				'Boøwy',
				'The Blue Hearts',
				"B'z",
				'Mr. Children',
				'The Pillows',
				'Number Girl',
				'Asian Kung-Fu Generation',
				'Bump of Chicken',
				'Radwimps',
				'One Ok Rock'
			],
			sources: [
				'https://www.allmusic.com/style/japanese-rock-ma0000012350',
				'https://en.wikipedia.org/wiki/Japanese_rock'
			]
		},
		{
			name: 'Visual Kei',
			year: 1982,
			heaviness: 46,
			font: 'rocker',
			description: 'Theatrical Japanese rock built on elaborate makeup, costumes and androgyny.',
			bands: [
				'X Japan',
				'Buck-Tick',
				'Luna Sea',
				'Malice Mizer',
				"L'Arc-en-Ciel",
				'Glay',
				'Dir En Grey',
				'Moi dix Mois',
				'The Gazette',
				'Versailles'
			],
			sources: [
				'https://www.allmusic.com/style/visual-kei-ma0000013525',
				'https://en.wikipedia.org/wiki/Visual_kei'
			]
		},
		{
			name: 'Russian Rock',
			year: 1980,
			heaviness: 27,
			font: 'condensed',
			description: 'Soviet-era underground poets with guitars, from the Leningrad Rock Club to stadiums.',
			bands: [
				'Mashina Vremeni',
				'Aquarium',
				'Kino',
				'DDT',
				'Alisa',
				'Nautilus Pompilius',
				'Grazhdanskaya Oborona',
				'Agata Kristi',
				'Chaif',
				'Splean'
			],
			sources: [
				'https://www.allmusic.com/artist/mn0000738082',
				'https://en.wikipedia.org/wiki/Rock_music_in_Russia'
			]
		},
		{
			name: 'Chinese Rock',
			year: 1986,
			heaviness: 33,
			font: 'condensed',
			description: "Mainland China's rock scene, from Cui Jian's anthems to Beijing's indie underground.",
			bands: [
				'Cui Jian',
				'Tang Dynasty',
				'Black Panther',
				'He Yong',
				'Second Hand Rose',
				'Miserable Faith',
				'Hang on the Box',
				'Carsick Cars',
				'Omnipotent Youth Society',
				'Re-TROS'
			],
			sources: [
				'https://www.allmusic.com/style/chinese-rock-ma0000012205',
				'https://en.wikipedia.org/wiki/Chinese_rock'
			]
		},
		{
			name: 'Desert Blues',
			year: 1980,
			heaviness: 19,
			font: 'western',
			description: 'Saharan guitar music of hypnotic, cyclical riffs, led by Tuareg bands.',
			bands: [
				'Ali Farka Touré',
				'Tinariwen',
				'Terakaft',
				'Tamikrest',
				'Bombino',
				'Mdou Moctar',
				'Imarhan',
				'Songhoy Blues'
			],
			sources: [
				'https://www.allmusic.com/style/desert-blues-ma0000004497',
				'https://en.wikipedia.org/wiki/Desert_blues'
			]
		}
	]
};
