'use client';

import { useState, FormEvent } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { UploadCloud, FileText, CheckCircle, XCircle } from "lucide-react";

type AnalysisResult = {
  match_score: number;
  matched_keywords: string[];
  missing_keywords: string[];
  ai_summary: string;
};

export default function ResumeAnalyzerPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [useAI, setUseAI] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!resumeFile) {
      setError("Please upload a resume PDF file.");
      return;
    }
    if (!jobDescription.trim()) {
      setError("Please enter the job description.");
      return;
    }
    if (!resumeFile.name.toLowerCase().endsWith(".pdf")) {
      setError("Resume file must be a PDF.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("job_description", jobDescription);
      formData.append("use_ai", useAI.toString());

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/analyze/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setResult(response.data);
      }
    } catch (err: unknown) {
      console.error(err);
      setError("Failed to analyze. The backend might be offline. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getCircleColor = (score: number) => {
    if (score > 70) return "#2CDD94"; // Green/Cyan
    if (score > 40) return "#FBBF24"; // Yellow/Amber
    return "#F472B6"; // Pink/Red
  };

  return (
    <>
      {/* <Header /> */}
      <main className="max-w-4xl mx-auto px-4 pt-28 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">
            AI Resume Analyzer
          </h1>
          <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
            An interactive demo of a full-stack project. Upload your resume and a job description to see how well you match.
          </p>

          <form onSubmit={onSubmit} className="space-y-6 mb-8 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg">
            <div>
              <label htmlFor="resume" className="block mb-2 font-medium text-slate-300">
                Upload Resume (PDF only)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-slate-500" />
                  <div className="mt-4 flex text-sm leading-6 text-slate-400">
                    <label htmlFor="resume" className="relative cursor-pointer rounded-md font-semibold text-cyan-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-cyan-300">
                      <span>Upload a file</span>
                      <input id="resume" name="resume" type="file" className="sr-only" accept=".pdf" onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  {resumeFile ? (
                    <p className="text-sm text-green-400 mt-2 flex items-center justify-center gap-2"><FileText size={14}/> {resumeFile.name}</p>
                  ) : (
                    <p className="text-xs leading-5 text-slate-500">PDF up to 10MB</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="jd" className="block mb-2 font-medium text-slate-300">
                Paste Job Description
              </label>
              <textarea
                id="jd" rows={8} value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="w-full rounded-lg border border-white/10 p-4 text-sm resize-y bg-white/5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            
            {/* --- NEW Centered Controls Container --- */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between pt-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="useAI"
                  checked={useAI}
                  onChange={() => setUseAI(!useAI)}
                  className="h-4 w-4 rounded bg-white/10 border-white/20 text-cyan-400 focus:ring-cyan-500 focus:ring-offset-gray-900"
                />
                <label htmlFor="useAI" className="font-medium text-slate-300 select-none">
                  Enable AI-powered summary
                </label>
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary w-full md:w-auto">
                {loading ? "Analyzing..." : "Analyze"}
              </button>
            </div>

          </form>

          {error && <p className="text-pink-400 text-center">{error}</p>}

          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12">
              <h2 className="text-3xl font-semibold mb-8 text-white text-center">Skill Match Results</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center md:text-left">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-green-300 justify-center md:justify-start"><CheckCircle size={20}/> Matched Skills</h3>
                  <ul className="space-y-2 text-slate-300 text-sm inline-block text-left">
                    {result.matched_keywords.map((skill, i) => <li key={`m-${i}`} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400/50 flex-shrink-0"></span><span>{skill}</span></li>)}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center md:text-left">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-yellow-300 justify-center md:justify-start"><XCircle size={20}/> Missing Skills</h3>
                  <ul className="space-y-2 text-slate-300 text-sm inline-block text-left">
                    {result.missing_keywords.map((skill, i) => <li key={`mm-${i}`} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-400/50 flex-shrink-0"></span><span>{skill}</span></li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 pt-8 mt-8 border-t border-white/10">
                <div className="w-32 h-32 flex-shrink-0">
                  <CircularProgressbar
                    value={result.match_score} text={`${result.match_score}%`}
                    styles={buildStyles({
                      textColor: getCircleColor(result.match_score),
                      pathColor: getCircleColor(result.match_score),
                      trailColor: "rgba(255, 255, 255, 0.1)",
                    })}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">AI Match Summary</h3>
                  <p className="text-slate-400 whitespace-pre-line">{result.ai_summary}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
      {/* <Footer /> */}
    </>
  );
}