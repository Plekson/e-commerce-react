// components/InfoDropdown.tsx

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

interface InfoDropdownProps {
  title: string;
  deliveryInfo: string;
}

const InfoDropdown = ({ title, deliveryInfo }: InfoDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between py-2 px-4 rounded w-full text-center border-b"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" />
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition-transform origin-top duration-300 ease-out"
        enterFrom="transform scale-y-0"
        enterTo="transform scale-y-100"
        leave="transition-transform origin-top duration-300 ease-in"
        leaveFrom="transform scale-y-100"
        leaveTo="transform scale-y-0"
      >
        <div className="p-4">
          <p>{deliveryInfo}</p>
        </div>
      </Transition>
    </div>
  );
};

export default InfoDropdown;
