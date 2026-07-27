/**
 * Vercel Speed Insights integration for eslint-package-json
 * 
 * @see https://vercel.com/docs/speed-insights/quickstart
 */

/**
 * Initialize Vercel Speed Insights for vanilla JavaScript environments.
 * This function can only be called in browser environments.
 */
export function injectSpeedInsights(): void;

/**
 * SpeedInsights React component
 * Re-exported from @vercel/speed-insights/react
 */
export { SpeedInsights } from '@vercel/speed-insights/react';
