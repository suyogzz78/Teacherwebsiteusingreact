export const FACULTIES = {
  CSIT: {
    name: 'BSc CSIT',
    color: 'blue',
    icon: '💻',
    description: 'Computer Science & IT'
  },
  BCA: {
    name: 'BCA',
    color: 'purple',
    icon: '📱',
    description: 'Computer Applications'
  },
  BBM: {
    name: 'BBM',
    color: 'green',
    icon: '📊',
    description: 'Business Management'
  }
};

export const TEACHER_STATUS = {
  ACTIVE: { label: 'Active', color: 'green', icon: '✅' },
  ON_LEAVE: { label: 'On Leave', color: 'yellow', icon: '🌴' },
  INACTIVE: { label: 'Inactive', color: 'red', icon: '⏸️' }
};

export const STUDENT_STATUS = {
  ACTIVE: { label: 'Active', color: 'green', minAttendance: 75, minGPA: 2.0 },
  AT_RISK: { label: 'At Risk', color: 'yellow', minAttendance: 60, minGPA: 1.5 },
  INACTIVE: { label: 'Inactive', color: 'red', minAttendance: 0, minGPA: 0 }
};

export const GRADE_SCALE = [
  { grade: 'A', points: 4.0, range: [3.7, 4.0], color: 'green' },
  { grade: 'A-', points: 3.7, range: [3.3, 3.7], color: 'green' },
  { grade: 'B+', points: 3.3, range: [3.0, 3.3], color: 'blue' },
  { grade: 'B', points: 3.0, range: [2.7, 3.0], color: 'blue' },
  { grade: 'B-', points: 2.7, range: [2.3, 2.7], color: 'blue' },
  { grade: 'C+', points: 2.3, range: [2.0, 2.3], color: 'yellow' },
  { grade: 'C', points: 2.0, range: [1.7, 2.0], color: 'yellow' },
  { grade: 'C-', points: 1.7, range: [1.3, 1.7], color: 'orange' },
  { grade: 'D+', points: 1.3, range: [1.0, 1.3], color: 'orange' },
  { grade: 'D', points: 1.0, range: [0.7, 1.0], color: 'red' },
  { grade: 'F', points: 0.0, range: [0.0, 0.7], color: 'red' }
];

export const ATTENDANCE_STATUS = {
  EXCELLENT: { label: 'Excellent', color: 'green', range: [90, 100] },
  GOOD: { label: 'Good', color: 'blue', range: [80, 90] },
  AVERAGE: { label: 'Average', color: 'yellow', range: [70, 80] },
  POOR: { label: 'Poor', color: 'orange', range: [60, 70] },
  CRITICAL: { label: 'Critical', color: 'red', range: [0, 60] }
};

export const COURSE_TYPES = {
  CORE: { label: 'Core', color: 'blue' },
  ELECTIVE: { label: 'Elective', color: 'purple' },
  LAB: { label: 'Lab', color: 'green' },
  PROJECT: { label: 'Project', color: 'orange' },
  INTERNSHIP: { label: 'Internship', color: 'red' }
};

export const ACADEMIC_YEARS = [
  { id: 1, label: 'First Year', semesters: [1, 2] },
  { id: 2, label: 'Second Year', semesters: [3, 4] },
  { id: 3, label: 'Third Year', semesters: [5, 6] },
  { id: 4, label: 'Fourth Year', semesters: [7, 8] }
];

export const DEPARTMENTS = [
  { id: 'cse', name: 'Computer Science & Engineering', faculty: 'CSIT' },
  { id: 'it', name: 'Information Technology', faculty: 'CSIT' },
  { id: 'software', name: 'Software Engineering', faculty: 'BCA' },
  { id: 'business', name: 'Business Administration', faculty: 'BBM' },
  { id: 'finance', name: 'Finance & Accounting', faculty: 'BBM' },
  { id: 'marketing', name: 'Marketing', faculty: 'BBM' }
];

export const USER_ROLES = {
  ADMIN: { label: 'Admin', level: 100 },
  TEACHER: { label: 'Teacher', level: 50 },
  STUDENT: { label: 'Student', level: 10 },
  GUEST: { label: 'Guest', level: 1 }
};

export const NOTIFICATION_TYPES = {
  INFO: { color: 'blue', icon: 'ℹ️' },
  SUCCESS: { color: 'green', icon: '✅' },
  WARNING: { color: 'yellow', icon: '⚠️' },
  ERROR: { color: 'red', icon: '❌' },
  SYSTEM: { color: 'purple', icon: '⚙️' }
};