import React from 'react';
import { ExternalLink } from 'lucide-react';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentActivity from '../components/dashboard/RecentActivity';
import Analytics from '../components/dashboard/Analytics';
import { courseData } from '../data/courseData';

const HomePage = ({ setCurrentPage }) => {
  const stats = {
    teachers: 24,
    students: 856,
    courses: 38,
    successRate: '92%'
  };

  const mockStudents = [
    { id: 1, name: 'Aarav Shrestha', faculty: 'CSIT', gpa: 3.8, attendance: 92 },
    { id: 2, name: 'Priya Tamang', faculty: 'CSIT', gpa: 3.6, attendance: 88 },
    { id: 3, name: 'Rohan Thapa', faculty: 'CSIT', gpa: 3.4, attendance: 85 },
    { id: 4, name: 'Anisha Maharjan', faculty: 'BCA', gpa: 3.9, attendance: 95 }
  ];

  const mockTeachers = [
    { id: 1, name: 'Dr. Rajesh Sharma', faculty: 'CSIT', rating: 4.8, status: 'active' },
    { id: 2, name: 'Prof. Sita Poudel', faculty: 'CSIT', rating: 4.6, status: 'active' },
    { id: 3, name: 'Ms. Anita Gurung', faculty: 'BCA', rating: 4.5, status: 'active' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Faculty Overview</h2>
              <button 
                onClick={() => setCurrentPage('courses')}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <span>View All Programs</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {Object.entries(courseData).map(([key, faculty]) => (
                <div key={key} className="border-l-4 border-blue-600 bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-r-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {faculty.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{faculty.name}</span> • {faculty.duration}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {faculty.semesters.length} Semesters • {faculty.semesters.reduce((acc, sem) => acc + sem.courses.length, 0)} Courses
                      </p>
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                        {faculty.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setCurrentPage('courses')}
                      className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Analytics students={mockStudents} teachers={mockTeachers} />
        </div>

        <div className="space-y-6">
          <RecentActivity />
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={() => setCurrentPage('teachers')}
                className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Add New Teacher</p>
                    <p className="text-sm text-gray-600">Register faculty member</p>
                  </div>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
              
              <button 
                onClick={() => setCurrentPage('students')}
                className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Enroll Student</p>
                    <p className="text-sm text-gray-600">New student admission</p>
                  </div>
                  <span className="text-green-600">+</span>
                </div>
              </button>
              
              <button 
                onClick={() => setCurrentPage('courses')}
                className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Create Course</p>
                    <p className="text-sm text-gray-600">Add new course</p>
                  </div>
                  <span className="text-purple-600">+</span>
                </div>
              </button>
              
              <button 
                onClick={() => setCurrentPage('analytics')}
                className="w-full text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Generate Report</p>
                    <p className="text-sm text-gray-600">Academic performance</p>
                  </div>
                  <span className="text-orange-600">📊</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">System Status</h3>
            <p className="text-blue-100 mb-4">All systems operational</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Database</span>
                <span className="text-green-300">✓ Online</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Authentication</span>
                <span className="text-green-300">✓ Online</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>API Services</span>
                <span className="text-green-300">✓ Online</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Uptime</span>
                <span>99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;