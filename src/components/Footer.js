import React, {useState} from 'react'
import image from '../images/img_frame136278.svg'
import televisionsvg from '../images/img_television.svg'
import infosvg from '../images/img_info.svg'
import linkedinsvg from '../images/img_mdilinkedin.svg'

const Footer = () => {
  const [isMettaMuse, setIsMettaMuse] = useState(false)
  const [isQuickLinks, setIsQuickLinks] = useState(false)
  const [isFollowUs, setIsFollowUs] = useState(false)
  return (
    <footer>
      <div className='wrapper width-100'>
        <div className='letterAndcontact'>
          <div className='newsletter'>
            <p className='footerHeading'>Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className='inputsBtn'>
              <input
                className='subscribe-input'
                type='email'
                placeholder='Enter your e-mail...'
              />
              <button className='subscribeBtn'>subscribe</button>
            </div>
          </div>

          <div className='contactDetails'>
            <div className='contactUs'>
              <p className='footerHeading'>CONTACT US</p>
              <p style={{marginBottom: '20px'}}>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className='currency'>
              <p className='footerHeading'>CURRENCY</p>
              <img
                src={televisionsvg}
                alt='televisionsvg'
                style={{
                  borderRadius: '50%',
                }}
              />
              <span style={{fontSize: '18px'}}> * USD</span>
              <p className='smallText'>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className='actionsLinksContainer'>
          <div className='mettaMuse'>
            <ul className='unordered-list'>
              <li className='footerHeading'>mettā muse</li>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className='quickLinks'>
            <ul className='unordered-list'>
              <li className='footerHeading'>QUICK LINK</li>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className='followus'>
            <div className='socialLinksContainer'>
              <div
                className='footerHeadingCont'
                onClick={() => setIsFollowUs(prev => !prev)}
              >
                <p className='footerHeading'>FOLLOW US</p>
                {isFollowUs ? (
                  <img src='/icons/arrow-up.svg' alt='' />
                ) : (
                  <img src='/icons/arrow-down.svg' alt='' />
                )}
              </div>
              <div className='socialAcc'>
                <div className='social_links'>
                  <img
                    src={infosvg}
                    alt='infosvg'
                    style={{
                      border: '1px solid #fff',
                      borderRadius: '50%',
                      height: '30px',
                      width: '30px',
                      padding: '4px',
                    }}
                  />
                  <img
                    src={linkedinsvg}
                    alt='linkedinsvg'
                    style={{
                      border: '1px solid #fff',
                      borderRadius: '50%',
                      height: '30px',
                      width: '30px',
                      padding: '4px',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='paymentMethodsContainer'>
              <p className='footerHeading'>mettā muse Accepts</p>
              <div className='payments'>
                <img src={image} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
