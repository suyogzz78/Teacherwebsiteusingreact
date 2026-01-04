import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TeacherDirectory from './pages/TeacherDirectory';
import StudentManagement from './pages/StudentManagement';
import CourseManagement from './pages/CourseManagement';
import AnalyticsPage from './pages/AnalyticsPage';
import TeacherDashboard from './pages/TeacherDashboard';
import FacultyPage from './pages/FacultyPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'teachers':
        return <TeacherDirectory />;
      case 'students':
        return <StudentManagement />;
      case 'courses':
        return <CourseManagement />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'teacher-dashboard':
        return <TeacherDashboard />;
      case 'faculty':
        return <FacultyPage />;
      case 'admin':
        return <AdminPanel />;
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
            <p className="text-gray-600">System settings and configuration</p>
          </div>
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="pt-16 lg:pl-64 min-h-screen flex flex-col">
        <div className="flex-1 p-6">
          {renderPage()}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;