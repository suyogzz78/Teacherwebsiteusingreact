// import React, { useState } from 'react';
// import { Edit, Trash2, Star, Mail, Phone, Briefcase, MapPin, BookOpen, Eye } from 'lucide-react';
// import { teacherImages } from '../../data/mockTeachers';

// const TeacherCard = ({ teacher, onDelete, onEdit, onView }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   const StatusBadge = ({ status }) => {
//     const config = {
//       'active': { color: 'bg-green-100 text-green-800', label: 'Active' },
//       'on-leave': { color: 'bg-yellow-100 text-yellow-800', label: 'On Leave' },
//       'inactive': { color: 'bg-red-100 text-red-800', label: 'Inactive' }
//     };
//     const { color, label } = config[status] || config.active;
    
//     return (
//       <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
//         {label}
//       </span>
//     );
//   }; 

//   return (
//     <div 
//       className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-4">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               {teacherImages[teacher.id] ? (
//                 <img 
//                   src={teacherImages[teacher.id]} 
//                   alt={teacher.name}
//                   className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
//                 />
//               ) : (
//                 <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
//                   {teacher.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//               )}
//               <div className="absolute -bottom-1 -right-1">
//                 <StatusBadge status={teacher.status} />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
//               <p className="text-sm text-blue-600 font-medium">{teacher.faculty}</p>
//               <div className="flex items-center mt-1">
//                 <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
//                 <span className="text-sm font-medium">{teacher.rating}</span>
//                 <span className="text-xs text-gray-500 ml-1">/5.0</span>
//               </div>
//             </div>
//           </div>
          
//           <div className={`flex space-x-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//             <button
//               onClick={() => onView(teacher)}
//               className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
//               title="View"
//             >
//               <Eye className="h-4 w-4" />
//             </button>
//             <button
//               onClick={() => onEdit(teacher)}
//               className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
//               title="Edit"
//             >
//               <Edit className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         <p className="text-sm text-gray-600 mb-4 line-clamp-2">{teacher.specialization}</p>
        
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center text-sm text-gray-600">
//             <Mail className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
//             <span className="truncate">{teacher.email}</span>
//           </div>
//           <div className="flex items-center text-sm text-gray-600">
//             <Phone className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
//             <span>{teacher.phone}</span>
//           </div>
//           <div className="flex items-center text-sm text-gray-600">
//             <Briefcase className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
//             <span>{teacher.experience} experience</span>
//           </div>
//           {teacher.office && (
//             <div className="flex items-center text-sm text-gray-600">
//               <MapPin className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
//               <span>{teacher.office}</span>
//             </div>
//           )}
//         </div>

//         <div className="pt-4 border-t border-gray-200">
//           <div className="flex justify-between items-center mb-2">
//             <p className="text-xs font-semibold text-gray-500">TEACHING COURSES</p>
//             <span className="text-xs text-gray-500">{teacher.courses.length} courses</span>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {teacher.courses.slice(0, 3).map((course, idx) => (
//               <span 
//                 key={idx} 
//                 className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 py-1 rounded font-medium"
//               >
//                 {course}
//               </span>
//             ))}
//             {teacher.courses.length > 3 && (
//               <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
//                 +{teacher.courses.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>

//         {isHovered && (
//           <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
//             <button 
//               onClick={() => onDelete(teacher.id)}
//               className="text-sm text-red-600 hover:text-red-700 flex items-center"
//             >
//               <Trash2 className="h-4 w-4 mr-1" />
//               Delete
//             </button>
//             <button 
//               onClick={() => onView(teacher)}
//               className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
//             >
//               View Details
//               <Eye className="h-4 w-4 ml-1" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TeacherCard;














// import React, { useState } from "react";
// import {
//   Edit,
//   Trash2,
//   Star,
//   Mail,
//   Phone,
//   Briefcase,
//   MapPin,
//   Eye,
// } from "lucide-react";
// import { teacherImages } from "../../data/mockTeachers";

// const TeacherCard = ({ teacher, onDelete, onEdit, onView }) => {
//   const [hovered, setHovered] = useState(false);

//   const statusStyle = {
//     active: "bg-emerald-500/15 text-emerald-600",
//     "on-leave": "bg-amber-500/15 text-amber-600",
//     inactive: "bg-rose-500/15 text-rose-600",
//   };

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group relative rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

//       <div className="relative p-6">
//         {/* Header */}
//         <div className="flex justify-between items-start">
//           <div className="flex gap-4">
//             {/* Avatar */}
//             <div className="relative">
//               {teacherImages[teacher.id] ? (
//                 <img
//                   src={teacherImages[teacher.id]}
//                   alt={teacher.name}
//                   className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md"
//                 />
//               ) : (
//                 <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
//                   {teacher.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")}
//                 </div>
//               )}

//               {/* Status */}
//               <span
//                 className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusStyle[teacher.status]}`}
//               >
//                 {teacher.status}
//               </span>
//             </div>

