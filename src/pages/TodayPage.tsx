import { Link } from 'react-router'
import './TodayPage.css'

// Same emojis as on the Mood page, from worst (score 1) to best (score 5)
const moods = ['😞', '😕', '😐', '🙂', '😄']

// Today's date, e.g. "Wednesday, November 18"
const date = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

function TodayPage() {
  // Today's numbers. 0 = not logged yet.
  // Later: get these from the database.
  const glasses: number = 4
  const sleepHours: number = 7.5
  const mood: number = 0

  return (
    <div className="today-page">
      <p className="today-date">{date}</p>
      <h1 className="today-title">Today's summary</h1>

      <div className="today-cards">
        <section className="today-card">
          <h2 className="today-label">Water</h2>
          <p className="today-value">{glasses} / 8 glasses</p>

          {/* The bar fills up as you drink. 8 glasses = full bar */}
          <div className="today-bar">
            <div className="today-bar-fill" style={{ width: (glasses / 8) * 100 + '%' }}></div>
          </div>
        </section>

        <section className="today-card">
          <h2 className="today-label">Sleep</h2>
          <p className="today-value">
            {sleepHours === 0 ? 'Not logged yet' : sleepHours + ' hours'}
          </p>

          {sleepHours === 0 && <Link to="/sleep">Log sleep</Link>}
        </section>

        <section className="today-card">
          <h2 className="today-label">Mood</h2>
          <p className="today-value">
            {mood === 0 ? 'Not logged yet' : moods[mood - 1]}
          </p>

          {mood === 0 && <Link to="/mood">Log mood</Link>}
        </section>
      </div>
    </div>
  )
}

export default TodayPage

