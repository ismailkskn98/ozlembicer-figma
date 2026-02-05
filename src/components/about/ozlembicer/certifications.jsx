import MotionScrollInView from '@/components/common/motionScrollInView';
import React from 'react'

const certificationsItems = [
  {
    title: "Certificate of Bio Cosmetics",
    location: "Istanbul, Turkey",
    date: "March 2000",
  },
  {
    title: "Enseignement International de Mesotherapie",
    location: "France",
    date: "October 2002",
  },
  {
    title: "Allergan, Excellence",
    location: "Istanbul, Turkey",
    date: "December 2002",
  },
  {
    title: "5th Dermatology and Dermatopathology in Anatolia",
    location: "Istanbul, Turkey",
    date: "September 2003",
  },
  {
    title: "Flavius, FUE and Single Strip Technique",
    location: "Istanbul, Turkey",
    date: "June 2004",
  },
  {
    title: "1st Medical Aesthetic, Mesotherapy",
    location: "Antalya, Turkey",
    date: "December 2004",
  },
  {
    title: "Botox and Natural Look Seminar",
    location: "Sao Paulo, Brazil",
    date: "March 2005",
  },
  {
    title: "Allergan Medical Aesthetics Academy – Master Academy for Excellence",
    location: "",
    date: "May 2010",
  },
  {
    title: "Fotona Medical Technology Trainer Workshop",
    location: "",
    date: "September 2011",
  },
  {
    title: "Regional Theoretical–Practical Sessions (Bio Revitalization to Contour Correction)",
    location: "Istanbul, Turkey",
    date: "October 2011",
  },
  {
    title: "Hipokrat, Genesis Diagnostics Completion",
    location: "Istanbul, Turkey",
    date: "December 2011",
  },
  {
    title: "Mezoklinik, Promitalia",
    location: "Istanbul, Turkey",
    date: "May 2012",
  },
  {
    title: "Seltek, Facial Redensity I and Mesotherapy Applications",
    location: "Istanbul, Turkey",
    date: "September 2012",
  },
  {
    title: "Regional Bio-Revolumetry in Medical Aesthetic Medicine",
    location: "Istanbul",
    date: "December 2012",
  },
  {
    title: "Allergan Medical Institute – Putting the Codes into Practice",
    location: "",
    date: "June 2015",
  },
  {
    title: "Mezoklinik, Perfectha and Ellanse Training",
    location: "Istanbul, Turkey",
    date: "September 2015",
  },
  {
    title: "Mester, Medical Aesthetic Face Cadaver",
    location: "Edirne, Turkey",
    date: "May 2016",
  },
  {
    title: "TC Health Ministry Mesotherapy Applications",
    location: "Ankara, Turkey",
    date: "April 2016",
  },
  {
    title: "Mester, Medical Aesthetic Complication Management",
    location: "Cyprus",
    date: "January 2017",
  },
  {
    title: "TC Health Ministry Ozon Applications",
    location: "Ankara, Turkey",
    date: "April 2017",
  },
  {
    title: "15th Aesthetic and Anti-Aging Medicines, AMWC",
    location: "Monaco",
    date: "April 2017",
  },
  {
    title: "AAAM, Aesthetic Medicine",
    location: "Pennsylvania, USA",
    date: "August 2017",
  },
  {
    title: "TED1 Teoxane Expert Day",
    location: "Istanbul",
    date: "September 2017",
  },
  {
    title: "21st World Congress of Aesthetic Medicine",
    location: "Istanbul, Turkey",
    date: "October 2017",
  },
  {
    title: "Mezoklinik, Sterile Separation PRP",
    location: "Istanbul, Turkey",
    date: "2017",
  },
  {
    title: "2nd National Medical Aesthetic Congress",
    location: "",
    date: "January 2018",
  },
  {
    title: "TED3 Teoxane Expert Days, Middle East",
    location: "Dubai",
    date: "March 2018",
  },
  {
    title: "Mester, Medical Aesthetic Complication Management",
    location: "Ankara, Turkey",
    date: "May 2018",
  },
  {
    title: "TTB Expertise in Medicine",
    location: "",
    date: "September 2018",
  },
  {
    title: "Mester, Hair Restoration Methods",
    location: "Antalya, Turkey",
    date: "December 2018",
  },
  {
    title: "Mezoklinik Ellanse Theoretical and Practical Filler",
    location: "Istanbul",
    date: "March 2019",
  },
  {
    title: "Bio Revolumetria Master Course",
    location: "Istanbul, Turkey",
    date: "April 2019",
  },
  {
    title: "National Mesotherapy Community",
    location: "",
    date: "March 2020",
  },
  {
    title: "Annual FUE Europe Hands-On Course",
    location: "Ankara, Turkey",
    date: "September 2020",
  },
  {
    title: "ISHR, 28th World Congress",
    location: "Online",
    date: "October 2020",
  },
  {
    title: "Global Hair Loss Summit – Speaker",
    location: "Online",
    date: "2020",
  },
  {
    title: "Annual FUE Europe Meeting",
    location: "",
    date: "September 2021",
  },
  {
    title: "Mester, International Medical Aesthetic Symposium",
    location: "Antalya, Turkey",
    date: "October 2021",
  },
  {
    title: "ISHR, 29th World Congress",
    location: "Lisbon",
    date: "October 2021",
  },
  {
    title: "Global Hair Loss Summit – Speaker",
    location: "Online",
    date: "2021",
  },
  {
    title: "USHRS Congress",
    location: "Ukraine (Online)",
    date: "February 2022",
  },
  {
    title: "Los Angeles Hair Restoration Course",
    location: "Los Angeles, USA",
    date: "March 2022",
  },
];


export default function Certifications() {
  return (
    <section className='fluid gridContainer gap-y-6 w-full py-16 lg:py-25'>
      <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto rounded-[10px]">
        <article className='w-full max-w-full xl:max-w-6xl mx-auto rounded-[10px] h-20 bg-coffee-dark flex items-center justify-center text-ivory-soft px-4 text-center'>
          <h2 className='text-[20px] sm:text-[32px]'>Other Education & Training Programs</h2>
        </article>
      </MotionScrollInView>
      <MotionScrollInView className='w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 gap-y-4 lg:gap-y-6 text-sm sm:text-[14px] text-coffee-dark'>
        {certificationsItems.map((item, index) => (
          <article key={index} className='w-full grid grid-cols-4 lg:grid-cols-5 gap-x-5 border lg:border-0 border-coffee-dark px-4 lg:px-0 py-2 lg:py-0 rounded-sm'>
            <p className='col-span-3 lg:col-span-4'>{item.title}, {item.location}</p>
            <p className='col-span-1 lg:col-span-1'>{item.date}</p>
          </article>
        ))}
      </MotionScrollInView>
    </section>
  )
}
