import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedPosts } from './components/FeaturedPosts';
import { BlogPost } from './components/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturedPosts />
            </>
          } />
          <Route path="/post/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;