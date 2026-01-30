import HomeMain from "@/components/home";


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

export default async function HomePage() {
  const videos = await getYoutubeVideos();
  return <HomeMain videos={videos} />
}
