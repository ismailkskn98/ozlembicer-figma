import Image from 'next/image'
import React from 'react'

export default function NorwoodScale() {
  return (
    <main className='w-full max-w-6xl mx-auto rounded-4xl bg-coffee-dark flex flex-col lg:flex-row items-start lg:items-center p-10 text-ivory-soft gap-6 sm:gap-10'>
      <section className='flex-1 flex flex-col items-start'>
        <article className='flex flex-col items-start'>
          <h3 className='text-[54px] xl:text-[64px]'>Norwood Scale</h3>
          <p className='text-base xl:text-[20px] font-bold'>Measuring Male Pattern Baldness</p>
        </article>
        <Image src="/images/male-hair-table.png" alt="male hair table" width={600} height={800} className='col-span-1 sm:col-span-2 object-contain object-center w-fit h-full max-h-90 sm:max-h-100 lg:max-h-133 mt-6 rounded-3xl' />
      </section>

      <section className='flex-1 flex flex-col items-start'>
        <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
          <h4 className='font-bold text-base xl:text-[20px] flex flex-col items-start'>
            {["What Is", "Norwood Scale?"].map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </h4>
          <p className='w-full max-w-190 text-sm xl:text-base'>The Norwood Scale is the most widely used tool to evaluate and classify male pattern baldness, also known as androgenetic alopecia. It helps both doctors and patients understand the severity and progression of hair loss in men.</p>
          <p className='w-full max-w-190 text-sm xl:text-base'>Previously referred to as the Hamilton–Norwood Scale, it is now commonly known simply as the Norwood Scale.</p>
        </article>
        <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
          <h4 className='font-bold text-base xl:text-[20px] flex flex-col items-start'>
            {["Who Developed", "The Norwood Scale?"].map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </h4>
          <p className='w-full max-w-190 text-sm xl:text-base'>The classification system was originally introduced by Dr. James Hamilton in the 1950s. It was later refined and expanded by Dr. O’Tar Norwood in the 1970s, who adapted the scale specifically for the assessment of male pattern hair loss.</p>
          <p className='w-full max-w-190 text-sm xl:text-base'>Today, it remains the standard reference for diagnosing the stage of androgenetic alopecia.</p>
        </article>
        <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
          <h4 className='font-bold text-base xl:text-[20px] flex flex-col items-start'>
            {["How Is The", "Norwood Scale Used?"].map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </h4>
          <p className='w-full max-w-190 text-sm xl:text-base'>The Norwood Scale is used to determine how advanced a patient’s hair loss is. It provides a visual and clinical reference, allowing both the physician and the patient to compare the hairline and crown with standardized stages.</p>
          <p className='w-full max-w-190 text-sm xl:text-base'>The scale classifies hair loss into seven main stages (Type I to Type VII), ranging from:</p>
          <ul className='list-disc list-outside pl-5 text-sm xl:text-base'>
            <li>Minimal or no hair loss to severe hair loss affecting the entire top of the scalp</li>
          </ul>
          <p className='w-full max-w-190 text-sm xl:text-base'>A mirror or professional evaluation is recommended to accurately compare your hair to the scale.</p>
        </article>
      </section>
    </main>
  )
}
