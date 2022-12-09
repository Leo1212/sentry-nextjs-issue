const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const releaseTag = process.env.RELEASE_TAG 
const releaseCommit = process.env.RELEASE_COMMIT
const repositoryName = process.env.SENTRY_REPOSITORY_NAME

module.exports = withSentryConfig(nextConfig, {
  silent: !releaseTag,
	dryRun: !releaseTag,
	setCommits: releaseCommit
		? {
				commit: releaseCommit,
				repo: repositoryName
		  }
		: undefined
})
