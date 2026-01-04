  import React from 'react';
import { BookOpen, Clock, Users, TrendingUp, FileText, Award } from 'lucide-react';

const CourseCard = ({ course, faculty, semester, onClick }) => {
  const getRandomStats = () => ({
    enrolled: Math.floor(Math.random() * 100) + 30,
    completion: Math.floor(Math.random() * 30) + 70,
    rating: (Math.random() * 2 + 3).toFixed(1)
  });

  const stats = getRandomStats();

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Semester {semester}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{course}</h3>
        <p className="text-sm text-gray-600 mb-4">{faculty} Program</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            <span>{stats.enrolled} Students Enrolled</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
            <span>{stats.completion}% Completion Rate</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Award className="h-4 w-4 mr-2 text-yellow-500" />
            <span>Rating: {stats.rating}/5.0</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>45 Hours</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FileText className="h-4 w-4 mr-1" />
              <span>3 Credits</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Course Progress</span>
              <span>{stats.completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${stats.completion}%` }}
              ></div>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          View Course Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;