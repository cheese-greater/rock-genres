import type { SceneDefinition } from '../types';

export const doomSludge: SceneDefinition = {
	id: 'doom',
	kind: 'Metal',
	name: 'Doom, Sludge & Drone',
	genres: [
		{
			name: 'Doom Metal',
			year: 1978,
			heaviness: 70,
			font: 'blackletter',
			description:
				'Slow tempos and crushing heaviness rooted in early Sabbath, at times with epic, operatic grandeur.',
			bands: [
				'Pentagram',
				'Witchfinder General',
				'Saint Vitus',
				'Trouble',
				'Candlemass',
				'Cathedral',
				'My Dying Bride',
				'Electric Wizard',
				'Reverend Bizarre',
				'Pallbearer'
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
			]
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
			]
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
			]
		},
		{
			name: 'Occult Rock',
			year: 2007,
			heaviness: 51,
			font: 'blackletter',
			description: 'Retro 70s heavy rock with witchy imagery, organs and haunting vocals.',
			bands: [
				'Coven',
				'Witchcraft',
				"The Devil's Blood",
				'Blood Ceremony',
				'Jex Thoth',
				'Ghost',
				'Uncle Acid & the Deadbeats',
				'Purson',
				'Lucifer',
				'Avatarium'
			]
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
				'Grief',
				'Iron Monkey',
				'Down',
				'High on Fire',
				'Mastodon',
				'Thou'
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
				'The Body'
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
			]
		}
	]
};
