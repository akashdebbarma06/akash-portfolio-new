import Container from "../components/Container";
import Header from "../components/Header";
import TerminalHero from "../components/TerminalHero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import StatusBar from "../components/StatusBar";
import projectsData from "../data/projects.json";
import type { Project } from "../types/project";

const projects: Project[] = projectsData as Project[];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <Container>
          <TerminalHero />

          {/* Projects Section */}
          <section id="projects" className="mt-2 scroll-mt-14">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink font-mono">
              <span className="text-blueprint font-bold">#</span>
              <span>projects.json</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <article
                  id={`case-study-${project.id}`}
                  key={`case-${project.id}`}
                  className="border border-line bg-[#12151c] p-5 md:p-6 scroll-mt-16"
                >
                  <h3 className="text-sm font-sans font-bold text-ink tracking-wide mb-4">{project.title}</h3>
                  <dl className="grid gap-3 text-xs">
                    <div>
                      <dt className="text-coral font-mono font-semibold uppercase">Problem</dt>
                      <dd className="text-slate font-sans leading-relaxed">{project.description}</dd>
                    </div>
                    <div>
                      <dt className="text-coral font-mono font-semibold uppercase">Approach</dt>
                      <dd className="text-slate font-sans leading-relaxed">Built with {project.stack.join(', ')}.</dd>
                    </div>
                    <div>
                      <dt className="text-coral font-mono font-semibold uppercase">Stack</dt>
                      <dd className="text-slate font-sans leading-relaxed">{project.stack.join(' • ')}</dd>
                    </div>
                    <div>
                      <dt className="text-coral font-mono font-semibold uppercase">Outcome</dt>
                      <dd className="text-slate font-sans leading-relaxed">Current status: {project.status}.</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <Skills />

          {/* Resume Section */}
          <Resume />

          {/* Contact Section */}
          <Contact />
        </Container>
      </div>

      <StatusBar projectCount={projects.length} />
    </main>
  );
}
