import React, { useState } from 'react';
import CourseList from '../components/courses/CourseList';
import CourseDetails from '../components/courses/CourseDetails';
import { courseData } from '../data/courseData';

const CourseManagement = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState('CSIT');
  const [selectedSemester, setSelectedSemester] = useState(1);

  const handleCourseSelect = (course, semester) => {
    setSelectedCourse(course);
    setSelectedSemester(semester);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Course Management</h1>
        <p className="text-gray-600 mt-1">Browse and manage academic courses by program</p>
      </div>

      <CourseList
        courseData={courseData}
        onCourseSelect={handleCourseSelect}
      />

      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          faculty={selectedFaculty}
          semester={selectedSemester}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default CourseManagement;