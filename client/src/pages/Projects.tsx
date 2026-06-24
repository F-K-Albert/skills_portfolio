import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Link, Eye } from "lucide-react";

const projects = [
  {
    title: "Personal Budget Tracker",
    description: "Advanced Excel-based financial management tool with dynamic formulas, scenario analysis, and cash flow forecasting.",
    year: "2026",
    status: "Completed",
    tags: ["Excel", "Financial Modeling", "VBA"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    title: "Ghana Inflation Dashboard",
    description: "Interactive Power BI dashboard tracking inflation trends, CPI components, and economic indicators with predictive analytics.",
    year: "2027",
    status: "In Progress",
    tags: ["Power BI", "DAX", "Economics"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Expense Analysis Tool",
    description: "Python application for personal expense categorization, trend analysis, and visualization using pandas and matplotlib.",
    year: "2026",
    status: "Completed",
    tags: ["Python", "Pandas", "Data Visualization"],
    github: "https://github.com/arthaattan/expense-analyzer",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop",
  },
  {
    title: "Mini Importation Platform",
    description: "E-commerce business system with inventory management, supplier tracking, and profit margin calculator.",
    year: "2027",
    status: "Planning",
    tags: ["Business Systems", "Excel", "Operations"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Projects & Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my work across financial analysis, data visualization, and business tools.
            Hands-on projects demonstrating technical skills and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  <div className="flex gap-1">
                    <Badge variant="secondary">{project.status}</Badge>
                    <Badge>{project.year}</Badge>
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="ml-auto">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

