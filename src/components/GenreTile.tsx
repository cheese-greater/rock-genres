import { memo, useCallback } from 'react';

import type { Genre } from '../data/types';
import { useFitText } from '../hooks/useFitText';
import { bandMatchesQuery, countPicked, eraLabel, fontStacks, tileTint } from '../lib/genres';

interface GenreTileProps {
	genre: Genre;
	normalizedQuery: string;
	onToggleBand: (band: string) => void;
	picks: ReadonlySet<string>;
	registerTile: (id: string, element: HTMLElement | null) => void;
}

function GenreTile({ genre, normalizedQuery, onToggleBand, picks, registerTile }: GenreTileProps) {
	const tileRef = useCallback(
		(element: HTMLElement | null) => registerTile(genre.id, element),
		[genre.id, registerTile]
	);
	const titleRef = useFitText<HTMLHeadingElement>();
	const pickedCount = countPicked(genre, picks);
	const pickedShare = pickedCount / genre.bands.length;
	const titleId = `genre-${genre.id}`;
	const classNames = ['tile', genre.scene.kind === 'Rock' && 'rock', pickedShare >= 0.4 && 'lit'].filter(Boolean);

	return (
		<article
			aria-labelledby={titleId}
			className={classNames.join(' ')}
			ref={tileRef}
			style={
				pickedCount
					? { backgroundColor: tileTint(genre.scene.kind, pickedShare), borderColor: 'var(--accent)' }
					: undefined
			}
		>
			<div className='meta'>
				<span className='scene'>{genre.scene.name}</span>
				<span className='era'>{eraLabel(genre.year)}</span>
			</div>
			<h3
				id={titleId}
				ref={titleRef}
				style={{ fontFamily: fontStacks[genre.font] }}
			>
				{genre.name}
			</h3>
			<p className='description'>{genre.description}</p>
			<div
				className='meter'
				title={`Heaviness ${genre.heaviness} of 100`}
			>
				<span style={{ width: `${genre.heaviness}%` }} />
			</div>
			<ul className='bands'>
				{genre.bands.map((band) => (
					<li key={band}>
						<button
							aria-pressed={picks.has(band)}
							className={bandMatchesQuery(band, normalizedQuery) ? 'band match' : 'band'}
							onClick={() => onToggleBand(band)}
							type='button'
						>
							<span
								aria-hidden='true'
								className='box'
							/>
							<span>{band}</span>
						</button>
					</li>
				))}
			</ul>
			<div className='picked'>{pickedCount ? `${pickedCount} of ${genre.bands.length} picked` : ''}</div>
		</article>
	);
}

// Re-render only when this tile's own bands change pick state, not on every pick anywhere on the board.
function arePropsEqual(previous: GenreTileProps, next: GenreTileProps): boolean {
	return (
		previous.genre === next.genre &&
		previous.normalizedQuery === next.normalizedQuery &&
		previous.onToggleBand === next.onToggleBand &&
		previous.registerTile === next.registerTile &&
		previous.genre.bands.every((band) => previous.picks.has(band) === next.picks.has(band))
	);
}

export default memo(GenreTile, arePropsEqual);
