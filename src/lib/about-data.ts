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
    id: 'work-8',
    type: 'work',
    date: "May 2026 – Present",
    title: "Python AI Engineer",
    companyOrSchool: "Mitecs INC, Michigan, United States",
    description: [
      "Built a production-grade multimodal RAG pipeline for 500+ text and image documents using pgvector database with cosine similarity search, utilizing Gemini embedding and language models on Vertex AI for accurate query responses.",
      "Engineered a semantic retrieval pipeline across 3M+ tokens using token-aware chunking, neighboring chunk retrieval, and re-rankers, cutting irrelevant context tokens by 50% (from 20K to 10K) to improve precision for Gemini LLM responses.",
      "Optimized Gemini LLM response time from 60 seconds to 25 seconds (58% speedup) by parallelizing LLM calls, eliminating sequential API bottlenecks, and optimizing retrieval workflows.",
      "Created a multi-agent AI Mockup Builder using LangGraph to automate client POC creation, coordinating chat-driven Coder and Reviewer agents to generate and refine responsive UI mockups via natural conversation, supporting 20+ client demonstrations."
    ],
    workType: "Full-time",
  },
  {
    id: 'work-7',
    type: 'work',
    date: "May 2025 – May 2026",
    title: "Full Stack Developer",
    companyOrSchool: "Gabriel AI, United States",
    description: [
      "Launched AI voice agents using FastAPI and AWS Lambda to automate outbound marketing and customer engagement workflows, handling thousands of automated calls daily.",
      "Implemented callback automation using a retry queue that recovered 100% of missed customer interactions, directly improving lead conversion rates.",
      "Delivered high-performance Next.js dashboards delivering real-time call tracking, campaign analytics and operational visibility across 150+ concurrent marketing campaigns."
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
      "Designed an AI-driven Loyalty Reward Management platform using React, Next.js, YOLOv8, and BoT-SORT; trained computer vision models on 5,000+ custom images to track and process ~20,000 vehicles weekly across fuel stations.",
      "Implemented Google Cloud Document AI pipelines to extract 15+ structured fields from unstructured business documents, reducing manual processing effort and generating analytics-ready JSON outputs.",
      "Developed FastAPI microservices on Google Cloud Run using the Model Context Protocol (MCP) alongside prompt engineering, retrieval grounding, and token optimization to maintain fast, stable enterprise AI workflows.",
      "Reduced API response times from 200ms to 80ms through query optimization and targeted infrastructure improvements."
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
      "Automated Oracle Retail Xstore rollouts across ~3,400 stores and 13,600 registers using Python and CI/CD pipelines, drastically reducing deployment overhead.",
      "Maintained and enhanced 6+ Flask and Django microservices supporting POS operations, inventory synchronization, and reporting.",
      "Delivered Python-based analytics tools utilizing asynchronous data processing to monitor live sales, inventory fluctuations, and customer activity patterns across ~500 global retail locations, enabling data-driven corporate decision-making.",
      "Executed enterprise Oracle database migrations by developing Python scripts to programmatically compare schemas and dynamically create missing tables and columns, successfully migrating millions of records with 100% data integrity."
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
