import { useState } from 'react'
import Moon from './../assets/destination/image-moon.png';
import Moon_webp from './../assets/destination/image-moon.webp';
import Mars from './../assets/destination/image-mars.png';
import Mars_webp from './../assets/destination/image-mars.webp';
import Europa from './../assets/destination/image-europa.png';
import Europa_webp from './../assets/destination/image-europa.webp';
import Titan from './../assets/destination/image-titan.png';
import Titan_webp from './../assets/destination/image-titan.webp';
import Header from '../components/Header';
import Article from '../components/Destination';
import data from '../data.json';
import TabButton from '../components/TabButton';
import Picture from '../components/Picture';

const Destination = () => {
  const [tab, setTab] = useState('Moon')

  return (
    <div className="destination">
      <Header />
      <main id="main" className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        {tab === 'Moon' && <Picture webpSrc={Moon_webp} pngSrc={Moon} alt="the Moon" />}
        {tab === 'Mars' && <Picture webpSrc={Mars_webp} pngSrc={Mars} alt="Mars" />}
        {tab === 'Europa' && <Picture webpSrc={Europa_webp} pngSrc={Europa} alt="Europa" />}
        {tab === 'Titan' && <Picture webpSrc={Titan_webp} pngSrc={Titan} alt="Titan" />}

        <div className="tab-list underline-indicators flex">
          <TabButton
            label='Moon'
            selected={tab === 'Moon'}
            onClick={() => setTab('Moon')} />
          <TabButton
            label='Mars'
            selected={tab === 'Mars'}
            onClick={() => setTab('Mars')} />
          <TabButton 
            label='Europa' 
            selected={tab === 'Europa'} 
            onClick={() => setTab('Europa')} />
          <TabButton 
            label='Titan' 
            selected={tab === 'Titan'} 
            onClick={() => setTab('Titan')} />
        </div>

          {
            data.destinations
              .filter((destination) => destination.name === tab)
              .map((destination) => (
                <Article 
                  key={destination.name}
                  name={destination.name}
                  description={destination.description}
                  distance={destination.distance}
                  travel={destination.travel}
                />
              ))
          }
      </main>

    </div>
  )
}

export default Destination