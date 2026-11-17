import type { SceneDefinition } from '../types';

export const rootsRock: SceneDefinition = {
	id: 'roots',
	kind: 'Rock',
	name: 'Blues, Southern & Roots',
	genres: [
		{
			name: 'Blues Rock',
			year: 1966,
			heaviness: 32,
			font: 'western',
			description: 'Electric blues amplified and stretched out with extended guitar solos.',
			bands: [
				'The Jimi Hendrix Experience',
				'Cream',
				'The Allman Brothers Band',
				'Johnny Winter',
				'Rory Gallagher',
				'ZZ Top',
				'Stevie Ray Vaughan',
				'Gary Moore',
				'The Black Keys',
				'Joe Bonamassa'
			]
		},
		{
			name: 'British Blues',
			year: 1962,
			heaviness: 24,
			font: 'western',
			description: 'Young British players reviving Chicago blues and launching a generation of guitar heroes.',
			bands: [
				'Blues Incorporated',
				'John Mayall & the Bluesbreakers',
				'The Yardbirds',
				'Cream',
				'Fleetwood Mac',
				'Ten Years After',
				'Savoy Brown',
				'Chicken Shack',
				'Free',
				'Taste'
			]
		},
		{
			name: 'Southern Rock',
			year: 1970,
			heaviness: 33,
			font: 'western',
			description: 'Blues, country and boogie with twin lead guitars and Dixie pride.',
			bands: [
				'The Allman Brothers Band',
				'Lynyrd Skynyrd',
				'The Marshall Tucker Band',
				'The Outlaws',
				'Molly Hatchet',
				'.38 Special',
				'The Charlie Daniels Band',
				'Wet Willie',
				'Blackfoot',
				'Drive-By Truckers'
			]
		},
		{
			name: 'Country Rock',
			year: 1968,
			heaviness: 9,
			font: 'western',
			description: 'Rock bands borrowing pedal steel, twang and country songcraft.',
			bands: [
				'The Byrds',
				'The Flying Burrito Brothers',
				'Gram Parsons',
				'Poco',
				'Eagles',
				'The Nitty Gritty Dirt Band',
				'Linda Ronstadt',
				'New Riders of the Purple Sage',
				'Pure Prairie League'
			]
		},
		{
			name: 'Swamp Rock',
			year: 1968,
			heaviness: 20,
			font: 'western',
			description: 'Gritty, Louisiana-flavored rock steeped in bayou blues and soul.',
			bands: [
				'Creedence Clearwater Revival',
				'Tony Joe White',
				'Dr. John',
				'Dale Hawkins',
				'J.J. Cale',
				'Little Feat',
				'Delaney & Bonnie'
			]
		},
		{
			name: 'Heartland Rock',
			year: 1975,
			heaviness: 15,
			font: 'condensed',
			description: 'Plainspoken, working-class American rock about small towns and open roads.',
			bands: [
				'Bruce Springsteen',
				'Tom Petty and the Heartbreakers',
				'John Mellencamp',
				'Bob Seger',
				'Bryan Adams',
				'Melissa Etheridge',
				'Steve Earle',
				'The Gaslight Anthem',
				'The War on Drugs'
			]
		},
		{
			name: 'Roots Rock',
			year: 1968,
			heaviness: 16,
			font: 'western',
			description: 'Back-to-basics rock drawing on folk, blues, country and R&B.',
			bands: [
				'The Band',
				'Little Feat',
				'Los Lobos',
				'The Blasters',
				'John Hiatt',
				'The BoDeans',
				'The Black Crowes',
				'Tedeschi Trucks Band'
			]
		},
		{
			name: 'Alt-Country',
			year: 1990,
			heaviness: 11,
			font: 'western',
			description: 'Country with punk attitude and indie-rock grit.',
			bands: [
				'Uncle Tupelo',
				'Wilco',
				'Son Volt',
				'The Jayhawks',
				'Whiskeytown',
				'Ryan Adams',
				"Old 97's",
				'Drive-By Truckers',
				'Lucinda Williams',
				'Jason Isbell'
			]
		},
		{
			name: 'Jam Band',
			year: 1966,
			heaviness: 12,
			font: 'groovy',
			description: 'Improvisation-heavy live bands where no two shows are the same.',
			bands: [
				'Grateful Dead',
				'The Allman Brothers Band',
				'Phish',
				'Widespread Panic',
				'Dave Matthews Band',
				'Blues Traveler',
				"Gov't Mule",
				'moe.',
				'The String Cheese Incident',
				"Umphrey's McGee"
			]
		},
		{
			name: 'Pub Rock',
			year: 1971,
			heaviness: 26,
			font: 'condensed',
			description: 'Stripped-back UK bar bands that cleared the path for punk.',
			bands: [
				'Dr. Feelgood',
				'Brinsley Schwarz',
				'Ducks Deluxe',
				'Eddie and the Hot Rods',
				'Kilburn and the High Roads',
				'The 101ers',
				'Graham Parker & the Rumour',
				'Bees Make Honey',
				'Chilli Willi and the Red Hot Peppers'
			]
		}
	]
};
