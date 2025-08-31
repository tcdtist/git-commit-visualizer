import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Search, Eye, Zap } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container max-w-screen-xl py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">How GitGraph Works</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A simple, three-step process to visualize any public GitHub repository's commit history
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">1. Enter Repository URL</h3>
                  <p className="text-muted-foreground">
                    Paste any public GitHub repository URL into our input field. We support all standard GitHub
                    repository formats.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <GitBranch className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2. Fetch Commit Data</h3>
                  <p className="text-muted-foreground">
                    Our system uses the GitHub API to securely fetch commit history, branch information, and metadata
                    from your specified repository.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">3. Visualize & Explore</h3>
                  <p className="text-muted-foreground">
                    View your commit history in a clean, interactive graph format with detailed commit information and
                    branch visualization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Technical Implementation</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-accent" />
                    GitHub API Integration
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Secure API calls to GitHub's REST API</li>
                    <li>• Real-time commit data fetching</li>
                    <li>• Branch and tag information retrieval</li>
                    <li>• Rate limiting and error handling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Eye className="h-5 w-5 text-accent" />
                    Visualization Engine
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Interactive commit graph rendering</li>
                    <li>• Branch relationship mapping</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Real-time filtering and sorting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Branch Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Choose which branch to visualize from a dropdown of available branches in the repository.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Commit Limiting</h4>
                <p className="text-sm text-muted-foreground">
                  Control the number of commits displayed (25, 50, 100, or all) for optimal performance.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Detailed Information</h4>
                <p className="text-sm text-muted-foreground">
                  View commit messages, authors, dates, and SHA hashes in an organized, readable format.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Dark Mode Support</h4>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark themes for comfortable viewing in any environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
