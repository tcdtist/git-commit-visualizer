"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      alert("Thank you for your message! We'll get back to you soon.")
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container max-w-screen-xl py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Have feedback, suggestions, or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your feedback, feature requests, or how you'd like to collaborate..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="h-4 w-4 mr-2 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        href="mailto:hello@gitgraph.dev"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@gitgraph.dev
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <Link
                        href="https://github.com"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        github.com/gitgraph
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We're always looking for ways to improve GitGraph and welcome contributions from the community.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium">Ways to Contribute:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Report bugs or suggest features</li>
                      <li>• Submit pull requests</li>
                      <li>• Improve documentation</li>
                      <li>• Share feedback and use cases</li>
                    </ul>
                  </div>

                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="https://github.com">
                      <Github className="h-4 w-4 mr-2" />
                      Contribute on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to messages within 24-48 hours. For urgent issues or bug reports, please use
                    GitHub issues for faster resolution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
