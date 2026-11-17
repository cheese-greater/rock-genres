import { useMemo } from 'react';

import { genres } from '../data';
import type { Genre } from '../data/types';
import { useFitText } from '../hooks/useFitText';
import { countPicked, fontStacks, rankByPicks } from '../lib/genres';

interface TopGenresProps {
	picks: ReadonlySet<string>;
}

interface PodiumNameProps {
	genre: Genre;
}

function PodiumName({ genre }: PodiumNameProps) {
	const nameRef = useFitText<HTMLDivElement>();
	return (
		<div
			className='podium-name'
			ref={nameRef}
			style={{ fontFamily: fontStacks[genre.font] }}
		>
			{genre.name}
		</div>
	);
}

export default function TopGenres({ picks }: TopGenresProps) {
	const topGenres = useMemo(
		() =>
			rankByPicks(genres, picks)
				.filter((genre) => countPicked(genre, picks) > 0)
				.slice(0, 3),
		[picks]
	);

	if (!topGenres.length) return null;

	return (
		<section
			aria-live='polite'
			className='results'
		>
			<h2>Your top genres</h2>
			<ol className='podium'>
				{topGenres.map((genre, index) => {
					const pickedCount = countPicked(genre, picks);
					const shareOfPicks = Math.round((pickedCount / picks.size) * 100);
					return (
						<li
							className='podium-place'
							key={genre.id}
						>
							<span className='place'>{index + 1}</span>
							<div className='podium-text'>
								<PodiumName genre={genre} />
								<div className='podium-meta'>
									{pickedCount} of {genre.bands.length} bands, {shareOfPicks}% of your picks
								</div>
							</div>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
