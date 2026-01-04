import React from 'react';
import { TrendingUp, Users, GraduationCap, BookOpen, BarChart } from 'lucide-react';

const Analytics = ({ students, teachers }) => {
  const facultyStats = {
    CSIT: students.filter(s => s.faculty === 'CSIT').length,
    BCA: students.filter(s => s.faculty === 'BCA').length,
    BBM: students.filter(s => s.faculty === 'BBM').length
  };

  const avgGPA = (students.reduce((acc, s) => acc + s.gpa, 0) / students.length).toFixed(2);
  const avgAttendance = Math.round(students.reduce((acc, s) => acc + s.attendance, 0) / students.length);
  
  const performanceData = [
    { label: 'Excellent (A)', value: 35, color: 'bg-green-500' },
    { label: 'Good (B)', value: 45, color: 'bg-blue-500' },
    { label: 'Average (C)', value: 15, color: 'bg-yellow-500' },
    { label: 'Needs Improvement', value: 5, color: 'bg-red-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Analytics Overview</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <BarChart className="h-4 w-4" />
          <span>Real-time Data</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Students by Faculty</h3>
          <div className="space-y-4">
            {Object.entries(facultyStats).map(([faculty, count]) => {
              const percentage = Math.round((count / students.length) * 100);
              return (
                <div key={faculty}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        faculty === 'CSIT' ? 'bg-blue-500' :
                        faculty === 'BCA' ? 'bg-purple-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-medium text-gray-700">{faculty}</span>
                    </div>
                    <span className="text-sm text-gray-600">{count} students ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        faculty === 'CSIT' ? 'bg-blue-600' :
                        faculty === 'BCA' ? 'bg-purple-600' : 'bg-green-600'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-700 mb-4">Performance Distribution</h3>
            <div className="space-y-3">
              {performanceData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-8">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Avg GPA</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{avgGPA}</p>
                <p className="text-xs text-gray-500 mt-1">Out of 4.0</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Avg Attendance</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{avgAttendance}%</p>
                <p className="text-xs text-gray-500 mt-1">Overall</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Pass Rate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">92%</p>
                <p className="text-xs text-gray-500 mt-1">Last Semester</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Course Load</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">5.2</p>
                <p className="text-xs text-gray-500 mt-1">Avg courses per student</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-4">Faculty Distribution</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{teachers.filter(t => t.faculty === 'CSIT').length}</div>
                  <p className="text-sm text-gray-600">CSIT Faculty</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{teachers.filter(t => t.faculty === 'BCA').length}</div>
                  <p className="text-sm text-gray-600">BCA Faculty</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{teachers.filter(t => t.faculty === 'BBM').length}</div>
                  <p className="text-sm text-gray-600">BBM Faculty</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>Total Faculty: {teachers.length}</span>
                <span>Student-Faculty Ratio: {Math.round(students.length / teachers.length)}:1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;