"use client";
import React, { useEffect } from "react";
import THRESHOLD from "./threshold";
import useNavigationStore, { IUseNavigationStore } from "@/state/navigation";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { setVisibleSection } = useNavigationStore(
    (state: IUseNavigationStore) => state
  );
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    setVisibleSection("contact");
  }, [inView]);

  return (
    <section ref={ref} id="contact" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Skontaktuj się ze mną</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200">
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200">
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:jan@example.com"
            className="text-white hover:text-gray-200">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
