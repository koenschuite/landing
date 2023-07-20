"use client"
import Accordion from '@/components/roadmap/Accordion';
import Milestone from '@/components/roadmap/Milestone';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { useScrollSnap } from './useScrollSnap';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const milestones = [
  { 
    id: 1, 
    title: 'Milestone 1', 
    description: 'Re-design MVP Hackathon', 
    timeline: 'August 2023' 
  },
  { 
    id: 2, 
    title: 'Milestone 2', 
    description: 'Third-Party Integration & Community Expansion',
    timeline: 'September 2023'
  },
  { 
    id: 3, 
    title: 'Milestone 3', 
    description: 'Unique Data Profiles',
    timeline: 'October – November 2023' 
  },
  { 
    id: 4, 
    title: 'Milestone 4', 
    description: 'Integrate Offline Business Engagement',
    timeline: 'December 2023 - January 2024'
  },
  { 
    id: 5, 
    title: 'Milestone 5', 
    description: 'Automation & Preference-Based Data Sharing',
    timeline: 'After February 2024' 
  },
];


const accordions = [
  { 
    id: 1, 
    title: 'Hackathon Repository Integration', 
    content: 'Move over the existing working hackathon-fvm repository and integrate them into the platform.' 
  },
  { 
    id: 1, 
    title: 'Landing Page Creation', 
    content: 'Design and implement a landing page to kick-start the web presence.' 
  },
  { 
    id: 1, 
    title: 'Social Accounts Setup', 
    content: 'Set up social accounts for effective community engagement in.' 
  },
  { 
    id: 1, 
    title: 'Community Voting and Contribution', 
    content: 'Implement features for community voting and financial contribution.' 
  },
  { 
    id: 2, 
    title: 'Third-Party Data Validation', 
    content: 'Develop and integrate third-party data validation based on proof of connection.' 
  },
  { 
    id: 2, 
    title: 'Third-Party Data Providers Integration', 
    content: 'Integrate major third-party data providers based on user input.' 
  },
  { 
    id: 2, 
    title: 'User Onboarding and Data Access Management', 
    content: 'Help users onboard data to our platform and manage access to data requests.' 
  },
  { 
    id: 2, 
    title: 'Data Sharing Dashboard', 
    content: 'Build a dashboard for visibly tracking all the data shared by a user.' 
  },
  { 
    id: 3, 
    title: 'Data Profile Creation', 
    content: 'Enable users to create their personal profiles based on data integration of different sources.' 
  },
  { 
    id: 4, 
    title: 'Offline Business Engagement', 
    content: 'Develop mobile apps for generating scannable QR codes of data profiles and scanning them.' 
  },
  { 
    id: 4, 
    title: 'Discount Voucher', 
    content: 'Let businesses create discount codes or digital collectables for their users..' 
  },
  { 
    id: 4, 
    title: 'Offline Business registration', 
    content: 'Let businesses register their offline business and integrate.' 
  },
  { 
    id: 5, 
    title: 'Data Sharing Automation', 
    content: 'Develop automation features for data sharing based on user preferences.' 
  },
];


const Roadmap: React.FC = () => {
  const refs = accordions.reduce((acc, value) => {
    acc[value.id] = {
      milestone: useRef<HTMLDivElement | null>(null),
      accordion: useRef<HTMLDivElement | null>(null),
    };
    return acc;
  }, {} as Record<number, { milestone: React.RefObject<HTMLDivElement>; accordion: React.RefObject<HTMLDivElement> }>);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  
  const scrollToMilestone = (id: number) => {
    document.getElementById(`milestone-${id}`)?.scrollIntoView({ behavior: 'auto' });
  };

  milestones.forEach(milestone => {
    useScrollSnap(refs[milestone.id].milestone, milestone.id);
  });
  
  const handleScrollLeft = (e: React.UIEvent<HTMLDivElement>) => {
    const rightDiv = document.querySelector('.right');
    if (rightDiv) {
      rightDiv.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const handleScrollRight = (e: React.UIEvent<HTMLDivElement>) => {
    const leftDiv = document.querySelector('.left');
    if (leftDiv) {
      leftDiv.scrollTop = e.currentTarget.scrollTop;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full overflow-y-scroll snap-y snap-mandatory" onScroll={handleScrollRight}>

      {milestones.map((milestone) => (
        <div className="h-full flex flex-col w-full overflow-y-scroll p-4  justify-center snap-center " key={milestone.id}>
          <Milestone ref={refs[milestone.id].milestone} key={milestone.id} {...milestone} />
            {
              accordions
              .filter((accordion) => accordion.id === milestone.id)
               .map((accordion) => (
               <Accordion ref={refs[accordion.id].accordion} key={accordion.id} onClick={() => scrollToMilestone(accordion.id)} {...accordion} />
             ))
            }
        </div>
      )
         
      )}
      </div>
    </div>
  );
};

export default Roadmap;