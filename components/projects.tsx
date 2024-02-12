"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";
import { useSectionView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionView("Projects", 0.5);

  return (
    <section className="mb-28 scroll-mt-28 text-center" id="projects" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
