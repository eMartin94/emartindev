'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

const Loader = ({ children }) => {
  const curtainRefs = useRef([]);
  const lettersRef = useRef([]);
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const text = 'Loading...';

  const setCurtainRef = (el, index) => {
    curtainRefs.current[index] = el;
  };
  const setLetterRef = (el, index) => {
    lettersRef.current[index] = el;
  };

  const animateLoader = (onComplete) => {
    const tl = gsap.timeline({ onComplete });

    tl.fromTo(
      lettersRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
        stagger: 0.03,
      }
    ).to(lettersRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 0.3,
      ease: 'power2.in',
      stagger: 0.04,
    });

    curtainRefs.current.forEach((ref, i) => {
      tl.to(
        ref,
        {
          x: '100%',
          duration: 0.4,
          ease: 'power2.inOut',
        },
        `-=${0.3 - i * 0.05}`
      );
    });
  };

  useEffect(() => {
    setShowLoader(true);
    animateLoader(() => setDisplayChildren(true));
  }, []);

  useEffect(() => {
    if (!showLoader) return;
    curtainRefs.current.forEach((ref) => gsap.set(ref, { x: '0%' }));
    lettersRef.current.forEach((el) => gsap.set(el, { y: 20, opacity: 0 }));
    setDisplayChildren(false);
    animateLoader(() => {
      setDisplayChildren(true);
    });
  }, [pathname, showLoader]);

  return (
    <div className='relative'>
      {showLoader && (
        <div className='fixed top-0 left-0 w-full h-full z-50 flex flex-col pointer-events-none'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              ref={(el) => setCurtainRef(el, i)}
              className='flex-1 w-full h-full bg-alternative'
            />
          ))}

          <div className='absolute inset-0 flex items-center justify-center'>
            <h1 className='text-white text-2xl flex space-x-1'>
              {text.split('').map((char, i) => (
                <span
                  key={i}
                  ref={(el) => setLetterRef(el, i)}
                  className='inline-block'
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-500 ${
          displayChildren ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {displayChildren && children}
      </div>
    </div>
  );
};

export default Loader;
