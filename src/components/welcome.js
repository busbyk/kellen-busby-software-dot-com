import React, { useState } from 'react'
import Typist from 'react-typist'

const Welcome = () => {
  const [showWorkPhrases, setShowWorkPhrases] = useState(true)

  return (
    <section className='hero gradientBg'>
      <div className='hero-body'>
        <div className='container'>
          <div id='typing'>
            {/* <Typist
              onTypingDone={() => {
                setShowWorkPhrases(true)
              }}
              cursor={{ hideWhenDone: true }}
            > */}
            <span className='huge'>Hey!</span>
            <br />
            {/* <Typist.Delay ms={500} /> */}
            <span className='huge'>I'm Kellen Busby</span>
            <br />
            {/* <Typist.Delay ms={500} /> */}
            <span>I'm a software developer</span>
            <br />
            {/* </Typist> */}
            {showWorkPhrases && <ThingsIBuild />}
          </div>
        </div>
      </div>
    </section>
  )
}

const ThingsIBuild = () => {
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

  const [workPhrasesDone, setWorkPhrasesDone] = useState(false)

  return (
    <Typist
      onTypingDone={() => {
        setWorkPhrasesDone(true)
      }}
    >
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
