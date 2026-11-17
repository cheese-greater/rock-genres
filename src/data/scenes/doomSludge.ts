import type { SceneDefinition } from '../types';

export const doomSludge: SceneDefinition = {
	id: 'doom',
	kind: 'Metal',
	name: 'Doom, Sludge & Drone',
	genres: [
		{
			name: 'Doom Metal',
			year: 1984,
			heaviness: 70,
			font: 'blackletter',
			description:
				'Slow tempos and crushing heaviness rooted in early Sabbath, at times with epic, operatic grandeur.',
			bands: [
				'Pentagram',
				'Witchfinder General',
				'Saint Vitus',
				'Trouble',
				'The Obsessed',
				'Candlemass',
				'Cathedral',
				'Electric Wizard',
				'Reverend Bizarre',
				'Pallbearer'
			],
			sources: [
				'https://www.allmusic.com/style/doom-metal-ma0000004496',
				'https://en.wikipedia.org/wiki/Doom_metal'
			]
		},
		{
			name: 'Death-Doom',
			year: 1990,
			heaviness: 83,
			font: 'blackletter',
			description: "Death metal growls and crushing weight dragged down to doom's funeral pace.",
			bands: [
				'Winter',
				'Autopsy',
				'Paradise Lost',
				'My Dying Bride',
				'Anathema',
				'Asphyx',
				'Disembowelment',
				'Novembers Doom',
				'Hooded Menace',
				'Swallow the Sun'
			],
			sources: ['https://en.wikipedia.org/wiki/Death-doom']
		},
		{
			name: 'Funeral Doom',
			year: 1991,
			heaviness: 85,
			font: 'blackletter',
			description: 'The slowest, most mournful extreme: glacial riffs and cavernous growls.',
			bands: [
				'Thergothon',
				'Skepticism',
				'Funeral',
				'Esoteric',
				'Evoken',
				'Shape of Despair',
				'Mournful Congregation',
				'Worship',
				'Ahab',
				'Bell Witch'
			],
			sources: ['https://en.wikipedia.org/wiki/Funeral_doom']
		},
		{
			name: 'Gothic Metal',
			year: 1991,
			heaviness: 57,
			font: 'blackletter',
			description: 'Melancholy atmosphere, keyboards and dark romantic vocals.',
			bands: [
				'Type O Negative',
				'Paradise Lost',
				'Moonspell',
				'Tiamat',
				'The Gathering',
				'Theatre of Tragedy',
				'Lacuna Coil',
				'Sentenced',
				'Tristania',
				'HIM'
			],
			sources: [
				'https://www.allmusic.com/style/goth-metal-ma0000011855',
				'https://en.wikipedia.org/wiki/Gothic_metal'
			]
		},
		{
			name: 'Stoner Doom',
			year: 1991,
			heaviness: 71,
			font: 'pirate',
			description: 'Doom weight with stoner fuzz: monolithic riffs and smoke-filled haze.',
			bands: [
				'Sleep',
				'Electric Wizard',
				'Acid King',
				'Sons of Otis',
				'YOB',
				'Om',
				'Bongripper',
				'Conan',
				'Windhand',
				'Monolord'
			],
			sources: [
				'https://www.allmusic.com/style/stoner-metal-ma0000011961',
				'https://en.wikipedia.org/wiki/Doom_metal#Stoner_metal'
			]
		},
		{
			name: 'Occult Rock',
			year: 1969,
			heaviness: 51,
			font: 'blackletter',
			description: 'Heavy rock steeped in the occult, with witchy imagery, organs and haunting vocals.',
			bands: [
				'Coven',
				'Black Widow',
				'Witchcraft',
				"The Devil's Blood",
				'Blood Ceremony',
				'Ghost',
				'Uncle Acid & the Deadbeats',
				'Purson',
				'Lucifer',
				'Graveyard'
			],
			sources: ['https://en.wikipedia.org/wiki/Occult_rock']
		},
		{
			name: 'Sludge Metal',
			year: 1988,
			heaviness: 81,
			font: 'pirate',
			description: "Doom's slowness with hardcore's anger and a filthy, feedback-drenched tone.",
			bands: [
				'Melvins',
				'Eyehategod',
				'Crowbar',
				'Acid Bath',
				'Iron Monkey',
				'Down',
				'High on Fire',
				'Mastodon',
				'The Body',
				'Thou'
			],
			sources: [
				'https://www.allmusic.com/style/sludge-metal-ma0000012161',
				'https://en.wikipedia.org/wiki/Sludge_metal'
			]
		},
		{
			name: 'Drone Metal',
			year: 1991,
			heaviness: 78,
			font: 'typewriter',
			description: 'Sustained, distorted tones and vast amplifier worship with little rhythm at all.',
			bands: [
				'Earth',
				'Sunn O)))',
				'Boris',
				'Burning Witch',
				'Khanate',
				'Nadja',
				'Corrupted',
				'Bong',
				'Moss',
				'Locrian'
			],
			sources: [
				'https://www.allmusic.com/style/drone-metal-ma0000013582',
				'https://en.wikipedia.org/wiki/Drone_metal'
			]
		},
		{
			name: 'Post-Metal',
			year: 1995,
			heaviness: 73,
			font: 'blackletter',
			description: 'Long, atmospheric builds blending sludge with post-rock.',
			bands: [
				'Neurosis',
				'Isis',
				'Cult of Luna',
				'Pelican',
				'Jesu',
				'Callisto',
				'Rosetta',
				'Russian Circles',
				'Year of No Light',
				'Amenra'
			],
			sources: [
				'https://www.allmusic.com/style/post-metal-ma0000013404',
				'https://en.wikipedia.org/wiki/Post-metal'
			]
		}
	]
};
