import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProject {
  index: number;
  inView: boolean;
  delay: number;
  project: number;
}

const Project: React.FC<IProject> = ({ inView, delay, project }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(inView ? false : true), delay);
  }, [inView]);

  return (
    <div
      key={project}
      className={`bg-white rounded-lg shadow-md duration-200 overflow-hidden transform opacity-0 ${
        !isLoading && "opacity-100"
      }`}>
      <Image
        src={`https://picsum.photos/200/300`}
        width={300}
        height={200}
        alt={`Projekt ${project} object-cover`}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2  text-violet-700">
          Projekt {project}
        </h3>
        <p className="text-gray-700 mb-4">
          Krótki opis projektu i wykorzystanych technologii.
        </p>
        <Link href="#" className="text-blue-600 hover:text-blue-800">
          Zobacz więcej
        </Link>
      </div>
    </div>
  );
};

export default Project;
