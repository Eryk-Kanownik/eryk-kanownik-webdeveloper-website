"use client";
import React, { useEffect } from "react";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "./threshold";
import Project from "../cards/Project";

const Projects = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("projects");
  }, [inView]);

  const delay = 200;
  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 h-screen snap-start bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Wybrane Projekty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project, index) => {
            return (
              <Project
                key={index}
                index={index}
                inView={inView}
                delay={delay * index}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
