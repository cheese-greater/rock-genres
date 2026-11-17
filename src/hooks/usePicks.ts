import { useCallback, useEffect, useRef, useState } from 'react';

import { allBands } from '../data';
import { restorePicks } from '../lib/picks';
import type { RestoredPicks } from '../lib/picks';

const storageKey = 'rock-genres:picked-bands';

function loadPicks(): RestoredPicks {
	try {
		const parsed: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
		if (!Array.isArray(parsed)) return { picks: new Set(), unmatchedNames: [] };
		return restorePicks(
			parsed.filter((band): band is string => typeof band === 'string'),
			allBands
		);
	} catch {
		return { picks: new Set(), unmatchedNames: [] };
	}
}

// Picks are stored per band, so a band listed under several genres counts toward each of them.
export function usePicks() {
	const [restoredPicks] = useState(loadPicks);
	const [picks, setPicks] = useState<ReadonlySet<string>>(restoredPicks.picks);
	// Saved names missing from the current data stay in storage, so a band that returns in a later edit is still picked.
	const unmatchedNames = useRef(restoredPicks.unmatchedNames);

	useEffect(() => {
		try {
			localStorage.setItem(storageKey, JSON.stringify([...picks, ...unmatchedNames.current]));
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

	const clearPicks = useCallback(() => {
		unmatchedNames.current = [];
		setPicks(new Set());
	}, []);

	return { clearPicks, picks, toggleBand };
}
