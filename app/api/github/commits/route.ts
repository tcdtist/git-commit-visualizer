import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const owner = searchParams.get("owner")
  const repo = searchParams.get("repo")
  const branch = searchParams.get("branch") || "main"
  const per_page = searchParams.get("per_page") || "50"

  if (!owner || !repo) {
    return NextResponse.json({ error: "Owner and repo parameters are required" }, { status: 400 })
  }

  try {
    console.log(`[v0] Fetching commits from GitHub API: ${owner}/${repo}`)

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${per_page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "GitGraph-Visualizer",
          // Add GitHub token if available (optional for public repos)
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        // Cache for 5 minutes
        next: { revalidate: 300 },
      },
    )

    if (!response.ok) {
      console.log(`[v0] GitHub API error: ${response.status} ${response.statusText}`)

      if (response.status === 404) {
        return NextResponse.json({ error: "Repository not found or is private" }, { status: 404 })
      }

      if (response.status === 403) {
        return NextResponse.json({ error: "API rate limit exceeded. Please try again later." }, { status: 429 })
      }

      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const commits = await response.json()
    console.log(`[v0] Successfully fetched ${commits.length} commits`)

    return NextResponse.json(commits)
  } catch (error) {
    console.log("[v0] Error fetching commits:", error)
    return NextResponse.json({ error: "Failed to fetch repository data" }, { status: 500 })
  }
}
