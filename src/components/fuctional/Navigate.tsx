"use client";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navigate = () => {
  const navigateRef = useRef<null | HTMLDivElement>(null);
  const { visibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );

  useEffect(() => {}, []);

  return (
    <div
      ref={navigateRef}
      id=""
      className="fixed right-5 top-0 bottom-0 flex flex-col justify-center items-end gap-4 z-30">
      <Link href="#hero-section" className="text-white flex items-center gap-2">
        <p
          className={` font-semibold duration-200 ${
            visibleSection === "hero-section"
              ? "text-purple-500"
              : "text-white text-sm"
          }`}>
          Hero Section
        </p>
        <div
          className={`bg-white duration-200  rounded-full ${
            visibleSection === "hero-section"
              ? "bg-purple-800 w-5 h-5 "
              : "bg-white w-3 h-3"
          }`}></div>
      </Link>
      <Link href="#about-me" className="text-white flex items-center gap-2">
        <p
          className={` font-semibold duration-200 ${
            visibleSection === "about-me"
              ? "text-purple-500"
              : "text-white text-sm"
          }`}>
          About me
        </p>
        <div
          className={`bg-white w-3 h-3 rounded-full duration-200 ${
            visibleSection === "about-me"
              ? "bg-purple-800 w-5 h-5 "
              : "bg-white w-3 h-3"
          }`}></div>
      </Link>
      <Link href="#projects" className="text-white flex items-center gap-2 ">
        <p
          className={`font-semibold duration-200 ${
            visibleSection === "projects"
              ? "text-purple-500"
              : "text-white text-sm"
          }`}>
          Projects
        </p>
        <div
          className={`bg-white w-3 h-3 rounded-full duration-200 ${
            visibleSection === "projects"
              ? "bg-purple-800 w-5 h-5 "
              : "bg-white w-3 h-3"
          }`}></div>
      </Link>
      <Link href="#skills" className="text-white flex items-center gap-2">
        <p
          className={`font-semibold duration-200 ${
            visibleSection === "skills"
              ? "text-purple-500"
              : "text-white text-sm"
          }`}>
          Skills
        </p>
        <div
          className={`bg-white w-3 h-3 rounded-full duration-200 ${
            visibleSection === "skills"
              ? "bg-purple-800 w-5 h-5 "
              : "bg-white w-3 h-3"
          }`}></div>
      </Link>
      <Link href="#contact" className="text-white flex items-center gap-2">
        <p
          className={`font-semibold duration-200 ${
            visibleSection === "contact"
              ? "text-purple-500"
              : "text-white text-sm"
          }`}>
          Contact
        </p>
        <div
          className={`bg-white w-3 h-3 rounded-full duration-200 ${
            visibleSection === "contact"
              ? "bg-purple-800 w-5 h-5 "
              : "bg-white w-3 h-3"
          }`}></div>
      </Link>
    </div>
  );
};

export default Navigate;
