"use client";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "./threshold";
import Skill from "../cards/Skill";

const Skills = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("skills");
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className=" py-20 h-screen bg-black text-white bg-gradient-to-b from-violet-900 to-violet-600">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Umiejętności</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Git",
            "MongoDB",
          ].map((skill, key: React.Key) => (
            <Skill key={key} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
