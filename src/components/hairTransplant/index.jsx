
import React from 'react'
import HairTransplantHero from './hairTransplantHero'
import CustomBreadCrumb from '../common/customBreadCrumb'
import HeroLogoCarousel from '../common/logoCarousel'
import SectionWrapper from './common/sectionWrapper';
import HowDoesItWorkBodyHair from './bodyHair/howDoesItWorkBodyHair'
import HowDoesItWorkRecon from './reconstructive/howDoesItWorkRecon'
import FueDoesItWorkFAQs from './fueMicroMotor/fueDoesItWorkFAQs';
import HowDoesItWork from './common/howDoesItWork';

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
            <CustomBreadCrumb links={linksItems} isButton={true} />
            <HairTransplantHero />
            <HeroLogoCarousel />
            <main className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                <SectionWrapper
                    linksItems={linksItems}
                    id='fue-micro-motor'
                    title='FUE'
                    subtitle='(Micro Motor)'
                    imageUrl='/images/hair-transplant/fue-micro-motor.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "FUE Hair Transplant?",
                        description1: "FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss.",
                        description2: "Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance.",
                        imageUrl: "/images/hair-transplant/fue-micro-motor.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="How Does FUE Hair Transplant Work?"
                        content={[
                            { type: "paragraph", value: "At the start of the FUE procedure, Dr. Özlem Biçer carefully evaluates the donor area to identify the healthiest and most suitable hair follicles for transplantation." },
                            { type: "paragraph", value: "Local anesthesia is applied to ensure a comfortable and pain-free procedure. Once the scalp is numb, hair follicles are extracted one by one using a multiple micro punches in different sizes." },
                            { type: "paragraph", value: "The extraction can be performed:" },
                            { type: "list", value: ["Manually", "With a micromotor"] },
                            { type: "paragraph", value: "Depending on the patient’s hair structure, scalp condition, and treatment plan." },
                            { type: "paragraph", value: "Micromotor-assisted FUE may allow a higher number of grafts to be harvested per hour, while manual FUE may be preferred in certain cases for enhanced control and precision." },
                            { type: "paragraph", value: "In both techniques, punches with a diameter of approximately 0.5–0.9 mm are used. FUE does not create linear scars; instead, tiny dot-like marks may appear in the donor area and typically heal quickly." },
                        ]}
                    >
                        <FueDoesItWorkFAQs />
                    </HowDoesItWork>
                </SectionWrapper>

                <SectionWrapper
                    linksItems={linksItems}
                    id='fue-manuel'
                    title='FUE'
                    subtitle='(Manual)'
                    imageUrl='/images/hair-transplant/fue-manuel.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "FUE Hair Transplant?",
                        description1: "FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss.",
                        description2: "Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance.",
                        imageUrl: "/images/hair-transplant/fue-micro-motor.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="How Does FUE Hair Transplant Work?"
                        content={[
                            { type: "paragraph", value: "At the start of the FUE procedure, Dr. Özlem Biçer carefully evaluates the donor area to identify the healthiest and most suitable hair follicles for transplantation." },
                            { type: "paragraph", value: "Local anesthesia is applied to ensure a comfortable and pain-free procedure. Once the scalp is numb, hair follicles are extracted one by one using a multiple micro punches in different sizes." },
                            { type: "paragraph", value: "The extraction can be performed:" },
                            { type: "list", value: ["Manually", "With a micromotor"] },
                            { type: "paragraph", value: "Depending on the patient’s hair structure, scalp condition, and treatment plan." },
                            { type: "paragraph", value: "Micromotor-assisted FUE may allow a higher number of grafts to be harvested per hour, while manual FUE may be preferred in certain cases for enhanced control and precision." },
                            { type: "paragraph", value: "In both techniques, punches with a diameter of approximately 0.5–0.9 mm are used. FUE does not create linear scars; instead, tiny dot-like marks may appear in the donor area and typically heal quickly." },
                        ]}
                    >
                        <FueDoesItWorkFAQs />
                    </HowDoesItWork>
                </SectionWrapper>

                <SectionWrapper
                    linksItems={linksItems}
                    id='body-hair-transplant'
                    title='BHT'
                    subtitle='(Body Hair Transplant)'
                    imageUrl='/images/hair-transplant/body-hair.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "Body Hair Transplant?",
                        description1: "Body Hair Transplantation (BHT) is an advanced hair restoration technique used when the scalp does not provide enough suitable donor hair for a standard hair transplant. In a conventional hair transplant, hair follicles are typically harvested from the back and sides of the scalp. However, some patients have a limited or depleted scalp donor area, making additional donor sources necessary.",
                        description2: "In such cases, hair follicles can be harvested from other parts of the body—most commonly the beard and, in selected cases, the chest—and transplanted to the scalp.",
                        imageUrl: "/images/hair-transplant/body-hair.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="When Is Body Hair Transplantation Recommended?"
                        content={[
                            { type: "paragraph", value: "BHT may be considered in the following situations:" },
                            { type: "list", value: ["Severely limited scalp donor area, such as advanced hair loss (Norwood Grade VI–VII)", "Patients who have undergone previous hair transplant procedures and have depleted donor reserves", "Cases where higher graft numbers are required but scalp donor capacity is insufficient", "Scarring alopecia, burns, or trauma-related hair loss", "To increase overall density, particularly in combination with scalp hair grafts"] },
                            { type: "paragraph", value: "DBeard hair is generally preferred over chest hair due to its stronger structure and more consistent growth characteristics." },
                        ]}
                    >
                        <HowDoesItWorkBodyHair />
                    </HowDoesItWork>
                </SectionWrapper>

                <SectionWrapper
                    linksItems={linksItems}
                    id='reconstructive-hair-transplant'
                    title='Reconstructive Hair Transplantation'
                    subtitle=''
                    imageUrl='/images/hair-transplant/reconstructive.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "Reconstructive Hair Transplantation?",
                        description1: "Reconstructive hair transplantation is a specialized field of hair restoration focused on correcting hair loss or aesthetic problems caused by previous hair transplant procedures, trauma, burns, scars, medical conditions, or congenital factors.",
                        description2: "Unlike standard cosmetic hair transplantation, reconstructive procedures require advanced planning, surgical precision, and artistic judgment to restore a natural appearance while respecting facial proportions and existing hair characteristics.",
                        imageUrl: "/images/hair-transplant/reconstructive.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="Who Needs Reconstructive Hair Transplantation?"
                        content={[
                            { type: "paragraph", value: "Reconstructive hair transplantation may be recommended for patients who experience:" },
                            { type: "list", value: ["Unnatural or poorly designed hairlines", "Visible scarring from previous hair transplant procedures (FUE or FUT)", "Asymmetry or incorrect hair direction", "Low or uneven hair density", "Hair loss due to burns, accidents, surgery, or trauma", "Scarring alopecia or certain medical conditions", "Failed or unsatisfactory results from previous hair transplants"] },
                            { type: "paragraph", value: "Each reconstructive case is unique and requires an individualized treatment plan." },
                        ]}
                    >
                        <HowDoesItWorkRecon />
                    </HowDoesItWork>
                </SectionWrapper>

                <SectionWrapper
                    linksItems={linksItems}
                    id='long-hair'
                    title='Long Hair'
                    subtitle='(Unshaven)'
                    imageUrl='/images/hair-transplant/long-hair.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "Long Hair Transplant?",
                        description1: "Long Hair known as strip hair transplantation—is one of the most established hair transplant techniques. ",
                        description2: "In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE.",
                        imageUrl: "/images/hair-transplant/reconstructive.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="How Does FUE Hair Transplant Work?"
                        content={[
                            { type: "paragraph", value: "At the start of the FUE procedure, Dr. Özlem Biçer carefully evaluates the donor area to identify the healthiest and most suitable hair follicles for transplantation." },
                            { type: "paragraph", value: "Local anesthesia is applied to ensure a comfortable and pain-free procedure. Once the scalp is numb, hair follicles are extracted one by one using a multiple micro punches in different sizes." },
                            { type: "paragraph", value: "The extraction can be performed:" },
                            { type: "list", value: ["Manually", "With a micromotor"] },
                            { type: "paragraph", value: "Depending on the patient’s hair structure, scalp condition, and treatment plan." },
                            { type: "paragraph", value: "Micromotor-assisted FUE may allow a higher number of grafts to be harvested per hour, while manual FUE may be preferred in certain cases for enhanced control and precision." },
                            { type: "paragraph", value: "In both techniques, punches with a diameter of approximately 0.5–0.9 mm are used. FUE does not create linear scars; instead, tiny dot-like marks may appear in the donor area and typically heal quickly." },
                        ]}
                    >
                        <FueDoesItWorkFAQs />
                    </HowDoesItWork>
                </SectionWrapper>

                <SectionWrapper
                    linksItems={linksItems}
                    id='fut'
                    title='FUT'
                    subtitle='(Follicular Unit Transplantation)'
                    imageUrl='/images/hair-transplant/fut.svg'
                    generalInfoProps={{
                        title: "What Is",
                        boldTitle: "FUT Hair Transplant?",
                        description1: "FUT (Follicular Unit Transplantation)—also known as strip hair transplantation—is one of the most established hair transplant techniques. ",
                        description2: "In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE.",
                        imageUrl: "/images/hair-transplant/body-hair.png"
                    }}
                >
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title="How Does FUE Hair Transplant Work?"
                        content={[
                            { type: "paragraph", value: "At the start of the FUE procedure, Dr. Özlem Biçer carefully evaluates the donor area to identify the healthiest and most suitable hair follicles for transplantation." },
                            { type: "paragraph", value: "Local anesthesia is applied to ensure a comfortable and pain-free procedure. Once the scalp is numb, hair follicles are extracted one by one using a multiple micro punches in different sizes." },
                            { type: "paragraph", value: "The extraction can be performed:" },
                            { type: "list", value: ["Manually", "With a micromotor"] },
                            { type: "paragraph", value: "Depending on the patient’s hair structure, scalp condition, and treatment plan." },
                            { type: "paragraph", value: "Micromotor-assisted FUE may allow a higher number of grafts to be harvested per hour, while manual FUE may be preferred in certain cases for enhanced control and precision." },
                            { type: "paragraph", value: "In both techniques, punches with a diameter of approximately 0.5–0.9 mm are used. FUE does not create linear scars; instead, tiny dot-like marks may appear in the donor area and typically heal quickly." },
                        ]}
                    >
                        <FueDoesItWorkFAQs />
                    </HowDoesItWork>
                </SectionWrapper>
            </main>
        </>
    );
}
