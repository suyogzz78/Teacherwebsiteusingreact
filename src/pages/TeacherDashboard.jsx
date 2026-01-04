// import React from 'react';
// import { 
//   Users, BookOpen, Award, Calendar, 
//   TrendingUp, BarChart, MessageSquare, Bell 
// } from 'lucide-react';

// const TeacherDashboard = () => {
//   const teacherStats = {
//     courses: 4,
//     students: 120,
//     rating: 4.7,
//     attendance: 94,
//     upcomingClasses: 3,
//     assignments: 5
//   };

//   const recentActivities = [
//     { id: 1, type: 'assignment', title: 'Submitted Web Tech Assignment', time: '2 hours ago' },
//     { id: 2, type: 'grade', title: 'Graded DBMS Midterm', time: '1 day ago' },
//     { id: 3, type: 'announcement', title: 'Posted Course Announcement', time: '2 days ago' },
//     { id: 4, type: 'meeting', title: 'Faculty Meeting Attended', time: '3 days ago' }
//   ];

//   const upcomingSchedule = [
//     { id: 1, course: 'Web Technology', time: '10:00 AM', room: 'Lab A-101' },
//     { id: 2, course: 'Database Systems', time: '2:00 PM', room: 'Room B-205' },
//     { id: 3, course: 'Software Engineering', time: '4:00 PM', room: 'Room C-301' }
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
//           <p className="text-gray-600 mt-1">Welcome back, Dr. Rajesh Sharma</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button className="p-2 hover:bg-gray-100 rounded-lg">
//             <Bell className="h-5 w-5 text-gray-700" />
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded-lg">
//             <MessageSquare className="h-5 w-5 text-gray-700" />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
//         <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
//           <div className="flex items-center mb-4">
//             <BookOpen className="h-8 w-8 mr-3" />
//             <div>
//               <h3 className="text-2xl font-bold">{teacherStats.courses}</h3>
//               <p className="text-blue-100">Active Courses</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
//           <div className="flex items-center mb-4">
//             <Users className="h-8 w-8 mr-3" />
//             <div>
//               <h3 className="text-2xl font-bold">{teacherStats.students}</h3>
//               <p className="text-green-100">Total Students</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Schedule</h3>
//           <div className="space-y-4">
//             {upcomingSchedule.map(item => (
//               <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="font-medium text-gray-800">{item.course}</p>
//                   <p className="text-sm text-gray-500">{item.room}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-semibold text-gray-800">{item.time}</p>
//                   <p className="text-sm text-gray-500">Today</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
//           <div className="space-y-4">
//             {recentActivities.map(activity => (
//               <div key={activity.id} className="flex items-center space-x-3">
//                 <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <Calendar className="h-4 w-4 text-blue-600" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-800">{activity.title}</p>
//                   <p className="text-xs text-gray-500">{activity.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
//             <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//             <p className="text-2xl font-bold text-gray-900">{teacherStats.rating}</p>
//             <p className="text-sm text-gray-600">Teaching Rating</p>
//             <p className="text-xs text-gray-500 mt-1">Out of 5.0</p>
//           </div>
          
//           <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
//             <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
//             <p className="text-2xl font-bold text-gray-900">{teacherStats.attendance}%</p>
//             <p className="text-sm text-gray-600">Class Attendance</p>
//             <p className="text-xs text-gray-500 mt-1">Average rate</p>
//           </div>
          
//           <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
//             <BarChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
//             <p className="text-2xl font-bold text-gray-900">{teacherStats.assignments}</p>
//             <p className="text-sm text-gray-600">Pending Grading</p>
//             <p className="text-xs text-gray-500 mt-1">Assignments</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;














import React from "react";
import {
  Users,
  BookOpen,
  Award,
  Calendar,
  TrendingUp,
  BarChart,
  MessageSquare,
  Bell,
} from "lucide-react";

const TeacherDashboard = () => {
  const teacherStats = {
    courses: 4,
    students: 120,
    rating: 4.7,
    attendance: 94,
    assignments: 5,
  };

  const recentActivities = [
    { id: 1, title: "Submitted Web Tech Assignment", time: "2 hours ago" },
    { id: 2, title: "Graded DBMS Midterm", time: "1 day ago" },
    { id: 3, title: "Posted Course Announcement", time: "2 days ago" },
    { id: 4, title: "Faculty Meeting Attended", time: "3 days ago" },
  ];

  const upcomingSchedule = [
    { id: 1, course: "Web Technology", time: "10:00 AM", room: "Lab A-101" },
    { id: 2, course: "Database Systems", time: "2:00 PM", room: "Room B-205" },
    { id: 3, course: "Software Engineering", time: "4:00 PM", room: "Room C-301" },
  ];

  return (
    <div className="space-y-10">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Dr. Rajesh 👋</h1>
            <p className="text-white/80 mt-1">
              Here’s a quick overview of your teaching activity
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 rounded-xl bg-white/20 hover:bg-white/30">
              <Bell />
            </button>
            <button className="p-2 rounded-xl bg-white/20 hover:bg-white/30">
              <MessageSquare />
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Active Courses",
            value: teacherStats.courses,
            icon: BookOpen,
            color: "from-blue-500 to-blue-600",
          },
          {
            label: "Students",
            value: teacherStats.students,
            icon: Users,
            color: "from-emerald-500 to-emerald-600",
          },
          {
            label: "Rating",
            value: teacherStats.rating,
            icon: Award,
            color: "from-yellow-500 to-orange-500",
          },
          {
            label: "Attendance",
            value: `${teacherStats.attendance}%`,
            icon: TrendingUp,
            color: "from-purple-500 to-fuchsia-600",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br p-[1px] from-white/40 to-white/10 hover:scale-[1.02] transition"
            >
              <div
                className={`rounded-2xl bg-gradient-to-br ${item.color} p-6 text-white shadow-lg`}
              >
                <Icon className="h-8 w-8 mb-3 opacity-90" />
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-sm text-white/80">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Schedule */}
        <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Today’s Schedule</h3>
          <div className="space-y-4">
            {upcomingSchedule.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 rounded-xl bg-white hover:bg-indigo-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.course}</p>
                  <p className="text-sm text-gray-500">{item.room}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-indigo-600">{item.time}</p>
                  <p className="text-xs text-gray-500">Today</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="h-9 w-9 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PERFORMANCE */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <h3 className="text-lg font-semibold mb-6">Performance Overview</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
            <Award className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
            <p className="text-3xl font-bold">{teacherStats.rating}</p>
            <p className="text-sm text-gray-500">Teaching Rating</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
            <TrendingUp className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
            <p className="text-3xl font-bold">{teacherStats.attendance}%</p>
            <p className="text-sm text-gray-500">Attendance</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
            <BarChart className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-3xl font-bold">{teacherStats.assignments}</p>
            <p className="text-sm text-gray-500">Pending Assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
