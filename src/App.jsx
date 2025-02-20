import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer";
import Home from './pages/Home';
import CourseFilterPage from './pages/CourseFilterPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Course Filter Page Route */}
          <Route path="/courses" element={<CourseFilterPage />} />
        </Routes>
        
        {/* Footer */}
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}