"use client";

import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
    {
        src: "/images/about/clinic-gallery/item-1.png",
        width: 146,
        height: 146,
    },
    {
        src: "/images/about/clinic-gallery/item-2.png",
        width: 146,
        height: 146,
    },
    {
        src: "/images/about/clinic-gallery/item-3.png",
        width: 146,
        height: 146,
    },
];

export default function ClinicGallery() {
    const [index, setIndex] = useState(-1);
    return (
        <div className="w-full">
            <RowsPhotoAlbum photos={photos} onClick={({ index }) => setIndex(index)} />
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
                    position: "bottom",
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
