import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import data from '../data.json'

import LounchVehiclePortrait from './../assets/technology/image-launch-vehicle-portrait.jpg'
import LounchVehicleLandscape from './../assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceCapsulePortrait from './../assets/technology/image-space-capsule-portrait.jpg'
import SpaceCapsuleLandscape from './../assets/technology/image-space-capsule-landscape.jpg'
import SpacePortPortrait from './../assets/technology/image-spaceport-portrait.jpg'
import SpacePortLandscape from './../assets/technology/image-spaceport-landscape.jpg'
import Technology from '../components/Technology'
import NumberButton from '../components/NumberButton'
import { handleKeyDown } from '../utility/handleKeyDown'

const TechnologyPage = () => {
  type TabName = typeof tabs[number];

  interface ImageSources {
    portrait: string,
    landscape: string,
  }

  interface Technology {
    name: string,
    description: string
  }

  const tabs = useMemo(() => ['Launch vehicle', 'Spaceport', 'Space capsule'], []);
  const [tab, setTab] = useState<TabName>('Launch vehicle')
  const [currentTechnology, setTechnology] = useState<Technology | null>(null)

  const imageMap: Record<TabName, ImageSources> = {
    'Launch vehicle': { portrait: LounchVehiclePortrait, landscape: LounchVehicleLandscape },
    'Spaceport': { portrait: SpacePortPortrait, landscape: SpacePortLandscape },
    'Space capsule': { portrait: SpaceCapsulePortrait, landscape: SpaceCapsuleLandscape },
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

  useEffect(() => {
    const technology = data.technology.find(technology => technology.name === tab);
    if (technology) {
      setTechnology(technology);
    }
  }, [tab]);

  return (
    <div className="technology">
      <Header />
      <main className='grid-container grid-container--technology flow'>
        <h1 className="numbered-title"><span aria-hidden="true">03</span>Space launch 101</h1>

        {
          currentTechnology && (
            <picture>
              <source media="(width < 52em)" srcSet={imageMap[tab].landscape} />
              <source media="(width > 52em)" srcSet={imageMap[tab].portrait} />
              <img src={imageMap[tab].portrait} alt={tab} />
            </picture>
          )
        }

        <div className="number-indicators flex">
          {tabs.map(tabName => (
            <NumberButton
              key={tabName}
              label={tabs.indexOf(tabName) + 1}
              selected={tab === tabName}
              onClick={() => setTab(tabName)}
            />
          ))}
        </div>

        {
          data.technology
            .filter((technology) => technology.name === tab)
            .map((technology) => (
              <Technology
                key={technology.name}
                name={technology.name}
                description={technology.description}
              />
            ))
        }
      </main>
    </div>
  )
}

export default TechnologyPage