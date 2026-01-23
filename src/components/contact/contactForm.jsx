'use client';
import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomRoundedInput from './customRoundedInput';
import Image from 'next/image';
import ContactSchema from './contactSchema';
import CustomInput from './customInput';
import ImageUpload from './imageUpload';
import MotionScrollInView from '../common/motionScrollInView';

export default function ContactForm() {
    const formRef = useRef(null)
    const schema = ContactSchema();
    const methods = useForm({
        resolver: zodResolver(schema),
    });
    const { handleSubmit, register, formState: { errors } } = methods;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className='w-full fluid gridContainer my-25'>
            <h2 className='text-[32px] text-coffee-dark mb-5'>Hair Transplantation Application Form</h2>
            <main className='w-full max-w-308 mx-auto flex items-start gap-5'>
                <FormProvider {...methods}>
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <CustomRoundedInput name="name" type='text' label="Name:" register={register("name")} error={errors.name} inputMode="text" autoComplete="name" placeholder="Enter your name" />
                        <CustomRoundedInput name="surname" type='text' label="Surname:" register={register("surname")} error={errors.surname} inputMode="text" autoComplete="surname" placeholder="Enter your surname" />
                        <CustomRoundedInput name="email" type='text' label="Email:" register={register("email")} error={errors.email} inputMode="text" autoComplete="email" placeholder="Enter your email" />
                        <CustomRoundedInput name="mobile" type='text' label="Mobile:" register={register("mobile")} error={errors.mobile} inputMode="text" autoComplete="tel" placeholder="Enter your mobile number" />
                        <CustomRoundedInput name="age" type='text' label="Age:" register={register("age")} error={errors.age} inputMode="text" autoComplete="age" placeholder="Enter your age" />
                        <CustomRoundedInput name="gender" type='text' label="Gender:" register={register("gender")} error={errors.gender} inputMode="text" autoComplete="gender" placeholder="Enter your gender" />
                        <CustomInput name="activeHairLoss" type='text' label="Do You Have Active Hair Loss?" sublabel="(If Yes: What is the approx. number of hair per day?" register={register("activeHairLoss")} error={errors.activeHairLoss} inputMode="text" autoComplete="activeHairLoss" placeholder="Enter your active hair loss status" />
                        <CustomInput name="illnesses" type='text' label="Do You Have Any Illnesses?" sublabel="(If Yes: Give more information about it.)" register={register("illnesses")} error={errors.illnesses} inputMode="text" autoComplete="illnesses" placeholder="Enter your illnesses information" />
                        <CustomInput name="previousTransplant" type='text' label="Have You Ever Had Transplantation Before?" sublabel="(If Yes; When?, How Many Grafts?, etc.)" register={register("previousTransplant")} error={errors.previousTransplant} inputMode="text" autoComplete="previousTransplant" placeholder="Enter your previous transplant information" />
                        <CustomInput name="medications" type='text' label="Do You Use Any Medications?" sublabel="(If Yes: Which Medications?, For How Long?, etc.)" register={register("medications")} error={errors.medications} inputMode="text" autoComplete="medications" placeholder="Enter your medications information" />
                        <CustomInput name="alcoholDrugsSmoke" type='text' label="Do You Use Alcohol / Drugs / Smoke?" sublabel="(If Yes: What do you use?, What is the frequency?)" register={register("alcoholDrugsSmoke")} error={errors.alcoholDrugsSmoke} inputMode="text" autoComplete="alcoholDrugsSmoke" placeholder="Enter your alcohol, drugs, or smoking information" />
                        <CustomInput name="priority" type='text' label="Where Is Your Priority?" sublabel="(Ex; Front Line, Crown, Mid-Scalp, etc.)" register={register("priority")} error={errors.priority} inputMode="text" autoComplete="priority" placeholder="Enter your priority area" />
                        <CustomInput name="hairLength" type='text' label="Do You Keep Your Hair Short?" sublabel="(If Yes; How many millimetres?)" register={register("hairLength")} error={errors.hairLength} inputMode="text" autoComplete="hairLength" placeholder="Enter your hair length" />
                        <CustomInput name="other" type='text' label="Other" sublabel="(Information's that you think that might be useful.)" register={register("other")} error={errors.other} inputMode="text" autoComplete="other" placeholder="Enter your active hair loss status" />
                        <ImageUpload />
                    </form>
                </FormProvider>
                <Image src="/images/contact/contact.png" alt="Contact Form Illustration" width={500} height={550} className='object-contain object-center w-fit h-full max-h-135 rounded-4xl' />
            </main>
            <button
                type="button"
                onClick={() => formRef.current?.requestSubmit()}
                className='w-full max-w-308 mx-auto bg-coffee-dark text-ivory-soft py-10.25 px-130.75 rounded-4xl text-[48px] uppercase mt-25 cursor-pointer hover:bg-wine-brown transition-all duration-200'
            >
                Submit
            </button>
            <main className='w-full max-w-6xl mx-auto flex items-center gap-24.5 mt-25'>
                <article className=''>
                    <iframe className='border-0 rounded-[10px] max-h-115' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4323097541787!2d29.098207486293994!3d40.993910097487245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac62895079e5d%3A0xa2428f53ed319008!2zRHIuIMOWemxlbSBCacOnZXIgfCBNRA!5e0!3m2!1str!2str!4v1769150651118!5m2!1str!2str" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
                <article className='w-full max-w-125.5 flex flex-col items-start text-[20px]'>
                    <div className='w-full grid grid-cols-2'>
                        <p className=''>Adress: </p>
                        <p>Istanbul / Turkey</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>
                        <p className=''>Mobile & Whats App: </p>
                        <p>+90 530 414 13 13</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>
                        <p className=''>E-Mail: </p>
                        <p>info@ozlembicer.com</p>
                    </div>
                </article>
            </main>
            <MotionScrollInView className='w-full max-w-6xl mx-auto flex items-center gap-6 mt-25'>
                <article className='flex flex-col items-start gap-3.75 text-coffee-dark'>
                    <h3 className='text-[32px]'>Hair Transplantation in Istanbul, Turkey</h3>
                    <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                </article>
                <article className='flex-1 min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                    <span className='uppercase text-[32px]'>Contact US</span>
                </article>
            </MotionScrollInView>
        </section>
    )
}
