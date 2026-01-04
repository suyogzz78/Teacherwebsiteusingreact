import React, { useState } from 'react';
import { BookOpen, Clock, Users, ChevronDown, ChevronRight, Plus } from 'lucide-react';
import SearchBar from '../common/SearchBar';

const CourseList = ({ courseData, onCourseSelect }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('CSIT');
  const [expandedSemester, setExpandedSemester] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const faculty = courseData[selectedFaculty];

  const filteredCourses = faculty.semesters.flatMap(sem => 
    sem.courses.filter(course => 
      course.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleSemester = (sem) => {
    setExpandedSemester(expandedSemester === sem ? null : sem);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search courses..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>
          
          <div className="flex gap-2">
            {Object.keys(courseData).map(key => (
              <button
                key={key}
                onClick={() => {
                  setSelectedFaculty(key);
                  setExpandedSemester(1);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFaculty === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {courseData[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{faculty.fullName}</h2>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {faculty.duration}
                </span>
                <span className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {faculty.semesters.length} Semesters
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {faculty.semesters.reduce((acc, sem) => acc + sem.courses.length, 0)} Courses
                </span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              <span>Add Course</span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {faculty.semesters.map((semester) => (
            <div key={semester.sem} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSemester(semester.sem)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {semester.sem}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">Semester {semester.sem}</h3>
                    <p className="text-sm text-gray-600">{semester.courses.length} courses</p>
                  </div>
                </div>
                {expandedSemester === semester.sem ? (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                )}
              </button>

              {expandedSemester === semester.sem && (
                <div className="p-4 bg-white">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {semester.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => onCourseSelect && onCourseSelect(course, semester.sem)}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            Course {idx + 1}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-800 mb-2">{course}</h4>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Credit: 3</span>
                          <span>Hours: 45</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <button className="text-sm text-blue-600 hover:text-blue-700">
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {searchQuery && filteredCourses.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Search Results ({filteredCourses.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="font-medium">{course}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Found in {selectedFaculty}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseList;