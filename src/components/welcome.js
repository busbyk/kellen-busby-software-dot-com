import React from 'react'
import Typist from 'react-typist'
import { FaGithub } from 'react-icons/fa'
import { RiMailSendFill } from 'react-icons/ri'
import profileImg from '../images/profile_1.jpg'

const Welcome = () => {

  return (
    <section className='hero gradientBg is-vh-height'>
      <div className='hero-body'>
        <div className='container'>
          <div id='bio-container'>
            <div className='is-flex is-align-items-center'>
              <div className='mr-4'>
                <img className='profile-img' src={profileImg} alt='' />

              </div>
              <div>
              <h1 className='title has-text-white'>Kellen Busby</h1>
              <h2 className='subtitle has-text-white'>Full Stack JavaScript and Python Developer</h2>

              </div>

            </div>
          </div>
          <div className='slide-in-btns-row'>
                    <a
                      className='button is-link slide-in-btn is-size-7-mobile'
                      href='https://github.com/busbyk'
                      target='_blank'
                    >
                      <span className='icon'>
                        <FaGithub size='fa-2x' />
                      </span>
                      <span>busbyk</span>
                    </a>
                    <a
                      className='button is-link slide-in-btn is-size-7-mobile'
                      href='mailto:kellenbusby@gmail.com'
                    >
                      <span className='icon'>
                        <RiMailSendFill size='fa-2x' />
                      </span>
                      <span>Send me an email!</span>
                    </a>
                  </div>
                  <div>
                  <ThingsIBuild/>

                  </div>
        </div>
      </div>
    </section>
  )
}

const ThingsIBuild = (props) => {
  const { onTypingDone } = props
  const workPhrases = [
    'React apps',
    'web scrapers',
    'APIs',
    'React Native apps',
    'API integrations',
    'Python scripts',
    'automation software',
    'Gatsby websites',
    'whatever you need',
  ]

  return (
    <Typist className='work-phrases-row' onTypingDone={onTypingDone}>
      <p className='is-size-4'>What I build: </p>
      {workPhrases.map((phrase, idx) => (
        <span
          className={
            idx === workPhrases.length - 1 ? 'emphasized-work-phrase' : ''
          }
          key={idx}
        >
          {phrase}
          <Typist.Backspace
            count={idx < workPhrases.length - 1 ? phrase.length : 0}
            delay={1500}
          />
        </span>
      ))}
    </Typist>
  )
}

export default Welcome
