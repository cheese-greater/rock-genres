import { useCallback, useDeferredValue, useMemo, useState } from 'react';

import ControlBar from './components/ControlBar';
import GenreTile from './components/GenreTile';
import ScenePicksChart from './components/ScenePicksChart';
import TopGenres from './components/TopGenres';
import { genres, scenes } from './data';
import { useFlipAnimation } from './hooks/useFlipAnimation';
import { usePicks } from './hooks/usePicks';
import { genreMatchesQuery, sortGenres } from './lib/genres';
import type { KindFilter, SortMode } from './lib/genres';
import { normalizeText } from './lib/text';

export default function App() {
	const { clearPicks, picks, toggleBand } = usePicks();
	const { captureLayout, registerTile } = useFlipAnimation();
	const [query, setQuery] = useState('');
	const [kindFilter, setKindFilter] = useState<KindFilter>('All');
	const [sceneFilter, setSceneFilter] = useState('all');
	const [sortMode, setSortMode] = useState<SortMode>('heaviness');

	const normalizedQuery = normalizeText(useDeferredValue(query).trim());

	const visibleGenres = useMemo(() => {
		const filteredGenres = genres.filter(
			(genre) =>
				(kindFilter === 'All' || genre.scene.kind === kindFilter) &&
				(sceneFilter === 'all' || genre.scene.id === sceneFilter) &&
				genreMatchesQuery(genre, normalizedQuery)
		);
		return sortGenres(filteredGenres, sortMode, picks);
	}, [kindFilter, normalizedQuery, picks, sceneFilter, sortMode]);

	const filtersActive = kindFilter !== 'All' || sceneFilter !== 'all' || normalizedQuery.length > 0;

	const handleToggleBand = useCallback(
		(band: string) => {
			// Favorites re-rank on every pick, so animate the tiles into their new places.
			if (sortMode === 'favorites') captureLayout();
			toggleBand(band);
		},
		[captureLayout, sortMode, toggleBand]
	);

	function handleSortChange(nextSortMode: SortMode) {
		captureLayout();
		setSortMode(nextSortMode);
	}

	function handleKindChange(nextKind: KindFilter) {
		setKindFilter(nextKind);
		const selectedScene = scenes.find((scene) => scene.id === sceneFilter);
		if (selectedScene && nextKind !== 'All' && selectedScene.kind !== nextKind) setSceneFilter('all');
	}

	function handleClear() {
		captureLayout();
		clearPicks();
	}

	function resetFilters() {
		setQuery('');
		setKindFilter('All');
		setSceneFilter('all');
	}

	return (
		<>
			<div className='wrap'>
				<header className='hero'>
					<div className='kicker'>Find your sound</div>
					<h1>The Genres of Rock &amp; Metal</h1>
					<p className='lede'>
						Each of the {genres.length} genres lists five to ten bands that defined it, from its pioneers to
						recent standouts, picked as representatives rather than rankings. Tap every band you like: a
						band that appears in several genres counts toward each one, and each genre lights up as you pick
						its bands. Then sort the board to see which styles you love most.
					</p>
				</header>
			</div>
			<ControlBar
				kindFilter={kindFilter}
				onClear={handleClear}
				onKindChange={handleKindChange}
				onQueryChange={setQuery}
				onSceneChange={setSceneFilter}
				onSortChange={handleSortChange}
				pickedTotal={picks.size}
				query={query}
				sceneFilter={sceneFilter}
				sortMode={sortMode}
			/>
			<div className='wrap board'>
				<TopGenres picks={picks} />
				<ScenePicksChart picks={picks} />
				<div className='grid-status'>
					<span>
						Showing {visibleGenres.length} of {genres.length} genres
					</span>
					{filtersActive && (
						<button
							className='link-button'
							onClick={resetFilters}
							type='button'
						>
							Reset filters
						</button>
					)}
				</div>
				{visibleGenres.length ? (
					<main className='grid'>
						{visibleGenres.map((genre) => (
							<GenreTile
								genre={genre}
								key={genre.id}
								normalizedQuery={normalizedQuery}
								onToggleBand={handleToggleBand}
								picks={picks}
								registerTile={registerTile}
							/>
						))}
					</main>
				) : (
					<main className='empty'>
						<p>No genres or bands match your filters.</p>
						<button
							className='ghost'
							onClick={resetFilters}
							type='button'
						>
							Reset filters
						</button>
					</main>
				)}
				<footer>
					<span>
						Softest-to-hardest order, origin dates and genre lines are approximate: many bands span several
						styles.
					</span>
					<span>
						Your picks are saved in this browser.{' '}
						<a href='https://github.com/cheese-greater/rock-genres'>Source on GitHub</a>
					</span>
				</footer>
			</div>
		</>
	);
}
