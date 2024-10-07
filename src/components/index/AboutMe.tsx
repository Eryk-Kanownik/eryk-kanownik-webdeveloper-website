"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import eryk from "../../../public/eryk.png";
import { useInView } from "react-intersection-observer";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import THRESHOLD from "./threshold";

const AboutMe = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("about-me");
  }, [inView]);

  return (
    <section
      ref={ref}
      id="about-me"
      className="py-20 h-screen flex items-center snap-always snap-start bg-gradient-to-b from-violet-900 to-violet-600 text-white">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl font-bold text-center mb-8 duration-500 opacity-0 ${
            inView && "opacity-100"
          }`}>
          O mnie
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={eryk}
            width={200}
            height={200}
            alt="Jan Kowalski"
            className={`rounded-full mb-6 md:mb-0 md:mr-6 aspect-square object-cover duration-500 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          />
          <p
            className={`text-lg text-white max-w-2xl text-center md:text-left duration-500 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}>
            Jestem pasjonatem tworzenia innowacyjnych i responsywnych aplikacji
            webowych. Z 5-letnim doświadczeniem w branży, specjalizuję się w
            technologiach takich jak React, Node.js i TypeScript. Zawsze
            poszukuję nowych wyzwań i możliwości rozwoju.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
