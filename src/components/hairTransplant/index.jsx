import React from 'react'
import HairTransplantHero from './hairTransplantHero'
import CustomBreadCrumb from '../common/customBreadCrumb'
import HeroLogoCarousel from '../common/logoCarousel'
import FueMicroMotorMain from './fueMicroMotor'
import HowDoesItWork from './fueMicroMotor/howDoesItWork'
import HowDoesItWorkBodyHair from './bodyHair/howDoesItWorkBodyHair'
import HowDoesItWorkRecon from './reconstructive/howDoesItWorkRecon'
import Image from 'next/image'

const linksItems = [
    { label: 'FUE (Micro Motor)', href: '/hair-transplant#fue-micro-motor' },
    { label: 'FUE (Manuel)', href: '/hair-transplant#fue-manuel' },
    { label: 'BHT (Body Hair Transplant)', href: '/hair-transplant#body-hair-transplant' },
    { label: 'Reconstructive Hair Transplant', href: '/hair-transplant#reconstructive-hair-transplant' },
    { label: 'Long Hair (Unshaven)', href: '/hair-transplant#long-hair' },
    { label: 'FUT', href: '/hair-transplant#fut' },
]

export default function HairTransplantMain() {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <HairTransplantHero />
            <HeroLogoCarousel />
            <main className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                {/* fue-micro-motor */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='fue-micro-motor' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[64px]'>
                                    FUE <span className='text-[32px]'>(Micro Motor)</span>
                                </h2>
                                <Image src="/images/hair-transplant/fue-micro-motor.svg" alt="fue-micro-motor" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="FUE Hair Transplant?" description1={"FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss."} description2={"Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance."} imageUrl="/images/hair-transplant/fue-micro-motor.png" />
                        <HowDoesItWork />
                    </main>
                </section>
                {/* fue-manuel */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='fue-manuel' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[64px]'>
                                    FUE <span className='text-[32px]'>(Manual)</span>
                                </h2>
                                <Image src="/images/hair-transplant/fue-manuel.svg" alt="fue-manuel" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="FUE Hair Transplant?" description1={"FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss."} description2={"Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance."} imageUrl="/images/hair-transplant/fue-micro-motor.png" />
                        <HowDoesItWork />
                    </main>
                </section>
                {/* body-hair */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='body-hair-transplant' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[64px]'>
                                    BHT <span className='text-[32px]'>(Body Hair Transplant)</span>
                                </h2>
                                <Image src="/images/hair-transplant/body-hair.svg" alt="body-hair" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="Body Hair Transplant?" description1={"Body Hair Transplantation (BHT) is an advanced hair restoration technique used when the scalp does not provide enough suitable donor hair for a standard hair transplant. In a conventional hair transplant, hair follicles are typically harvested from the back and sides of the scalp. However, some patients have a limited or depleted scalp donor area, making additional donor sources necessary."} description2={"In such cases, hair follicles can be harvested from other parts of the body—most commonly the beard and, in selected cases, the chest—and transplanted to the scalp."} imageUrl="/images/hair-transplant/body-hair.png" />
                        <HowDoesItWorkBodyHair />
                    </main>
                </section>
                {/* reconstructive */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='reconstructive-hair-transplant' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[56px]'>
                                    Reconstructive Hair Transplantation
                                </h2>
                                <Image src="/images/hair-transplant/reconstructive.svg" alt="reconstructive" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="Reconstructive Hair Transplantation?" description1={"Reconstructive hair transplantation is a specialized field of hair restoration focused on correcting hair loss or aesthetic problems caused by previous hair transplant procedures, trauma, burns, scars, medical conditions, or congenital factors."} description2={"Unlike standard cosmetic hair transplantation, reconstructive procedures require advanced planning, surgical precision, and artistic judgment to restore a natural appearance while respecting facial proportions and existing hair characteristics."} imageUrl="/images/hair-transplant/reconstructive.png" />
                        <HowDoesItWorkRecon />
                    </main>
                </section>
                {/* long hair */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='long-hair' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[64px]'>
                                    Long Hair <span className='text-[32px]'>(Unshaven)</span>
                                </h2>
                                <Image src="/images/hair-transplant/long-hair.svg" alt="long-hair" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="Long Hair Transplant?" description1={"Long Hair known as strip hair transplantation—is one of the most established hair transplant techniques. "} description2={"In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE."} imageUrl="/images/hair-transplant/reconstructive.png" />
                        <HowDoesItWork />
                    </main>
                </section>
                {/* fut */}
                <section className='w-full fluid gridContainer'>
                    <header className='w-full fluid gridContainer'>
                        <main id='fut' className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                            <section className='w-full max-w-288.25 mx-auto flex items-center justify-between'>
                                <h2 className='flex items-center gap-6 text-[64px]'>
                                    FUT <span className='text-[32px]'>(Follicular Unit Transplantation)</span>
                                </h2>
                                <Image src="/images/hair-transplant/fut.svg" alt="fut" width={120} height={120} className="object-contain w-22.5 h-22.5" />
                            </section>
                        </main>
                        <CustomBreadCrumb links={linksItems} />
                    </header>
                    <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                        <FueMicroMotorMain title="What Is" boldTitle="FUT Hair Transplant?" description1={"FUT (Follicular Unit Transplantation)—also known as strip hair transplantation—is one of the most established hair transplant techniques. "} description2={"In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE."} imageUrl="/images/hair-transplant/body-hair.png" />
                        <HowDoesItWork />
                    </main>
                </section>
            </main>
        </>
    )
}
