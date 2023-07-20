"use client"
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { forwardRef, useRef } from 'react';


interface MilestoneProps {
  id: number;
  title: string;
  description: string;
}


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


// eslint-disable-next-line react/display-name
const Milestone = forwardRef<HTMLDivElement, MilestoneProps>(({ id, title, description }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  
  return (
    <div id={`milestone-${id}`} ref={ref} className="flex items-center justify-center flex-col snap-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg text-gray-600 mt-4">{description}</p>
    </div>
  );
});

export default Milestone;
