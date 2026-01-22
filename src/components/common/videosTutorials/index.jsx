import React from 'react'
import YoutubeCarousel from './youtubeCarousel'
import MotionScrollInView from '../motionScrollInView'

export default function VideosTutorials({ videos }) {
    return (
        <MotionScrollInView className='flex flex-col items-center justify-center gap-7 my-10'>
            <h2 className='text-[20px] font-bold text-coffee-dark'>Videos & Tutorials</h2>
            <YoutubeCarousel videos={videos} />
        </MotionScrollInView>
    )
}
