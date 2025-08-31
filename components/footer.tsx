import Link from "next/link"
import { GitBranch, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-screen-xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <GitBranch className="h-5 w-5 text-primary" />
              <span>GitGraph</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Visualize Git commit history without the complexity. Built for developers, by developers.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/visualizer" className="text-muted-foreground hover:text-primary transition-colors">
                  Visualizer
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:hello@gitgraph.dev"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GitGraph. Built for developers, by developers.</p>
        </div>
      </div>
    </footer>
  )
}
