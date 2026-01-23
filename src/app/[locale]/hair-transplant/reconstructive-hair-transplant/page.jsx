import HairTransplantMain from '@/components/hairTransplant'
import HowDoesItWorkBodyHair from '@/components/hairTransplant/bodyHair/howDoesItWorkBodyHair'
import FueMicroMotorMain from '@/components/hairTransplant/fueMicroMotor'
import HowDoesItWorkRecon from '@/components/hairTransplant/reconstructive/howDoesItWorkRecon'
import React from 'react'

export default function ReconstructiveHairTransplantPage() {
    return (
        <HairTransplantMain>
            <div className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25'>
                <FueMicroMotorMain title="What Is" boldTitle="Reconstructive Hair Transplantation?" description1={"Reconstructive hair transplantation is a specialized field of hair restoration focused on correcting hair loss or aesthetic problems caused by previous hair transplant procedures, trauma, burns, scars, medical conditions, or congenital factors."} description2={"Unlike standard cosmetic hair transplantation, reconstructive procedures require advanced planning, surgical precision, and artistic judgment to restore a natural appearance while respecting facial proportions and existing hair characteristics."} imageUrl="/images/hair-transplant/reconstructive.png" />
                <HowDoesItWorkRecon />
            </div>
        </HairTransplantMain>
    )
}
