import React from 'react';

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  color = 'blue',
  description 
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  };

  const changeColor = change?.startsWith('+') ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        {change && (
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            <span className={changeColor}>{change}</span>
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-white/90 font-medium">{title}</p>
      {description && (
        <p className="text-white/70 text-sm mt-2">{description}</p>
      )}
    </div>
  );
};

export default StatCard;