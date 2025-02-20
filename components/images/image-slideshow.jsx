'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import interior2 from '@/assets/interior2.jpg';
import interior3 from '@/assets/interior3.jpg';
import interior4 from '@/assets/interior4.jpg';
import interior5 from '@/assets/interior5.jpg';
import interior6 from '@/assets/interior6.jpg';
import interior7 from '@/assets/interior7.jpg';

import classes from './image-slideshow.module.css';

const images = [
  { image: interior2, alt: 'living room, comfortable L-shaped sofa' },
  { image: interior3, alt: 'living room, vaulted-ceiling' },
  { image: interior4, alt: 'modern-living-room-textured-walls' },
  { image: interior5, alt: 'eclectic-living-room-vibrant-rug' },
  { image: interior6, alt: 'bright-airy-living-room' },
  { image: interior7, alt: 'modern-industrial-living-room' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}