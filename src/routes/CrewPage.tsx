import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import data from '../data.json';
import Crew from '../components/Crew';
import DotButton from '../components/DotButton';
import Picture from '../components/Picture';

import Douglas from '@crew/image-douglas-hurley.png'
import Douglas_webp from '@crew/image-douglas-hurley.webp'
import Mark from '@crew/image-mark-shuttleworth.png'
import Mark_webp from '@crew/image-mark-shuttleworth.webp'
import Victor from '@crew/image-victor-glover.png'
import Victor_webp from '@crew/image-victor-glover.webp'
import Anousheh from '@crew/image-anousheh-ansari.png'
import Anousheh_webp from '@crew/image-anousheh-ansari.webp'
import { handleKeyDown } from '../utility/handleKeyDown';


const CrewPage = () => {
  type TabName = typeof tabs[number];

  interface ImageSources {
    webp: string,
    png: string,
  }

  const tabs = useMemo(() => ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'], []);
  const [tab, setTab] = useState<TabName>('Douglas Hurley')

  const currentCrewMember = useMemo(() => {
    return data.crew.find(crew => crew.name === tab) || null
  }, [tab])
  
  const imageMap: Record<TabName, ImageSources> = {
    'Douglas Hurley': { webp: Douglas_webp, png: Douglas },
    'Mark Shuttleworth': { webp: Mark_webp, png: Mark },
    'Victor Glover': { webp: Victor_webp, png: Victor },
    'Anousheh Ansari': { webp: Anousheh_webp, png: Anousheh }
  };

  useEffect(() => {
    const onKeyDown = (e: { keyCode: number }) => {
      handleKeyDown(e, tab, tabs, setTab);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [tab, tabs])
  
  return (
    <div className="crew">
      <Header />
      <main className="grid-container grid-container--crew flow">
        <h1 className="numbered-title"><span aria-hidden="true">02</span>Meet your crew</h1>

        <div className="dot-indicators flex">
          {tabs.map(tabName => (
            <DotButton 
              key={tabName}
              label={tabName}
              selected={tab === tabName}
              onClick={() => setTab(tabName)}
            />
          ))}
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

        {currentCrewMember && (
          <Picture 
            webpSrc={imageMap[tab].webp}
            pngSrc={imageMap[tab].png}
            alt={currentCrewMember.name}
          />
        )}
      </main>
    </div>
  )
}

export default CrewPage