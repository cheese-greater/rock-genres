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
			bands: ['Santana', 'Malo', 'El Chicano', 'Azteca', 'Tierra', 'Los Lobos', 'Ozomatli', 'Los Lonely Boys']
		},
		{
			name: 'Rock en Español',
			year: 1985,
			heaviness: 24,
			font: 'condensed',
			description: 'Spanish-language rock from Mexico, Argentina, Spain and beyond.',
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
				'Selda Bağcan',
				'Fikret Kızılok',
				'Edip Akbayram',
				'Baba Zula',
				'Altın Gün'
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
				'Ngozi Family',
				'Paul Ngozi',
				'Chrissy Zebby Tembo',
				'The Peace'
			]
		},
		{
			name: 'Cambodian Rock',
			year: 1963,
			heaviness: 13,
			font: 'script',
			description: "Phnom Penh's 60s and 70s blend of Khmer melodies with surf, garage and psych.",
			bands: [
				'Sinn Sisamouth',
				'Ros Sereysothea',
				'Pan Ron',
				'Yol Aularong',
				'Baksey Cham Krong',
				'Drakkar',
				'Dengue Fever'
			]
		},
		{
			name: 'Celtic Rock',
			year: 1970,
			heaviness: 16,
			font: 'pirate',
			description: 'Traditional Irish, Scottish and Breton music electrified with rock instrumentation.',
			bands: ['Horslips', 'Alan Stivell', 'Runrig', 'Big Country', 'The Waterboys', 'Capercaillie', 'Wolfstone']
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
			]
		},
		{
			name: 'Visual Kei',
			year: 1985,
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
				'Splean'
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
				'Second Hand Rose',
				'Miserable Faith',
				'Hang on the Box',
				'Carsick Cars',
				'Omnipotent Youth Society',
				'Re-TROS'
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
			]
		}
	]
};
