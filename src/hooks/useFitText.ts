import { useLayoutEffect, useRef } from 'react';

// Shrinks text below its CSS font size only as far as its longest word needs to fit, so words never split mid-letter.
export function useFitText<TextElement extends HTMLElement>() {
	const elementRef = useRef<TextElement>(null);

	useLayoutEffect(() => {
		const element = elementRef.current;
		if (!element) return;
		let measuredWidth = -1;
		let active = true;

		function fit(force: boolean) {
			if (!active || !element) return;
			const availableWidth = element.clientWidth;
			// Shrinking changes the height, which re-triggers the observer; only a new width needs a refit.
			if (!force && availableWidth === measuredWidth) return;
			measuredWidth = availableWidth;
			element.style.fontSize = '';
			if (element.scrollWidth <= availableWidth) return;
			const fullSize = parseFloat(getComputedStyle(element).fontSize);
			element.style.fontSize = `${Math.floor((fullSize * availableWidth) / element.scrollWidth)}px`;
		}

		// Web fonts arrive after the first layout and change every width, so refit when they finish loading.
		const refit = () => fit(true);
		const resizeObserver = new ResizeObserver(() => fit(false));
		refit();
		resizeObserver.observe(element);
		document.fonts.addEventListener('loadingdone', refit);
		void document.fonts.ready.then(refit);

		return () => {
			active = false;
			resizeObserver.disconnect();
			document.fonts.removeEventListener('loadingdone', refit);
		};
	}, []);

	return elementRef;
}
