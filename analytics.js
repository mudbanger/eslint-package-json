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
 *   import { inject } from './analytics.js';
 *   inject({ mode: 'production' });
 * </script>
 * ```
 *
 * Or for React/Next.js, import the Analytics component directly:
 * ```js
 * import { Analytics } from '@vercel/analytics/react';
 * // or for Next.js:
 * // import { Analytics } from '@vercel/analytics/next';
 * ```
 *
 * @param {object} [options] - Analytics configuration options
 * @param {'auto' | 'development' | 'production'} [options.mode='auto'] - Environment mode
 * @param {boolean} [options.debug=false] - Enable debug logging
 * @param {Function} [options.beforeSend] - Callback to modify events before sending
 * @param {string} [options.scriptSrc] - Custom script URL
 * @param {string} [options.eventEndpoint] - Custom event endpoint
 * @param {string} [options.viewEndpoint] - Custom view endpoint
 */
export function inject(options = {}) {
	// Check if running in a browser environment
	if (globalThis.window === undefined) {
		console.warn('Web Analytics can only be initialized in a browser environment');
		return;
	}

	// Dynamic import to avoid bundling in non-browser environments
	import('@vercel/analytics').then(module => {
		module.inject(options);
	}).catch(error => {
		console.error('Failed to load Vercel Web Analytics:', error);
	});
}

// Re-export all Web Analytics functionality for convenience
export {Analytics} from '@vercel/analytics/react';
export {track} from '@vercel/analytics';
