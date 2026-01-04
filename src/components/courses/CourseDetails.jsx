import React from 'react';
import { 
  BookOpen, Clock, Users, Award, FileText, 
  Calendar, User, TrendingUp, BarChart, Download,
  ChevronRight, CheckCircle, Bookmark, Share2
} from 'lucide-react';
import Modal from '../common/Modal';

const CourseDetails = ({ course, faculty, semester, isOpen, onClose }) => {
  if (!course) return null;

  const courseDetails = {
    code: `${faculty}-${semester.toString().padStart(2, '0')}-${Math.floor(Math.random() * 100)}`,
    creditHours: 3,
    totalHours: 45,
    enrolled: Math.floor(Math.random() * 100) + 50,
    completionRate: Math.floor(Math.random() * 30) + 70,
    averageGrade: ['A', 'B+', 'B', 'C+'][Math.floor(Math.random() * 4)],
    prerequisites: faculty === 'CSIT' ? ['Programming Fundamentals', 'Mathematics I'] : 
                   faculty === 'BCA' ? ['Computer Fundamentals'] : ['Business English'],
    instructor: faculty === 'CSIT' ? 'Dr. Rajesh Kumar' : 
                faculty === 'BCA' ? 'Ms. Anita Gurung' : 'Prof. Kamala Shrestha'
  };

  const syllabus = [
    { week: 1, topic: 'Introduction to Course', hours: 3 },
    { week: 2, topic: 'Fundamental Concepts', hours: 3 },
    { week: 3, topic: 'Core Principles', hours: 3 },
    { week: 4, topic: 'Advanced Topics', hours: 3 },
    { week: 5, topic: 'Practical Applications', hours: 6 },
    { week: 6, topic: 'Case Studies', hours: 6 },
    { week: 7, topic: 'Project Work', hours: 12 },
    { week: 8, topic: 'Review & Assessment', hours: 6 }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Course Details" size="xl">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{course}</h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {faculty} Program
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Semester {semester}
                    </span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Course Code: {courseDetails.code}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Description</h3>
              <p className="text-gray-600">
                This course provides comprehensive understanding of {course.toLowerCase()}. 
                Students will learn theoretical concepts and practical applications through 
                hands-on exercises and projects. The course is designed to prepare students 
                for real-world challenges in their respective fields.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Syllabus</h3>
              <div className="space-y-3">
                {syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-700 font-bold">{item.week}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.topic}</p>
                        <p className="text-sm text-gray-500">{item.hours} hours</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-6">
              <h4 className="font-semibold text-gray-800 mb-4">Course Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Credit Hours</span>
                  </div>
                  <span className="font-semibold">{courseDetails.creditHours}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Total Hours</span>
                  </div>
                  <span className="font-semibold">{courseDetails.totalHours}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Enrolled Students</span>
                  </div>
                  <span className="font-semibold">{courseDetails.enrolled}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span>Completion Rate</span>
                  </div>
                  <span className="font-semibold text-green-600">{courseDetails.completionRate}%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Average Grade</span>
                  </div>
                  <span className="font-semibold">{courseDetails.averageGrade}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>Instructor</span>
                  </div>
                  <span className="font-semibold">{courseDetails.instructor}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-3">Prerequisites</h5>
                <div className="space-y-2">
                  {courseDetails.prerequisites.map((prereq, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
                  <Download className="h-4 w-4" />
                  <span>Download Syllabus</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Learning Outcomes</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-700 font-bold">1</span>
                </div>
                <h5 className="font-medium text-gray-800">Theoretical Knowledge</h5>
              </div>
              <p className="text-sm text-gray-600">Understand core concepts and principles</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-700 font-bold">2</span>
                </div>
                <h5 className="font-medium text-gray-800">Practical Skills</h5>
              </div>
              <p className="text-sm text-gray-600">Apply knowledge through hands-on exercises</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-bold">3</span>
                </div>
                <h5 className="font-medium text-gray-800">Problem Solving</h5>
              </div>
              <p className="text-sm text-gray-600">Develop analytical and critical thinking</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-orange-700 font-bold">4</span>
                </div>
                <h5 className="font-medium text-gray-800">Project Development</h5>
              </div>
              <p className="text-sm text-gray-600">Complete real-world projects</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CourseDetails;