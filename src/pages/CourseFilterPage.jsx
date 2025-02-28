import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundAnimation from "../component/BackgrounAnimation";  // Import the background component

const coursesData = [
  { title: "React for Beginners", domain: "Web Development", technology: "React", language: "JavaScript", courseLanguage: "English", views: 1200, location: "Udemy" },
  { title: "Python for Data Science", domain: "Data Science", technology: "Python", language: "Python", courseLanguage: "Hindi", views: 2500, location: "Coursera" },
  { title: "Advanced JavaScript", domain: "Web Development", technology: "JavaScript", language: "JavaScript", courseLanguage: "English", views: 1800, location: "YouTube" },
];

const CourseFilterPage = () => {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({ domain: "", technology: "", language: "", courseLanguage: "", minViews: "", location: "" });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCourses = coursesData.filter((course) => {
    return (
      (filters.domain === "" || course.domain === filters.domain) &&
      (filters.technology === "" || course.technology === filters.technology) &&
      (filters.language === "" || course.language === filters.language) &&
      (filters.courseLanguage === "" || course.courseLanguage === filters.courseLanguage) &&
      (filters.location === "" || course.location === filters.location) &&
      (filters.minViews === "" || course.views >= Number(filters.minViews))
    );
  });

  return (
    <section className="relative p-4 bg-gray-50 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <BackgroundAnimation /> {/* Add the background animation component */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg z-10 relative"
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Find Your Perfect Course</h1>

        {/* Stepwise Filtering */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <label className="block text-gray-700 font-medium">Select Domain</label>
            <select name="domain" value={filters.domain} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="">Select Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
            </select>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <label className="block text-gray-700 font-medium">Select Technology</label>
            <select name="technology" value={filters.technology} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="">Select Technology</option>
              {filters.domain === "Web Development" && (
                <>
                  <option value="React">React</option>
                  <option value="JavaScript">JavaScript</option>
                </>
              )}
              {filters.domain === "Data Science" && <option value="Python">Python</option>}
            </select>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <label className="block text-gray-700 font-medium">Select Programming Language</label>
            <select name="language" value={filters.language} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="">Select Programming Language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <label className="block text-gray-700 font-medium">Select Course Language</label>
            <select name="courseLanguage" value={filters.courseLanguage} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="">Select Course Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <label className="block text-gray-700 font-medium">Select Platform</label>
            <select name="location" value={filters.location} onChange={handleFilterChange} className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="">Select Course Location</option>
              <option value="Udemy">Udemy</option>
              <option value="Coursera">Coursera</option>
              <option value="YouTube">YouTube</option>
            </select>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
              Back
            </button>
          )}
          {step < 5 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button onClick={() => setStep(6)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Show Courses
            </button>
          )}
        </div>
      </motion.div>

      {/* Show Courses */}
      {step === 6 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Filtered Courses</h2>
          <ul className="mt-4">
            {filteredCourses.map((course, index) => (
              <li key={index} className="p-3 bg-white shadow rounded-lg mb-2">{course.title} - {course.location}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default CourseFilterPage;
