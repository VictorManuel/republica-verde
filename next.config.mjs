const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const repoBasePath = isGithubActions && repository ? `/${repository}` : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
