"use client"

import * as React from "react"
import {
  ArrowRight,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  GraduationCap,
  Briefcase,
  MapPin,
  ArrowUpRight,
  Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  },
  {
    icon: Cpu,
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "Auth & RBAC"],
  },
  {
    icon: Layers,
    title: "Systems & Tools",
    items: ["Git", "CI/CD", "Payment Gateways", "Docker", "Cloud Hosting"],
  },
  {
    icon: Sparkles,
    title: "Emerging Tech",
    items: ["Machine Learning", "IoT", "Agentic AI Tools", "LLM Fine-tuning"],
  },
]

const PROJECTS = [
  {
    title: "Multi-Tenant Booking SaaS",
    description:
      "A scalable appointment and booking platform supporting super admin, admin, and operator roles with a commission-based revenue model.",
    tags: ["Next.js", "MongoDB", "RBAC", "Payments"],
  },
  {
    title: "Bus Seat Booking Platform",
    description:
      "An end-to-end seat reservation system built to solve real booking friction on frequently traveled routes, with live seat maps and payments.",
    tags: ["Next.js", "MongoDB", "Payment Gateway"],
  },
  {
    title: "Company Management System",
    description:
      "A full production multi-role system covering admin, finance, marketing, and management workflows with a themeable two-tier UI.",
    tags: ["shadcn/ui", "MongoDB", "Next.js"],
  },
  {
    title: "Agricultural Advisory SLM",
    description:
      "A trilingual small language model fine-tuned via LoRA/QLoRA to deliver agronomic guidance in Sinhala, Tamil, and English.",
    tags: ["LoRA/QLoRA", "NLP", "Research"],
  },
]

const EXPERIENCE = [
  {
    icon: Briefcase,
    role: "Founder & Director",
    org: "Software Development Company",
    period: "2023 — Present",
    description:
      "Leading full-stack development, training engineering interns, and delivering client-facing production systems.",
  },
  {
    icon: GraduationCap,
    role: "Undergraduate, Information Technology",
    org: "University",
    period: "Ongoing",
    description:
      "Pursuing an IT degree while running applied research projects spanning ML, IoT, and agentic AI systems.",
  },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = React.useState("all")

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(activeTab))
        )

  return (
    <TooltipProvider delay={200}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  SP
                </AvatarFallback>
              </Avatar>
              <span>Supun</span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="GitHub"
                onClick={() => window.open("https://github.com", "_blank", "noreferrer")}
              >
                <Code2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="LinkedIn"
                onClick={() => window.open("https://linkedin.com", "_blank", "noreferrer")}
              >
                <Briefcase className="h-4 w-4" />
              </Button>
              <Button type="button" onClick={() => (window.location.hash = "#contact")}>
                Get in touch
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile nav */}
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden" type="button">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-10 flex flex-col gap-6">
                  <nav className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-foreground"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <Separator />
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      type="button"
                      aria-label="GitHub"
                      onClick={() => window.open("https://github.com", "_blank", "noreferrer")}
                    >
                      <Code2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      type="button"
                      aria-label="LinkedIn"
                      onClick={() => window.open("https://linkedin.com", "_blank", "noreferrer")}
                    >
                      <Briefcase className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full" type="button" onClick={() => (window.location.hash = "#contact")}>
                    Get in touch
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
            <div className="flex flex-col items-start gap-6">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new projects
              </Badge>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Building thoughtful software, one product at a time.
              </h1>

              <p className="max-w-xl text-lg text-muted-foreground">
                Full-stack developer and founder crafting reliable, modern web
                platforms — from booking systems to AI-driven tools — with a
                focus on clean design and real-world impact.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button size="lg" type="button" onClick={() => (window.location.hash = "#projects")}>
                  View my work
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" type="button" onClick={() => (window.location.hash = "#contact")}>
                  Contact me
                </Button>
              </div>

              <div className="flex items-center gap-1.5 pt-4 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Based in Sri Lanka · Working with clients worldwide
              </div>
            </div>
          </section>

          <Separator />

          {/* About */}
          <section id="about" className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <Badge variant="outline" className="mb-3">
                  About
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  A little about me
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4 text-muted-foreground">
                <p>
                  I&apos;m a full-stack developer and the founder of a software
                  development company, where I lead engineering, mentor
                  interns, and build client-facing products from the ground
                  up.
                </p>
                <p>
                  Alongside client work, I run applied research and personal
                  projects spanning web platforms, machine learning, and IoT —
                  driven by a habit of building solutions to problems I run
                  into myself.
                </p>
                <p>
                  I care about interfaces that feel effortless and systems
                  that hold up under real usage, not just in a demo.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Skills */}
          <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-3">
              <Badge variant="outline" className="w-fit">
                Skills
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                What I work with
              </h2>
              <p className="max-w-xl text-muted-foreground">
                A toolkit built for shipping full products end to end.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon
                return (
                  <Card key={group.title} className="transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{group.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <Separator />

          {/* Projects */}
          <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-10 flex flex-col gap-3">
              <Badge variant="outline" className="w-fit">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                Selected work
              </h2>
              <p className="max-w-xl text-muted-foreground">
                A mix of client products and self-directed builds.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="next.js">Next.js</TabsTrigger>
                <TabsTrigger value="mongodb">MongoDB</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.title}
                      className="group flex flex-col justify-between transition-shadow hover:shadow-md"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <CardDescription className="pt-1">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <Separator />

          {/* Experience */}
          <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-10 flex flex-col gap-3">
              <Badge variant="outline" className="w-fit">
                Experience
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                Where I&apos;ve been
              </h2>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((exp) => {
                const Icon = exp.icon
                return (
                  <Card key={exp.role}>
                    <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{exp.role}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.org}
                          </p>
                          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit shrink-0">
                        {exp.period}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <Separator />

          {/* Contact */}
          <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <Badge variant="outline" className="mb-3">
                  Contact
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Let&apos;s build something
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Have a project in mind, or just want to say hello? My inbox
                  is open.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 text-sm hover:text-primary"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                      <Mail className="h-4 w-4" />
                    </div>
                    hello@example.com
                  </a>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href="https://github.com/supun"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-primary"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                          <Code2 className="h-4 w-4" />
                        </div>
                        github.com/supun
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Opens in a new tab</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href="https://linkedin.com/in/supun"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-primary"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        linkedin.com/in/supun
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Opens in a new tab</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send a message</CardTitle>
                  <CardDescription>
                    I usually reply within a day or two.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send message
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Separator />

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Supun. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="GitHub"
                onClick={() => window.open("https://github.com", "_blank", "noreferrer")}
              >
                <Code2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="LinkedIn"
                onClick={() => window.open("https://linkedin.com", "_blank", "noreferrer")}
              >
                <Briefcase className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label="Email"
                onClick={() => (window.location.href = "mailto:hello@example.com")}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}