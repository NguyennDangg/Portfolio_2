import './Loader.css'
import { useState, useEffect } from 'react'

function Loader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Small delay to trigger the CSS transition
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <p>Synchronizing</p>
      <div className="progress-container">
        <div className={`progress-bar ${active ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}

export default Loader