"use client"
import { MutableRefObject, useEffect } from 'react';

export const useScrollSnap = (ref: MutableRefObject<HTMLDivElement | null>, id: number) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.getElementById(`accordion-${id}`)?.scrollIntoView({ block: 'nearest' });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.unobserve(ref.current as any);
  }, [ref, id]);
};
