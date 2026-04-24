import React from 'react';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
// import GalleryHero from './galleryHero'; // Hero – hazır, henüz kullanılmıyor
// import HeroLogoCarousel from '@/components/common/logoCarousel'; // Logo carousel – hazır, henüz kullanılmıyor
import VideoGallerySection from './videoGallerySection';
import HowToAppointment from '@/components/common/howToAppointment';

const linksItems = [
   // { label: 'Informative Videos', href: '/gallery#informative-videos' },
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
   { videoId: 'jex7fml6vk4', title: 'Patient Review - 001' },
   { videoId: 's2CCNSOGiNs', title: 'Patient Review - 002' },
   { videoId: 'HYrl6Nrhr8o', title: 'Patient Review - 003' },
   { videoId: 'hjLIRke806s', title: 'Patient Review - 004' },
   { videoId: 'HFb9qo_x8B8', title: 'Patient Review - 005' },
   { videoId: 'eQoOm8QJHJ4', title: 'Patient Review - 006' },
   { videoId: 'RcjaAvfbTao', title: 'Patient Review - 007' },
   { videoId: 'RE5fwBTyf3o', title: 'Patient Review - 008' },
   { videoId: 'TxJprd8-fGw', title: 'Patient Review - 009' },
   { videoId: 'bpcIgjqSuSo', title: 'Patient Review - 010' },
   { videoId: '5EkjXK5rr4o', title: 'Patient Review - 011' },
   { videoId: 'c2fG_l053KQ', title: 'Patient Review - 012' },
   { videoId: '_BVbowfjfng', title: 'Patient Review - 013' },
   { videoId: 'LJxYAQZlosc', title: 'Patient Review - 014' },
   { videoId: 'CfAbvOSWmu0', title: 'Patient Review - 015' },
   { videoId: 'mDYd8785-4U', title: 'Patient Review - 016' },
   { videoId: 'r1xjdb79XgU', title: 'Patient Review - 017' },
   { videoId: 'Te4mZp35DI4', title: 'Patient Review - 018' },
   { videoId: 'xZoQAuUvNBg', title: 'Patient Review - 035' },
];

const interviewVideos = [
   { videoId: 'mFw-JO60E5Q', title: 'I want to talk about the successful hair restaration.' },
   { videoId: 'cuofVq0bqNQ', title: 'Dr Özlem Biçer an experienced hair transplant surgeon in Istanbul' },
   { videoId: 'NXlBPho9wsc', title: 'The Bald Truth: Get Your Questions Answered About Hair Loss & Hair Transplants' },
   { videoId: 'y_pSSZ0IHUc', title: 'Interview with Hair Transplant Network' },
   { videoId: 'JvnZG2mp4O0', title: 'Balld and Truth Patient Review' },
   { videoId: 'SttInH-uu1s', title: 'Bellicapelli Forum' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function VideoGalleryMain() {
   return (
      <>
         <CustomBreadCrumb links={linksItems} isButton={true} />
         {/* <GalleryHero /> */}
         {/* <HeroLogoCarousel /> */}
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige">
            {/* <VideoGallerySection id="informative-videos" title="Informative Videos" videos={informativeVideos} iconSrc="/images/gallery/Informative-Videos.svg" /> */}
            <VideoGallerySection id="patient-reviews" title="Patient Reviews" videos={patientReviewVideos} iconSrc="/images/gallery/Patient-Reviews.svg" />
            <VideoGallerySection id="interviews" title="Interviews with Dr. Bicer" videos={interviewVideos} iconSrc="/images/gallery/Interviews-with-Dr-Bicer.svg" />
            <HowToAppointment className="pt-0 pb-15" />
         </main>
      </>
   );
}
