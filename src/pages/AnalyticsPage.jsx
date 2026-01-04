import React, { useState } from 'react';
import { TrendingUp, Download, Filter, Calendar } from 'lucide-react';
import Analytics from '../components/dashboard/Analytics';
import { initialStudents } from '../data/mockStudents';
import { initialTeachers } from '../data/mockTeachers';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [department, setDepartment] = useState('ALL');

  const stats = {
    students: 856,
    teachers: 24,
    courses: 38,
    successRate: '92%',
    averageGPA: '3.5',
    attendance: '89%'
  };

  const timeRanges = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ];

  const departments = ['ALL', 'CSIT', 'BCA', 'BBM'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
            <Calendar className="h-4 w-4 text-gray-600" />
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent border-none focus:ring-0"
            >
              {timeRanges.map(range => (
                <option key={range.id} value={range.id}>{range.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
            <Filter className="h-4 w-4 text-gray-600" />
            <select 
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="bg-transparent border-none focus:ring-0"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">{stats.averageGPA}</h3>
              <p className="text-blue-100">Average GPA</p>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-green-300">↑ 5% </span>
            <span className="text-blue-200">from last month</span>
          </div>
        </div>
        
        <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">{stats.attendance}</h3>
              <p className="text-green-100">Average Attendance</p>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-green-300">↑ 2% </span>
            <span className="text-green-200">from last month</span>
          </div>
        </div>
      </div>

      <Analytics students={initialStudents} teachers={initialTeachers} />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Students</h3>
          <div className="space-y-3">
            {initialStudents
              .sort((a, b) => b.gpa - a.gpa)
              .slice(0, 5)
              .map((student, idx) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${
                      idx === 0 ? 'bg-yellow-500' : 
                      idx === 1 ? 'bg-gray-400' : 
                      idx === 2 ? 'bg-orange-600' : 'bg-blue-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.faculty} - Sem {student.semester}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{student.gpa.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{student.attendance}% attendance</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Performance</h3>
          <div className="space-y-3">
            {initialTeachers
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5)
              .map((teacher, idx) => (
                <div key={teacher.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{teacher.name.split(' ')[0]}</p>
                      <p className="text-xs text-gray-500">{teacher.faculty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-600">{teacher.rating}/5.0</p>
                    <p className="text-xs text-gray-500">{teacher.experience}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary Report</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Total Enrollment</p>
            <p className="text-2xl font-bold text-gray-900">{stats.students}</p>
            <p className="text-xs text-gray-500">Active students</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Course Completion</p>
            <p className="text-2xl font-bold text-gray-900">{stats.successRate}</p>
            <p className="text-xs text-gray-500">Last semester</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Faculty Count</p>
            <p className="text-2xl font-bold text-gray-900">{stats.teachers}</p>
            <p className="text-xs text-gray-500">Teaching staff</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Active Courses</p>
            <p className="text-2xl font-bold text-gray-900">{stats.courses}</p>
            <p className="text-xs text-gray-500">This semester</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;