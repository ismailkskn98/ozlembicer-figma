import HairTransplantMain from '@/components/hairTransplant'
import HowDoesItWorkBodyHair from '@/components/hairTransplant/bodyHair/howDoesItWorkBodyHair'
import FueMicroMotorMain from '@/components/hairTransplant/fueMicroMotor'
import React from 'react'

export default function BodyHairTransplantPage() {
    return (
        <HairTransplantMain>
            <div className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25'>
                <FueMicroMotorMain title="What Is" boldTitle="Body Hair Transplant?" description1={"Body Hair Transplantation (BHT) is an advanced hair restoration technique used when the scalp does not provide enough suitable donor hair for a standard hair transplant. In a conventional hair transplant, hair follicles are typically harvested from the back and sides of the scalp. However, some patients have a limited or depleted scalp donor area, making additional donor sources necessary."} description2={"In such cases, hair follicles can be harvested from other parts of the body—most commonly the beard and, in selected cases, the chest—and transplanted to the scalp."} imageUrl="/images/hair-transplant/body-hair.png" />
                <HowDoesItWorkBodyHair />
            </div>
        </HairTransplantMain>
    )
}
