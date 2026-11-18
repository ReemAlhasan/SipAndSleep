import { useState } from 'react'
import './AboutUs.css'

function AboutUsModal() {
  // true = the pop-up is showing, false = it's hidden
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="navbar-button" onClick={() => setIsOpen(true)}>About Us</button>

      {isOpen && (
        <>
          {/* The dark background. Clicking it closes the pop-up. */}
          <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>

          {/* The white box */}
          <div className="modal-box">
            <button className="modal-x" onClick={() => setIsOpen(false)}>
              X
            </button>

            <h2>About Sip &amp; Sleep</h2>

            <h3>Header 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <h3>Header 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <button className="modal-got-it" onClick={() => setIsOpen(false)}>
              Got it
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default AboutUsModal
