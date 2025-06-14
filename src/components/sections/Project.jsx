'use client';

import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '@/data';

const Project = () => {
  return (
    <section className='w-full max-w-7xl px-4 py-16 relative bg-[url(/eMartinDev.webp)] bg-contain bg-no-repeat bg-bottom'>
      <div className='flex flex-col gap-8 pt-4 items-center'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            description={project.description}
            link={project.link}
            cover={project.image}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
