import React from 'react';
import { 
  Plus, FileText, Award, Users, Clock, 
  CheckCircle, TrendingUp, BookOpen 
} from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      icon: Plus,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      title: 'New student enrolled',
      description: 'Aarav Shrestha - CSIT Semester 4',
      time: '2 hours ago',
      status: 'new'
    },
    {
      id: 2,
      icon: FileText,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      title: 'Assignment submitted',
      description: 'BCA Semester 5 - Web Technology II',
      time: '5 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      icon: Award,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      title: 'Grade published',
      description: 'BBM Semester 6 - Marketing Management',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 4,
      icon: Users,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      title: 'New teacher added',
      description: 'Dr. Rajesh Kumar - CSIT Faculty',
      time: '2 days ago',
      status: 'completed'
    },
    {
      id: 5,
      icon: TrendingUp,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100',
      title: 'Performance improved',
      description: 'CSIT Semester 3 average GPA increased',
      time: '3 days ago',
      status: 'improved'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'new':
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">New</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Completed</span>;
      case 'improved':
        return <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Improved</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map(activity => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`h-10 w-10 ${activity.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>
                <div className="flex items-center mt-2">
                  <Clock className="h-3 w-3 text-gray-400 mr-1" />
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">New Activities</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Completed</span>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <BookOpen className="h-4 w-4" />
            <span>View Activity Log</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;