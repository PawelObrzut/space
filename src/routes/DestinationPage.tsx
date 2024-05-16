import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Destination from '../components/Destination';
import data from '../data.json';
import TabButton from '../components/TabButton';
import Picture from '../components/Picture';
import Moon from './../assets/destination/image-moon.png';
import Moon_webp from './../assets/destination/image-moon.webp';
import Mars from './../assets/destination/image-mars.png';
import Mars_webp from './../assets/destination/image-mars.webp';
import Europa from './../assets/destination/image-europa.png';
import Europa_webp from './../assets/destination/image-europa.webp';
import Titan from './../assets/destination/image-titan.png';
import Titan_webp from './../assets/destination/image-titan.webp';

const DestinationPage = () => {
  const [tab, setTab] = useState('Moon');
  const tabs = useMemo(() => ['Moon', 'Mars', 'Europa', 'Titan'], []);
  
  useEffect(() => {
    const handleKeyDown = (e: { keyCode: number; }) => {
      const keydownLeft = 37;
      const keydownRight = 39;

      if (e.keyCode === keydownRight) {
        const currentIndex = tabs.indexOf(tab);
        const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        setTab(tabs[nextIndex]);
      }

      if (e.keyCode === keydownLeft) {
        const currentIndex = tabs.indexOf(tab);
        const nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        setTab(tabs[nextIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [tab, tabs]);


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
          {tabs.map((tabName) => (
            <TabButton
              key={tabName}
              label={tabName}
              selected={tab === tabName}
              onClick={() => setTab(tabName)}
            />
          ))}
        </div>

        {data.destinations
          .filter((destination) => destination.name === tab)
          .map((destination) => (
            <Destination
              key={destination.name}
              name={destination.name}
              description={destination.description}
              distance={destination.distance}
              travel={destination.travel}
            />
          ))}
      </main>
    </div>
  );
};

export default DestinationPage;
