import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded"></div>
              <span className="text-lg font-bold text-gray-800">Vedas College</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Teacher Management System v2.0</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 flex items-center justify-center md:justify-end">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> by Vedas College IT Team
            </p>
            <p className="text-xs text-gray-500 mt-1">
              © {new Date().getFullYear()} Vedas College. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;