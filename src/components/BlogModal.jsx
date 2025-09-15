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
          Computer Science Student | University of Ghana
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
              joined the National Science & Math Quiz team and proudly represented
              my school in 2023. At this point, I dreamed of going to medical
              school — but life had other plans.
            </p>
            <p>
              <span className="font-bold">Choosing a New Path:</span> When I
              entered the University of Ghana in 2023, I made the bold decision to
              study Computer Science instead. At first, it felt like a leap into
              the unknown, but it quickly became one of the best decisions I’ve
              ever made.
            </p>
            <p>
              In 2024, I wrote my first line of code and began my developer
              journey. It was like unlocking a new superpower — the ability to turn
              ideas into tools and solutions that others could use.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              From Curiosity to Projects
            </h3>
            <p>
              I started small, building Python scripts to automate repetitive
              tasks, then moved on to full-stack web development with React and
              Django, and eventually started working on AI/ML projects. Each
              project was an opportunity to learn, experiment, and see how far I
              could push myself.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              Team Leadership & Real-World Work
            </h3>
            <p>
              In mid-2025, I became Scrum Master of the Solution Space Dev Team,
              where I led the development of a Car Brokerage MVP for EDBLINKX
              Company Ltd. We implemented Agile sprints, CI/CD pipelines, and
              delivered the first version of the product ahead of schedule.
            </p>
            <p>
              In May 2025, I joined TouchStack Technologies as a Software
              Engineering Intern. There, I:
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>
                Collaborated with senior engineers on full-stack development
                projects
              </li>
              <li>Optimized MySQL queries, boosting data retrieval speed by 20%</li>
              <li>
                Participated in Agile ceremonies, improving sprint delivery and
                collaboration
              </li>
              <li>Debugged and tested apps to ensure smooth product releases</li>
            </ul>
            <p>
              This internship gave me a taste of real industry work and helped me
              grow professionally.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🏆 Key Highlights
            </h3>
            <ul className="list-disc pl-6 mb-2">
              <li>
                100% Sprint Goals Achieved during internship, ensuring timely
                deliveries
              </li>
              <li>
                Built a business scraper tool that processed 500+ businesses for
                market research
              </li>
              <li>
                Represented Chemu SHTS at the 2023 National Science & Math Quiz
              </li>
              <li>
                2nd Runner-Up in 2023 National Science & Math Quiz (Regional
                Level)
              </li>
              <li>Actively contribute to open-source projects on GitHub</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🌱 My Philosophy
            </h3>
            <p>
              I believe technology is a tool for empowerment. Every project I work
              on is focused on solving real problems — whether it’s automating
              tedious work, building tools for businesses, or helping teams work
              more efficiently.
            </p>
            <p>
              I also believe in continuous growth. I’m always learning — through
              hackathons, study jams (like GDG Accra’s AI/ML sessions), and by
              experimenting with new technologies.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              🎯 What’s Next
            </h3>
            <p>
              My short-term goal is to keep improving as a software engineer,
              deepen my expertise in AI/ML, and work on impactful projects that
              reach real users.
            </p>
            <p>
              Long-term, I aim to mentor young developers and contribute to
              building a thriving tech ecosystem in Ghana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
