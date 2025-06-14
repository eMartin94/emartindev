import { use3dAnimation } from '@/hooks/use3dAnimation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ index, link, name, description, tags, cover }) => {
  const projectRef = useRef([]);
  const cardRef = useRef([]);
  use3dAnimation(cardRef);

  useEffect(() => {
    const elements = projectRef.current;
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.out',
          delay: index * 0.035,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  return (
    <Link
      href={link}
      target='_blank'
      rel='noreferrer'
      ref={(el) => {
        projectRef.current[index] = el;
        cardRef.current[index] = el;
      }}
      className='w-full md:max-w-[90%] flex flex-col-reverse sm:flex-row gap-4 lg:gap-16 border border-alternative hover:border-accent active:border-accent bg-gradient-to-tr from-alternative/25 to-secondary/20 shadow-xl rounded-2xl p-4 justify-between group cursor-pointer'
    >
      <div className='w-full sm:w-1/2 flex flex-col justify-evenly'>
        <h3 className='text-white uppercase font-bold mb-0 sm:mb-4 text-3xl md:text-4xl group-hover:text-accent transition-all duration-300 ease-out group-active:text-accent select-none sm:select-auto'>
          {name}
        </h3>
        <div>
          <p className='hidden sm:block'>{description}</p>
          <ul className='flex flex-wrap gap-2 mt-4 sm:mt-8'>
            {tags.map((tag, i) => (
              <li
                key={i}
                className='text-alternative text-sm px-2 py-[2px] border border-alternative rounded-xl select-none'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full sm:max-w-[450px] h-[320px] rounded-xl overflow-hidden shadow-md'>
        <Image
          src={cover}
          alt={name}
          width={500}
          height={500}
          className='w-full h-full object-cover object-center'
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
