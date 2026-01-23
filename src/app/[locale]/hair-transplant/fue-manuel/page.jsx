import HairTransplantMain from '@/components/hairTransplant'
import FueMicroMotorMain from '@/components/hairTransplant/fueMicroMotor'
import HowDoesItWork from '@/components/hairTransplant/fueMicroMotor/howDoesItWork'
import React from 'react'

export default function FueManuelPage() {
    return (
        <HairTransplantMain>
            <div className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25'>
                <FueMicroMotorMain title="What Is" boldTitle="FUE Hair Transplant?" description1={"FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss."} description2={"Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance."} imageUrl="/images/hair-transplant/fue-micro-motor.png" />
                <HowDoesItWork />
            </div>
        </HairTransplantMain>
    )
}
