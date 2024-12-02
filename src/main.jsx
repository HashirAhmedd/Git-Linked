
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import ProfilePage from './Profile.jsx'
import LikedRepos from './LikedRepos.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Main App Route */}
      <Route path="/profile" element={<ProfilePage />} /> {/* Profile Page Route */}
      <Route path="/LikedRepos" element={<LikedRepos />} />
    </Routes>
  </Router>
);