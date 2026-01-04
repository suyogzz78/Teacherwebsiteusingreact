import React from 'react';
import { Users, GraduationCap, BookOpen, Award, TrendingUp } from 'lucide-react';

const FacultyPage = () => {
  const faculties = [
    {
      name: 'Computer Science & IT',
      code: 'CSIT',
      icon: '💻',
      color: 'blue',
      students: 320,
      teachers: 8,
      courses: 12,
      avgGPA: 3.6,
      description: 'Focuses on software development, networking, and modern computing technologies.'
    },
    {
      name: 'Computer Applications',
      code: 'BCA',
      icon: '📱',
      color: 'purple',
      students: 280,
      teachers: 6,
      courses: 10,
      avgGPA: 3.5,
      description: 'Emphasizes application development and software engineering principles.'
    },
    {
      name: 'Business Management',
      code: 'BBM',
      icon: '📊',
      color: 'green',
      students: 256,
      teachers: 6,
      courses: 8,
      avgGPA: 3.7,
      description: 'Covers business administration, marketing, finance, and entrepreneurship.'
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'green': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Faculty Overview</h1>
        <p className="text-gray-600 mt-1">Academic departments and their performance metrics</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {faculties.map((faculty, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className={`bg-gradient-to-br ${getColorClasses(faculty.color)} p-6 text-white`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-4xl mb-2">{faculty.icon}</div>
                  <h2 className="text-xl font-bold">{faculty.name}</h2>
                  <p className="text-sm opacity-90">{faculty.code} Program</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{faculty.students}</div>
                  <p className="text-sm opacity-90">Students</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">{faculty.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">Faculty</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{faculty.teachers}</p>
                </div>
                
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <BookOpen className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">Courses</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{faculty.courses}</p>
                </div>
                
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <GraduationCap className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">Avg GPA</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{faculty.avgGPA}</p>
                </div>
                
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">Success</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">92%</p>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Department Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Department Comparison</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">CSIT Department</span>
              <span className="text-gray-600">320 students • 8 faculty</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">BCA Department</span>
              <span className="text-gray-600">280 students • 6 faculty</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full bg-purple-600" style={{ width: '39%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">BBM Department</span>
              <span className="text-gray-600">256 students • 6 faculty</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full bg-green-600" style={{ width: '36%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Total Students:</span> 856
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Total Faculty:</span> 20
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Student-Faculty Ratio:</span> 43:1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;