import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import TodayPage from "./pages/TodayPage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import MoodPage from "./pages/MoodPage.tsx";
import SleepPage from "./pages/SleepPage.tsx";
import WaterPage from "./pages/WaterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

function App() {
  // Who is logged in? null = nobody
  const [user, setUser] = useState<User | null>(null);
  // true while Firebase checks if you are still logged in from last time
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase calls this every time someone logs in or out
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Stop listening when the app closes
    return unsubscribe;
  }, []);

  // 1. Still checking
  if (loading) {
    return <p>Loading…</p>;
  }

  // 2. Nobody logged in (we build the real login page in the next step)
  if (user === null) {
    return <LoginPage />;
  }

  // 3. Logged in: show the app as before
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/mood" element={<MoodPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
