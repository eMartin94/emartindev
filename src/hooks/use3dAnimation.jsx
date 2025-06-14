import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const use3dAnimation = (refs) => {
  useEffect(() => {
    if (!refs.current) return;

    const elements = refs.current;

    const setupTilt = (el) => {
      if (!el) return;

      const updateTransform = (x, y) => {
        const bounds = el.getBoundingClientRect();
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const maxAngle = 5;
        const rotateX = -((y - centerY) / centerY) * maxAngle;
        const rotateY = ((x - centerX) / centerX) * maxAngle;

        gsap.to(el, {
          rotateX,
          rotateY,
          scale: 1.01,
          transformPerspective: 1000,
          transformOrigin: 'center',
          ease: 'power2.out',
          duration: 0.4,
        });
      };

      const handleMouseMove = (e) => {
        const bounds = el.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        updateTransform(x, y);
      };

      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        if (!touch) return;
        const bounds = el.getBoundingClientRect();
        const x = touch.clientX - bounds.left;
        const y = touch.clientY - bounds.top;
        updateTransform(x, y);
      };

      const reset = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'power2.out',
          duration: 0.4,
        });
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', reset);
      el.addEventListener('touchmove', handleTouchMove);
      el.addEventListener('touchend', reset);
      el.addEventListener('touchcancel', reset);

      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', reset);
        el.removeEventListener('touchmove', handleTouchMove);
        el.removeEventListener('touchend', reset);
        el.removeEventListener('touchcancel', reset);
      };
    };

    const cleanups = elements.map(setupTilt);

    return () => {
      cleanups.forEach((cleanup) => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, [refs]);
};
