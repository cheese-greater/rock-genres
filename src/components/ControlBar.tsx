import { useEffect, useState } from 'react';

import { genres, scenes } from '../data';
import type { GenreKind } from '../data/types';
import type { KindFilter, SortMode } from '../lib/genres';

interface ControlBarProps {
	kindFilter: KindFilter;
	onClear: () => void;
	onKindChange: (kind: KindFilter) => void;
	onQueryChange: (query: string) => void;
	onSceneChange: (sceneId: string) => void;
	onSortChange: (sortMode: SortMode) => void;
	pickedTotal: number;
	query: string;
	sceneFilter: string;
	sortMode: SortMode;
}

const kindOptions: KindFilter[] = ['All', 'Rock', 'Metal'];
const genreKinds: GenreKind[] = ['Rock', 'Metal'];

const sortOptions: { label: string; mode: SortMode }[] = [
	{ label: 'Softest to hardest', mode: 'heaviness' },
	{ label: 'Oldest first', mode: 'timeline' },
	{ label: 'My favorites first', mode: 'favorites' }
];

function genreCount(kind: KindFilter): number {
	return kind === 'All' ? genres.length : genres.filter((genre) => genre.scene.kind === kind).length;
}

export default function ControlBar({
	kindFilter,
	onClear,
	onKindChange,
	onQueryChange,
	onSceneChange,
	onSortChange,
	pickedTotal,
	query,
	sceneFilter,
	sortMode
}: ControlBarProps) {
	const [confirmingClear, setConfirmingClear] = useState(false);

	useEffect(() => {
		if (!confirmingClear) return;
		const timeoutId = window.setTimeout(() => setConfirmingClear(false), 3000);
		return () => window.clearTimeout(timeoutId);
	}, [confirmingClear]);

	function handleClearClick() {
		if (!confirmingClear) {
			setConfirmingClear(true);
			return;
		}
		setConfirmingClear(false);
		onClear();
	}

	const visibleKinds = kindFilter === 'All' ? genreKinds : [kindFilter];

	return (
		<div
			aria-label='Controls'
			className='bar'
			role='region'
		>
			<div className='bar-inner'>
				<div
					aria-live='polite'
					className='count'
				>
					<b>{pickedTotal}</b> {pickedTotal === 1 ? 'band' : 'bands'} picked
				</div>
				<div className='spacer' />
				<label className='search'>
					<span className='visually-hidden'>Search genres or bands</span>
					<input
						onChange={(event) => onQueryChange(event.target.value)}
						placeholder='Search genres or bands'
						type='search'
						value={query}
					/>
				</label>
				<div
					aria-label='Rock or metal'
					className='seg'
					role='group'
				>
					{kindOptions.map((kind) => (
						<button
							aria-pressed={kindFilter === kind}
							key={kind}
							onClick={() => onKindChange(kind)}
							type='button'
						>
							{kind} <span className='seg-count'>{genreCount(kind)}</span>
						</button>
					))}
				</div>
				<label className='select'>
					<span className='visually-hidden'>Scene</span>
					<select
						onChange={(event) => onSceneChange(event.target.value)}
						value={sceneFilter}
					>
						<option value='all'>All scenes</option>
						{visibleKinds.map((kind) => (
							<optgroup
								key={kind}
								label={kind}
							>
								{scenes
									.filter((scene) => scene.kind === kind)
									.map((scene) => (
										<option
											key={scene.id}
											value={scene.id}
										>
											{scene.name}
										</option>
									))}
							</optgroup>
						))}
					</select>
				</label>
				<div
					aria-label='Sort genres'
					className='seg'
					role='group'
				>
					{sortOptions.map((option) => (
						<button
							aria-pressed={sortMode === option.mode}
							key={option.mode}
							onClick={() => onSortChange(option.mode)}
							type='button'
						>
							{option.label}
						</button>
					))}
				</div>
				<button
					className={confirmingClear ? 'ghost danger' : 'ghost'}
					disabled={!pickedTotal && !confirmingClear}
					onClick={handleClearClick}
					type='button'
				>
					{confirmingClear ? 'Tap again to clear' : 'Clear picks'}
				</button>
			</div>
		</div>
	);
}
