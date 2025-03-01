import { ChevronDoubleUpIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DropDown = ({ label, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <button
        className="border-1 border-gray-300 px-4 py-2 text-md font-medium flex items-center justify-between gap-x-4"
        onClick={() => setIsOpen(!isOpen)}>
        {selected || `${label}`}
        <ChevronUpIcon className={`size-6 text-gray-400 ${isOpen ? 'rotate-180': ''} transition-all delay-100`} />
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white">
          {options?.map((option, index) => (
            <li className="hover:bg-gray-300  py-2 w-full text-center" key={index} onClick={() => { setSelected(option); setIsOpen(false); }}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
