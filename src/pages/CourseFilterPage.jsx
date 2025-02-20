import React, { useState } from "react";

const coursesData = [
  {
    title: "React for Beginners",
    domain: "Web Development",
    technology: "React",
    language: "JavaScript",
    courseLanguage: "English",
    views: 1200,
    location: "Udemy",
  },
  {
    title: "Python for Data Science",
    domain: "Data Science",
    technology: "Python",
    language: "Python",
    courseLanguage: "Hindi",
    views: 2500,
    location: "Coursera",
  },
  {
    title: "Advanced JavaScript",
    domain: "Web Development",
    technology: "JavaScript",
    language: "JavaScript",
    courseLanguage: "English",
    views: 1800,
    location: "YouTube",
  },
];

const CourseFilterPage = () => {
  const [filters, setFilters] = useState({
    domain: "",
    technology: "",
    language: "",
    courseLanguage: "",
    minViews: "",
    location: "",
  });

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
    <section className="p-2 antialiased bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl text-center mb-8">
          Find Courses
        </h1>

        {/* Filters Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-white p-6 rounded-lg shadow-md">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <select
              name="domain"
              value={filters.domain}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900"
            >
              <option value="">Select Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
            </select>

            <select
              name="technology"
              value={filters.technology}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900"
            >
              <option value="">Select Technology</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
            </select>

            <select
              name="language"
              value={filters.language}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900"
            >
              <option value="">Select Programming Language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>

            <select
              name="courseLanguage"
              value={filters.courseLanguage}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900"
            >
              <option value="">Select Course Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <input
              type="number"
              name="minViews"
              value={filters.minViews}
              onChange={handleFilterChange}
              placeholder="Minimum Views"
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900 w-full"
            />

            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-900 w-full"
            >
              <option value="">Select Course Location</option>
              <option value="Udemy">Udemy</option>
              <option value="Coursera">Coursera</option>
              <option value="YouTube">YouTube</option>
            </select>
          </div>
        </div>

        {/* Courses Display Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-lg shadow-lg transition-all duration-300 overflow-hidden border border-gray-300 hover:shadow-xl"
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-pink-300 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Course Details */}
                <div className="relative z-10 text-gray-900 group-hover:text-white transition-all duration-500">
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="mb-2">{course.domain}</p>
                  <p className="mb-2">Technology: {course.technology}</p>
                  <p className="mb-2">Language: {course.language}</p>
                  <p className="mb-2">Course Language: {course.courseLanguage}</p>
                  <p className="mb-2">Views: {course.views}</p>
                  <p>Location: {course.location}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-900 text-center">No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseFilterPage;