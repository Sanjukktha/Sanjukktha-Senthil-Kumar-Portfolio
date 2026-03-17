import { Navigation } from "@/components/navigation";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SkillBubble } from "@/components/skill-bubble";
import {
  getExperiencesByType,
  getProjectsByType,
  skillsByCategory,
  ExperienceType,
  resumeLinks,
} from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Briefcase, FolderGit2, Wrench, Download } from "lucide-react";

const typeConfig = {
  swe: {
    title: "Software Engineering",
    subtitle: "Building scalable systems and elegant user experiences",
    description:
      "I have full-stack development experience with modern frameworks, distributed systems, and cloud infrastructure. From React frontends to Spring Boot microservices, I enjoy building robust and scalable solutions.",
    color: "from-primary/20 to-primary/5",
  },
  ml: {
    title: "Machine Learning & AI",
    subtitle: "Creating intelligent systems that learn and adapt",
    description:
      "I have experience building LLM-powered applications, ML pipelines, and AI systems. From RAG architectures to production ML deployment, I love working on intelligent solutions.",
    color: "from-primary/20 to-primary/5",
  },
  data: {
    title: "Data Science & Analytics",
    subtitle: "Transforming data into actionable insights",
    description:
      "I specialize in building data pipelines, analytics platforms, and BI solutions. From ETL workflows to executive dashboards, I help organizations make data-driven decisions.",
    color: "from-primary/20 to-primary/5",
  },
};

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return [{ type: "swe" }, { type: "ml" }, { type: "data" }];
}

export async function generateMetadata({ params }: PageProps) {
  const { type } = await params;
  const config = typeConfig[type as ExperienceType];
  if (!config) return { title: "Not Found" };

  return {
    title: `${config.title} | Sanjukktha Senthil Kumar`,
    description: config.description,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { type } = await params;

  if (!["swe", "ml", "data"].includes(type)) {
    notFound();
  }

  const experienceType = type as ExperienceType;
  const config = typeConfig[experienceType];
  const experiences = getExperiencesByType(experienceType);
  const relatedProjects = getProjectsByType(experienceType);
  const skills = skillsByCategory[experienceType] || { title: "", skills: [] };

  return (
    <main className="min-h-screen floral-bg" style={{ backgroundColor: '#fff5f7' }}>
      <Navigation />

      {/* Hero Section */}
      <section className={`pt-28 pb-16 px-6 bg-gradient-to-b ${config.color}`}>
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in-up opacity-0">
            Experience
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0 animation-delay-100">
            {config.title}
          </h1>
          <p className="text-xl text-primary font-medium mb-4 animate-fade-in-up opacity-0 animation-delay-200">
            {config.subtitle}
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in-up opacity-0 animation-delay-300">
            {config.description}
          </p>
          <div className="mt-6 animate-fade-in-up opacity-0 animation-delay-400">
            <a
              href={resumeLinks[experienceType]}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              <Download size={18} />
              Download {config.title} Resume
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Wrench size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Technical Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.skills.map((skill, index) => (
              <SkillBubble
                key={skill}
                name={skill}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FolderGit2 size={24} className="text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Related Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View All
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

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
