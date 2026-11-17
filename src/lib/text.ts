// Letters that NFD normalization does not split into a base letter plus an accent.
const standaloneLetters: Record<string, string> = { æ: 'ae', ð: 'd', ı: 'i', ł: 'l', ø: 'o', ß: 'ss', þ: 'th' };

// Lowercases and strips accents so "motorhead" finds Motörhead and "boowy" finds Boøwy.
export function normalizeText(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.replace(/[æðıłøßþ]/g, (letter) => standaloneLetters[letter]);
}

export function slugify(text: string): string {
	return normalizeText(text)
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}
