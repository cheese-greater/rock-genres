import { bandKey } from './text';

export interface RestoredPicks {
	picks: ReadonlySet<string>;
	unmatchedNames: string[];
}

// Maps saved names onto the current band list, so a band respelled in a data edit keeps its pick.
// Names that match no current band are returned separately to keep in storage without counting them.
export function restorePicks(savedNames: readonly string[], bands: ReadonlySet<string>): RestoredPicks {
	const bandsByKey = new Map([...bands].map((band) => [bandKey(band), band]));
	const picks = new Set<string>();
	const unmatchedNames: string[] = [];
	for (const savedName of savedNames) {
		const band = bands.has(savedName) ? savedName : bandsByKey.get(bandKey(savedName));
		if (band) picks.add(band);
		else if (!unmatchedNames.includes(savedName)) unmatchedNames.push(savedName);
	}
	return { picks, unmatchedNames };
}
