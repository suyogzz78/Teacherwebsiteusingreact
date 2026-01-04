import React from 'react';
import { 
  Home, Users, GraduationCap, BookOpen, 
  BarChart, Settings, LogOut, Calendar,
  FileText, Award, TrendingUp
} from 'lucide-react';

const Sidebar = ({ currentPage, setCurrentPage, isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home, badge: null },
    { id: 'teachers', label: 'Teachers', icon: Users, badge: 24 },
    { id: 'students', label: 'Students', icon: GraduationCap, badge: 856 },
    { id: 'courses', label: 'Courses', icon: BookOpen, badge: 38 },
    { id: 'analytics', label: 'Analytics', icon: BarChart, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      <aside className={`fixed left-0 top-16 h-full bg-white shadow-xl z-40 w-64 transform transition-transform lg:translate-x-0 border-r border-gray-100 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 space-y-1">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    currentPage === item.id 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-100 mt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 flex items-center">
                <Calendar className="h-3 w-3 mr-2" />
                Today
              </span>
              <span className="font-semibold">24 Teachers</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 flex items-center">
                <FileText className="h-3 w-3 mr-2" />
                This Week
              </span>
              <span className="font-semibold">38 Courses</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-2" />
                Performance
              </span>
              <span className="font-semibold text-green-600">92%</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;