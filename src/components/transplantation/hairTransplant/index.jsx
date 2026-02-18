
import React from 'react'
import HairTransplantHero from './hairTransplantHero'
import CustomBreadCrumb from '../../common/customBreadCrumb'
import HeroLogoCarousel from '../../common/logoCarousel'
import SectionWrapper from './common/sectionWrapper';
import HowDoesItWorkBodyHair from './bodyHair/howDoesItWorkBodyHair'
import HowDoesItWorkRecon from './reconstructive/howDoesItWorkRecon'
import FueDoesItWorkFAQs from './fueMicroMotor/fueDoesItWorkFAQs';
import HowDoesItWork from './common/howDoesItWork';
import DomLoaded from '../../common/domLoaded';
import HowToAppointment from '../../common/howToAppointment';
import HowDoesItWorkLong from './longHair/howDoesItWorkLong';
import HowDoesItWorkFut from './futHair/howDoesItWorkFut';

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
            <main className='relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige'>
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
                        title={["What Are the Steps of", "FUE Hair Transplantation?"]}
                        content={[
                            { type: "heading", value: "1. Initial Contact & Consultation" },
                            { type: "paragraph", value: "You first contact the clinic, and one of our consultants and interpreters will guide you through the entire process in your native language." },
                            { type: "paragraph", value: "You will complete a consultation form and send your photographs and videos to Dr. Biçer. After evaluating your case and estimating the required graft number, Dr. Biçer will provide general information. If she needs further details, she may request an online consultation." },
                            { type: "paragraph", value: "Following this evaluation, a personalized treatment offer will be sent to you. If you decide to proceed with surgery, your consultant will provide suitable dates. Once the advance payment is received, your surgery will be scheduled." },
                            { type: "heading", value: "2. Preoperative Evaluation (One Day Before Surgery)" },
                            { type: "paragraph", value: "We strongly recommend arriving at the clinic one day before surgery. During this visit:" },
                            { type: "list", value: ["Medical photographs are taken", "Blood tests are performed", "Electrocardiography (ECG) is completed", "Trichoscopic examination is conducted"] },
                            { type: "paragraph", value: "You will also complete the necessary medical forms and have a face-to-face consultation with Dr. Biçer. This step is extremely important, as your expectations, donor capacity, and final graft number are clarified, and the surgical plan is finalized." },
                            { type: "heading", value: "3. Surgery Day – Planning & Preparation" },
                            { type: "paragraph", value: "On the day of surgery, you should arrive at the clinic at 08:00 a.m." },
                            { type: "paragraph", value: "Dr. Biçer reviews all details again and designs your hairline together with you. Hairline design is a critical step for achieving natural-looking results and ensuring long-term planning." },
                            { type: "paragraph", value: "Depending on the chosen technique, your hair will be shaved if required, and your scalp will be washed with a disinfectant shampoo. The hairline is then cleaned again." },
                            { type: "paragraph", value: "Dr. Biçer explains each step of the procedure in detail before surgery begins." },
                            { type: "heading", value: "4. Local Anesthesia" },
                            { type: "paragraph", value: "Needle-free local anesthesia is administered. During this phase, you remain awake and are continuously monitored to ensure your comfort and safety." },
                            { type: "heading", value: "5. Graft Extraction" },
                            { type: "paragraph", value: "In the second stage of surgery, Dr. Biçer performs the graft harvesting, while trained nurses collect, count, and examine the grafts under the microscope." },
                            { type: "paragraph", value: "Punch sizes of 0.7–0.9 mm are used:" },
                            { type: "list", value: ["When these punches are used with a micromotor, the technique is called micromotor FUE", "When used manually, without electricity or machines, the technique is called manual FUE"] },
                            { type: "heading", value: "6. Recipient Site Creation" },
                            { type: "paragraph", value: "In the third stage, Dr. Biçer creates the recipient incisions, determining the direction, angle, and density of the transplanted hair." },
                            { type: "paragraph", value: "Titanium or sapphire blades are used for this step. Technically, there is no difference in results between these two blade types when properly applied." },
                            { type: "heading", value: "7. Graft Implantation" },
                            { type: "paragraph", value: "In the final stage, three nurses carefully place the grafts into the recipient area. Dr. Biçer remains at the clinic throughout this process." },
                            { type: "heading", value: "8. Postoperative Follow-Up" },
                            { type: "paragraph", value: "The day after surgery, you return to the clinic for:" },
                            { type: "list", value: ["Removal of bandages", "Medical examination by Dr. Biçer", "Postoperative photographs"] },
                            { type: "paragraph", value: "Once everything is confirmed to be progressing well, you are free to return to your country." },
                            { type: "paragraph", value: "However, the process does not end there. Dr. Biçer and her interpreters continue to follow your progress for at least one year after the surgery." },
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
                        title={["What Are the Steps of", "FUE Hair Transplantation?"]}
                        content={[
                            { type: "heading", value: "1. Initial Contact & Consultation" },
                            { type: "paragraph", value: "You first contact the clinic, and one of our consultants and interpreters will guide you through the entire process in your native language." },
                            { type: "paragraph", value: "You will complete a consultation form and send your photographs and videos to Dr. Biçer. After evaluating your case and estimating the required graft number, Dr. Biçer will provide general information. If she needs further details, she may request an online consultation." },
                            { type: "paragraph", value: "Following this evaluation, a personalized treatment offer will be sent to you. If you decide to proceed with surgery, your consultant will provide suitable dates. Once the advance payment is received, your surgery will be scheduled." },
                            { type: "heading", value: "2. Preoperative Evaluation (One Day Before Surgery)" },
                            { type: "paragraph", value: "We strongly recommend arriving at the clinic one day before surgery. During this visit:" },
                            { type: "list", value: ["Medical photographs are taken", "Blood tests are performed", "Electrocardiography (ECG) is completed", "Trichoscopic examination is conducted"] },
                            { type: "paragraph", value: "You will also complete the necessary medical forms and have a face-to-face consultation with Dr. Biçer. This step is extremely important, as your expectations, donor capacity, and final graft number are clarified, and the surgical plan is finalized." },
                            { type: "heading", value: "3. Surgery Day – Planning & Preparation" },
                            { type: "paragraph", value: "On the day of surgery, you should arrive at the clinic at 08:00 a.m." },
                            { type: "paragraph", value: "Dr. Biçer reviews all details again and designs your hairline together with you. Hairline design is a critical step for achieving natural-looking results and ensuring long-term planning." },
                            { type: "paragraph", value: "Depending on the chosen technique, your hair will be shaved if required, and your scalp will be washed with a disinfectant shampoo. The hairline is then cleaned again." },
                            { type: "paragraph", value: "Dr. Biçer explains each step of the procedure in detail before surgery begins." },
                            { type: "heading", value: "4. Local Anesthesia" },
                            { type: "paragraph", value: "Needle-free local anesthesia is administered. During this phase, you remain awake and are continuously monitored to ensure your comfort and safety." },
                            { type: "heading", value: "5. Graft Extraction" },
                            { type: "paragraph", value: "In the second stage of surgery, Dr. Biçer performs the graft harvesting, while trained nurses collect, count, and examine the grafts under the microscope." },
                            { type: "paragraph", value: "Punch sizes of 0.7–0.9 mm are used:" },
                            { type: "list", value: ["When these punches are used with a micromotor, the technique is called micromotor FUE", "When used manually, without electricity or machines, the technique is called manual FUE"] },
                            { type: "heading", value: "6. Recipient Site Creation" },
                            { type: "paragraph", value: "In the third stage, Dr. Biçer creates the recipient incisions, determining the direction, angle, and density of the transplanted hair." },
                            { type: "paragraph", value: "Titanium or sapphire blades are used for this step. Technically, there is no difference in results between these two blade types when properly applied." },
                            { type: "heading", value: "7. Graft Implantation" },
                            { type: "paragraph", value: "In the final stage, three nurses carefully place the grafts into the recipient area. Dr. Biçer remains at the clinic throughout this process." },
                            { type: "heading", value: "8. Postoperative Follow-Up" },
                            { type: "paragraph", value: "The day after surgery, you return to the clinic for:" },
                            { type: "list", value: ["WRemoval of bandages", "Medical examination by Dr. Biçer", "Postoperative photographs"] },
                            { type: "paragraph", value: "Once everything is confirmed to be progressing well, you are free to return to your country." },
                            { type: "paragraph", value: "However, the process does not end there. Dr. Biçer and her interpreters continue to follow your progress for at least one year after the surgery." },
                        ]}
                    >
                        <FueDoesItWorkFAQs />
                    </HowDoesItWork>
                    <section className='w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 justify-items-center gap-2 sm:gap-3 md:gap-6'>
                        <article className='w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Minimally", "Invasive", "Technique"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["No", "Linear", "Scar"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='col-span-2 md:col-span-1 w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Natural", "Looking", "Results"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Short", "Recovery", "Time"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Suitable", "For", "Man&Woman"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                    </section>
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
                        title={["When Is Body Hair", "Transplantation Recommended?"]}
                        content={[
                            { type: "paragraph", value: "BHT may be considered in the following situations:" },
                            { type: "list", value: ["Severely limited scalp donor area, such as advanced hair loss (Norwood Grade VI–VII)", "Patients who have undergone previous hair transplant procedures and have depleted donor reserves", "Cases where higher graft numbers are required but scalp donor capacity is insufficient", "Scarring alopecia, burns, or trauma-related hair loss", "To increase overall density, particularly in combination with scalp hair grafts"] },
                            { type: "paragraph", value: "Beard hair is generally preferred over chest hair due to its stronger structure and more consistent growth characteristics." },
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
                        title={["Who Needs", "Reconstructive Hair Transplantation?"]}
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
                        description1: "Long hair transplantation is an advanced hair transplant technique in which hair follicles are extracted and implanted without shaving the donor or recipient areas. Although the procedure is technically the same as the classic micromotor FUE technique, special punches are used to avoid cutting the hair shaft, allowing the hair to remain long during extraction and implantation.",
                        description2: "This method enables patients to see immediate cosmetic results after the procedure. The transplanted long hairs shed temporarily, but the follicles remain permanent and regrow naturally over time.",
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
                        title={["Who Needs", "Long Hair Transplantation?"]}
                        content={[
                            { type: "paragraph", value: "Long hair transplantation may be recommended for individuals who:" },
                            {
                                type: "list", value: [
                                    "Have unnatural, poorly designed, or unsatisfactory hairlines from previous procedures and want an immediate, natural-looking improvement",
                                    "Experience visible scarring caused by earlier hair transplant techniques (FUE or FUT) and prefer better camouflage",
                                    "Suffer from asymmetry or incorrect hair growth direction that requires precise correction",
                                    "Have low or uneven hair density and wish to see instant volume without waiting months for growth",
                                    "Have hair loss resulting from burns, accidents, surgery, or trauma, where aesthetic restoration is critical",
                                    "Are affected by scarring alopecia or certain medical conditions that limit conventional transplant options",
                                    "Have had failed or disappointing hair transplant results and seek an advanced corrective solution",
                                    "Prefer a technique that provides immediate cosmetic results, especially for social or professional reasons"
                                ]
                            },
                            { type: "paragraph", value: "Each long hair transplantation case is unique and requires a fully individualized treatment plan based on the patient’s hair characteristics, expectations, and medical background." },
                        ]}
                    >
                        <HowDoesItWorkLong />
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
                        title={["Stages of FUT", "Hair Transplantation"]}
                        content={[
                            { type: "heading", value: "1. Initial Contact & Consultation" },
                            { type: "paragraph", value: "The process begins by contacting the clinic. One of our experienced consultants and interpreters will guide you through every step in your native language. You will be asked to complete a consultation form and submit photographs and videos, which are reviewed by Dr. Biçer. Based on this evaluation, you will receive preliminary information, including an estimated graft number. If necessary, Dr. Biçer may request an online consultation for further assessment. Following this, a personalized treatment plan and offer will be prepared and sent to you." },
                            { type: "paragraph", value: "Once you decide to proceed with surgery, your consultant will help you select suitable dates. After the advance payment is completed, your surgery will be officially scheduled." },
                            { type: "heading", value: "2. Preoperative Day (One Day Before Surgery)" },
                            { type: "paragraph", value: "We strongly recommend arriving at the clinic one day before the surgery. On this day, professional photographs are taken and medical evaluations are performed, including blood tests, electrocardiography (ECG), and trichoscopic examination. You will then have a face-to-face consultation with Dr. Biçer." },
                            { type: "paragraph", value: "This step is extremely important, as your expectations, donor capacity, scalp laxity, and final graft number are clearly determined, and the surgical plan is finalized." },
                            { type: "heading", value: "3. Surgery Day" },
                            { type: "paragraph", value: "On the day of surgery, you should arrive at the clinic at 08:00 AM. Dr. Biçer will once again review all details with you and carefully design and draw your hairline. Hairline design is a critical step for achieving a natural appearance and long-term aesthetic success." },
                            { type: "paragraph", value: "According to the FUT technique, the hair is not shaved. Your hair will be washed with a disinfectant shampoo, and the hairline area will be prepared once more. You will be fully informed about each stage of the procedure." },
                            { type: "heading", value: "4. Donor Strip (Flap) Extraction" },
                            { type: "paragraph", value: "Dr. Biçer measures donor area elasticity and scalp laxity, then marks the strip excision line. Needle-free local anesthesia is administered, and you remain awake and continuously monitored for safety." },
                            { type: "paragraph", value: "After anesthesia, Dr. Biçer performs the strip (flap) excision. Typically, 1,500–2,500 grafts are obtained from a single strip. The donor area is then closed using an aesthetic trichophytic suture. Meanwhile, the medical team carefully dissects the grafts into single, double, or multiple follicular units under a microscope." },
                            { type: "heading", value: "5. Recipient Area Incisions" },
                            { type: "paragraph", value: "In the third stage, Dr. Biçer creates the recipient incisions, determining the correct angle, direction, and density of the transplanted hair to ensure a natural result." },
                            { type: "heading", value: "6. Graft Placement" },
                            { type: "paragraph", value: "In the final stage, a specialized nursing team places the grafts into the recipient area. During this phase, Dr. Biçer remains present in the clinic, supervising the procedure." },
                            { type: "heading", value: "7. Postoperative Follow-Up" },
                            { type: "paragraph", value: "The day after surgery, you will return to the clinic for bandage removal and postoperative evaluation. New photographs are taken after Dr. Biçer confirms that healing is progressing normally." },
                            { type: "paragraph", value: "The aesthetic sutures placed in the donor area should be removed 15 days after surgery by a physician. If you are still in the country, this can be done at our clinic; otherwise, it can safely be removed in your home country." },
                            { type: "paragraph", value: "Our care does not end after the procedure. Dr. Biçer and her medical team continue to follow your progress for at least one year, providing ongoing support and guidance throughout your recovery and hair growth journey." },
                        ]}
                    >
                        <HowDoesItWorkFut />
                    </HowDoesItWork>
                </SectionWrapper>
                <div className='-mt-16 sm:-mt-10'>
                    <HowToAppointment />
                </div>
            </main>
            <DomLoaded />
        </>
    );
}
