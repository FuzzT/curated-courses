import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bars3CenterLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import DropDown from "./DropDown";
import DropdownCheck from "./Dropdowncheck";
import CourseCard from "./CourseCard";

const courseData = {
  Language: ["C++", "Java", "Python", "JavaScript"],
  "Web Development": {
    Frontend: {
      "No Frameworks": ["HTML", "CSS", "JavaScript"],
      Frameworks: ["ReactJS", "NextJS", "VueJS", "AngularJS", "Svelte"],
      "CSS Frameworks": ["Tailwind CSS", "Bootstrap", "Material UI", "Bulma"],
    },
    Backend: ["Node.js", "Java Spring Boot", "Django", "Ruby on Rails"],
  },
  "Design & Styling": {
    "UI/UX": [],
    "CSS Frameworks": ["Tailwind CSS", "Bootstrap", "Material UI"],
    Animation: ["GSAP", "Framer Motion"],
  },
};

const courseDatal = [
  {
    thumbnail: 'https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A',
    title: "React Tutorial for Beginners",
    Author: "Programming with Mosh",
    Rating: "4.5",
    Reviews: "222k+",
    Price: 0.00,
    views: '4M',
    duration: '1hr 20m',
    source: 'Youtube',
    tags: ["Reactjs", "TypeScript", "Tutorial"],
    level: "Beginner",
    keyHighlights: [
      "Introduction to React and JSX",
      "State management with hooks",
      "Handling events and user interactions",
      "Routing in React using React Router",
      "Fetching data from APIs",
    ],
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/ix4z_jUrQpQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQ96-PFsYdbG9douxKkFHpptKWyQ',
    title: "Advanced React Patterns for Pros",
    Author: "Mosh Hamedani",
    Rating: "4.9",
    Reviews: "30k+",
    Price: 29.99,
    views: '1M',
    duration: '2hr 20m',
    source: 'Udemy',
    tags: ["Reactjs", "Advanced", "Patterns"],
    level: "Advanced",
    keyHighlights: [
      "Advanced state management techniques",
      "Context API and useReducer",
      "Custom hooks and performance optimization",
      "React context vs Redux",
      "Unit testing with Jest and React Testing Library",
    ],
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/d56mG7DezGs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZiZwQ9Ap0GztQfjTqf4FgoNGIoQ',
    title: "Learn TypeScript from Scratch",
    Author: "Programming with Mosh",
    Rating: "4.7",
    Reviews: "50k+",
    Price: 19.99,
    views: '3M',
    duration: '1hr 50m',
    source: 'Pluralsight',
    tags: ["TypeScript", "JavaScript", "Programming"],
    level: "Intermediate",
    keyHighlights: [
      "Learn basic to advanced TypeScript features",
      "Type annotations and interfaces",
      "Generics and advanced types",
      "Integrating TypeScript with React",
      "Building TypeScript projects from scratch",
    ],
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/d56mG7DezGs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZiZwQ9Ap0GztQfjTqf4FgoNGIoQ',
    title: "Learn TypeScript from Scratch",
    Author: "Programming with Mosh",
    Rating: "4.7",
    Reviews: "50k+",
    Price: 19.99,
    views: '3M',
    duration: '1hr 50m',
    source: 'Pluralsight',
    tags: ["TypeScript", "JavaScript", "Programming"],
    level: "Intermediate",
    keyHighlights: [
      "Learn basic to advanced TypeScript features",
      "Type annotations and interfaces",
      "Generics and advanced types",
      "Integrating TypeScript with React",
      "Building TypeScript projects from scratch",
    ],
  },
];



const CourseFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const handleSubmit = () => {
    console.log("Selected Filters:", Array.from(selectedFilters));
    // API Call Example:
    // fetch("/api/courses", { method: "POST", body: JSON.stringify({ filters: Array.from(selectedFilters) }) })
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const levels = ["Beginner", "Intermediate", "Advance"];
  const Price = ["Free", "Paid"];

  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSideBar = () => {};

  return (
    <div className="container mx-auto mt-8 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium hidden xl:block">Filter</h1>
        <button className="cursor-pointer xl:hidden" onClick={toggleDropdown}>
          <Bars3CenterLeftIcon className="size-8" />
        </button>
        <div className="flex items-center justify-center gap-x-6">
          <DropDown
            label="Level"
            options={levels}
            selected={selectedLevel}
            setSelected={setSelectedLevel}
          />
          <DropDown
            label="Price"
            options={Price}
            selected={selectedPrice}
            setSelected={setSelectedPrice}
          />
        </div>
      </div>

      {/* drop down filter */}

      <div className="grid xl:flex xl:items-start justify-between gap-x-12">
      {/* Mobile Filter (Dropdown) */}
      <div
        className={`absolute top-12 w-full overflow-y-auto xl:hidden bg-white px-4 py-4 flex-grow shadow-lg ${
          isOpen ? "translate-y-0 z-[99]" : "-translate-y-[100vh]"
        } transition-all duration-300`}
      >
        <div className="mt-8 w-full flex flex-col items-start">
          {/* Dropdown List */}
          {Object.entries(courseData).map(([category, subCategory], index) => (
            <DropdownCheck
              key={index}
              title={category}
              items={subCategory}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          ))}

          <div className="mt-4">
            <button className="border py-2 w-32 font-medium text-md rounded-md tracking-wide">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Laptop Sidebar Filter */}
      <div className="hidden xl:block w-[360px] h-screen">
      <div
        className={` w-full overflow-y-auto bg-white py-4 flex-grow`}
      >
        <div className="mt-4 w-full flex flex-col items-start">
          {/* Dropdown List */}
          {Object.entries(courseData).map(([category, subCategory], index) => (
            <DropdownCheck
              key={index}
              title={category}
              items={subCategory}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          ))}

          <div className="mt-4">
            <button className="border py-2 w-32 font-medium text-md rounded-md tracking-wide">
              Apply
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-x-10 gap-y-4 md:gap-y-8">
        {courseDatal.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </section>
    </div>

    </div>
  );
};

export default CourseFilter;
