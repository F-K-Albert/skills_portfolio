import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, TrendingUp, Zap, BookOpen, Target } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist + Data-Driven Elegance
 * - Clean asymmetric layouts with generous whitespace
 * - Data-forward visual hierarchy using charts and timeline elements
 * - Typography-driven storytelling with strategic color accents
 * - Micro-interactions that reveal information progressively
 */

export default function Home() {
  const [activeYear, setActiveYear] = useState(1);

  const roadmapYears = [
    {
      year: 1,
      theme: "Building the Core Engine",
      focus: "Foundation in Software Engineering, Finance, and Sales/Marketing",
      highlights: ["Python & SQL Basics", "Financial Fundamentals", "Sales Training", "Personal Budget Tracker"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      year: 2,
      theme: "Growth & Job Relevance",
      focus: "Specialization in Financial Data and Business Building",
      highlights: ["CFA Level I Prep", "Power BI Dashboards", "Marketing Mastery", "Mini Importation Launch"],
      color: "from-cyan-400 to-teal-400",
    },
    {
      year: 3,
      theme: "Experience & Market Entry",
      focus: "Internships, Advanced Certifications, and Business Scaling",
      highlights: ["Pass CFA Level I", "Internship at Bank of Ghana", "Economic Report", "Portfolio Building"],
      color: "from-teal-400 to-emerald-400",
    },
    {
      year: 4,
      theme: "Transition to Professional Career",
      focus: "Graduation and Securing High-Impact Roles",
      highlights: ["BSc Graduation", "Project Management Certificate", "Prompt Engineering Certificate", "Final Year Project", "Job Applications", "Career Launch"],
      color: "from-emerald-400 to-yellow-400",
    },
    {
      year: 5,
      theme: "Acceleration & Professional Growth",
      focus: "Deepening Expertise and Expanding Influence",
      highlights: ["CFA Level II", "PMP Certification", "Advanced Prompt Engineering", "Thought Leadership", "Business Expansion"],
      color: "from-yellow-400 to-orange-400",
    },
  ];

  const skills = [
    {
      category: "Technical Skills",
      icon: Code,
      items: ["Python", "SQL", "Power BI", "Excel", "JavaScript", "Data Analysis", "Prompt Engineering Certificate"],
    },
    {
      category: "Finance Skills",
      icon: TrendingUp,
      items: ["Financial Modeling", "Investment Analysis", "Portfolio Management", "CFA Level I"],
    },
    {
      category: "Business Skills",
      icon: Zap,
      items: ["Sales Fundamentals", "Digital Marketing", "Negotiation", "Business Development", "Project Management Certificate"],
    },
  ];

  const projects = [
    {
      title: "Personal Budget Tracker",
      description: "Excel-based financial management tool with formulas and basic modeling",
      status: "Completed",
      year: "2026",
      tags: ["Excel", "Finance"],
    },
    {
      title: "Simple Expense Analysis",
      description: "Python script for analyzing personal expenses with data visualization",
      status: "Completed",
      year: "2026",
      tags: ["Python", "Data Analysis"],
    },
    {
      title: "Ghana Inflation Dashboard",
      description: "Power BI dashboard visualizing inflation trends and economic indicators",
      status: "Planned",
      year: "2027",
      tags: ["Power BI", "Economics"],
    },
    {
      title: "Mini Importation Business",
      description: "E-commerce venture leveraging digital marketing and business systems",
      status: "Planned",
      year: "2027",
      tags: ["Business", "Marketing"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">Albert Frimpong Kofi</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            <a href="#roadmap" className="text-sm hover:text-accent transition-colors">Roadmap</a>
            <a href="/projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="/contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663566914357/DwqBj8YMB8r3VmQxaPKryk/hero_abstract_tech-o9uaGTcYkpUVVS3gksq24S.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              Tech-Savvy <span className="text-accent">Financial Analyst</span> & Entrepreneur
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              BSc in Software Engineering graduate with Project Management Certificate, Prompt Engineering Certificate and more. Building expertise in software engineering, financial analysis, and digital marketing. On a mission to create real-world business solutions and become a Project Manager, Business Analyst, or Tech Entrepreneur.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/projects">
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I'm a BSc in Software Engineering graduate from Ghana Communication Technology University (GCTU) with certifications in Project Management and Prompt Engineering. Passionate about building real-world business solutions. My unique blend of technical skills, financial expertise, and entrepreneurial mindset positions me to bridge the gap between technology and business.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Over the next 5 years, I'm committed to developing expertise in financial data analysis, digital marketing, and business development while maintaining professional excellence.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent">5</div>
                  <div className="text-sm text-muted-foreground">Year Master Plan</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">3</div>
                  <div className="text-sm text-muted-foreground">Skill Domains</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">∞</div>
                  <div className="text-sm text-muted-foreground">Growth Potential</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663566914357/DwqBj8YMB8r3VmQxaPKryk/hero_financial_data-EmVfxw5D8f969deVcUCYKT.webp"
                alt="Financial Data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {skillGroup.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap Section */}
      <section id="roadmap" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
            5-Year Master Plan
          </h2>
          
          {/* Year Selector */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
            {roadmapYears.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeYear === item.year
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Year {item.year}
              </button>
            ))}
          </div>

          {/* Year Details */}
          {roadmapYears.map((year) => (
            activeYear === year.year && (
              <div key={year.year} className="animate-in fade-in duration-500">
                <Card className="p-8 md:p-12">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {year.theme}
                    </h3>
                    <p className="text-lg text-muted-foreground">{year.focus}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-accent" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {year.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${year.color} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-accent">{year.year}</div>
                          <div className="text-sm text-muted-foreground mt-2">of 5 years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
            Projects & Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow hover:border-accent/50">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold flex-1">{project.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ml-4 ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                  {project.year}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Let's Connect
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in discussing opportunities, collaborations, or just connecting with like-minded professionals. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://linkedin.com/in/albertfrimpongkofi" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://github.com/albertfrimpongkofi" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Albert Frimpong Kofi. All rights reserved. | Built with passion and code.</p>
        </div>
      </footer>
    </div>
  );
}
