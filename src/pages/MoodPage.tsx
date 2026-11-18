import { useState } from 'react'
import './MoodPage.css'

// The five choices, from worst (score 1) to best (score 5)
const moods = ['😞', '😕', '😐', '🙂', '😄']

function Mood() {
  // The picked mood's score, 1 to 5. 0 = nothing picked yet.
  const [selectedMood, setSelectedMood] = useState(0)

  // true = show the "Saved ✓" message
  const [isSaved, setIsSaved] = useState(false)

  function pickMood(score: number) {
    setSelectedMood(score)
    setIsSaved(false)
  }

  function saveMood() {
    // Later: save selectedMood to the database here.
    setIsSaved(true)
  }

  return (
    <div className="mood-page">
      <h1 className="mood-title">How does today feel?</h1>

      <div className="mood-choices">
        {moods.map((emoji, index) => (
          <button
            key={emoji}
            className={selectedMood === index + 1 ? 'mood-button selected' : 'mood-button'}
            onClick={() => pickMood(index + 1)}
          >
            {emoji}
          </button>
        ))}
      </div>

      <div className="mood-save">
        <button
          className="mood-save-button"
          onClick={saveMood}
          disabled={selectedMood === 0}
        >
          Save mood
        </button>

        {isSaved && <p className="mood-saved">Saved ✓</p>}
      </div>
    </div>
  )
}

export default Mood
