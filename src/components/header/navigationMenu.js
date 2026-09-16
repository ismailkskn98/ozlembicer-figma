export function getNavigationMenu(t) {
  return [
   {
      item: t('about'),
      href: '/about-us/dr-ozlem-bicer',
      links: [
         { href: '/about-us/dr-ozlem-bicer', label: t('doctor') },
         { href: '/about-us/clinic-team', label: t('clinicTeam') },
         { href: '/about-us/pricing', label: t('pricing') },
      ],
   },
   {
      item: t('hairLoss'),
      links: [
         {
            href: '#',
            label: t('causes'),
            submenu: [
               { href: '/hair-loss/couses-of-hair-loss/male-hair-loss', label: t('maleHairLoss') },
               { href: '/hair-loss/couses-of-hair-loss/female-hair-loss', label: t('femaleHairLoss') },
            ],
         },
         {
            href: '#',
            label: t('treatments'),
            submenu: [
               { href: '/hair-loss/treatments-of-hair-loss/hair-mesotherapy', label: t('hairMesotherapy') },
               { href: '/hair-loss/treatments-of-hair-loss/prp-hair-treatment', label: t('prp') },
               { href: '/hair-loss/treatments-of-hair-loss/stamp-cell-treatment', label: t('stampCell') },
               { href: '/hair-loss/treatments-of-hair-loss/trichopat-treatment', label: t('trichopat') },
            ],
         },
      ],
   },
   {
      item: t('transplantation'),
      links: [
         {
            href: '/hair-transplant',
            label: t('hairTransplant'),
            submenu: [
               { href: '/hair-transplant#fue-micro-motor', label: t('fueMicroMotor') },
               { href: '/hair-transplant#fue-manuel', label: t('fueManual') },
               { href: '/hair-transplant#body-hair-transplant', label: t('bodyHair') },
               { href: '/hair-transplant#reconstructive-hair-transplant', label: t('reconstructive') },
               { href: '/hair-transplant#long-hair', label: t('longHair') },
               { href: '/hair-transplant#fut', label: t('fut') },
            ],
         },
         { href: '/hair-wash', label: t('hairWash') },
         { href: '/beard-transplantation', label: t('beard') },
         { href: '/eyebrown-transplant', label: t('eyebrow') },
      ],
   },
   // {
   //   item: 'Guides',
   //   links: [
   //     { href: '/guides/before-hair-transplantation', label: 'Guide - Before Hair Transp.' },
   //     { href: '/guides/after-hair-transplantation', label: 'Guide - After Hair Transp.' },
   //     { href: '#', label: 'Technology & Hair Transp.' },
   //     { href: '#', label: 'Complications of Hair Surgery' },
   //     { href: '#', label: 'Frequently Asked Questions' },
   //   ],
   // },
   {
      item: t('gallery'),
      links: [
         { href: '/gallery/before-after-images', label: t('beforeAfter') },
         {
            href: '/gallery',
            label: t('videoGallery'),
            submenu: [
               { href: '/gallery#informative-videos', label: t('informativeVideos') },
               { href: '/gallery#patient-reviews', label: t('patientReviews') },
               { href: '/gallery#interviews', label: t('interviews') },
            ],
         },
      ],
   },
   // { item: 'Contact Us', href: '/contact-us' },
  ];
}
