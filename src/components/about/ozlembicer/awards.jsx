import MotionScrollInView from '@/components/common/motionScrollInView'
import React from 'react'

export default function Awards() {
    return (
        <MotionScrollInView className='w-full max-w-289.5 mx-auto rounded-[10px] bg-radial from-coffee-dark to-wine-brown py-5'>
            <main className='flex flex-col items-center justify-center gap-5'>
                <h2 className='text-[32px] bg-linear-to-t from-gold to-ivory-soft text-transparent bg-clip-text'>Awards</h2>
                <article className='flex flex-col items-center text-ivory-soft text-[14px] gap-5'>
                    <p>FUE Europe Annual Fue Hands-on Ankara, 2020</p>
                    <p>Masters of Beauty, 2021</p>
                    <p>2nd International Medical Aesthetic Congress</p>
                    <p>Dr. Ufuk Alatekin Academy “Those who add value to beauty” 2021</p>
                    <p>Medical Aesthetic Symposium</p>
                    <p>Mezoder, Mesotherapy Congress</p>
                    <p>Los Angles Hair Restoration Courses, Live Surgery Workshop</p>
                </article>
            </main>
        </MotionScrollInView>
    )
}
