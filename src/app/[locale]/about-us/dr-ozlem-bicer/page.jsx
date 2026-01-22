import OzlemBicerMain from '@/components/about/ozlembicer'
import VideosTutorials from '@/components/common/videosTutorials';
import React from 'react'

const getYoutubeVideos = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/youtube`, {
            cache: "force-cache",
            next: { revalidate: 86400 },
        });

        if (!res.ok) {
            console.error("yotube video isteği başarısız", res.status);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("yotube video isteği başarısız error:", error);
        return [];
    }
};

export default async function DrOzlemBicerPage() {
    const videos = await getYoutubeVideos();

    return (
        <OzlemBicerMain>
            <VideosTutorials videos={videos} />
        </OzlemBicerMain>
    )
}
