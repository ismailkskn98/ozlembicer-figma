import React from 'react'
import YoutubeCarousel from './youtubeCarousel'
import MotionScrollInView from '../motionScrollInView'
import Pageh3Title from '../pageh3Title'

export default function VideosTutorials({ videos }) {
    return (
        <MotionScrollInView className='flex flex-col items-center justify-center gap-5 sm:gap-7 py-10'>
            <Pageh3Title title="Videos & Tutorials" />
            <YoutubeCarousel videos={videos} />
        </MotionScrollInView>
    )
}
