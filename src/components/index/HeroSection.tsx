"use client";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import THRESHOLD from "./threshold";

const HeroSection = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView, entry } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("hero-section");
    console.log("Hero", inView);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="hero-section"
      className="bg-blue-600 text-white py-20 h-screen max-h-screen flex justify-center items-center overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Eryk Kanownik</h1>
        <p className="text-xl mb-8">Full Stack Web Developer</p>
        <Link
          href="#contact"
          className=" text-white py-2 px-6 rounded-full text-lg font-semibold bg-purple-800 hover:bg-purple-700 transition duration-300">
          Contact me!
        </Link>
      </div>
      <video
        className="absolute left-0 top-0 min-w-full min-h-screen max-h-[100dvh] object-cover"
        autoPlay
        loop
        muted>
        <source src="./hero-background-video.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
};

export default HeroSection;
