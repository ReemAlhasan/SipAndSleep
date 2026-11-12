import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import WaterPage from './pages/WaterPage';
import SleepPage from './pages/SleepPage';
import MoodPage from './pages/MoodPage';
import TodayPage from './pages/TodayPage';
import HistoryPage from './pages/HistoryPage';
import './App.css';

// App only handles routing: the URL decides which page is shown.
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/sleep" element={<SleepPage />} />
        <Route path="/mood" element={<MoodPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
