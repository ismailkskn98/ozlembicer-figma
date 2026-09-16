import React from 'react';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
// import GalleryHero from './galleryHero'; // Hero – hazır, henüz kullanılmıyor
// import HeroLogoCarousel from '@/components/common/logoCarousel'; // Logo carousel – hazır, henüz kullanılmıyor
import VideoGallerySection from './videoGallerySection';
import HowToAppointment from '@/components/common/howToAppointment';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/gallery#informative-videos"
   },
   {
      "href": "/gallery#patient-reviews"
   },
   {
      "href": "/gallery#interviews"
   }
];

// ─── Video Data ───────────────────────────────────────────────────────────────
// Her video için: { videoId: 'YOUTUBE_ID', title: 'Başlık' }
// thumbnail isteğe bağlı; verilmezse YouTube'dan otomatik alınır

const informativeVideosConfig = [
   {
      "videoId": "7W5NbnGj1Kk"
   }
];

const patientReviewVideosConfig = [
   {
      "videoId": "jex7fml6vk4"
   },
   {
      "videoId": "s2CCNSOGiNs"
   },
   {
      "videoId": "HYrl6Nrhr8o"
   },
   {
      "videoId": "hjLIRke806s"
   },
   {
      "videoId": "HFb9qo_x8B8"
   },
   {
      "videoId": "eQoOm8QJHJ4"
   },
   {
      "videoId": "RcjaAvfbTao"
   },
   {
      "videoId": "RE5fwBTyf3o"
   },
   {
      "videoId": "TxJprd8-fGw"
   },
   {
      "videoId": "bpcIgjqSuSo"
   },
   {
      "videoId": "5EkjXK5rr4o"
   },
   {
      "videoId": "c2fG_l053KQ"
   },
   {
      "videoId": "_BVbowfjfng"
   },
   {
      "videoId": "LJxYAQZlosc"
   },
   {
      "videoId": "CfAbvOSWmu0"
   },
   {
      "videoId": "mDYd8785-4U"
   },
   {
      "videoId": "r1xjdb79XgU"
   },
   {
      "videoId": "Te4mZp35DI4"
   },
   {
      "videoId": "xZoQAuUvNBg"
   }
];

const interviewVideosConfig = [
   {
      "videoId": "mFw-JO60E5Q"
   },
   {
      "videoId": "cuofVq0bqNQ"
   },
   {
      "videoId": "NXlBPho9wsc"
   },
   {
      "videoId": "y_pSSZ0IHUc"
   },
   {
      "videoId": "JvnZG2mp4O0"
   },
   {
      "videoId": "SttInH-uu1s"
   }
];
// ─────────────────────────────────────────────────────────────────────────────

export default function VideoGalleryMain() {
   const t = useTranslations('Content.gallery.videoGallery');
   const informativeVideosTitles = t.raw('informativeVideos');
   const informativeVideos = informativeVideosConfig.map((item, index) => ({ ...item, title: informativeVideosTitles[index] }));
   const patientReviewVideosTitles = t.raw('patientReviewVideos');
   const patientReviewVideos = patientReviewVideosConfig.map((item, index) => ({ ...item, title: patientReviewVideosTitles[index] }));
   const interviewVideosTitles = t.raw('interviewVideos');
   const interviewVideos = interviewVideosConfig.map((item, index) => ({ ...item, title: interviewVideosTitles[index] }));
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <>
         <CustomBreadCrumb links={linksItems} isButton={true} />
         {/* <GalleryHero /> */}
         {/* <HeroLogoCarousel /> */}
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige">
            <VideoGallerySection id="informative-videos" title={t('title1')} videos={informativeVideos} iconSrc="/images/gallery/Informative-Videos.svg" />
            <VideoGallerySection id="patient-reviews" title={t('title2')} videos={patientReviewVideos} iconSrc="/images/gallery/Patient-Reviews.svg" />
            <VideoGallerySection id="interviews" title={t('title3')} videos={interviewVideos} iconSrc="/images/gallery/Interviews-with-Dr-Bicer.svg" />
            <HowToAppointment className="pt-0 pb-15" />
         </main>
      </>
   );
}
