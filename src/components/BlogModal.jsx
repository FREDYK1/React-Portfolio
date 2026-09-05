import React, { useEffect, useRef } from "react";

const BlogModal = ({ open, onClose }) => {
  const modalRef = useRef(null);

  // Close modal on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-white text-black rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh] flex flex-col border-4 border-blue-200"
        style={{ boxSizing: "border-box" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Close blog"
        >
          ×
        </button>
        <div className="mt-8" />
        <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-900">
          👋 Hi, I’m Frederick Kankam
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          BSc Computer Science, University of Ghana — Software Engineer Moving Into Security Operations
        </p>
        <div className="space-y-6 text-base leading-relaxed flex-1 overflow-y-auto">
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🚀 My Journey
            </h3>
            <p>
              <span className="font-bold">Early Love for Science & Math:</span> I
              completed my basic and junior high school education at Cejose Wisdom
              International School, where I first discovered my love for science
              and mathematics. Solving problems, experimenting, and understanding
              how things worked quickly became my favorite part of school.
            </p>
            <p>
              <span className="font-bold">The Science Dream:</span> I went on to
              study General Science at Chemu Senior High Technical School, where I
              joined the National Science & Math Quiz team and represented my
              school at the regional level in 2023, finishing 2nd Runner-Up.
            </p>
            <p>
              <span className="font-bold">Choosing a New Path:</span> In January
              2024, I entered the University of Ghana, Legon to study Computer
              Science. At first, it felt like a leap into the unknown, but it
              quickly became one of the best decisions I’ve made — I wrote my
              first line of code that year and haven’t stopped building since.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              From Software Engineering Toward Security
            </h3>
            <p>
              I started small — Python scripts, then full-stack web development
              with React, Django, Spring Boot and Next.js across three
              internships and a startup team. Along the way I kept noticing that
              the most interesting problems weren’t just how to ship a feature,
              but how to make sure it couldn’t be abused. That pulled me toward
              security: I earned the AWS Certified Cloud Practitioner and Google
              Cybersecurity Professional certificates, completed AmaliTech’s AWS
              re/Start cloud programme, and I’m now working through TryHackMe’s
              SAL1 path while interning on AmaliTech’s cybersecurity track.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              Team Leadership & Real-World Work
            </h3>
            <p>
              In mid-2025, I was Scrum Master of the Solution Space Dev Team,
              leading a 5-person group building the BLINKXDE platform for
              EDBLINKX Empire Ltd — Agile sprints, CI/CD pipelines, and 100% of
              sprint goals delivered. That summer I also interned at Touch Stack
              Technologies, building a Python (FastAPI) and React lead-generation
              tool that scraped Ghanaian business directories and enriched
              records via the Google Places API.
            </p>
            <p>
              In late 2025 I joined Turntabl’s TechOps team, building a full-stack
              engineer title management system in Next.js, Spring Boot and
              PostgreSQL with zero-loss data migrations. Since December 2025 I’ve
              also been Software Engineer and COO at Aurora Software Labs, a
              student-run startup, building the backend for ShopAurora while
              leading operational strategy. And since August 2026 I’ve been a
              Cybersecurity Intern with AmaliTech Ghana, working full-time on
              threat models, security tooling and incident response.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🏆 Key Highlights
            </h3>
            <ul className="list-disc pl-6 mb-2">
              <li>AWS Certified Cloud Practitioner (CLF-C02), scored 882/1000</li>
              <li>Google Cybersecurity Professional Certificate</li>
              <li>Winner — AWS Hackathon 2026, team Sankofa</li>
              <li>Co-Founder & Inaugural Chair, Cyber Geeks Club, University of Ghana</li>
              <li>100% sprint goals delivered leading the EDBLINKX Scrum team</li>
              <li>2nd Runner-Up, National Science & Math Quiz (regional), 2023</li>
              <li>Ongoing open-source contributions on GitHub</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🌱 My Philosophy
            </h3>
            <p>
              I believe technology is a tool for empowerment — and that building
              secure systems is part of that, not separate from it. Every project
              I work on is focused on solving real problems, whether that’s
              automating tedious work, building tools for businesses, or making
              sure the systems people depend on hold up under pressure.
            </p>
            <p>
              I also believe in continuous growth. I’m always learning — through
              hackathons, certifications, and hands-on labs like TryHackMe.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🎯 What’s Next
            </h3>
            <p>
              Near-term, I’m moving into an entry-level SOC or security analyst
              role, where my software engineering background lets me read the
              code and cloud infrastructure that generates the alerts.
            </p>
            <p>
              Long-term, I’m working toward becoming a Cloud Security Engineer —
              and I want to keep mentoring the students coming up behind me at
              the University of Ghana along the way.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
