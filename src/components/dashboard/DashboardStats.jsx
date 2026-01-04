import React from 'react';
import { Users, GraduationCap, BookOpen, Award, TrendingUp, Calendar } from 'lucide-react';
import StatCard from '../common/StatCard';

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Teachers',
      value: stats?.teachers || '24',
      icon: Users,
      change: '+2',
      color: 'blue',
      description: 'Active faculty members'
    },
    {
      title: 'Total Students',
      value: stats?.students || '856',
      icon: GraduationCap,
      change: '+45',
      color: 'green',
      description: 'Currently enrolled'
    },
    {
      title: 'Active Courses',
      value: stats?.courses || '38',
      icon: BookOpen,
      change: '+3',
      color: 'purple',
      description: 'Running this semester'
    },
    {
      title: 'Success Rate',
      value: stats?.successRate || '92%',
      icon: Award,
      change: '+5%',
      color: 'orange',
      description: 'Overall performance'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;