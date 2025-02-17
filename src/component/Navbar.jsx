import {
  AdjustmentsVerticalIcon,
  Bars2Icon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <div>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <AdjustmentsVerticalIcon className="w-6 h-6" />
          <h1 className="text-xl font-medium">Radiant</h1>
          <div className="bg-gray-600/35 rounded-full px-3 py-1/2 ml-2 hidden lg:block">
            <p className="flex items-center justify-center gap-x-2 text-white text-base font-medium">
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="w-4 h-4" />
            </p>
          </div>
        </div>

        <Bars2Icon className="w-6 h-6 lg:hidden" onClick={handleMenuClick} />
        <div className="hidden lg:block">
          <ul className="flex gap-x-4 font-medium">
            <li>Pricing</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
      {/* mobile menu */}
      {menuOpen && (
        <div className="pt-10 lg:hidden">
          <ul className="space-y-4 text-base font-medium">
            <li>Pricing</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
