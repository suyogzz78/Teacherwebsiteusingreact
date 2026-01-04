import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import Modal from '../common/Modal';

const TeacherForm = ({ teacher, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    faculty: 'CSIT',
    specialization: '',
    email: '',
    phone: '',
    courses: [],
    experience: '',
    status: 'active',
    publications: 0,
    office: '',
    research: []
  });

  const [newCourse, setNewCourse] = useState('');
  const [newResearch, setNewResearch] = useState('');

  useEffect(() => {
    if (teacher) {
      setFormData(teacher);
    } else {
      setFormData({
        name: '',
        faculty: 'CSIT',
        specialization: '',
        email: '',
        phone: '',
        courses: [],
        experience: '',
        status: 'active',
        publications: 0,
        office: '',
        research: []
      });
    }
  }, [teacher]);

  const handleAddCourse = () => {
    if (newCourse.trim()) {
      setFormData({
        ...formData,
        courses: [...formData.courses, newCourse.trim()]
      });
      setNewCourse('');
    }
  };

  const handleRemoveCourse = (index) => {
    setFormData({
      ...formData,
      courses: formData.courses.filter((_, i) => i !== index)
    });
  };

  const handleAddResearch = () => {
    if (newResearch.trim()) {
      setFormData({
        ...formData,
        research: [...formData.research, newResearch.trim()]
      });
      setNewResearch('');
    }
  };

  const handleRemoveResearch = (index) => {
    setFormData({
      ...formData,
      research: formData.research.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={teacher ? 'Edit Teacher' : 'Add New Teacher'}
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
              placeholder="Dr. John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Faculty *
            </label>
            <select
              value={formData.faculty}
              onChange={(e) => setFormData({...formData, faculty: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="CSIT">CSIT</option>
              <option value="BCA">BCA</option>
              <option value="BBM">BBM</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization *
            </label>
            <input
              type="text"
              required
              value={formData.specialization}
              onChange={(e) => setFormData({...formData, specialization: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Artificial Intelligence & Machine Learning"
            />
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
              placeholder="john.doe@vedas.edu.np"
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
              Experience *
            </label>
            <input
              type="text"
              required
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5 years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="active">Active</option>
              <option value="on-leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publications
            </label>
            <input
              type="number"
              value={formData.publications}
              onChange={(e) => setFormData({...formData, publications: parseInt(e.target.value) || 0})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Number of publications"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Office Location
            </label>
            <input
              type="text"
              value={formData.office}
              onChange={(e) => setFormData({...formData, office: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Block A, Room 301"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teaching Courses
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter course name"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCourse())}
            />
            <button
              type="button"
              onClick={handleAddCourse}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.courses.map((course, idx) => (
              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700">
                {course}
                <button
                  type="button"
                  onClick={() => handleRemoveCourse(idx)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Research Areas
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newResearch}
              onChange={(e) => setNewResearch(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter research area"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddResearch())}
            />
            <button
              type="button"
              onClick={handleAddResearch}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.research.map((area, idx) => (
              <span key={idx} className="inline-flex items-center px-3 py-1 rounded-lg bg-purple-50 text-purple-700">
                {area}
                <button
                  type="button"
                  onClick={() => handleRemoveResearch(idx)}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </span>
            ))}
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
            {teacher ? 'Update Teacher' : 'Add Teacher'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TeacherForm;