import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Modal from '../common/Modal';

const StudentForm = ({ student, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    faculty: 'CSIT',
    semester: 1,
    rollNo: '',
    email: '',
    phone: '',
    attendance: 90,
    gpa: 3.5,
    address: '',
    dob: '',
    guardianName: '',
    guardianPhone: ''
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    } else {
      setFormData({
        name: '',
        faculty: 'CSIT',
        semester: 1,
        rollNo: '',
        email: '',
        phone: '',
        attendance: 90,
        gpa: 3.5,
        address: '',
        dob: '',
        guardianName: '',
        guardianPhone: ''
      });
    }
  }, [student]);

  const generateRollNo = () => {
    const facultyCode = formData.faculty;
    const year = '078'; // Default batch year
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${facultyCode}-${year}-${random}`;
  };

  const handleFacultyChange = (faculty) => {
    setFormData({
      ...formData,
      faculty,
      rollNo: generateRollNo()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.rollNo) {
      setFormData({
        ...formData,
        rollNo: generateRollNo()
      });
    }
    
    onSave(formData);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={student ? 'Edit Student' : 'Add New Student'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Faculty *
            </label>
            <select
              value={formData.faculty}
              onChange={(e) => handleFacultyChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="CSIT">CSIT</option>
              <option value="BCA">BCA</option>
              <option value="BBM">BBM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Semester *
            </label>
            <select
              value={formData.semester}
              onChange={(e) => setFormData({...formData, semester: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                <option key={sem} value={sem}>Semester {sem}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll Number *
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={formData.rollNo}
                onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CSIT-078-001"
              />
              <button
                type="button"
                onClick={() => setFormData({...formData, rollNo: generateRollNo()})}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Generate
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john.doe@student.vedas.edu.np"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+977-9841234567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Kathmandu, Nepal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guardian Name
            </label>
            <input
              type="text"
              value={formData.guardianName}
              onChange={(e) => setFormData({...formData, guardianName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Parent/Guardian Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Guardian Phone
            </label>
            <input
              type="tel"
              value={formData.guardianPhone}
              onChange={(e) => setFormData({...formData, guardianPhone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+977-9841234567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attendance (%) *
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={formData.attendance}
                onChange={(e) => setFormData({...formData, attendance: parseInt(e.target.value)})}
                className="flex-1"
              />
              <span className="w-16 text-center font-medium">{formData.attendance}%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GPA *
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="4"
                step="0.1"
                value={formData.gpa}
                onChange={(e) => setFormData({...formData, gpa: parseFloat(e.target.value)})}
                className="flex-1"
              />
              <span className="w-16 text-center font-medium">{formData.gpa.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {student ? 'Update Student' : 'Add Student'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentForm;