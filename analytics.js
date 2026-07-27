/**
 * Vercel Web Analytics integration for eslint-package-json
 *
 * This module provides Web Analytics functionality for any web interface
 * that might be built for this ESLint plugin (e.g., documentation site, demo page).
 *
 * @see https://vercel.com/docs/analytics/quickstart
 */

/**
 * Initialize Vercel Web Analytics for vanilla JavaScript environments
 *
 * Usage in HTML:
 * ```html
 * <script type="module">
 *   import { injectAnalytics } from './analytics.js';
 *   injectAnalytics();
 * </script>
 * ```
 *
 * Or for React/Next.js, import the Analytics component directly:
 * ```js
 * import { Analytics } from '@vercel/analytics/react';
 * // or for Next.js:
 * // import { Analytics } from '@vercel/analytics/next';
 * ```
 */
export function injectAnalytics() {
	// Check if running in a browser environment
	if (globalThis.window === undefined) {
		console.warn('Web Analytics can only be initialized in a browser environment');
		return;
	}

	// Dynamic import to avoid bundling in non-browser environments
	import('@vercel/analytics').then(module => {
		if (module.inject) {
			module.inject();
		}
	}).catch(error => {
		console.error('Failed to load Vercel Web Analytics:', error);
	});
}

// Re-export all Web Analytics functionality for convenience
export {Analytics} from '@vercel/analytics/react';
