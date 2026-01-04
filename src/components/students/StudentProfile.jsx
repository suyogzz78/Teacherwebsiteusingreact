import React from 'react';
import { 
  Mail, Phone, Calendar, GraduationCap, BookOpen, 
  TrendingUp, Award, FileText, Users, Clock,
  CheckCircle, XCircle, MapPin, Home
} from 'lucide-react';
import Modal from '../common/Modal';

const StudentProfile = ({ student, isOpen, onClose }) => {
  if (!student) return null;

  const calculateProgress = () => {
    return Math.round((student.semester / 8) * 100);
  };

  const getPerformanceStatus = () => {
    if (student.gpa >= 3.7 && student.attendance >= 90) return 'Excellent';
    if (student.gpa >= 3.0 && student.attendance >= 80) return 'Good';
    if (student.gpa >= 2.0 && student.attendance >= 70) return 'Average';
    return 'Needs Improvement';
  };

  const getStatusColor = () => {
    const status = getPerformanceStatus();
    switch(status) {
      case 'Excellent': return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'Good': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Average': return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      default: return 'bg-gradient-to-r from-red-500 to-red-600';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Student Profile" size="lg">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-center text-white">
              <div className="h-32 w-32 mx-auto rounded-full border-4 border-white overflow-hidden mb-4">
                <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-xl font-bold">{student.name}</h3>
              <p className="text-blue-100">{student.rollNo}</p>
              <div className="mt-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor()} text-white`}>
                  {getPerformanceStatus()}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </div>
                <p className="font-medium">{student.email}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </div>
                <p className="font-medium">{student.phone}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Home className="h-4 w-4 mr-2" />
                  Faculty
                </div>
                <p className="font-medium">{student.faculty}</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">GPA</span>
                  </div>
                  <span className={`text-lg font-bold ${
                    student.gpa >= 3.7 ? 'text-green-600' :
                    student.gpa >= 3.0 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {student.gpa.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      student.gpa >= 3.7 ? 'bg-green-600' :
                      student.gpa >= 3.0 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${(student.gpa / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Attendance</span>
                  </div>
                  <span className={`text-lg font-bold ${
                    student.attendance >= 90 ? 'text-green-600' :
                    student.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {student.attendance}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      student.attendance >= 90 ? 'bg-green-600' :
                      student.attendance >= 75 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${student.attendance}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Semester</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">Semester {student.semester}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{calculateProgress()}%</span>
                </div>
                <p className="text-xs text-gray-500">Overall program completion</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Academic Performance</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Overall Academic Standing</span>
                    <span className="font-medium">{getPerformanceStatus()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${getStatusColor().replace('bg-gradient-to-r', 'bg')}`} 
                         style={{ width: 
                           getPerformanceStatus() === 'Excellent' ? '90%' :
                           getPerformanceStatus() === 'Good' ? '75%' :
                           getPerformanceStatus() === 'Average' ? '60%' : '40%'
                         }}>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Course Completion Rate</span>
                    <span className="font-medium">{Math.round((student.semester * 5) / 40 * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-purple-600" 
                         style={{ width: `${Math.round((student.semester * 5) / 40 * 100)}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Enrolled Courses</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Mathematics', 'Programming', 'Database', 'Web Development', 'Networking', 'Software Engineering']
                  .slice(0, student.semester)
                  .map((course, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-800">{course}</span>
                      </div>
                      <div className="mt-2 flex justify-between text-sm text-gray-600">
                        <span>Grade: {['A', 'B+', 'B', 'C+', 'C'][idx % 5]}</span>
                        <span>Credit: 3</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StudentProfile;