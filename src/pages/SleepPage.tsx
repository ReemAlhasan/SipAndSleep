import { useState } from 'react';

import './sleepPage.css';

const qualityOptions = [
  { value: 1, emoji: '😫', label: 'Terrible' },
  { value: 2, emoji: '😕', label: 'Bad' },
  { value: 3, emoji: '😐', label: 'Okay' },
  { value: 4, emoji: '🙂', label: 'Good' },
  { value: 5, emoji: '😄', label: 'Great' },
];

function SleepPage() {
  const [hours, setHours] = useState(7.5);
  const [quality, setQuality] = useState(0);
  const [saved, setSaved] = useState(false);

  function handleHoursChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHours(Number(event.target.value));
    setSaved(false);
  }

  function handleQualityClick(value: number) {
    setQuality(value);
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
  }

  return (
    <main className="sleep-page">
      <h1 className="sleep-title">How did you sleep last night?</h1>

      <section className="sleep-card">
        <p className="sleep-card-label">SLEEP</p>
        <p className="sleep-hours">
          {hours} <span className="sleep-unit">hours</span>
        </p>
        <input
          className="sleep-slider"
          type="range"
          min={0}
          max={24}
          step={0.5}
          value={hours}
          onChange={handleHoursChange}
        />
        <div className="sleep-slider-ends">
          <span>0 h</span>
          <span>24 h</span>
        </div>
      </section>

      <section className="sleep-card">
        <p className="sleep-card-label">HOW WELL DID YOU SLEEP?</p>
        <div className="sleep-emoji-row">
          {qualityOptions.map((option) => (
            <button
              key={option.value}
              className="sleep-emoji-button"
              type="button"
              onClick={() => handleQualityClick(option.value)}
            >
              <span
                className={
                  quality === option.value ? 'sleep-emoji-circle chosen' : 'sleep-emoji-circle'
                }
              >
                {option.emoji}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      </section>

      <button className="sleep-save-button" type="button" onClick={handleSave}>
        Save sleep
      </button>

      {saved && <p className="sleep-saved">Saved ✓</p>}
    </main>
  );
}

export default SleepPage;
