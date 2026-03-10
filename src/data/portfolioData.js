export const portfolioData = [
  {
    id: 1,
    title: 'Website LPPM IT Del',
    category: 'Web App',
    description:
      'A modern monolithic platform built with Laravel + React/Vue.js via Inertia.js to digitalize complex academic research workflows at IT Del, featuring a multi-role RBAC system and automated document generation.',
    techStack: ['Laravel', 'React', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: '/images/projects/lppm.png',
    liveLink: 'https://itdel-lppm.delpick.fun:8080/auth/login',
    repoLink: 'https://github.com/JosuaIF23/itdel-lppm-app-main',
  },
  {
    id: 2,
    title: 'ChronoDesk',
    category: 'Web App',
    description:
      'A task management web app engineered with Laravel and Vue.js/React, featuring secure authentication, interactive calendars, To-Do lists, and a built-in timer — backed by a PostgreSQL database and tested via Postman.',
    techStack: ['Laravel', 'Vue.js', 'React', 'PostgreSQL', 'Postman'],
    imageUrl: '/images/projects/chronodesk.png',
    liveLink: 'https://chronodesk.josua.fun:8080/',
    repoLink: 'https://github.com/JosuaIF23/chronodesk-laravel',
  },
  {
    id: 3,
    title: 'B-CAL: iOS BMI Tracker',
    category: 'Mobile',
    description:
      'A comprehensive health app developed during internship at Apple Developer Academy. Uses Swift, HealthKit, and Pedometer frameworks to track BMI and real-time calorie data, with high-fidelity Figma prototypes.',
    techStack: ['Swift', 'HealthKit', 'Pedometer', 'Figma'],
    imageUrl: '/images/projects/bcal.png',
    liveLink: '#',
    repoLink: 'https://github.com/JosuaIF23/RunNow',
  },
  {
    id: 4,
    title: 'Library Management Organizer',
    category: 'Web App',
    description:
      'A library management system built in Java for the Algorithms & Data Structures final project at IT Del, handling complex borrowing/returning workflows with queue management and book stock tracking.',
    techStack: ['Java', 'Data Structures', 'Algorithms', 'OOP'],
    imageUrl: '/images/projects/pomp.png',
    liveLink: '#',
    repoLink: 'https://github.com/JosuaIF23/alstrudat-c03-ifs23033',
  },
]

export const categories = ['All', ...new Set(portfolioData.map((p) => p.category))]
