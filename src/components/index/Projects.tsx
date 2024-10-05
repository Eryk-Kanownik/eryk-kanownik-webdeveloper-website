"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "./threshold";

const Projects = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView, entry } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("projects");
    console.log("projects", inView);
  }, [inView]);

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
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=Projekt ${project}`}
                width={300}
                height={200}
                alt={`Projekt ${project}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Projekt {project}</h3>
                <p className="text-gray-700 mb-4">
                  Krótki opis projektu i wykorzystanych technologii.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Zobacz więcej
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
