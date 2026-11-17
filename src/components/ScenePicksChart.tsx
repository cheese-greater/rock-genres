import { useMemo, useState } from 'react';

import { genres } from '../data';
import { rankScenesByPicks } from '../lib/genres';

interface ScenePicksChartProps {
	picks: ReadonlySet<string>;
}

// Enough rows to show the shape of your taste without pushing the board far down on a phone.
const collapsedRowLimit = 6;

export default function ScenePicksChart({ picks }: ScenePicksChartProps) {
	const [showAllScenes, setShowAllScenes] = useState(false);
	const rankedScenes = useMemo(() => rankScenesByPicks(genres, picks), [picks]);

	if (!rankedScenes.length) return null;

	const highestCount = rankedScenes[0].pickedCount;
	const visibleScenes = showAllScenes ? rankedScenes : rankedScenes.slice(0, collapsedRowLimit);

	return (
		<section
			aria-labelledby='scene-chart-title'
			className='results'
		>
			<h2 id='scene-chart-title'>Your picks by scene</h2>
			<ol className='scene-bars'>
				{visibleScenes.map(({ bandTotal, pickedCount, scene }) => (
					<li
						className='scene-row'
						key={scene.id}
					>
						<div className='scene-label'>
							<span className='scene-name'>{scene.name}</span>
							<span className='scene-value'>
								{pickedCount} of {bandTotal} bands
							</span>
						</div>
						<span
							aria-hidden='true'
							className='scene-fill'
							style={{ width: `${(pickedCount / highestCount) * 100}%` }}
						/>
					</li>
				))}
			</ol>
			{rankedScenes.length > collapsedRowLimit && (
				<button
					aria-expanded={showAllScenes}
					className='link-button scene-toggle'
					onClick={() => setShowAllScenes(!showAllScenes)}
					type='button'
				>
					{showAllScenes ? 'Show fewer scenes' : `Show all ${rankedScenes.length} scenes`}
				</button>
			)}
		</section>
	);
}
