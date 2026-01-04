import React from 'react';
import { 
  Users, BookOpen, Award, Calendar, 
  TrendingUp, BarChart, MessageSquare, Bell 
} from 'lucide-react';

const TeacherDashboard = () => {
  const teacherStats = {
    courses: 4,
    students: 120,
    rating: 4.7,
    attendance: 94,
    upcomingClasses: 3,
    assignments: 5
  };

  const recentActivities = [
    { id: 1, type: 'assignment', title: 'Submitted Web Tech Assignment', time: '2 hours ago' },
    { id: 2, type: 'grade', title: 'Graded DBMS Midterm', time: '1 day ago' },
    { id: 3, type: 'announcement', title: 'Posted Course Announcement', time: '2 days ago' },
    { id: 4, type: 'meeting', title: 'Faculty Meeting Attended', time: '3 days ago' }
  ];

  const upcomingSchedule = [
    { id: 1, course: 'Web Technology', time: '10:00 AM', room: 'Lab A-101' },
    { id: 2, course: 'Database Systems', time: '2:00 PM', room: 'Room B-205' },
    { id: 3, course: 'Software Engineering', time: '4:00 PM', room: 'Room C-301' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Dr. Rajesh Sharma</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">{teacherStats.courses}</h3>
              <p className="text-blue-100">Active Courses</p>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">{teacherStats.students}</h3>
              <p className="text-green-100">Total Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Schedule</h3>
          <div className="space-y-4">
            {upcomingSchedule.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{item.course}</p>
                  <p className="text-sm text-gray-500">{item.room}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{item.time}</p>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{teacherStats.rating}</p>
            <p className="text-sm text-gray-600">Teaching Rating</p>
            <p className="text-xs text-gray-500 mt-1">Out of 5.0</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{teacherStats.attendance}%</p>
            <p className="text-sm text-gray-600">Class Attendance</p>
            <p className="text-xs text-gray-500 mt-1">Average rate</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <BarChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{teacherStats.assignments}</p>
            <p className="text-sm text-gray-600">Pending Grading</p>
            <p className="text-xs text-gray-500 mt-1">Assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;