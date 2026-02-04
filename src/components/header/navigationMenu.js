export const navigationMenu = [
  {
    item: 'About Us',
    links: [
      { href: '/about-us/dr-ozlem-bicer', label: 'Dr. Ozlem Bicer' },
      { href: '/about-us/clinic-team', label: 'Clinic & Team' },
      { href: '/about-us/pricing', label: 'Pricing' },
    ],
  },
  { item: 'Hair Loss', href: '#' },
  {
    item: 'Transplantation',
    links: [
      {
        href: '/hair-transplant',
        label: 'Hair Transplant',
        submenu: [
          { href: '/hair-transplant#fue-micro-motor', label: 'FUE (Micro Motor)' },
          { href: '/hair-transplant#fue-manuel', label: 'FUE (Manuel)' },
          { href: '/hair-transplant#body-hair-transplant', label: 'BHT (Body Hair)' },
          { href: '/hair-transplant#reconstructive-hair-transplant', label: 'Reconstructive' },
          { href: '/hair-transplant#long-hair', label: 'Long Hair (Unshaven)' },
          { href: '/hair-transplant#fut', label: 'FUT' },
        ],
      },
      { href: '/beard-transplantation', label: 'Beard Transplantation' },
      { href: '/eyebrown-transplant', label: 'Eyebrow Transplant' },
    ],
  },
  { item: 'Guides', links: [] },
  { item: 'Gallery', links: [] },
  { item: 'Contact Us', href: '/contact-us' },
];
