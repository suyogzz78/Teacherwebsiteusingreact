// import React from 'react';
// import { ExternalLink } from 'lucide-react';
// import DashboardStats from '../components/dashboard/DashboardStats';
// import RecentActivity from '../components/dashboard/RecentActivity';
// import Analytics from '../components/dashboard/Analytics';
// import { courseData } from '../data/courseData';

// const HomePage = ({ setCurrentPage }) => {
//   const stats = {
//     teachers: 24,
//     students: 856,
//     courses: 38,
//     successRate: '92%'
//   };

//   const mockStudents = [
//     { id: 1, name: 'Aarav Shrestha', faculty: 'CSIT', gpa: 3.8, attendance: 92 },
//     { id: 2, name: 'Priya Tamang', faculty: 'CSIT', gpa: 3.6, attendance: 88 },
//     { id: 3, name: 'Rohan Thapa', faculty: 'CSIT', gpa: 3.4, attendance: 85 },
//     { id: 4, name: 'Anisha Maharjan', faculty: 'BCA', gpa: 3.9, attendance: 95 }
//   ];

//   const mockTeachers = [
//     { id: 1, name: 'Dr. Rajesh Sharma', faculty: 'CSIT', rating: 4.8, status: 'active' },
//     { id: 2, name: 'Prof. Sita Poudel', faculty: 'CSIT', rating: 4.6, status: 'active' },
//     { id: 3, name: 'Ms. Anita Gurung', faculty: 'BCA', rating: 4.5, status: 'active' }
//   ];

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
//       </div>

//       <DashboardStats stats={stats} />

//       <div className="grid lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-6">
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold text-gray-800">Faculty Overview</h2>
//               <button 
//                 onClick={() => setCurrentPage('courses')}
//                 className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 <span>View All Programs</span>
//                 <ExternalLink className="h-4 w-4" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               {Object.entries(courseData).map(([key, faculty]) => (
//                 <div key={key} className="border-l-4 border-blue-600 bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-r-xl hover:shadow-lg transition-all duration-300 group">
//                   <div className="flex flex-col md:flex-row md:items-start justify-between">
//                     <div className="flex-1">
//                       <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
//                         {faculty.fullName}
//                       </h3>
//                       <p className="text-sm text-gray-600 mt-1">
//                         <span className="font-medium">{faculty.name}</span> • {faculty.duration}
//                       </p>
//                       <p className="text-sm text-gray-500 mt-2">
//                         {faculty.semesters.length} Semesters • {faculty.semesters.reduce((acc, sem) => acc + sem.courses.length, 0)} Courses
//                       </p>
//                       <p className="text-sm text-gray-600 mt-3 line-clamp-2">
//                         {faculty.description}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => setCurrentPage('courses')}
//                       className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Analytics students={mockStudents} teachers={mockTeachers} />
//         </div>

//         <div className="space-y-6">
//           <RecentActivity />
          
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
//             <div className="space-y-3">
//               <button 
//                 onClick={() => setCurrentPage('teachers')}
//                 className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-medium text-gray-800">Add New Teacher</p>
//                     <p className="text-sm text-gray-600">Register faculty member</p>
//                   </div>
//                   <span className="text-blue-600">+</span>
//                 </div>
//               </button>
              
//               <button 
//                 onClick={() => setCurrentPage('students')}
//                 className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-medium text-gray-800">Enroll Student</p>
//                     <p className="text-sm text-gray-600">New student admission</p>
//                   </div>
//                   <span className="text-green-600">+</span>
//                 </div>
//               </button>
              
//               <button 
//                 onClick={() => setCurrentPage('courses')}
//                 className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-medium text-gray-800">Create Course</p>
//                     <p className="text-sm text-gray-600">Add new course</p>
//                   </div>
//                   <span className="text-purple-600">+</span>
//                 </div>
//               </button>
              
