export type Project = {
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Experiment';
  category: 'Web App' | 'AI/ML' | 'DevOps' | 'CLI Tool';
  stack: string[];
  href: string;
  featured: boolean;
  live?: string;
  image?: string;
};

export const projects: Project[] = [
   {
  title: "Healthcare Website",
  description: "A modern, responsive healthcare website featuring AI-powered chatbot, appointment scheduling, patient resources, and provider profiles built with Next.js and Tailwind CSS.",
  status: "Ongoing",
  category: "Web App",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "FastAPI",
    "OpenAI API"
  ],
  href: "https://github.com/rohanvenkatesha/Healthcare_Website",
  featured: true,
  image: "/projectimages/healthcare.png"
}, 
{
  title: "AI Coupon Manager (Crowdsourced)",
  description: "A full-stack web application that uses AI to generate, validate, and manage discount coupons, featuring store-wise browsing, ratings, and AI-driven coupon validation.",
  status: "Completed",
  category: "AI/ML",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "OpenAI GPT-3",
    "Docker"
  ],
  href: "https://github.com/rohanvenkatesha/Ai_Coupon_Manager_Crowdsourced",
  featured: true,
  image: "/projectimages/coupons.png"
},

    {
  title: "AI Resume and Job Description Analyzer",
  description: "An AI-powered full-stack application that analyzes resumes against job descriptions, identifies matched and missing skills, calculates a fit score, and generates a smart AI summary.",
  status: "Completed",
  category: "AI/ML",
  stack: [
    "FastAPI",
    "Python",
    "spaCy",
    "OpenRouter (Mistral 7B)",
    "Uvicorn",
    "Next.js (TypeScript)",
    "Axios",
    "Tailwind CSS"
  ],
  href: "https://github.com/rohanvenkatesha/AI-Resume-and-Job-Description-Analyzer",
  live: "http://localhost:3000/projects/resume-analyzer",
  featured: true,
  image: "/projectimages/resumeanalyzer.png"
},
  {
    title: "License Plate Detection and Recognition",
    description: "Detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.",
    status: "Completed",
    category: "AI/ML",
    stack: ["YOLOv5", "PaddleOCR", "Flask", "API Integration"],
    href: "https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR",
    featured: true,
  image: "/projectimages/license.jpeg"
  },
  {
    title: "Retrieval Augmented Generation Chatbot",
    description: "Analyzing PDFs and images, allowing users to ask content-based questions using Streamlit, LangChain, and Google Generative AI.",
    status: "Completed",
    category: "AI/ML",
    stack: ["Streamlit", "LangChain", "FAISS", "Google Generative AI", "NLP"],
    href: "https://github.com/rohanvenkatesha/Retrieval-Augmented-Generation-RAG-Chatbot",
    featured: true,
  image: "/projectimages/rag.jpeg"
  },

  {
  title: "Food Truck Website",
  description: "A modern animated food truck website with a dynamic menu, daily event flash cards, and a responsive design built using Next.js and Tailwind CSS.",
  status: "Ongoing",
  category: "Web App",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion"
  ],
  href: "https://github.com/rohanvenkatesha/foodtruck-website",
  featured: true,
  image: "/projectimages/foodtruck.png"
},

  {
    title: "ClaimIT: Insurance & Claims Automation",
    description: "An innovative platform aimed at revolutionizing the insurance industry by automating claims processing and enhancing customer satisfaction.",
    status: "Completed",
    category: "Web App",
    stack: ["AI", "Machine Learning", "Python", "React.js", "Cloud Computing"],
    href: "https://github.com/rohanvenkatesha/ClaimIT",
    featured: false,
    image: "/projectimages/claimit.jpg"
  },
  {
    title: "Railway Reservation Flask Backend",
    description: "A Flask-based backend API for a railway reservation system. The API allows users to register, log in, view available trains, and reserve tickets.",
    status: "Experiment",
    category: "Web App",
    stack: ["Flask", "REST API", "MySQL", "Backend Development"],
    href: "https://github.com/rohanvenkatesha/Railway-Reservation-Flask-Backend-API-Testing",
    featured: false,
    image: "/projectimages/railway.jpeg"
  },
  {
    title: "Sarcasm Detection Using NLP",
    description: "A sarcasm detection system using Flask and NLP, allowing users to input sentences and check for sarcasm.",
    status: "Completed",
    category: "AI/ML",
    stack: ["Flask", "NLP", "Python", "Web Development"],
    href: "https://github.com/rohanvenkatesha/Sarcasm-Detection-using-Natural-Language-Processing",
    featured: false,
    image: "/projectimages/sarcasm.jpeg"
  },
  {
    title: "Face Mask Detection Using YOLOv5",
    description: "A face mask detection system using YOLOv5. It utilizes a Kaggle dataset for training, testing, and inference.",
    status: "Completed",
    category: "AI/ML",
    stack: ["YOLOv5", "Computer Vision", "Kaggle", "PyTorch"],
    href: "https://github.com/rohanvenkatesha/Face-Mask-Detection-Using-Yolov5",
    featured: false,
    image: "/projectimages/facemask.jpeg"
  },
  {
    title: "Market Basket Apriori Analysis",
    description: "Implementing the Apriori Algorithm for Market Basket Analysis to identify frequent itemsets and generate association rules.",
    status: "Completed",
    category: "AI/ML",
    stack: ["Apriori", "Data Mining", "Python", "mlxtend"],
    href: "https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis",
    featured: false,
    image: "/projectimages/market.jpeg"
  },
  {
    title: "Hate Speech Detection with Deep Learning",
    description: "A deep learning-based approach for detecting hate speech in text using a Django web application.",
    status: "Completed",
    category: "Web App",
    stack: ["Deep Learning", "Django", "Text Classification", "NLP"],
    href: "https://github.com/rohanvenkatesha/Deep-Learning-Approach-for-Hate-Speech-Detection",
    featured: false,
    image: "/projectimages/hatespeech.png"
  },
  {
    title: "Basic Search Engine",
    description: "This project involves building a simplified document search engine, similar in concept to major search engines like Google or Bing.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["Search Engine", "Query Processing", "Indexing", "Information Retrieval"],
    href: "https://github.com/rohanvenkatesha/Basic-Search-Engine",
    featured: false,
    image: "/projectimages/searchengine.jpeg"
  },
  {
    title: "UDP Client-Server Interaction",
    description: "This project demonstrates UDP client-server communication where the client sends message packets to the server.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["C Programming", "UDP", "Client-Server", "Networking"],
    href: "https://github.com/rohanvenkatesha/UDP-Client-Server-Interaction",
    featured: false,
    image: "/projectimages/udp.jpeg"
  },
  {
    title: "Lexical Analyzer for Cminus",
    description: "This repository implements a Lexical Analyzer for the Cminus programming language.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["Lexical Analysis", "PLY", "Tokenization", "Compiler Design"],
    href: "https://github.com/rohanvenkatesha/Lexical-Analyzer-for-Cminus-Programming-Language",
    featured: false,
    image: "/projectimages/lex.jpeg"
  },
  {
    title: "Parser for Cminus",
    description: "This repository implements a lexical and syntactical analyzer for the Cminus programming language.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["Syntactic Analysis", "Compiler Design", "PLY", "AST"],
    href: "https://github.com/rohanvenkatesha/Parser-for-Cminus-Programming-Language",
    featured: false,
    image: "/projectimages/parser.jpeg"
  },
  {
    title: "Shell Scripting for System Administration",
    description: "This project includes various shell scripts for system administration tasks like process monitoring and backup automation.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["Shell Scripting", "System Admin", "Automation", "Linux"],
    href: "https://github.com/rohanvenkatesha/Shell-Scripting-for-System-Administration",
    featured: false,
    image: "/projectimages/sysadmin.webp"
  },
  {
    title: "Linked Lists vs. Arrays Comparative Study",
    description: "A Python application that explores and compares the performance of linked lists and arrays by performing various data operations.",
    status: "Experiment",
    category: "CLI Tool",
    stack: ["Python", "Data Structures", "Linked Lists", "Complexity Analysis"],
    href: "https://github.com/rohanvenkatesha/Searching-in-Linked-Lists-and-Arrays",
    featured: false,
    image: "/projectimages/linkedlist.webp"
  },
  {
    title: "Smart Supply Chain KCS Proposal",
    description: "A proposal for a Knowledge Currency System (KCS), leveraging AI and blockchain to enhance data reliability and traceability in global supply chains.",
    status: "Completed",
    category: "AI/ML",
    stack: ["AI", "Blockchain", "Supply Chain", "IoT", "Ethereum"],
    href: "https://github.com/rohanvenkatesha/Smart-Supply-Chain-Knowledge-Currency-System",
    featured: false,
    image: "/projectimages/supplychain.jpeg"
  }
];