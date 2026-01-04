import React, { useState } from 'react';
import { Plus, Download, Upload } from 'lucide-react';
import StudentList from '../components/students/StudentList';
import StudentForm from '../components/students/StudentForm';
import StudentProfile from '../components/students/StudentProfile';
import { initialStudents } from '../data/mockStudents';
import { exportToCSV } from '../utils/helpers';

const StudentManagement = () => {
  const [students, setStudents] = useState(initialStudents);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);
  const [importing, setImporting] = useState(false);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleView = (student) => {
    setViewingStudent(student);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const handleSave = (studentData) => {
    if (editingStudent) {
      setStudents(students.map(s => 
        s.id === editingStudent.id ? { ...studentData, id: editingStudent.id } : s
      ));
    } else {
      setStudents([...students, { 
        ...studentData, 
        id: Math.max(...students.map(s => s.id)) + 1
      }]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleExport = () => {
    exportToCSV(students, 'students_export.csv');
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImporting(true);
      // Simulate import process
      setTimeout(() => {
        alert(`Imported ${file.name}`);
        setImporting(false);
        event.target.value = ''; // Reset file input
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600 mt-1">Manage student records and academic performance</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={handleExport}
            className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <label className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Upload className="h-4 w-4" />
            <span>{importing ? 'Importing...' : 'Import'}</span>
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleImport} 
              className="hidden" 
              disabled={importing}
            />
          </label>
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

      {showForm && (
        <StudentForm
          student={editingStudent}
          isOpen={showForm}
          onClose={() => {
            setShowForm(false);
            setEditingStudent(null);
          }}
          onSave={handleSave}
        />
      )}

      {viewingStudent && (
        <StudentProfile
          student={viewingStudent}
          isOpen={!!viewingStudent}
          onClose={() => setViewingStudent(null)}
        />
      )}
    </div>
  );
};

export default StudentManagement;