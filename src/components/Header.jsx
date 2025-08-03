import React from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="  ">
                <img
                  src="SARUS LOGO.png"
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-navy font-semibold text-lg">
                SARUS AEROSPACE
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-navy px-3 py-2 rounded-md text-sm font-medium"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-navy px-3 py-2 rounded-md text-sm font-medium"
            >
              ABOUT US
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-navy px-3 py-2 rounded-md text-sm font-medium flex items-center">
                PRODUCTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-navy px-3 py-2 rounded-md text-sm font-medium"
            >
              SPECS
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-navy px-3 py-2 rounded-md text-sm font-medium"
            >
              SUPPORT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
