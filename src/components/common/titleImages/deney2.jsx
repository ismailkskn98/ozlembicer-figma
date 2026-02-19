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
        image: '/images/home-accordion/hair-transplant-degisti.jpg',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    },
    {
        value: 'beard-transplant',
        title: 'Beard Transplant',
        image: '/images/home-accordion/beard-transplant.jpg',
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
        image: '/images/home-accordion/eyebrow-transplant.jpg',
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
        image: '/images/home-accordion/female-hair-transplant.jpg',
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    }
];

export default function TitleImagesDeney2() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <MotionScrollInViewVariant
            className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start md:gap-y-5 bg-linear-to-r from-wine-brown to-coffee-dark rounded-4xl px-5 lg:px-10 py-5 lg:py-10 lg:mb-10 mt-0 lg:mt-10 overflow-hidden"
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
                            <AccordionItem value={item.value} className="relative">

                                <AccordionTrigger isShowIcon={false}>
                                    <main className="group relative w-full flex flex-col md:flex-row items-center transition-all duration-200 before:absolute before:content-[''] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-transparent md:before:from-ivory-soft/40 before:to-transparent cursor-pointer px-1 sm:px-0 py-1 md:py-0">
                                        <div className="absolute inset-y-0 left-0 md:left-[-5%] lg:left-[-15%] h-1/2 sm:h-full w-full md:w-1/3 lg:w-1/2 z-10 rounded-sm bg-linear-to-b md:bg-linear-to-r from-[#8C4242]/60 sm:from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-all duration-200" />

                                        <article className="relative w-full md:w-1/3 flex items-center justify-between text-sm sm:text-base lg:text-lg xl:text-[20px] text-ivory-soft py-1 md:py-8.5 z-20 text-nowrap">
                                            <span>{item.title}</span>
                                            <IoIosArrowDown className="text-ivory-soft sm:hidden" />
                                        </article>
                                        <article className="relative z-20 w-full md:w-2/3 h-28 md:h-32.5 flex items-start">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className={`object-cover object-center w-full ${selectedItem === item.value ? 'opacity-0' : 'opacity-100 my-auto'} rounded-sm max-h-[90%] transition-opacity duration-200`}
                                            />
                                        </article>
                                    </main>
                                </AccordionTrigger>
                                <AccordionContent className="relative z-20 flex justify-end px-0 py-0 data-[state=open]:overflow-auto pb-0 md:pb-2 z-20">
                                    <section className="w-full md:w-2/3 -mt-28 md:-mt-32.5 flex flex-col items-start gap-3 lg:gap-3">
                                        {/* Büyük resim — sadece açıkken, content yazısının üstünde */}
                                        <motion.div
                                            key="accordion-image"
                                            initial={{ clipPath: "inset(0 0 100% 0)" }}
                                            animate={{ clipPath: "inset(0 0 0% 0)" }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="relative w-full h-52 sm:h-80 mt-1"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded-sm"
                                            />
                                        </motion.div>

                                        {/* Content yazısı — resmin hemen altında */}
                                        <main className="w-full py-3">
                                            <article className="w-full flex flex-col items-start">
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
                                            </article>
                                        </main>
                                    </section>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Accordion>
        </MotionScrollInViewVariant >
    );
}
