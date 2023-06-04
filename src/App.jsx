import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      
      <section className='header-section'>
        <Navbar />
        
        <div className='header-section-content-wrapper'>
          <div className='header-section-content'>
          <picture>
            <source srcSet='/images/bg-pattern-intro-left-mobile.svg' media='(max-width: 950px)' />
            <img className='header-bg-left' src='/images/bg-pattern-intro-left-desktop.svg' alt='Backgorund pattern'/> 
          </picture>
          <picture>
            <source srcSet='/images/bg-pattern-intro-right-mobile.svg' media='(max-width: 950px)' />
            <img className='header-bg-right' src='/images/bg-pattern-intro-right-desktop.svg' alt='Backgorund pattern' /> 
          </picture>
        
            <div className='header-section-divider'></div>
            <h1 className='header-section-title'>Humanizing your insurance.</h1>
            <p className='header-section-text'>
              Get your life insurance coverage easier and faster. We blend our expertise 
              and technology to help you find the plan that's right for you. Ensure you 
              and your loved ones are protected.
            </p>
            <button className='header-section-btn'>View plans</button>
          </div>
          <picture>
            <source srcSet='/images/image-intro-desktop.jpg' media='(max-width: 950px)' />
            <img className='header-section-image' src='/images/image-intro-desktop.jpg' alt='Main image'/>
          </picture>
          </div>
      </section>
      <section className='different-section'>
        <div className='different-section-divider'></div>
        <h1 className='different-section-title'>We're different</h1>
        <div className='different-items'>
          <div className='different-item'>
            <img className='different-item-icon' src='/images/icon-snappy-process.svg' alt='Icon'></img>
            <h1 className='different-item-title'>Snappy Process</h1>
            <p className='differnet-item-text'>
              Our application process can be completed in minutes, not hours. Don't get 
              stuck filling in tedious forms.
            </p>
          </div>
          <div className='different-item'>
            <img className='different-item-icon' src='/images/icon-affordable-prices.svg' alt='Icon'></img>
            <h1 className='different-item-title'>Affordable Prices</h1>
            <p className='differnet-item-text'>
              We don't want you worrying about high monthly costs. Our prices may be low, 
              but we still offer the best coverage possible.
            </p>
          </div>
          <div className='different-item'>
            <img className='different-item-icon' src='/images/icon-people-first.svg' alt='Icon'></img>
            <h1 className='different-item-title'>People First</h1>
            <p className='differnet-item-text'>
              Our plans aren't full of conditions and clauses to prevent payouts. We make 
              sure you're covered when you need it.
            </p>
          </div>
        </div>
      </section>
      <section className='find-section'>
        <h1 className='find-section-title'>Find out more about how we work</h1>
        <button className='find-btn'>How we work</button>
      </section>
      <section className='footer-section'>
        <div className='footer-section-header'>
          <img className='footer-logo' src='/images/logo.svg' alt='Logo'/>
          <div className='socials'>
          <i class="fa-brands fa-facebook-square fa-xl" />
            <i class="fa-brands fa-twitter fa-xl" />
            <i class="fa-brands fa-pinterest fa-xl" />
            <i class="fa-brands fa-instagram fa-xl" />
          </div>
        </div>
        <div className='footer-section-divider'></div>
        <div className='footer-links'>
          <div>
            <h1>Our company</h1>
            <p>How we work</p>
            <p>Why Insure?</p>
            <p>View plans</p>
            <p>Reviews</p>
          </div>
          <div>
            <h1>Help me</h1>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Cookies</p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>Sales</p>
            <p>Support</p>
            <p>Live chat</p>
          </div>
          <div>
            <h1>Others</h1>
            <p>Careers</p>
            <p>Press</p>
            <p>Licenses</p>
          </div>
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </div>
      </section>
    </>
  )
}

export default App
