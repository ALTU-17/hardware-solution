"use client";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/images/project1.jpeg",
    title: "Luxury Kitchen",
    category: "Kitchen",
  },
  {
    image: "/images/project2.jpeg",
    title: "Modern Wardrobe",
    category: "Wardrobe",
  },
  {
    image: "/images/project3.jpg",
    title: "Premium Bedroom",
    category: "Interior",
  },
  {
    image: "/images/project4.jpeg",
    title: "Glass Partition",
    category: "Glass",
  },
  {
    image: "/images/livingroomsliding2.jpeg",
    title: "Living room sliding",
    category: "Glass",
  },
  {
    image: "/images/win1.jpeg",
    title: "Hall sliding glass partition",
    category: "Glass",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#C89B3C]">
            Portfolio
          </p>

          <h2 className="text-6xl font-black mt-5">
            Completed Projects
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((item) => (
            <ProjectCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}