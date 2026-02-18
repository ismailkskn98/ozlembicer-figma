
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
                    <section className='w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 justify-items-center gap-3 md:gap-6'>
                        <article className='w-full md:w-36 lg:w-43 h-36 lg:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-sm md:rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Minimally", "Invasive", "Technique"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-full md:w-36 lg:w-43 h-36 lg:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-sm md:rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["No", "Linear", "Scar"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-full md:w-36 lg:w-43 h-36 lg:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-sm md:rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Natural", "Looking", "Results"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='w-full md:w-36 lg:w-43 h-36 lg:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-sm md:rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
                            {["Short", "Recovery", "Time"].map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </article>
                        <article className='col-span-1 sm:col-span-2 md:col-span-1 w-full md:w-36 lg:w-43 h-36 lg:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-sm md:rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base'>
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
                        title={["When Is Body Hair", "Transplantation Recommended?"]}
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
                        title={["Hair Transplantation", "Using FUT"]}
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
                <div className='-mt-16 sm:-mt-10'>
                    <HowToAppointment />
                </div>
            </main>
            <DomLoaded />
        </>
    );
}
