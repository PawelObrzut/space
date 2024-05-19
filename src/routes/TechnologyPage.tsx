import React, { useMemo, useState } from 'react'
import Header from '../components/Header'
import Picture from '../components/Picture'

import LounchVehiclePortrait from './../assets/technology/image-launch-vehicle-portrait.jpg'
import LounchVehicleLandscape from './../assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceCapsulePortrait from './../assets/technology/image-space-capsule-portrait.jpg'
import SpaceCapsuleLandscape from './../assets/technology/image-space-capsule-landscape.jpg'
import SpacePortPortrait from './../assets/technology/image-spaceport-portrait.jpg'
import SpacePortLandscape from './../assets/technology/image-spaceport-landscape.jpg'


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
    'Spaceport': { portrait: SpaceCapsulePortrait, landscape: SpaceCapsuleLandscape },
    'Space capsule': { portrait: SpacePortPortrait, landscape: SpacePortLandscape },
  };

  return (
    <div className="technology">
      <Header />
      <main className='grid-container grid-container--technology flow'>
        <h1 className="numbered-title"><span aria-hidden="true">03</span>Space lounch 101</h1>


        <img src={LounchVehiclePortrait} alt="Lounching the rocket" />

        <div className="number-indicators flex">
          <button aria-selected="true" className="bg-dark text-white ff-serif fs-600">1</button>
          <button aria-selected="false" className="bg-dark text-white ff-serif fs-600">2</button>
          <button aria-selected="false" className="bg-dark text-white ff-serif fs-600">3</button>
        </div>

        <article className="technology-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">The Terminology</h2>
            <p className="fs-700 uppercase ff-serif">Launch Vehicle</p>
          </header>

          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
          </p>
        </article>

      </main>
    </div>
  )
}

export default TechnologyPage