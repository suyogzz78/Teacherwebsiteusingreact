import React, { useState } from 'react';
import { 
  GraduationCap, Mail, Phone, Calendar, 
  TrendingUp, CheckCircle, XCircle, Edit, Trash2, Eye 
} from 'lucide-react';
import SearchBar from '../common/SearchBar';

const StudentList = ({ students, onEdit, onDelete, onView }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesFaculty = selectedFaculty === 'ALL' || student.faculty === selectedFaculty;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFaculty && matchesSearch;
  });

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return 'text-green-600';
    if (attendance >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 3.7) return 'text-green-600';
    if (gpa >= 3.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1">
            <SearchBar
              placeholder="Search students by name or roll number..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>
          <div className="flex gap-2">
            {['ALL', 'CSIT', 'BCA', 'BBM'].map(faculty => (
              <button
                key={faculty}
                onClick={() => setSelectedFaculty(faculty)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedFaculty === faculty
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {faculty}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map(student => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{student.rollNo}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {student.faculty}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Semester {student.semester}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full ${getAttendanceColor(student.attendance).replace('text-', 'bg-')}`}
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${getAttendanceColor(student.attendance)}`}>
                      {student.attendance}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.gpa >= 3.7 ? 'bg-green-100 text-green-800' : 
                    student.gpa >= 3.0 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {student.gpa.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {student.attendance >= 75 ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <XCircle className="h-3 w-3 mr-1" />
                      At Risk
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onView(student)}
                      className="text-blue-600 hover:text-blue-900"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onEdit(student)}
                      className="text-green-600 hover:text-green-900"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDelete(student.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No students found</p>
          <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Showing {filteredStudents.length} of {students.length} students</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Good Standing</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span>Average</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span>At Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;