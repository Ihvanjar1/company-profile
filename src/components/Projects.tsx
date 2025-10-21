"use client";

import { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: "/project1.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive maps.",
      image: "/project3.jpg",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and skills with smooth animations.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "API Backend Service",
      description:
        "RESTful API service for a mobile application with authentication and data management.",
      image: "/project5.jpg",
      technologies: ["Node.js", "Express", "JWT", "MySQL"],
      category: "backend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description:
        "Interactive data visualization tool for business analytics and reporting.",
      image: "/project6.jpg",
      technologies: ["React", "D3.js", "Python", "Flask"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyek Saya
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pameran karya terbaru dan proyek pribadi saya
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {filter === "all" && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/400x200/3b82f6/ffffff?text=${project.title}`;
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                          GitHub →
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
                        >
                          Live Demo →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x200/3b82f6/ffffff?text=${project.title}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium text-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
