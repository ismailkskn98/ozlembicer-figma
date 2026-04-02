'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Image from 'next/image';

const photos = [
   {
      src: '/images/about/clinic-gallery/item-1.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-2.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-3.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-4.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-5.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-6.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-7.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-8.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-9.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-10.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-11.png',
      width: 146,
      height: 146,
   },
   {
      src: '/images/about/clinic-gallery/item-12.png',
      width: 146,
      height: 146,
   },
];

function renderNextImage({ alt = '', title }, { photo }) {
   return <Image src={photo} alt={alt} title={title} width={146} height={146} />;
}

export default function ClinicGallery() {
   const [index, setIndex] = useState(-1);
   return (
      <div className="w-full flex-1 flex">
         <div className="flex-1 flex items-stretch flex-wrap gap-2 sm:gap-4">
            {photos.map((photo, i) => (
               <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="relative grow basis-30 sm:basis-43 lg:basis-30 xl:basis-36.5 shrink w-full aspect-square overflow-hidden rounded-sm cursor-pointer"
               >
                  <Image
                     src={photo.src}
                     alt={`clinic gallery ${i + 1}`}
                     fill
                     className="object-cover hover:scale-105 transition-transform duration-300"
                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
               </button>
            ))}
         </div>
         <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={photos}
            plugins={[Zoom, Fullscreen, Thumbnails]}
            zoom={{
               maxZoomPixelRatio: 3,
               zoomInMultiplier: 1.5,
               doubleTapDelay: 300,
               doubleClickDelay: 300,
            }}
            thumbnails={{
               position: 'bottom',
               width: 100,
               height: 70,
               border: 2,
               borderRadius: 4,
               gap: 8,
            }}
         />
      </div>
   );
}
