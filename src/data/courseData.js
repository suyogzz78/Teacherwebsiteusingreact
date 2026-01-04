export const courseData = {
  CSIT: {
    name: 'BSc CSIT',
    fullName: 'Bachelor of Science in Computer Science and Information Technology',
    duration: '4 Years (8 Semesters)',
    description: 'Comprehensive program covering computer science fundamentals, programming, networking, and modern technologies.',
    semesters: [
      { 
        sem: 1, 
        courses: ['Introduction to IT', 'C Programming', 'Digital Logic', 'Mathematics I', 'Physics'],
        credits: 18
      },
      { 
        sem: 2, 
        courses: ['Discrete Structure', 'OOP in Java', 'Microprocessor', 'Mathematics II', 'Statistics I'],
        credits: 18
      },
      { 
        sem: 3, 
        courses: ['Data Structure & Algorithms', 'Computer Architecture', 'Computer Graphics', 'Statistics II', 'System Analysis'],
        credits: 18
      },
      { 
        sem: 4, 
        courses: ['Operating Systems', 'DBMS', 'Artificial Intelligence', 'Computer Networks', 'Organization Management'],
        credits: 18
      },
      { 
        sem: 5, 
        courses: ['Design & Analysis of Algorithms', 'Software Engineering', 'Cryptography', 'Simulation & Modeling', 'Web Technology'],
        credits: 18
      },
      { 
        sem: 6, 
        courses: ['Mobile Programming', 'Distributed Systems', 'Applied Economics', 'Advanced Java', 'Network Security'],
        credits: 18
      },
      { 
        sem: 7, 
        courses: ['Cloud Computing', 'Internship', 'Elective I', 'Elective II'],
        credits: 16
      },
      { 
        sem: 8, 
        courses: ['Project Work', 'Elective III', 'Elective IV'],
        credits: 16
      }
    ]
  },
  BCA: {
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    duration: '4 Years (8 Semesters)',
    description: 'Focuses on application development, software engineering, and computer applications in business.',
    semesters: [
      { 
        sem: 1, 
        courses: ['Computer Fundamentals', 'C Programming', 'Digital Logic', 'Mathematics I', 'English I'],
        credits: 18
      },
      { 
        sem: 2, 
        courses: ['Data Structure', 'OOP in C++', 'Mathematics II', 'Microprocessor', 'English II'],
        credits: 18
      },
      { 
        sem: 3, 
        courses: ['System Analysis', 'Web Technology I', 'Numerical Methods', 'Visual Programming', 'Statistics'],
        credits: 18
      },
      { 
        sem: 4, 
        courses: ['Operating System', 'Database Management', 'Software Engineering', 'Scripting Language', 'Accounting'],
        credits: 18
      },
      { 
        sem: 5, 
        courses: ['MIS', 'Web Technology II', 'Multimedia', 'Java Programming', 'Finance'],
        credits: 18
      },
      { 
        sem: 6, 
        courses: ['Network Programming', 'Advanced Java', 'Project I', 'Elective I'],
        credits: 16
      },
      { 
        sem: 7, 
        courses: ['Mobile Programming', 'E-Commerce', 'Cyber Law', 'Elective II'],
        credits: 16
      },
      { 
        sem: 8, 
        courses: ['Project II', 'Internship'],
        credits: 12
      }
    ]
  },
  BBM: {
    name: 'BBM',
    fullName: 'Bachelor of Business Management',
    duration: '4 Years (8 Semesters)',
    description: 'Comprehensive business education covering management, finance, marketing, and entrepreneurship.',
    semesters: [
      { 
        sem: 1, 
        courses: ['Business English', 'Business Statistics', 'Microeconomics', 'Accounting I', 'Principles of Management'],
        credits: 18
      },
      { 
        sem: 2, 
        courses: ['Business Communication', 'Macroeconomics', 'Accounting II', 'Marketing', 'Organizational Behavior'],
        credits: 18
      },
      { 
        sem: 3, 
        courses: ['Business Law', 'Cost & Management Accounting', 'Finance', 'Human Resource Management', 'Entrepreneurship'],
        credits: 18
      },
      { 
        sem: 4, 
        courses: ['Taxation', 'Business Research Methods', 'Foundation of Financial Systems', 'Organizational Theory', 'Sales & Distribution'],
        credits: 18
      },
      { 
        sem: 5, 
        courses: ['Business Environment & Strategy', 'Financial Management', 'Marketing Management', 'Elective I'],
        credits: 16
      },
      { 
        sem: 6, 
        courses: ['Operation Management', 'International Business', 'Elective II', 'Elective III'],
        credits: 16
      },
      { 
        sem: 7, 
        courses: ['Business Analytics', 'Project Management', 'Elective IV'],
        credits: 12
      },
      { 
        sem: 8, 
        courses: ['Internship', 'Project Work'],
        credits: 12
      }
    ]
  }
};

export const electiveCourses = {
  CSIT: [
    'Machine Learning',
    'Internet of Things',
    'Blockchain Technology',
    'Data Science',
    'Cyber Security',
    'Game Development',
    'Mobile Application Development',
    'Cloud Architecture'
  ],
  BCA: [
    'Data Analytics',
    'UI/UX Design',
    'Python Programming',
    'Software Testing',
    'E-Commerce Development',
    'ERP Systems',
    'Digital Marketing',
    'IT Project Management'
  ],
  BBM: [
    'Investment Banking',
    'Digital Marketing',
    'Supply Chain Management',
    'Business Intelligence',
    'Entrepreneurship Development',
    'International Marketing',
    'Corporate Governance',
    'Financial Analytics'
  ]
};