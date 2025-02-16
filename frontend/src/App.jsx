import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import LoginRegister from './components/Auth/LoginRegister';
import CommunityPage from './pages/CommunityPage';
import PostDetail from './components/Community/PostDetail';
import NewPost from './components/Community/NewPost';
import Feedback from './pages/FeedbackPage';
import ContactUs from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/login-register" element={<LoginRegister />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/new-post" element={<NewPost />} />
        <Route path="/community/posts/:id" element={<PostDetail />} />

        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
export default App;


