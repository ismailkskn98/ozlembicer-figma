import PricingMain from '@/components/about/pricing'
import VideosTutorials from '@/components/common/videosTutorials'
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


export default async function PricingPage() {
    const videos = await getYoutubeVideos();
    return (
        <PricingMain>
            <VideosTutorials videos={videos} />
        </PricingMain>
    )
}
