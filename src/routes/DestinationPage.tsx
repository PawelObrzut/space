import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Destination from '../components/Destination';
import data from '../data.json';
import TabButton from '../components/TabButton';

import Moon from '@destination/image-moon.png';
import Moon_webp from '@destination/image-moon.webp';
import Mars from '@destination/image-mars.png';
import Mars_webp from '@destination/image-mars.webp';
import Europa from '@destination/image-europa.png';
import Europa_webp from '@destination/image-europa.webp';
import Titan from '@destination/image-titan.png';
import Titan_webp from '@destination/image-titan.webp';
import Picture from '../components/Picture';

interface Destination {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

interface ImageSources {
  webp: string;
  png: string;
}

const tabs = ['Moon', 'Mars', 'Europa', 'Titan'];
type TabName = typeof tabs[number];

const imageMap: Record<TabName, ImageSources> = {
  Moon: { webp: Moon_webp, png: Moon },
  Mars: { webp: Mars_webp, png: Mars },
  Europa: { webp: Europa_webp, png: Europa },
  Titan: { webp: Titan_webp, png: Titan }
};

const DestinationPage = () => {
  const [tab, setTab] = useState<TabName>('Moon');
  const [currentDestination, setCurrentDestination] = useState<Destination | null>(null);
  const tabs = useMemo(() => ['Moon', 'Mars', 'Europa', 'Titan'], []);

  useEffect(() => {
    const handleKeyDown = (e: { keyCode: number }) => {
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

  useEffect(() => {
    const current = data.destinations.find(destination => destination.name === tab);
    if (current) {
      setCurrentDestination(current);
    }
  }, [tab]);

  return (
    <div className="destination">
      <Header />
      <main id="main" className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        {currentDestination && (
          <Picture
            webpSrc={imageMap[tab].webp}
            pngSrc={imageMap[tab].png}
            alt={currentDestination.name}
          />
        )}

        <div className="tab-list underline-indicators flex">
          {tabs.map(tabName => (
            <TabButton
              key={tabName}
              label={tabName}
              selected={tab === tabName}
              onClick={() => setTab(tabName)}
            />
          ))}
        </div>

        {currentDestination && (
          <Destination
            key={currentDestination.name}
            name={currentDestination.name}
            description={currentDestination.description}
            distance={currentDestination.distance}
            travel={currentDestination.travel}
          />
        )}
      </main>
    </div>
  );
};

export default DestinationPage;
