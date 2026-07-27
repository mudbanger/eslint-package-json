/**
 * Vercel Speed Insights integration for eslint-package-json
 *
 * This module provides Speed Insights functionality for any web interface
 * that might be built for this ESLint plugin (e.g., documentation site, demo page).
 *
 * @see https://vercel.com/docs/speed-insights/quickstart
 */

/**
 * Initialize Vercel Speed Insights for vanilla JavaScript environments
 *
 * Usage in HTML:
 * ```html
 * <script type="module">
 *   import { injectSpeedInsights } from './speed-insights.js';
 *   injectSpeedInsights();
 * </script>
 * ```
 *
 * Or for React/Next.js, import the SpeedInsights component directly:
 * ```js
 * import { SpeedInsights } from '@vercel/speed-insights/react';
 * // or for Next.js:
 * // import { SpeedInsights } from '@vercel/speed-insights/next';
 * ```
 */
export function injectSpeedInsights() {
	// Check if running in a browser environment
	if (globalThis.window === undefined) {
		console.warn('Speed Insights can only be initialized in a browser environment');
		return;
	}

	// Dynamic import to avoid bundling in non-browser environments
	import('@vercel/speed-insights').then(module => {
		if (module.injectSpeedInsights) {
			module.injectSpeedInsights();
		}
	}).catch(error => {
		console.error('Failed to load Vercel Speed Insights:', error);
	});
}

// Re-export all Speed Insights functionality for convenience
export {SpeedInsights} from '@vercel/speed-insights/react';
