// import React, { useState } from 'react';
// import Navbar from './components/layout/Navbar';
// import Sidebar from './components/layout/Sidebar';
// import Footer from './components/layout/Footer';
// import HomePage from './pages/HomePage';
// import TeacherDirectory from './pages/TeacherDirectory';
// import StudentManagement from './pages/StudentManagement';
// import CourseManagement from './pages/CourseManagement';
// import AnalyticsPage from './pages/AnalyticsPage';
// import TeacherDashboard from './pages/TeacherDashboard';
// import FacultyPage from './pages/FacultyPage';
// import AdminPanel from './pages/AdminPanel';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'home':
//         return <HomePage setCurrentPage={setCurrentPage} />;
//       case 'teachers':
//         return <TeacherDirectory />;
//       case 'students':
//         return <StudentManagement />;
//       case 'courses':
//         return <CourseManagement />;
//       case 'analytics':
//         return <AnalyticsPage />;
//       case 'teacher-dashboard':
//         return <TeacherDashboard />;
//       case 'faculty':
//         return <FacultyPage />;
//       case 'admin':
//         return <AdminPanel />;
//       case 'settings':
//         return (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
//             <p className="text-gray-600">System settings and configuration</p>
//           </div>
//         );
//       default:
//         return <HomePage setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />

//       <Sidebar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />

//       <main className="pt-16 lg:pl-64 min-h-screen flex flex-col">
//         <div className="flex-1 p-6">
//           {renderPage()}
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from "./components/layout/Sidebar";
// import Footer from "./components/layout/Footer";
// import HomePage from "./pages/HomePage";
// import TeacherDirectory from "./pages/TeacherDirectory";
// import StudentManagement from "./pages/StudentManagement";
// import CourseManagement from "./pages/CourseManagement";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import TeacherDashboard from "./pages/TeacherDashboard";
// import FacultyPage from "./pages/FacultyPage";
// import AdminPanel from "./pages/AdminPanel";
// import LoginSignupOverlay from "./components/LoginSignupOverlay"; // path according to your structure

// function App() {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Track logged-in user here (null means no user logged in)
//   const [user, setUser] = useState(null);

//   const renderPage = () => {
//     if (!user) return null; // Hide app content if not logged in

//     switch (currentPage) {
//       case "home":
//         return <HomePage setCurrentPage={setCurrentPage} />;
//       case "teachers":
//         return <TeacherDirectory />;
//       case "students":
//         return <StudentManagement />;
//       case "courses":
//         return <CourseManagement />;
//       case "analytics":
//         return <AnalyticsPage />;
//       case "teacher-dashboard":
//         return <TeacherDashboard />;
//       case "faculty":
//         return <FacultyPage />;
//       case "admin":
//         return <AdminPanel />;
//       case "settings":
//         return (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
//             <p className="text-gray-600">System settings and configuration</p>
//           </div>
//         );
//       default:
//         return <HomePage setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Show login/signup overlay if user is not logged in */}
//       {!user && <LoginSignupOverlay onLogin={setUser} />}

//       {/* Render app only if user is logged in */}
//       {user && (
//         <>
//           <Navbar
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//             user={user}
//           />

//           <Sidebar
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//           />

//           <main className="pt-16 lg:pl-64 min-h-screen flex flex-col">
//             <div className="flex-1 p-6">{renderPage()}</div>
//             <Footer />
//           </main>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;














// function App() {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage setCurrentPage={setCurrentPage} />;
//       case "teachers":
//         return <TeacherDirectory />;
//       case "students":
//         return <StudentManagement />;
//       case "courses":
//         return <CourseManagement />;
//       case "analytics":
//         return <AnalyticsPage />;
//       case "teacher-dashboard":
//         return <TeacherDashboard />;
//       case "faculty":
//         return <FacultyPage />;
//       case "admin":
//         return <AdminPanel />;
//       case "settings":
//         return (
//           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
//             <p className="text-gray-600">System settings and configuration</p>
//           </div>
//         );
//       default:
//         return <HomePage setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen relative bg-gray-50">
//       {/* Always render the navbar and sidebar only when logged in */}
//       {user && (
//         <>
//           <Navbar
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//             user={user}
//           />

//           <Sidebar
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//           />
//         </>
//       )}

//       <main className={`pt-16 lg:pl-64 min-h-screen flex flex-col`}>
//         <div className="flex-1 p-6">
//           {renderPage()}
//         </div>
//         {user && <Footer />}
//       </main>

//       {/* Show login/signup overlay if user is NOT logged in */}
//       {!user && <LoginSignupOverlay onLogin={setUser} />}
//     </div>
//   );
// }






import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import TeacherDirectory from "./pages/TeacherDirectory";
import StudentManagement from "./pages/StudentManagement";
import CourseManagement from "./pages/CourseManagement";
import AnalyticsPage from "./pages/AnalyticsPage";
import TeacherDashboard from "./pages/TeacherDashboard";
import FacultyPage from "./pages/FacultyPage";
import AdminPanel from "./pages/AdminPanel";
import LoginSignupOverlay from "./components/LoginSignupOverlay"; // adjust path if needed

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Track logged-in user here (null means no user logged in)
  const [user, setUser] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "teachers":
        return <TeacherDirectory />;
      case "students":
        return <StudentManagement />;
      case "courses":
        return <CourseManagement />;
      case "analytics":
        return <AnalyticsPage />;
      case "teacher-dashboard":
        return <TeacherDashboard />;
      case "faculty":
        return <FacultyPage />;
      case "admin":
        return <AdminPanel />;
      case "settings":
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
    <div className="min-h-screen relative bg-gray-50">
      {/* Render Navbar and Sidebar only when logged in */}
      {user && (
        <>
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            user={user}
          />

          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </>
      )}

      <main className={`pt-16 lg:pl-64 min-h-screen flex flex-col`}>
        <div className="flex-1 p-6">{renderPage()}</div>
        {user && <Footer />}
      </main>

      {/* Login/signup overlay shown if no user */}
      {!user && <LoginSignupOverlay onLogin={setUser} />}
    </div>
  );
}

export default App;
