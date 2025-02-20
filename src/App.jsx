import Footer from './component/Footer';
import BlogList from './pages/BlogList';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function FeatureCards() {
 
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllBlogs" element={<BlogList />} />
      </Routes>
      <Footer />
    </Router>

  )
}