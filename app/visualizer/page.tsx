"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GitCommitGraph } from "@/components/git-commit-graph"
import { Loader2, GitBranch, Calendar, User, ExternalLink } from "lucide-react"

interface GitHubCommit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      email: string
      date: string
    }
  }
  author: {
    login: string
    avatar_url: string
  } | null
  parents: { sha: string }[]
}

export default function VisualizerPage() {
  const searchParams = useSearchParams()
  const [repoUrl, setRepoUrl] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("main")
  const [commitLimit, setCommitLimit] = useState("50")
  const [isLoading, setIsLoading] = useState(false)
  const [commits, setCommits] = useState<GitHubCommit[]>([])
  const [error, setError] = useState("")
  const [repoInfo, setRepoInfo] = useState<{ owner: string; repo: string } | null>(null)

  useEffect(() => {
    const repoParam = searchParams.get("repo")
    if (repoParam) {
      const decodedUrl = decodeURIComponent(repoParam)
      setRepoUrl(decodedUrl)
      // Auto-trigger visualization if URL is provided
      handleVisualize(decodedUrl)
    }
  }, [searchParams])

  const parseGitHubUrl = (url: string) => {
    try {
      const cleanUrl = url.trim().replace(/\/$/, "")
      const githubUrlPattern = /^https:\/\/github\.com\/([\w\-.]+)\/([\w\-.]+)(?:\/.*)?$/
      const match = cleanUrl.match(githubUrlPattern)

      if (match) {
        return {
          owner: match[1],
          repo: match[2],
        }
      }
      return null
    } catch {
      return null
    }
  }

  const handleVisualize = async (urlOverride?: string) => {
    const url = urlOverride || repoUrl
    if (!url.trim()) {
      setError("Please enter a valid GitHub repository URL")
      return
    }

    const parsedRepo = parseGitHubUrl(url)
    if (!parsedRepo) {
      setError("Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo)")
      return
    }

    setIsLoading(true)
    setError("")
    setRepoInfo(parsedRepo)

    try {
      console.log(`[v0] Fetching commits for ${parsedRepo.owner}/${parsedRepo.repo}`)

      const response = await fetch(
        `/api/github/commits?owner=${parsedRepo.owner}&repo=${parsedRepo.repo}&branch=${selectedBranch}&per_page=${commitLimit === "all" ? "100" : commitLimit}`,
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch repository data")
      }

      const fetchedCommits = await response.json()
      console.log(`[v0] Successfully loaded ${fetchedCommits.length} commits`)

      setCommits(fetchedCommits)
      setError("")
    } catch (err) {
      console.log("[v0] Error fetching commits:", err)
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch repository data"
      setError(errorMessage)
      setCommits([])
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const truncateSha = (sha: string) => sha.substring(0, 7)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container max-w-screen-xl py-4 md:py-8">
        <div className="space-y-6 md:space-y-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <GitBranch className="h-5 w-5 text-primary" />
                Repository Visualizer
                {repoInfo && (
                  <a
                    href={`https://github.com/${repoInfo.owner}/${repoInfo.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on GitHub
                  </a>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="https://github.com/vercel/next.js"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVisualize()}
                  className="font-mono text-sm flex-1"
                />
                <Button onClick={() => handleVisualize()} disabled={isLoading} className="sm:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Visualize"
                  )}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Branch</label>
                  <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">main</SelectItem>
                      <SelectItem value="master">master</SelectItem>
                      <SelectItem value="develop">develop</SelectItem>
                      <SelectItem value="dev">dev</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Commits</label>
                  <Select value={commitLimit} onValueChange={setCommitLimit}>
                    <SelectTrigger className="w-full sm:w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error State */}
          {error && (
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <p className="text-destructive text-sm">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {isLoading && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                    <p className="text-muted-foreground">Fetching commit history from GitHub...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Visualization Section */}
          {commits.length > 0 && !isLoading && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
              {/* Commit Graph */}
              <div className="xl:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Commit Graph</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <GitCommitGraph commits={commits} />
                  </CardContent>
                </Card>
              </div>

              {/* Commit Details */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Commits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {commits.map((commit) => (
                      <div key={commit.sha} className="space-y-2 pb-4 border-b last:border-b-0">
                        <div className="font-mono text-sm text-primary break-all">{truncateSha(commit.sha)}</div>
                        <p className="text-sm font-medium leading-relaxed">{commit.commit.message}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">{commit.author?.login || commit.commit.author.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 flex-shrink-0" />
                            {formatDate(commit.commit.author.date)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Empty State */}
          {commits.length === 0 && !isLoading && !error && (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12 space-y-4">
                  <GitBranch className="h-12 w-12 mx-auto text-muted-foreground" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">No Repository Loaded</h3>
                    <p className="text-muted-foreground">
                      Enter a GitHub repository URL above to visualize its commit history.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
