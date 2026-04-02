import React from 'react';

export default function DoctorProfile() {
   return (
      <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-10 sm:gap-12.5 pt-12.5 pb-16 sm:pb-25">
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">Medical Philosophy</h2>
            <p className="leading-relaxed">
               Throughout her medical career, patient care has always been Dr. Biçer’s highest priority. She believes
               that ethical practice, professional responsibility, and continuous education are essential to achieving
               successful and sustainable outcomes.
            </p>
            <p className="leading-relaxed">
               According to her philosophy, hair surgery is not only science, art, technology, or numbers. Hair
               restoration is more than a surgical procedure—it has a direct impact on a patient’s emotions, confidence,
               and quality of life. For this reason, each patient’s expectations and emotional well-being are considered
               extremely valuable and are carefully respected throughout the treatment process.
            </p>
            <p className="leading-relaxed">
               To ensure full focus and the highest standard of care, Dr. Biçer performs only one hair transplant
               procedure per day, allowing her to dedicate her complete attention to each patient. She also considers it
               important to serve as an ethical and professional role model for younger physicians entering the field.
            </p>
            <p className="leading-relaxed">
               Her extensive experience has enabled her to develop strong clinical, surgical, and communication skills,
               covering routine medical practice, surgical procedures, and emergency situations.
            </p>
         </article>
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">Professional Experience & Academic Involvement</h2>
            <p className="leading-relaxed">
               Dr. Biçer is actively involved in the international hair restoration community. She regularly
               participates in scientific meetings and conferences worldwide, taking part as a speaker, trainer, and
               member of professional hair restoration societies. Her continuous academic involvement and professional
               experience allow her to stay at the forefront of the latest developments in hair restoration.
            </p>
            <p className="leading-relaxed">
               At Dr. Biçer’s clinic, all hair restoration techniques are personally performed by Dr. Biçer. This
               comprehensive expertise gives her the ability to objectively evaluate each case and select the most
               appropriate technique for every patient, based solely on medical needs and expected outcomes.
            </p>
            <p className="leading-relaxed">Her areas of professional focus include:</p>
            <ul className="list-disc list-inside leading-relaxed">
               <li>FUT and FUE techniques</li>
               <li>Micromotor and manual FUE</li>
               <li>Unshaven long-hair FUE</li>
               <li>Reconstructive hair transplant</li>
               <li>FUE with implanters</li>
               <li>Hair loss treatments</li>
               <li>Regenerative medicine</li>
               <li>Dermatopathology of the scalp</li>
            </ul>
            <p className="leading-relaxed">
               In addition to hair transplantation, Dr. Biçer provides individualized hair loss treatments, including
               PRP, mesotherapy, and regenerative medicine–based therapies, tailored to each patient’s clinical needs.
            </p>
         </article>
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">Teamwork, & Personal Values</h2>
            <p className="leading-relaxed">
               Dr. Biçer values multidisciplinary collaboration and actively contributes to patient care whenever
               necessary. She describes herself as solution-oriented, disciplined, motivated, and committed to working
               alongside colleagues for the benefit of patients and society. Sharing experience, mentoring team members,
               and motivating colleagues toward shared goals are central to her professional approach.
            </p>
            <p className="leading-relaxed">
               She performs surgical procedures together with a licensed medical team with 28 years of experience, a
               factor that clearly contributes to positive and consistent treatment results.
            </p>
            <p className="leading-relaxed">
               Dr. Biçer speaks English fluently. She is also the author of a poetry book, with all proceeds donated to
               support the education of orphaned children. She has been married for 30 years and is the mother of a son.
            </p>
         </article>
      </section>
   );
}
