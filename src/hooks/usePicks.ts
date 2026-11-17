import { useCallback, useEffect, useState } from 'react';

import { allBands } from '../data';

const storageKey = 'rock-genres:picked-bands';

function loadPicks(): ReadonlySet<string> {
	try {
		const parsed: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
		if (!Array.isArray(parsed)) return new Set();
		// Drop names that are no longer in the data so the total stays honest after list edits.
		return new Set(parsed.filter((band): band is string => typeof band === 'string' && allBands.has(band)));
	} catch {
		return new Set();
	}
}

// Picks are stored per band, so a band listed under several genres counts toward each of them.
export function usePicks() {
	const [picks, setPicks] = useState<ReadonlySet<string>>(loadPicks);

	useEffect(() => {
		try {
			localStorage.setItem(storageKey, JSON.stringify([...picks]));
		} catch {
			// Storage can be unavailable (private windows, blocked site data); picks then last for the session.
		}
	}, [picks]);

	const toggleBand = useCallback((band: string) => {
		setPicks((currentPicks) => {
			const nextPicks = new Set(currentPicks);
			if (nextPicks.has(band)) nextPicks.delete(band);
			else nextPicks.add(band);
			return nextPicks;
		});
	}, []);

	const clearPicks = useCallback(() => setPicks(new Set()), []);

	return { clearPicks, picks, toggleBand };
}
