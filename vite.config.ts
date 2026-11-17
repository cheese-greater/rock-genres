import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

const appDescription = 'Tap the bands you like and see which of over 160 rock and metal genres you love most.';
const backgroundColor = '#0b0b0c';
const oneYearInSeconds = 60 * 60 * 24 * 365;

export default defineConfig({
	// Relative asset paths so the build works under the GitHub Pages project path (/rock-genres/) or any other.
	base: './',
	plugins: [
		react(),
		VitePWA({
			includeAssets: ['apple-touch-icon.png', 'favicon.svg'],
			manifest: {
				background_color: backgroundColor,
				categories: ['entertainment', 'music'],
				description: appDescription,
				display: 'standalone',
				icons: [
					{ sizes: '192x192', src: 'icon-192.png', type: 'image/png' },
					{ sizes: '512x512', src: 'icon-512.png', type: 'image/png' },
					{ purpose: 'maskable', sizes: '512x512', src: 'icon-maskable-512.png', type: 'image/png' }
				],
				id: './',
				name: 'Find Your Rock & Metal Genre',
				short_name: 'Rock Genres',
				theme_color: backgroundColor
			},
			// New deploys activate on the next visit without asking; picks live in localStorage so nothing is lost.
			registerType: 'autoUpdate',
			workbox: {
				// Google Fonts are cross-origin, so cache them at runtime to keep the display faces offline.
				runtimeCaching: [
					{
						handler: 'StaleWhileRevalidate',
						options: { cacheName: 'google-fonts-stylesheets' },
						urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com'
					},
					{
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-webfonts',
							cacheableResponse: { statuses: [0, 200] },
							expiration: { maxAgeSeconds: oneYearInSeconds, maxEntries: 60 }
						},
						urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com'
					}
				]
			}
		})
	],
	test: {
		environment: 'node'
	}
});
