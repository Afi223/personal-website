import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "AI Study",
    description:
      "Three.js and React airplane model flight simulator with infinite mountainous terrain & crash effects!",
    image: "/AI.png",
    github: "https://github.com/Afi223/Study-backend",
    link: "https://study-frontend-beta.vercel.app/",
  },
  {
    name: "CipherScan",
    description:
      "CipherScan Scanner is a Python-based application designed to scan AWS S3 buckets for security vulnerabilities",
    image: "/gui.png",
    github: "https://github.com/Afi223/CipherScan",
    link: "https://github.com/Afi223/CipherScan/blob/main/README.md",
  },
  {
    name: "PortGuard",
    description:
      "PortGuard is a Python network security scanner that identifies open ports and exposed services to help detect potential attack surfaces.",
    image: "/Scan.png",
    github: "https://github.com/Afi223/PortGuard",
    link: "https://github.com/Afi223/PortGuard/blob/main/README.md",
  },
  {
    name: "AI IDS",
    description:
      "This project implements an AI-powered Intrusion Detection System (IDS) that identifies malicious network activity using both unsupervised and supervised learning models.",
    image: "/IDS.png",
    github: "https://github.com/Afi223/AI-IDS/tree/main",
    link: "https://github.com/Afi223/AI-IDS/blob/main/README.md",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Featured Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {/* Conditionally render Link based on project.link */}
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* Conditionally render Link based on project.github */}
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {/* Conditionally render Link based on project.link */}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
