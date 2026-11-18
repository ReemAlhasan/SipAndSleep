import './App.css'
import { Routes, Route } from 'react-router'

import Navbar from './Navbar.tsx'
import HomePage from './pages/HomePage.tsx'
import TodayPage from './pages/TodayPage.tsx'
import HistoryPage from './pages/HistoryPage.tsx'
import MoodPage from './pages/MoodPage.tsx'
import SleepPage from './pages/SleepPage.tsx'
import WaterPage from './pages/WaterPage.tsx'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/mood" element={<MoodPage />} />
          <Route path="/summary" element={<TodayPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
