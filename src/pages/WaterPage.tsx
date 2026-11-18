import { useState } from "react";
import { Link } from "react-router";

function WaterPage() {
  // Track the number of water glasses
  const [glasses, setGlasses] = useState(4);
  const [message, setMessage] = useState("");

  // Convert glasses to liters (250 ml per glass)
  const liters = glasses * 0.25;

  // Add one glass
  function addGlass() {
    setGlasses(glasses + 1);
    setMessage("1 glass (250 ml) added.");
  }

  // Remove one glass
  function removeGlass() {
    if (glasses > 0) {
      setGlasses(glasses - 1);
      setMessage("1 glass (250 ml) removed.");
    }
  }

  return (
    <main>
      <Link to="/">← Back To Home</Link>

      <h1>Water Today</h1>

      <h2>
        {glasses} glasses · {liters} liter
      </h2>

      {/* Display one icon per glass */}
      <div>
        {Array.from({ length: glasses }).map((_, index) => (
          <span key={index}>🥛</span>
        ))}
      </div>

      {/* Buttons to update water intake */}
      <div>
        <button onClick={removeGlass} disabled={glasses === 0}>
          - 1 glass
        </button>

        <button onClick={addGlass}>+ 1 glass</button>
      </div>

      <p>One glass = 250 ml</p>

      {/* Show confirmation after an update */}
      {message && (
        <section>
          <h3>✓ Saved!</h3>

          <p>
            {message} Today: {glasses} glasses - {liters} liter.
          </p>

          <button onClick={removeGlass} disabled={glasses === 0}>
            - 1 glass
          </button>

          <Link to="/">Back to Home</Link>
        </section>
      )}
    </main>
  );
}

export default WaterPage;
