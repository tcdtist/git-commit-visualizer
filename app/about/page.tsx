import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitBranch, Github, Linkedin, Mail, Code, Users, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container max-w-screen-xl py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <GitBranch className="h-10 w-10 text-accent" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">About GitGraph</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                A developer-focused tool born from the need for simple, accessible Git visualization
              </p>
            </div>
          </div>

          {/* Project Story */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why GitGraph Exists</h2>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As developers, we often need to understand the commit history and branching structure of
                repositories—whether we're exploring open-source projects, onboarding to new codebases, or reviewing our
                own work. While tools like GitLens Pro offer powerful features, sometimes you just need a quick, clean
                visualization without the overhead.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                GitGraph was created to fill this gap: a lightweight, web-based tool that provides instant Git history
                visualization for any public GitHub repository. No installations, no extensions, no complexity—just
                paste a URL and explore.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Developer First</h3>
                <p className="text-sm text-muted-foreground">
                  Built by developers, for developers. Every feature is designed with the developer experience in mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Open source and community-focused. We believe great tools should be accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Simplicity</h3>
                <p className="text-sm text-muted-foreground">
                  Clean, fast, and focused. No bloat, no unnecessary features—just what you need to visualize Git
                  history.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Developer Profile */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Meet the Developer</h2>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-12 w-12 text-accent" />
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">Alex Developer</h3>
                      <p className="text-muted-foreground">Full-Stack Developer & Open Source Enthusiast</p>
                    </div>

                    <p className="text-muted-foreground">
                      Passionate about creating developer tools that solve real problems. With over 5 years of
                      experience in web development, I believe in building software that's both powerful and
                      approachable.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://linkedin.com">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="mailto:hello@gitgraph.dev">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Roadmap */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Future Roadmap</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Enhanced Visualizations</h4>
                <p className="text-sm text-muted-foreground">
                  More interactive graph types, merge visualization, and advanced filtering options.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Private Repository Support</h4>
                <p className="text-sm text-muted-foreground">
                  OAuth integration to visualize private repositories with proper authentication.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Export Features</h4>
                <p className="text-sm text-muted-foreground">
                  Export visualizations as images or PDFs for documentation and presentations.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">API Access</h4>
                <p className="text-sm text-muted-foreground">
                  Public API for developers to integrate GitGraph visualizations into their own tools.
                </p>
              </div>
            </div>
          </div>

          {/* Open Source */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Open Source & Community</h2>
            <p className="text-lg text-muted-foreground">
              GitGraph is open source and welcomes contributions from the developer community.
            </p>
            <Button size="lg" asChild>
              <Link href="https://github.com">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