//               <button 
//                 onClick={() => setCurrentPage('analytics')}
//                 className="w-full text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="font-medium text-gray-800">Generate Report</p>
//                     <p className="text-sm text-gray-600">Academic performance</p>
//                   </div>
//                   <span className="text-orange-600">📊</span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
//             <h3 className="text-lg font-bold mb-2">System Status</h3>
//             <p className="text-blue-100 mb-4">All systems operational</p>
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm">
//                 <span>Database</span>
//                 <span className="text-green-300">✓ Online</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Authentication</span>
//                 <span className="text-green-300">✓ Online</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>API Services</span>
//                 <span className="text-green-300">✓ Online</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Uptime</span>
//                 <span>99.9%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;









// import React from "react";
// import {
//   GraduationCap,
//   Users,
//   BookOpen,
//   BarChart3,
//   ArrowRight,
// } from "lucide-react";

// const Home = ({ setCurrentPage }) => {
//   const cards = [
//     {
//       title: "Students",
//       value: "856+",
//       icon: Users,
//       color: "from-blue-500 to-blue-600",
//       page: "students",
//     },
//     {
//       title: "Teachers",
//       value: "24",
//       icon: GraduationCap,
//       color: "from-green-500 to-green-600",
//       page: "teachers",
//     },
//     {
//       title: "Courses",
//       value: "38",
//       icon: BookOpen,
//       color: "from-purple-500 to-purple-600",
//       page: "courses",
//     },
//     {
//       title: "Analytics",
//       value: "92%",
//       icon: BarChart3,
//       color: "from-orange-500 to-orange-600",
//       page: "analytics",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
//         <h1 className="text-3xl font-bold">College Management Dashboard</h1>
//         <p className="mt-2 text-blue-100 max-w-xl">
//           Manage students, teachers, courses, and academic analytics from one
//           powerful platform.
//         </p>

//         <button
//           onClick={() => setCurrentPage("analytics")}
//           className="mt-6 inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition"
//         >
//           View Analytics
//           <ArrowRight className="h-4 w-4" />
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cards.map((card, index) => {
//           const Icon = card.icon;
//           return (
//             <div
//               key={index}
//               onClick={() => setCurrentPage(card.page)}
//               className="cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
//             >
//               <div
//                 className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center text-white mb-4`}
//               >
//                 <Icon className="h-6 w-6" />
//               </div>

//               <h3 className="text-gray-600 text-sm">{card.title}</h3>
//               <p className="text-2xl font-bold text-gray-900 mt-1">
//                 {card.value}
//               </p>

//               <p className="text-sm text-blue-600 mt-3 opacity-0 group-hover:opacity-100 transition">
//                 View details →
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Info Section */}
//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* Left */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             System Overview
//           </h2>

//           <p className="text-gray-600 leading-relaxed">
//             This platform helps institutions manage academic operations
//             efficiently. From student enrollment to teacher performance and
//             course tracking, everything is streamlined into one secure system.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
//               Secure System
//             </span>
//             <span className="px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium">
//               Real-time Analytics
//             </span>
//             <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
//               Easy Management
//             </span>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
//           <h3 className="text-lg font-bold mb-4">System Status</h3>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Database</span>
//               <span className="text-green-400">● Online</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Authentication</span>
//               <span className="text-green-400">● Active</span>
//             </div>
//             <div className="flex justify-between">
//               <span>API Services</span>
//               <span className="text-green-400">● Running</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Uptime</span>
//               <span>99.9%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;












import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Layers } from "lucide-react";

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/30 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl"
        >
          A Smarter Way to  
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Manage Education
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-xl text-lg"
        >
          Experience a modern, secure, and intuitive academic management system
          built for the next generation of institutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => setCurrentPage("courses")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Explore Platform
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => setCurrentPage("about")}
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-8">
          
          {[
            {
              icon: Sparkles,
              title: "Elegant Experience",
              desc: "A clean, distraction-free interface designed for clarity and focus."
            },
            {
              icon: Shield,
              title: "Secure by Design",
              desc: "Built with modern security principles and role-based access."
            },
            {
              icon: Layers,
              title: "Scalable System",
              desc: "Designed to grow with institutions of any size."
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <Icon className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center text-gray-500 pb-10 text-sm">
        Designed for performance, clarity, and future innovation.
      </div>
    </div>
  );
};

export default Home;
