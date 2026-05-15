import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-content">
        <span className="footer-status">
          <span className="status-dot"></span>
          STATUS : SYNCHRONIZED
        </span>

        <p className="footer-copy">© 2026 <span>NGUYEN HAI DANG</span></p>

        <span className="footer-built">
          BUILT WITH REACT & EVANGELION ENERGY
        </span>
      </div>

      <div className="footer-credits">
        <span>CREDITS</span>
        <div className="credits-list">
          <a href="https://www.khara.co.jp" target="_blank" rel="noopener noreferrer">
            NEON GENESIS EVANGELION
          </a>
          <a href="https://www.imdb.com/name/nm0000288/" target="_blank" rel="noopener noreferrer">
            CHRISTIAN BALE
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer