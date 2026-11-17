export type GenreKind = 'Rock' | 'Metal';

export type FontStyle =
	| 'blackletter'
	| 'condensed'
	| 'groovy'
	| 'marker'
	| 'metal'
	| 'neon'
	| 'pirate'
	| 'rocker'
	| 'script'
	| 'space'
	| 'typewriter'
	| 'western';

export interface GenreEntry {
	name: string;
	// Approximate year the style took shape, used for the timeline sort and the era label.
	year: number;
	// Rough 1 to 100 position on the softest-to-hardest scale.
	heaviness: number;
	font: FontStyle;
	description: string;
	bands: string[];
	// Reference pages the band list was checked against, such as the AllMusic style page and the Wikipedia article.
	sources: string[];
}

export interface Scene {
	id: string;
	kind: GenreKind;
	name: string;
}

export interface SceneDefinition extends Scene {
	genres: GenreEntry[];
}

export interface Genre extends GenreEntry {
	id: string;
	scene: Scene;
}
