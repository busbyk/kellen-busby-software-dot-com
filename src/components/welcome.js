import React, { useState } from 'react'
import Typist from 'react-typist'
import { FaGithub } from 'react-icons/fa'
import { RiMailSendFill } from 'react-icons/ri'

const Welcome = () => {
  const [showWorkPhrases, setShowWorkPhrases] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showGitHubBtn, setShowGitHubBtn] = useState(false)
  const [showCta, setShowCta] = useState(false)

  return (
    <section className='hero gradientBg is-vh-height'>
      <div className='hero-body'>
        <div className='container'>
          <div id='welcome'>
            <Typist
              className='huge hi-im'
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => {
                setTimeout(() => {
                  setShowTitle(true)
                }, 1000)
              }}
            >
              <span>Hey!</span>
              <Typist.Delay ms={1000} />{' '}
              <span>
                I'm <br />
                Kellen Busby
              </span>
            </Typist>
            {showTitle && (
              <div id='github-btn-row'>
                <Typist
                  cursor={{ hideWhenDone: true }}
                  onTypingDone={() => {
                    setTimeout(() => {
                      setShowWorkPhrases(true)
                    }, 1500)
                    setTimeout(() => {
                      setShowGitHubBtn(true)
                    }, 1000)
                  }}
                >
                  <span>I'm a software developer</span>
                </Typist>
                {showGitHubBtn && (
                  <div className='slide-in-btns-row'>
                    <a
                      className='button slide-in-btn is-size-7-mobile'
                      href='https://github.com/busbyk'
                      target='_blank'
                    >
                      <span className='icon'>
                        <FaGithub size='fa-2x' />
                      </span>
                      <span>busbyk</span>
                    </a>
                    <a
                      className='button slide-in-btn is-size-7-mobile'
                      href='mailto:kellenbusby@gmail.com'
                    >
                      <span className='icon'>
                        <RiMailSendFill size='fa-2x' />
                      </span>
                      <span>Send me an email!</span>
                    </a>
                  </div>
                )}
              </div>
            )}
            {showWorkPhrases && (
              <ThingsIBuild
                onTypingDone={() => {
                  setShowCta(true)
                }}
              />
            )}
          </div>
          {showCta && (
            <div className='cta-btn-row'>
              <a
                className='button is-medium cta-btn'
                href='mailto:kellenbusby@gmail.com'
              >
                <span className='icon'>
                  <RiMailSendFill />
                </span>
                <span>Let's work together</span>
              </a>
            </div>
          )}
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
      <span>I build </span>
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
            delay={1000}
          />
        </span>
      ))}
    </Typist>
  )
}

export default Welcome
