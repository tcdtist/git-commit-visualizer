"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Visualizer", href: "/visualizer" },
  { name: "How it works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface MobileNavProps {
  onItemClick?: () => void
}

export function MobileNav({ onItemClick }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-3">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onItemClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-accent px-3 py-2 rounded-md",
            pathname === item.href ? "text-foreground bg-accent/10" : "text-muted-foreground hover:bg-accent/5",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
