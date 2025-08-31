"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Eye, Code } from "lucide-react"

export default function HomePage() {
  const [repoUrl, setRepoUrl] = useState("")
  const router = useRouter()

  const handleVisualize = () => {
    if (repoUrl.trim()) {
      const encodedUrl = encodeURIComponent(repoUrl.trim())
      router.push(`/visualizer?repo=${encodedUrl}`)
    } else {
      router.push("/visualizer")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-screen-xl py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
                Visualize Git History
                <span className="text-primary"> Effortlessly</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                A clean, developer-friendly tool to visualize Git commit history from any public GitHub repository. No
                extensions, no complexity—just pure visualization.
              </p>
            </div>

            <div className="mx-auto max-w-lg space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="https://github.com/vercel/next.js"
                  className="font-mono text-sm"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVisualize()}
                />
                <Button onClick={handleVisualize} className="px-6">
                  Visualize
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Paste any public GitHub repository URL to get started</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container max-w-screen-xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Lightning Fast</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Instantly visualize commit history without waiting for heavy tools to load.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Clean Interface</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Minimalist design focused on what matters—your Git history visualization.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Developer First</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built by developers, for developers. No bloat, just the features you need.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-screen-xl py-16">
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Ready to visualize your Git history?</h2>
              <p className="text-muted-foreground">
                Join developers who are already using GitGraph to understand their repositories better.
              </p>
            </div>
            <Button size="lg" onClick={() => router.push("/visualizer")} className="px-8">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
