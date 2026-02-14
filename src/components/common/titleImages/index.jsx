'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import MotionScrollInViewVariant from "@/components/common/motionScrollInViewVariant";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";

const titleItemsData = [
    {
        value: 'hair-transplant',
        title: 'Hair Transplant',
        image: '/images/title-1.png',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    },
    {
        value: 'beard-transplant',
        title: 'Beard Transplant',
        image: '/images/title-2.png',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    },
    {
        value: 'eyebrow-transplant',
        title: 'Eyebrow Transplant',
        image: '/images/title-3.png',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    },
    {
        value: 'female-hair-transplant',
        title: 'Female Hair Transplant',
        image: '/images/title-4.png',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    }
];

export default function TitleImages() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <MotionScrollInViewVariant
            className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-y-5 bg-linear-to-r from-wine-brown to-coffee-dark rounded-4xl px-3 lg:px-10 py-3 lg:py-10 lg:mb-10 mt-0 lg:mt-10 overflow-hidden"
            childClassname="w-full flex items-center justify-between gap-2.5"
        >
            <Accordion type="single" collapsible className="w-full" value={selectedItem} onValueChange={(value) => setSelectedItem(value)}>
                <AnimatePresence initial={false}>
                    {titleItemsData.map((item) => (
                        <motion.div
                            key={item.value}
                            layoutId={item.value}
                            initial={selectedItem === item.value ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <AccordionItem value={item.value}>
                                <AccordionTrigger isShowIcon={false}>
                                    <div className="group relative w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 transition-all duration-200 before:absolute before:content-[''] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-transparent sm:before:from-ivory-soft/40 before:to-transparent cursor-pointer px-1 sm:px-0">
                                        <div className="absolute inset-y-0 left-0 lg:-left-[15%] h-1/2 sm:h-full w-full sm:w-1/2 z-10 rounded-sm bg-linear-to-b sm:bg-linear-to-r from-[#8C4242]/60 sm:from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-all duration-200" />
                                        <div className="relative w-full sm:w-fit flex items-center justify-between text-base lg:text-lg xl:text-[20px] text-ivory-soft py-1 sm:py-8.5 z-20 text-nowrap">
                                            <span>{item.title}</span>
                                            <IoIosArrowDown className="text-ivory-soft sm:hidden" />
                                        </div>
                                        <div className="col-span-1 sm:col-span-2 relative z-20 w-full max-w-170 h-20 sm:h-32.5 flex items-center">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover object-center w-full max-h-[90%] my-auto rounded-sm"
                                            />
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="">
                                    <main className="w-full py-3 px-0">
                                        <h3 className="text-[18px] text-ivory-soft mb-3">{item.content.title}</h3>
                                        {item.content.items.map((contentItem, idx) => (
                                            <div key={idx}>
                                                {contentItem.type === 'paragraph' && (
                                                    <p className="text-ivory-soft/80 text-sm mb-3">
                                                        {contentItem.text}
                                                    </p>
                                                )}
                                                {contentItem.type === 'list' && (
                                                    <ul className="text-ivory-soft/80 text-sm mb-3 list-disc list-inside">
                                                        {contentItem.items.map((listItem, listIdx) => (
                                                            <li key={listIdx}>{listItem}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </main>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Accordion>
        </MotionScrollInViewVariant>
    );
}
