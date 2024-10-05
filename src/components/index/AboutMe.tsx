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
      className="py-20 h-screen flex items-center snap-always snap-start bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">O mnie</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={eryk}
            width={200}
            height={200}
            alt="Jan Kowalski"
            className="rounded-full mb-6 md:mb-0 md:mr-6 aspect-square object-cover"
          />
          <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
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
