import React from 'react'
import YoutubeCarousel from './youtubeCarousel'
import MotionScrollInView from '../motionScrollInView'
import Pageh3Title from '../pageh3Title'
import { useTranslations } from 'next-intl'

export default function VideosTutorials({ videos }) {
    const t = useTranslations('HomePage.videos')
    return (
        <MotionScrollInView className='flex flex-col items-center justify-center gap-5 sm:gap-7 py-10'>
            <Pageh3Title title={t('title')} />
            <YoutubeCarousel videos={videos} />
        </MotionScrollInView>
    )
}
