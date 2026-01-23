import HairTransplantMain from '@/components/hairTransplant'
import React from 'react'

export default function FutPage() {
    return (
        <HairTransplantMain>
            <div className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25'>
                <FueMicroMotorMain title="What Is" boldTitle="FUT Hair Transplant?" description1={"FUT (Follicular Unit Transplantation)—also known as strip hair transplantation—is one of the most established hair transplant techniques. "} description2={"In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE."} imageUrl="/images/hair-transplant/body-hair.png" />
                <HowDoesItWork />
            </div>
        </HairTransplantMain>
    )
}
