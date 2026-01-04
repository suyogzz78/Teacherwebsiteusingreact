import React from 'react';
import { 
  Mail, Phone, Briefcase, MapPin, BookOpen, Award, 
  FileText, Users, Calendar, Globe, MessageSquare, X,
  Star, TrendingUp, GraduationCap, Clock
} from 'lucide-react';
import Modal from '../common/Modal';

const TeacherProfile = ({ teacher, isOpen, onClose }) => {
  if (!teacher) return null;

  const renderCourses = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {teacher.courses.map((course, idx) => (
        <div key={idx} className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
            <span className="font-medium text-gray-800">{course}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>Credit Hours: 3</span>
            <span>Semester: {idx % 4 + 1}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderResearch = () => (
    <div className="flex flex-wrap gap-2">
      {teacher.research?.map((area, idx) => (
        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
          {area}
        </span>
      ))}
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Teacher Profile" size="lg">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-center text-white">
              <div className="h-32 w-32 mx-auto rounded-full border-4 border-white overflow-hidden mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`} 
                  alt={teacher.name}
                  className="h-full w-full object-cover"
                />
              
              </div>
              <h3 className="text-xl font-bold">{teacher.name}</h3>
              <p className="text-blue-100">{teacher.faculty} Faculty</p>
              <div className="flex items-center justify-center mt-2">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span className="ml-1 font-bold">{teacher.rating}</span>
                <span className="ml-1 text-blue-200">/5.0</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </div>
                <p className="font-medium">{teacher.email}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </div>
                <p className="font-medium">{teacher.phone}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </div>
                <p className="font-medium">{teacher.experience}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <MapPin className="h-4 w-4 mr-2" />
                  Office
                </div>
                <p className="font-medium">{teacher.office}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Publications
                </div>
                <p className="font-medium">{teacher.publications}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Users className="h-4 w-4 mr-2" />
                  Status
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  teacher.status === 'active' ? 'bg-green-100 text-green-800' :
                  teacher.status === 'on-leave' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
              <p className="text-gray-600">{teacher.specialization}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Research Areas</h4>
          {renderResearch()}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-800">Teaching Courses</h4>
            <span className="text-sm text-gray-500">{teacher.courses.length} courses</span>
          </div>
          {renderCourses()}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Performance Metrics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{teacher.rating}</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{teacher.courses.length}</p>
              <p className="text-sm text-gray-600">Courses</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{teacher.publications}</p>
              <p className="text-sm text-gray-600">Publications</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{teacher.experience}</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TeacherProfile;






