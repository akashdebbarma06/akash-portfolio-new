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
    <main className="pb-16 min-h-screen flex flex-col justify-between">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
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

      <StatusBar />
    </main>
  );
}

