"use client"
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { forwardRef, useState } from 'react';

interface AccordionProps {
  id: number;
  title: string;
  content: string;
  onClick: () => void;
}

// eslint-disable-next-line react/display-name
const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ id, title, content, onClick }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div id={`accordion-${id}`} ref={ref} className="items-center my-4 flex flex-col ">
      <div
        onClick={handleClick}
        className="w-3/4 p-2 bg-gray-800 border border-gray-600 hover:border-gray-400 rounded-md font-medium text-left cursor-pointer grid grid-cols-6 py-4"
      >
        <span className='col-span-1'>
            <CheckBadgeIcon className="h-5 w-5 text-green-500" />
        </span>
        <span className="col-span-5">{title}</span>
      </div>
      {isOpen && <div className="p-4 border-l-2 border-gray-400">{content}</div>}
    </div>
  );
});

export default Accordion;