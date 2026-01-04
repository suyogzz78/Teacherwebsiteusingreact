import React from 'react';
import { Filter } from 'lucide-react';
import SearchBar from '../common/SearchBar';

const TeacherFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedFaculty, 
  setSelectedFaculty, 
  sortBy, 
  setSortBy,
  showStats = false 
}) => {
  const faculties = ['ALL', 'CSIT', 'BCA', 'BBM'];
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'experience', label: 'Experience (High to Low)' },
    { value: 'experience-asc', label: 'Experience (Low to High)' },
    { value: 'rating', label: 'Rating (High to Low)' },
    { value: 'rating-asc', label: 'Rating (Low to High)' }
  ];

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <SearchBar
            placeholder="Search teachers by name, specialization, or courses..."
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={handleClearSearch}
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="flex gap-2">
            {faculties.map(faculty => (
              <button
                key={faculty}
                onClick={() => setSelectedFaculty(faculty)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFaculty === faculty
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {faculty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showStats && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-600">Active: 18</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-600">On Leave: 4</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-gray-600">CSIT: 8</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-600">BCA: 6</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              <span className="text-gray-600">BBM: 6</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherFilters;