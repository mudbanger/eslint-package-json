/**
 * Vercel Web Analytics integration for eslint-package-json
 * 
 * @see https://vercel.com/docs/analytics/quickstart
 */

/**
 * Options for Vercel Web Analytics
 */
export interface InjectOptions {
	/**
	 * The mode to use for the analytics script.
	 * - `auto` - Automatically detect the environment. Uses `production` if the environment cannot be determined.
	 * - `production` - Always use the production script. (Sends events to the server)
	 * - `development` - Always use the development script. (Logs events to the console)
	 * @default 'auto'
	 */
	mode?: 'auto' | 'development' | 'production';
	
	/**
	 * Whether to enable debug logging in development.
	 * @default true
	 */
	debug?: boolean;
	
	/**
	 * A middleware function to modify events before they are sent.
	 * Should return the event object or `null` to cancel the event.
	 */
	beforeSend?: (event: unknown) => unknown | null;
	
	/**
	 * Custom script source URL
	 */
	scriptSrc?: string;
	
	/**
	 * The DSN of the project to send events to. Only required when self-hosting.
	 */
	dsn?: string;
	
	/**
	 * Whether the injected script should track page views from pushState events.
	 * Disable if route is updated after pushState, a manually call page pageview().
	 */
	disableAutoTrack?: boolean;
	
	/**
	 * Framework identifier
	 */
	framework?: string;
	
	/**
	 * Base path for routing
	 */
	basePath?: string;
}

/**
 * Initialize Vercel Web Analytics for vanilla JavaScript environments.
 * This function can only be called in browser environments.
 * 
 * @param options - Optional configuration options for Web Analytics
 */
export function inject(options?: InjectOptions): void;

/**
 * Analytics React component
 * Re-exported from @vercel/analytics/react
 */
export { Analytics } from '@vercel/analytics/react';

/**
 * Track custom events
 * Re-exported from @vercel/analytics
 * 
 * @param name - The name of the event (e.g., 'Purchase', 'Click Button', 'Play Video')
 * @param properties - Additional properties of the event. Nested objects are not supported.
 */
export { track } from '@vercel/analytics';
