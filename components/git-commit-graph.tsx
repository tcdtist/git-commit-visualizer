"use client"

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

interface GitCommitGraphProps {
  commits: GitHubCommit[]
}

export function GitCommitGraph({ commits }: GitCommitGraphProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const truncateSha = (sha: string) => sha.substring(0, 7)

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-4">
        Showing {commits.length} commit{commits.length !== 1 ? "s" : ""}
      </div>

      {/* Enhanced Git Graph Visualization */}
      <div className="relative overflow-x-auto">
        {/* Main branch line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-4 md:space-y-6 min-w-0">
          {commits.map((commit, index) => {
            const isFirstCommit = index === 0
            const isLastCommit = index === commits.length - 1
            const hasMerge = commit.parents.length > 1

            return (
              <div key={commit.sha} className="relative flex items-start gap-3 md:gap-4">
                {/* Commit Node */}
                <div
                  className={`relative z-10 h-3 w-3 rounded-full border-2 border-background flex-shrink-0 ${
                    hasMerge ? "bg-chart-2" : isFirstCommit ? "bg-chart-1" : "bg-primary"
                  }`}
                ></div>

                {/* Branch connections for merges */}
                {hasMerge && <div className="absolute left-4 top-1.5 w-8 h-0.5 bg-chart-2 opacity-60"></div>}

                {/* Commit Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <span className="font-mono text-sm text-primary font-medium break-all">
                      {truncateSha(commit.sha)}
                    </span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
                    <span className="text-xs text-muted-foreground">{formatDate(commit.commit.author.date)}</span>
                    {hasMerge && (
                      <>
                        <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
                        <span className="text-xs text-chart-2 font-medium">merge</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm font-medium mb-1 leading-relaxed text-foreground">{commit.commit.message}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>by {commit.author?.login || commit.commit.author.name}</span>
                    {commit.author?.avatar_url && (
                      <img
                        src={commit.author.avatar_url || "/placeholder.svg"}
                        alt={commit.author.login}
                        className="h-4 w-4 rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Enhanced Graph Legend */}
      <div className="mt-6 pt-4 border-t">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
            <span>Commit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-chart-1 flex-shrink-0"></div>
            <span>Latest</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-chart-2 flex-shrink-0"></div>
            <span>Merge</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-4 bg-border flex-shrink-0"></div>
            <span>Timeline</span>
          </div>
        </div>
      </div>
    </div>
  )
}
