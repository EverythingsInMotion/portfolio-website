import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

import clothingStore from "../public/projects/clothingStore.jpg";
import foodCart from "../public/projects/foodcart.jpg";
import forkify from "../public/projects/forkify.jpg";
import omniFood from "../public/projects/omnifood.jpg";

const projects = [
  { id: 1, imageName: omniFood, title: "Omnifood", projectLink: "/omnifood" },
  {
    id: 2,
    imageName: forkify,
    title: "Online Food Catelog",
    projectLink: "/forkify",
  },
  {
    id: 3,
    imageName: foodCart,
    title: "Online Food Cart",
    projectLink: "/foodcart",
  },
  {
    id: 4,
    imageName: clothingStore,
    title: "Online Clothing Store",
    projectLink: "/clothingstore",
  },
];
const Projects = () => {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              imageName={project.imageName}
              title={project.title}
              projectLink={project.projectLink}
              alt={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
