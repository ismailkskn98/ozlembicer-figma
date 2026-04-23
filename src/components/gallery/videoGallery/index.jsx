import React from 'react';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
// import GalleryHero from './galleryHero'; // Hero – hazır, henüz kullanılmıyor
// import HeroLogoCarousel from '@/components/common/logoCarousel'; // Logo carousel – hazır, henüz kullanılmıyor
import VideoGallerySection from './videoGallerySection';
import HowToAppointment from '@/components/common/howToAppointment';

const linksItems = [
   { label: 'Informative Videos', href: '/gallery#informative-videos' },
   { label: 'Patient Reviews', href: '/gallery#patient-reviews' },
   { label: 'Interviews with Dr. Bicer', href: '/gallery#interviews' },
];

// ─── Video Data ───────────────────────────────────────────────────────────────
// Her video için: { videoId: 'YOUTUBE_ID', title: 'Başlık' }
// thumbnail isteğe bağlı; verilmezse YouTube'dan otomatik alınır

const informativeVideos = [
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Video Başlığı' },
];

const patientReviewVideos = [
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Hasta Adı / Yorum Başlığı' },
];

const interviewVideos = [
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
   { videoId: 'ruQQ42ZlJVc', title: 'Röportaj Başlığı' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function VideoGalleryMain() {
   return (
      <>
         <CustomBreadCrumb links={linksItems} isButton={true} />
         {/* <GalleryHero /> */}
         {/* <HeroLogoCarousel /> */}
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige">
            <VideoGallerySection id="informative-videos" title="Informative Videos" videos={informativeVideos} />
            <VideoGallerySection id="patient-reviews" title="Patient Reviews" videos={patientReviewVideos} />
            <VideoGallerySection id="interviews" title="Interviews with Dr. Bicer" videos={interviewVideos} />
            <HowToAppointment />
         </main>
      </>
   );
}
