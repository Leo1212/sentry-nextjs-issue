// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

/** @type {import('../backend/src/types/config.types').Environment} */
const MY_ENVIRONMENT = process.env.MY_ENVIRONMENT || 'dev-local'

/** @type {Array<import('../backend/src/types/config.types').Environment>} */
const DISABLED_SENTRY_ENVIRONMENTS = ['dev-local']

Sentry.init({
	dsn: DISABLED_SENTRY_ENVIRONMENTS.includes(MY_ENVIRONMENT) ? null : SENTRY_DSN,
	tracesSampleRate: 1.0,
	environment: MY_ENVIRONMENT
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
})
