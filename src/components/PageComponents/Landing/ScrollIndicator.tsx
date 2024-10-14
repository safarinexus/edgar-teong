import React from 'react';
import { FaArrowDown } from "react-icons/fa6";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-8">
      <p className="text-md">Scroll to Discover</p>

      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 dark:bg-amber-700">
        <FaArrowDown className="animate-updown"/>
      </div>
    </div>
  );
};

export default ScrollIndicator;