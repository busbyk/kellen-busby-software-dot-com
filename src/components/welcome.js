import React from 'react'
import Typist from 'react-typist'
import {FaGithub, FaFileDownload} from 'react-icons/fa'
import {RiMailSendFill} from 'react-icons/ri'
import profileImg from '../images/profile_1.jpg'
import resume from '../../static/Kellen Busby Resume.pdf'

const Welcome = () => {
  return (
    <section className='hero gradientBg is-vh-height'>
      <div className='hero-body'>
        <div className='container'>
          <div id='bio-container'>
            <div className='is-flex is-align-items-center'>
              <div className='mr-4 is-flex-shrink-0'>
                <img className='profile-img' src={profileImg} alt='' />
              </div>
              <div>
                <h1 className='title has-text-white'>Kellen Busby</h1>
                <h2 className='subtitle has-text-white'>
                  Full Stack JavaScript and Python Developer
                </h2>
              </div>
            </div>
          </div>
          <div className='slide-in-btns-row'>
            <a
              className='button is-link slide-in-btn is-size-7-mobile is-small'
              href='https://github.com/busbyk'
              target='_blank'
              rel='noreferrer'
            >
              <span className='icon'>
                <FaGithub size='fa-2x' />
              </span>
              <span>busbyk</span>
            </a>
            <a
              className='button is-link slide-in-btn is-size-7-mobile is-small'
              href={resume}
              download
            >
              <span className='icon'>
                <FaFileDownload size='fa-2x' />
              </span>
              <span>Resume</span>
            </a>
            <a
              className='button is-link slide-in-btn is-size-7-mobile is-small'
              href='mailto:kellenbusby@gmail.com'
            >
              <span className='icon'>
                <RiMailSendFill size='fa-2x' />
              </span>
              <span>Send me an email!</span>
            </a>
          </div>
          <div>
            <ThingsIBuild />
          </div>
        </div>
      </div>
    </section>
  )
}

const ThingsIBuild = (props) => {
  const workPhrases = [
    'React apps',
    'Web scrapers',
    'APIs',
    'React Native apps',
    'API integrations',
    'Python scripts',
    'Automation software',
    'Gatsby websites',
    'Whatever you need',
  ]

  return (
    <div className='work-phrases-row'>
      <p className='is-size-4'>What I build: </p>
      <Typist>
        <Typist.Delay ms={1000} />
        {workPhrases.map((phrase, idx) => (
          <span>
            <span
              className={
                idx === workPhrases.length - 1 ? 'emphasized-work-phrase' : ''
              }
              key={idx}
            >
              {phrase}
            </span>
            <Typist.Delay ms={1000} />
            <br />
          </span>
        ))}
      </Typist>
    </div>
  )
}

export default Welcome
