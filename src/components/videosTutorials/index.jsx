import React from 'react'
import YoutubeCarousel from './youtubeCarousel'

export default function VideosTutorials({ videos }) {
    return (
        <section className='flex flex-col items-center justify-center gap-7 my-10'>
            <h2 className='text-[20px] font-bold text-coffee-dark'>Videos & Tutorials</h2>
            <YoutubeCarousel videos={videos} />
        </section>
    )
}
