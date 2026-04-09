// This file holds the data for your About page timeline.

// --- TYPE DEFINITIONS ---
export type WorkExperience = {
  id: string;
  type: 'work';
  date: string;
  title: string;
  companyOrSchool: string;
  description: string[];
  workType: 'Full-time' | 'Part-time' | 'Internship';
};

export type Education = {
  id: string;
  type: 'education';
  date: string;
  title: string;
  companyOrSchool: string;
  description: string;
  logo?: string;
  gpa?: string;   // <-- Add this line
};


// --- YOUR WORK EXPERIENCE DATA ---
export const workExperience: WorkExperience[] = [
  {
    id: 'work-7',
    type: 'work',
    date: "May 2025 – Present",
    title: "Full Stack Developer",
    companyOrSchool: "Gabriel AI, United States",
description: [
  "Managed bespoke AI voice agents for marketing outreach, deploying a scalable AI-driven SaaS platform using Django & FastAPI.",
  "Activated a circular loop callback system that recovered 100% of missed leads, boosting client conversion by ensuring zero prospect abandonment.",
  "Showcased high-performance Next.js analytics dashboards for real-time ROI tracking, improving client engagement.",
  "Integrated real-time call tracking and analytics pipelines, supporting 100+ concurrent campaigns daily with actionable insights."
],

    workType: "Full-time",
  },
  {
    id: 'work-6',
    type: 'work',
    date: "Aug 2023 – Apr 2025",
    title: "Student Manager",
    companyOrSchool: "Western Michigan University, Kalamazoo, Michigan, United States",
    description: [
      "Demonstrated strong team leadership and management skills by supervising daily operations and coordinating tasks effectively.",
      "Enhanced interpersonal communication and critical thinking abilities by resolving student concerns and ensuring a smooth workflow.",
      "Successfully managed time-sensitive projects, balancing academic responsibilities with part-time work."
    ],
    workType: "Part-time",
  },
  {
    id: 'work-5',
    type: 'work',
    date: "Aug 2021 – Mar 2023",
    title: "Senior Software Engineer",
    companyOrSchool: "Adetrez Labs, India",
description: [
  "Orchestrated an end-to-end Smart Reward Management system - a React + Next.js web dashboard using computer vision (YOLOv8) and vehicle tracking via BotSort, handling ~20,000 vehicles/week across fuel stations.",
  "Automated an Electron billing app and AI-powered stock maintenance system for small supermarkets, eliminating manual work and saving ~6 staff hours/week.",
  "Streamlined CI/CD pipelines with Jenkins, Docker, and GitLab, reducing deployment time from 1 hour to under 15 minutes.",
  "Modernized 4 applications on AWS, optimizing infrastructure and reducing operational costs by $114,000+ annually."
],

    workType: "Full-time",
  },
  {
    id: 'work-4',
    type: 'work',
    date: "Nov 2021 – Dec 2021",
    title: "CRC Senior Associate",
    companyOrSchool: "Amazon Development Center, India",
    description: [
      "Crafted a Python search handler for SOP, reducing access time by 90%, while providing crucial moral support to overseas employees during the Covid-19 pandemic.",
      "Provided on-call support, handling inquiries related to pay slips, leave requests, and document approval.",
      "Utilized Kronos to support and address billing-related queries from Amazon employees."
    ],
    workType: "Full-time",
  },
  {
    id: 'work-3',
    type: 'work',
    date: "Jan 2019 – Apr 2021",
    title: "Systems Engineer",
    companyOrSchool: "Infosys Limited, India",
description: [
  "Implemented a Python-powered analytics platform monitoring sales, inventory, and customer activity in real time across ~500 global retail stores.",
  "Administered 6+ Python (Flask/Django) microservices supporting POS operations, inventory sync, and reporting, maintaining 99.98% uptime and handling 1M+ daily requests.",
  "Coordinated Xstore deployments across ~3,400 stores (~13,600 registers) with Python scripts and CI/CD pipelines, ensuring consistent builds globally.",
  "Enhanced API performance from 200ms to 80ms via load balancing, query tuning, and debugging, improving system stability and transaction speed.",
  "Executed large-scale data migration from Oracle 11g to 12c, transferring millions of records across retail systems with zero data loss and minimal downtime."
],

    workType: "Full-time",
  },
  {
    id: 'work-2',
    type: 'work',
    date: "Jul 2018 – Nov 2018",
    title: "Software Developer Intern",
    companyOrSchool: "Xorail - A Wabtec Corporation, India",
    description: [
      "Pioneered the 'Employee Attendance and Salary Management' app using Python, Flask API, and MySQL, reducing manual work for HR teams by 8 hours weekly.",
      "Revamped app performance with Python, eliminating data loss across 1,000+ records."
    ],
    workType: "Internship",
  },
  {
    id: 'work-1',
    type: 'work',
    date: "Aug 2017",
    title: "Intern",
    companyOrSchool: "LIVEWIRE, India",
    description: [
      "Gained expertise in Kali Linux and Metasploit framework, improving threat detection accuracy by 30%.",
      "Strengthened digital asset protection strategies by 20% and increased phishing threat awareness by 15%."
    ],
    workType: "Internship",
  }
];

// --- YOUR EDUCATION DATA ---
export const education: Education[] = [
  {
    id: 'edu-2',
    type: 'education',
    date: "Aug 2023 – Apr 2025",
    title: "Masters in Computer Science",
    companyOrSchool: "Western Michigan University, USA",
    description: `Specializing in Artificial Intelligence.`,
    logo: "/logos/wmu.png",
    gpa: "3.75 / 4.00"
  },
  {
    id: 'edu-1',
    type: 'education',
    date: "Aug 2015 – Jul 2019",
    title: "B.E. in Computer Science & Engineering",
    companyOrSchool: "Visvesvaraya Technological University, India",
    description: `Graduated with First Class distinction. Focused on core software engineering principles and database management.`,
    logo: "/logos/vtu.png",
    gpa: "3.3 / 4.0"
  },
];
