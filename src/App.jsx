<<<<<<< HEAD
import Footer from './component/Footer';
import BlogList from './pages/BlogList';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer";
import Home from './pages/Home';
import CourseFilterPage from './pages/CourseFilterPage';
>>>>>>> 9a4d8c28649e80264f29f00f7d524178c6bd7a28

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBlogs" element={<BlogList />} />
      </Routes>
      <Footer />
    </Router>

  );
}