import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TeacherCard from '../components/teachers/TeacherCard';
import TeacherFilters from '../components/teachers/TeacherFilters';
import TeacherForm from '../components/teachers/TeacherForm';
import TeacherProfile from '../components/teachers/TeacherProfile';
import { initialTeachers } from '../data/mockTeachers';

const TeacherDirectory = () => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('ALL');
  const [sortBy, setSortBy] = useState('name');
  const [showForm, setShowForm] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [viewingTeacher, setViewingTeacher] = useState(null);

  const filteredTeachers = teachers
    .filter(teacher => {
      const matchesFaculty = selectedFaculty === 'ALL' || teacher.faculty === selectedFaculty;
      const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          teacher.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFaculty && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        case 'experience': return parseInt(b.experience) - parseInt(a.experience);
        case 'experience-asc': return parseInt(a.experience) - parseInt(b.experience);
        case 'rating': return b.rating - a.rating;
        case 'rating-asc': return a.rating - b.rating;
        default: return 0;
      }
    });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter(t => t.id !== id));
    }
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setShowForm(true);
  };

  const handleView = (teacher) => {
    setViewingTeacher(teacher);
  };

  const handleSave = (teacherData) => {
    if (editingTeacher) {
      setTeachers(teachers.map(t => 
        t.id === editingTeacher.id ? { ...teacherData, id: editingTeacher.id } : t
      ));
    } else {
      setTeachers([...teachers, { 
        ...teacherData, 
        id: Math.max(...teachers.map(t => t.id)) + 1,
        rating: 4.0
      }]);
    }
    setShowForm(false);
    setEditingTeacher(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTeacher(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Directory</h1>
          <p className="text-gray-600 mt-1">Manage and explore teaching faculty members</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <Plus className="h-5 w-5" />
          <span className="font-medium">Add New Teacher</span>
        </button>
      </div>

      <TeacherFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFaculty={selectedFaculty}
        setSelectedFaculty={setSelectedFaculty}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showStats={true}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map(teacher => (
          <TeacherCard 
            key={teacher.id} 
            teacher={teacher} 
            onDelete={handleDelete}
            onEdit={handleEdit}
            onView={handleView}
          />
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">👨‍🏫</div>
          <h3 className="text-xl font-semibold text-gray-500 mb-2">No teachers found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          <button 
            onClick={() => setShowForm(true)}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Add your first teacher
          </button>
        </div>
      )}

      {showForm && (
        <TeacherForm
          teacher={editingTeacher}
          isOpen={showForm}
          onClose={handleCloseForm}
          onSave={handleSave}
        />
      )}

      {viewingTeacher && (
        <TeacherProfile
          teacher={viewingTeacher}
          isOpen={!!viewingTeacher}
          onClose={() => setViewingTeacher(null)}
        />
      )}
    </div>
  );
};

export default TeacherDirectory;