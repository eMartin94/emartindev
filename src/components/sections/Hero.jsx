'use client';

import {
  IconArrowDown,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const logoRef = useRef();
  const detailsRef = useRef();
  const sloganRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    const logoElements = logoRef.current.children;
    if (logoElements) {
      tl.fromTo(
        logoElements,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: 'elastic(0.3, 0.15)',
          delay: 0.8,
          stagger: {
            each: 0.05,
            from: 'random',
          },
        }
      );
    }

    const detailsElements = detailsRef.current.children;
    if (detailsElements) {
      tl.fromTo(
        detailsElements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'power2.out',
          stagger: {
            each: 0.05,
            from: 'random',
          },
        },
        '-=1.2'
      );
    }

    const commentElement = sloganRef.current;
    if (commentElement) {
      tl.fromTo(
        commentElement,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <section className='w-full h-svh max-w-7xl px-4 sm:px-8 py-2 flex flex-col justify-evenly'>
      <div className='flex items-center' ref={logoRef}>
        <h1 className='text-[16vw] sm:text-[11vw] font-black text-white select-none'>
          eMartin
        </h1>
        <span className='text-accent text-[10.2vw] sm:text-[7.2vw] -rotate-90 font-bold -ml-1 md:-ml-4 select-none'>
          Dev
        </span>
      </div>
      <div
        className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'
        ref={detailsRef}
      >
        <div>
          <p className='mb-8'>
            Hola, soy Martin, desarrollador web enfocado en experiencias
            interactivas. Trabajo principalmente con{' '}
            <span className='text-white'>React</span>,{' '}
            <span className='text-white'>Next.js</span> y{' '}
            <span className='text-white'>Tailwind CSS</span>, y me especializo
            en crear interfaces dinámicas utilizando{' '}
            <span className='text-white'>GSAP</span> y{' '}
            <span className='text-white'>Framer Motion</span>. También tengo
            experiencia construyendo y consumiendo APIs, gestionando bases de
            datos y desarrollando backends con{' '}
            <span className='text-white'>Node.js</span>
          </p>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2'>
              <div className='w-[50px] h-[50px] rounded-lg overflow-hidden'>
                <Image
                  src={'/profile.webp'}
                  alt='profile'
                  width={100}
                  height={100}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col gap-1 justify-center'>
                <strong className='text-sm uppercase text-white'>
                  Web Developer
                </strong>
                <span className='text-sm'>Martin Pizango</span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-start md:items-center'>
          <h4 className='font-bold mb-4'>Sígueme:</h4>
          <ul className='flex flex-col gap-2 list-none'>
            <li>
              <a
                href='https://www.instagram.com/?hl=es-la'
                target='_blank'
                rel='noreferrer'
                className='flex text-sm items-center hover:text-alternative'
              >
                <IconBrandInstagram size={18} />{' '}
                <span className='ml-1 '>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/'
                target='_blank'
                rel='noreferrer'
                className='flex text-sm items-center hover:text-alternative'
              >
                <IconBrandGithub size={18} />{' '}
                <span className='ml-1 '>Github</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/feed/'
                target='_blank'
                rel='noreferrer'
                className='flex text-sm items-center hover:text-alternative'
              >
                <IconBrandLinkedin size={18} />{' '}
                <span className='ml-1 '>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='font-bold text-2xl text-accent' ref={sloganRef}>
          Explora algunos de los proyectos en los que he estado trabajando.
          <IconArrowDown
            className='inline-block ml-2 animate-bounce translate-y-2'
            size={30}
          />
        </h2>
      </div>
    </section>
  );
};

export default Hero;
