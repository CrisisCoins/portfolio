import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProjectItem from "./ProjectItem";
import carbonImg from "../public/assets/projects/carbonite.png";
import tokenImg from "../public/assets/projects/token.png";
import crisisImg from "../public/assets/projects/crisis.png";
import portfoImg from "../public/assets/projects/portfolio.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#41495c]">
          Projects
        </p>
        <h2 className="py-4">Projects I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Carbonite SE"
            backgroundImg={carbonImg}
            projectUrl="/carbonite"
          />
          <ProjectItem
            title="Token Tracker"
            backgroundImg={tokenImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="CrisisCoins™"
            backgroundImg={crisisImg}
            projectUrl="/crisiscoins"
          />
          <ProjectItem
            title="Dev Portfolio"
            backgroundImg={portfoImg}
            projectUrl="/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
