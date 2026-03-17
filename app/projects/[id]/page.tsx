import { Navigation } from "@/components/navigation";
import { projects, getProjectById, personalInfo, skillsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2, ExternalLink, Github } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | Sanjukktha Senthil Kumar`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const typeColors = {
    swe: "bg-primary/10 text-primary border-primary/20",
    ml: "bg-primary/10 text-primary border-primary/20",
    data: "bg-primary/10 text-primary border-primary/20",
  };

  const typeLabels = {
    swe: "Software Engineering",
    ml: "Machine Learning / AI",
    data: "Data Science",
  };

  // Find related projects (same type, excluding current)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.type === project.type)
    .slice(0, 3);

  return (
    <main className="min-h-screen floral-bg" style={{ backgroundColor: '#fff5f7' }}>
      <Navigation />

      {/* Back Navigation */}
      <section className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm animate-fade-in opacity-0"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="pt-8 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4 animate-fade-in-up opacity-0">
            <span
              className={`px-3 py-1 text-sm font-medium rounded-lg border ${typeColors[project.type]}`}
            >
              {typeLabels[project.type]}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in-up opacity-0 animation-delay-100">
            {project.title}
          </h1>

          <p className="text-xl text-primary font-medium mb-4 animate-fade-in-up opacity-0 animation-delay-200">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm animate-fade-in-up opacity-0 animation-delay-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              {project.date}
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Github size={16} />
              View on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="mb-12 animate-fade-in-up opacity-0 animation-delay-400">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.details}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mb-12 animate-fade-in-up opacity-0 animation-delay-500">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle2
                    size={20}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="animate-fade-in-up opacity-0 animation-delay-600">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {(skillsByCategory[project.type]?.skills || []).slice(0, 8).map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-6 pb-20 bg-card/50">
          <div className="max-w-4xl mx-auto pt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all shadow-sm"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedProject.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Sanjukktha Senthil Kumar</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
