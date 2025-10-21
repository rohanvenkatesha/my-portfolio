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
  "Contribute to the architecture and early-stage development of an AI-powered SaaS platform using Django, FastAPI, Docker, and AWS (Lambda, S3).",
  "Built a callback feature for AI voice agents with the team, ensuring 100% of missed customers are automatically re-engaged through a circular loop architecture.",
  "Deliver scalable web applications and responsive UIs with TypeScript, React, and Next.js, improving overall user experience."
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
  "Optimized real-time object detection pipelines with YOLOv5 and OpenCV, reducing over 70,000 daily server calls via client-side Redis caching.",
  "Streamlined CI/CD pipelines using Jenkins, Docker, GitLab, and Python scripts, improving deployment time from over an hour to under 15 minutes.",
  "Reviewed and merged 50+ pull requests, enforcing coding standards and component-based design patterns, saving 100+ hours per quarter.",
  "Spearheaded migration of 4+ applications to AWS, optimizing infrastructure and reducing costs by over $14,000 annually."
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
  "Developed RESTful APIs handling 50K+ requests per hour, implementing rate limiting and access control to ensure reliability and prevent overload.",
  "Designed and deployed 6+ microservices with Python (Flask, Django) and Node.js, maintaining 99.98% uptime and supporting 1M+ daily requests.",
  "Automated Xstore deployments across approximately 3,400 stores (around 13,600 registers) globally, managing regional and master/secondary register distinctions to ensure consistent CI/CD builds.",
  "Accelerated API performance (200ms to 80ms) through load balancing, query tuning, and debugging to enhance system stability."
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
    description: `Specializing in advanced algorithms and distributed systems.`,
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