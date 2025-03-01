import Footer from './component/Footer';
import BlogList from './pages/BlogList';
import Home from './pages/Home';
import CourseFilterPage from './pages/CourseFilterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseFilter from './component/CourseFilter';
import CourseList from './pages/CourseList';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Course Filter Page Route */}
            <Route path="/courses" element={<CourseList />} />

            {/* Blog List Route */}
            <Route path="/AllBlogs" element={<BlogList />} />

            <Route path="/filter" element={<CourseFilter />} />
            
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