//             {/* Name */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {teacher.name}
//               </h3>
//               <p className="text-sm font-medium text-blue-600">
//                 {teacher.faculty}
//               </p>
//               <div className="flex items-center gap-1 mt-1 text-sm">
//                 <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                 <span className="font-medium">{teacher.rating}</span>
//                 <span className="text-gray-400 text-xs">/5</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div
//             className={`flex gap-2 transition-all duration-300 ${
//               hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <button
//               onClick={() => onView(teacher)}
//               className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
//             >
//               <Eye className="h-4 w-4" />
//             </button>
//             <button
//               onClick={() => onEdit(teacher)}
//               className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
//             >
//               <Edit className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         {/* Bio */}
//         <p className="mt-4 text-sm text-gray-600 line-clamp-2">
//           {teacher.specialization}
//         </p>

//         {/* Info */}
//         <div className="mt-4 space-y-2 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <Mail className="h-4 w-4 text-gray-400" />
//             <span className="truncate">{teacher.email}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="h-4 w-4 text-gray-400" />
//             <span>{teacher.phone}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Briefcase className="h-4 w-4 text-gray-400" />
//             <span>{teacher.experience} experience</span>
//           </div>
//           {teacher.office && (
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-gray-400" />
//               <span>{teacher.office}</span>
//             </div>
//           )}
//         </div>

//         {/* Courses */}
//         <div className="mt-5 pt-4 border-t border-black/5">
//           <p className="text-xs font-semibold text-gray-500 mb-2">
//             TEACHING COURSES
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {teacher.courses.slice(0, 3).map((course, idx) => (
//               <span
//                 key={idx}
//                 className="px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
//               >
//                 {course}
//               </span>
//             ))}
//             {teacher.courses.length > 3 && (
//               <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
//                 +{teacher.courses.length - 3}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Footer actions */}
//         <div
//           className={`mt-5 pt-4 border-t border-black/5 flex justify-between items-center transition ${
//             hovered ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <button
//             onClick={() => onDelete(teacher.id)}
//             className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700"
//           >
//             <Trash2 className="h-4 w-4" />
//             Delete
//           </button>

//           <button
//             onClick={() => onView(teacher)}
//             className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
//           >
//             View Profile
//             <Eye className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherCard;
















import React, { useState } from "react";
import {
  Edit,
  Trash2,
  Star,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Eye,
} from "lucide-react";
import { teacherImages } from "../../data/mockTeachers";

const TeacherCard = ({ teacher, onDelete, onEdit, onView }) => {
  const [hovered, setHovered] = useState(false);

  const statusStyle = {
    active: "bg-emerald-400/20 text-emerald-700",
    "on-leave": "bg-amber-400/20 text-amber-700",
    inactive: "bg-rose-400/20 text-rose-700",
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/30 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.6)] transition-all duration-500"
    >
      {/* Inner Card */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-50/90 to-white/70 backdrop-blur-xl border border-white/60 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="relative">
              {teacherImages[teacher.id] ? (
                <img
                  src={teacherImages[teacher.id]}
                  alt={teacher.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md"
                />
              ) : (
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}

              {/* Status */}
              <span
                className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur ${statusStyle[teacher.status]}`}
              >
                {teacher.status}
              </span>
            </div>

            {/* Name */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <p className="text-sm font-medium text-indigo-600">
                {teacher.faculty}
              </p>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{teacher.rating}</span>
                <span className="text-gray-400 text-xs">/5</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div
            className={`flex gap-2 transition-all duration-300 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              onClick={() => onView(teacher)}
              className="p-2 rounded-lg bg-white/60 hover:bg-white shadow"
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={() => onEdit(teacher)}
              className="p-2 rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
            >
              <Edit className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-gray-700 line-clamp-2">
          {teacher.specialization}
        </p>

        {/* Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-indigo-400" />
            <span className="truncate">{teacher.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-indigo-400" />
            <span>{teacher.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-indigo-400" />
            <span>{teacher.experience} experience</span>
          </div>
          {teacher.office && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span>{teacher.office}</span>
            </div>
          )}
        </div>

        {/* Courses */}
        <div className="mt-5 pt-4 border-t border-black/10">
          <p className="text-xs font-semibold text-gray-500 mb-2">
            TEACHING COURSES
          </p>
          <div className="flex flex-wrap gap-2">
            {teacher.courses.slice(0, 3).map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700"
              >
                {course}
              </span>
            ))}
            {teacher.courses.length > 3 && (
              <span className="px-3 py-1 rounded-full text-xs bg-black/5 text-gray-600">
                +{teacher.courses.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-5 pt-4 border-t border-black/10 flex justify-between items-center transition ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => onDelete(teacher.id)}
            className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>

          <button
            onClick={() => onView(teacher)}
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
          >
            View Profile
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
