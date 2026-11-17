import { useCallback, useLayoutEffect, useRef } from 'react';

function isOffscreen(rect: DOMRect): boolean {
	return rect.bottom < 0 || rect.top > window.innerHeight;
}

// FLIP reorder animation: call captureLayout() right before a state change that reorders the tiles.
export function useFlipAnimation() {
	const tileElements = useRef(new Map<string, HTMLElement>());
	const capturedRects = useRef<Map<string, DOMRect> | null>(null);

	const registerTile = useCallback((id: string, element: HTMLElement | null) => {
		if (element) tileElements.current.set(id, element);
		else tileElements.current.delete(id);
	}, []);

	const captureLayout = useCallback(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const rects = new Map<string, DOMRect>();
		tileElements.current.forEach((element, id) => rects.set(id, element.getBoundingClientRect()));
		capturedRects.current = rects;
	}, []);

	// Runs after every commit; it only does work when a layout was captured just before that commit.
	useLayoutEffect(() => {
		const firstRects = capturedRects.current;
		if (!firstRects) return;
		capturedRects.current = null;
		tileElements.current.forEach((element, id) => {
			const firstRect = firstRects.get(id);
			if (!firstRect) return;
			const lastRect = element.getBoundingClientRect();
			if (isOffscreen(firstRect) && isOffscreen(lastRect)) return;
			const deltaX = firstRect.left - lastRect.left;
			const deltaY = firstRect.top - lastRect.top;
			if (!deltaX && !deltaY) return;
			element.animate([{ transform: `translate(${deltaX}px, ${deltaY}px)` }, { transform: 'none' }], {
				duration: 380,
				easing: 'cubic-bezier(.2, .7, .2, 1)'
			});
		});
	});

	return { captureLayout, registerTile };
}
