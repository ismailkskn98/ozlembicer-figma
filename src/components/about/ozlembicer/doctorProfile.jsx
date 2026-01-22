import React from 'react'

export default function DoctorProfile() {
    return (
        <section className='w-full mx-auto max-w-286.5 flex flex-col items-start gap-12.5 pt-12.5 pb-25'>
            <article className='flex flex-col items-start gap-5 text-coffee-dark'>
                <h2 className='text-[32px]'>Medical Philosophy</h2>
                <p className='leading-relaxed'>Throughout her medical career, patient care has always been Dr. Biçer’s highest priority. She believes that ethical practice, professional responsibility, and continuous education are essential to achieving successful and sustainable outcomes.</p>
                <p className='leading-relaxed'>To ensure full focus and the highest standard of care, Dr. Biçer performs only one hair transplant procedure per day, allowing her to dedicate her complete attention to each patient. She also considers it important to serve as an ethical and professional role model for younger physicians entering the field.</p>
                <p className='leading-relaxed'>Her extensive experience has enabled her to develop strong clinical, surgical, and communication skills, covering routine medical practice, surgical procedures, and emergency situations.</p>
            </article>
            <article className='flex flex-col items-start gap-5 text-coffee-dark'>
                <h2 className='text-[32px]'>Professional Experience & Academic Involvement</h2>
                <p className='leading-relaxed'>Dr. Biçer is actively involved in the international hair restoration community. She regularly participates in scientific meetings and conferences worldwide, taking part as a speaker, trainer, and member of professional hair restoration societies.</p>
                <p className='leading-relaxed'>Her areas of professional focus include:</p>
                <ul className='list-disc list-inside leading-relaxed'>
                    <li>FUT and FUE techniques</li>
                    <li>Micromotor and manual FUE</li>
                    <li>Unshaven long-hair FUE</li>
                    <li>Reconstructive hair transplant</li>
                    <li>FUE with implanters</li>
                    <li>Hair loss treatments</li>
                    <li>Regenerative medicine</li>
                    <li>Dermatopathology of the scalp</li>
                </ul>
                <p className='leading-relaxed'>In addition to hair transplantation, Dr. Biçer provides individualized hair loss treatments, including PRP, mesotherapy, and regenerative medicine–based therapies, tailored to each patient’s clinical needs.</p>
            </article>
            <article className='flex flex-col items-start gap-5 text-coffee-dark'>
                <h2 className='text-[32px]'>Teamwork, Research, & Personal Values</h2>
                <p className='leading-relaxed'>Dr. Biçer values multidisciplinary collaboration and actively contributes to team-based care whenever necessary. She describes herself as solution-oriented, disciplined, motivated, and committed to working alongside colleagues for the benefit of patients and society.</p>
                <p className='leading-relaxed'>She maintains a strong academic interest in research and continuously updates her medical knowledge. Sharing experience, mentoring team members, and motivating colleagues toward shared goals are central to her professional approach.</p>
                <p className='leading-relaxed'>Dr. Biçer speaks English fluently. She is also the author of a poetry book, from which all proceeds are donated to support the education of orphaned children. She has been married for 30 years and is the mother of a son.</p>
            </article>
        </section>
    )
}
