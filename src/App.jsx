
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer";
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import CourseFilterPage from './pages/CourseFilterPage';
import ScrollToTop from './component/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBlogs" element={<BlogList />} />
        <Route path="/courses" element={<CourseFilterPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}