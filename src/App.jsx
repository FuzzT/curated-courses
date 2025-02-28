import Footer from './component/Footer';
import BlogList from './pages/BlogList';
import Home from './pages/Home';
import CourseFilterPage from './pages/CourseFilterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Course Filter Page Route */}
            <Route path="/courses" element={<CourseFilterPage />} />

            {/* Blog List Route */}
            <Route path="/AllBlogs" element={<BlogList />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
