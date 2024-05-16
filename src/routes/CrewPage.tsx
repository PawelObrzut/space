import React, { useState } from 'react'
import Header from '../components/Header'
import data from '../data.json';
import Crew from '../components/Crew';
import DotButton from '../components/DotButton';
import Picture from '../components/Picture';
import Douglas from './../assets/crew/image-douglas-hurley.png'
import Douglas_webp from './../assets/crew/image-douglas-hurley.webp'
import Mark from './../assets/crew/image-mark-shuttleworth.png'
import Mark_webp from './../assets/crew/image-mark-shuttleworth.webp'
import Victor from './../assets/crew/image-victor-glover.png'
import Victor_webp from './../assets/crew/image-victor-glover.webp'
import Anousheh from './../assets/crew/image-anousheh-ansari.png'
import Anousheh_webp from './../assets/crew/image-anousheh-ansari.webp'

const CrewPage = () => {
  const [tab, setTab] = useState('Douglas Hurley')

  return (
    <div className="crew">
      <Header />
      <main className="grid-container grid-container--crew flow">
        <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

        <div className="dot-indicators flex">
          <DotButton label={'The commander'} selected={tab === 'Douglas Hurley'} onClick={() => setTab('Douglas Hurley')} />
          <DotButton label={'The mission specialist'} selected={tab === 'Mark Shuttleworth'} onClick={() => setTab('Mark Shuttleworth')} />
          <DotButton label={'The pilot'} selected={tab === 'Victor Glover'} onClick={() => setTab('Victor Glover')} />
          <DotButton label={'The crew engineer'} selected={tab === 'Anousheh Ansari'} onClick={() => setTab('Anousheh Ansari')} />
        </div>

        {
          data.crew
            .filter((crew) => crew.name === tab)
            .map((crew) => (
              <Crew
                key={crew.name}
                name={crew.name}
                role={crew.role}
                bio={crew.bio}
              />
            ))
        }

        {tab === 'Douglas Hurley' && <Picture webpSrc={Douglas_webp} pngSrc={Douglas} alt="Douglas Hurley" />}
        {tab === 'Mark Shuttleworth' && <Picture webpSrc={Mark_webp} pngSrc={Mark} alt="Mark Shuttleworth" />}
        {tab === 'Victor Glover' && <Picture webpSrc={Victor_webp} pngSrc={Victor} alt="Victor Glover" />}
        {tab === 'Anousheh Ansari' && <Picture webpSrc={Anousheh_webp} pngSrc={Anousheh} alt="Anousheh Ansari" />}

      </main>
    </div>
  )
}

export default CrewPage