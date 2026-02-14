'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import MotionScrollInView from "../motionScrollInView";
import { FaHandSparkles } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";


const titleItemsData = [
    {
        value: 'hair-transplant',
        title: 'Hair Transplant',
        image: '/images/home-accordion/hair-transplant.jpg',
        icon: FaHandSparkles,
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'list', items: ['FUE Micro Motor Tekniği', 'FUE Manuel Tekniği', 'BHT (Vücut Saçı Transplantasyonu)', 'Rekonstruktif Transplantasyon'] },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
            ]
        }
    },
    {
        value: 'beard-transplant',
        title: 'Beard Transplant',
        image: '/images/home-accordion/beard-transplant.jpg',
        icon: GiBeard,
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
        icon: IoEyeSharp,
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
        icon: IoSparklesSharp,
        content: {
            title: 'Lorem, ipsum dolor.',
            items: [
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' },
                { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt odit id adipisci cumque molestias fuga ratione ea fugit temporibus. Iusto illo odio esse ipsam omnis, adipisci fugiat minus ullam?' }
            ]
        }
    }
];

export default function DeneyTitleImage() {
    const [selectedItem, setSelectedItem] = useState("beard-transplant");

    return (
        <MotionScrollInView
            className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-y-5 rounded-4xl lg:mb-10 mt-0 lg:mt-10 overflow-hidden">
            <Accordion type="single" collapsible className="w-full flex flex-row h-150 items-stretch gap-0" value={selectedItem} onValueChange={(value) => setSelectedItem(value)}>
                {titleItemsData.map((item, index) => {
                    const isOpen = selectedItem === item.value;
                    return (
                        <motion.div
                            key={item.value}
                            className="relative h-full"
                            initial={false}
                            animate={{ width: isOpen ? '70%' : '10%' }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <AccordionItem value={item.value} className="h-full border-none">
                                <div className="relative h-full overflow-hidden">
                                    <div className="absolute inset-0 bg-black/50 z-10" />
                                    <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                                    <AccordionTrigger
                                        isShowIcon={false}
                                        className="relative z-20 p-0 hover:no-underline data-[state=open]:no-underline"
                                    >
                                        <div className="relative h-full w-full flex items-end justify-center pb-10 cursor-pointer group">
                                            {!isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute inset-0 flex flex-col items-center justify-between py-6"
                                                >
                                                    <h2
                                                        className="text-ivory-soft text-lg font-medium tracking-wider whitespace-nowrap origin-center"
                                                        style={{
                                                            writingMode: 'vertical-rl',
                                                            textOrientation: 'mixed'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </h2>
                                                    <item.icon className="text-ivory-soft text-2xl" />
                                                </motion.div>
                                            )}
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="absolute inset-0 z-20 pt-10 pb-10 px-8 overflow-y-auto"
                                        onWheel={(e) => e.stopPropagation()}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                        >
                                            <h2 className="text-2xl lg:text-3xl text-ivory-soft font-semibold mb-6">
                                                {item.title}
                                            </h2>
                                            <h3 className="text-lg text-ivory-soft mb-4">{item.content.title}</h3>
                                            {item.content.items.map((contentItem, idx) => (
                                                <div key={idx}>
                                                    {contentItem.type === 'paragraph' && (
                                                        <p className="text-ivory-soft/90 text-base mb-4 leading-relaxed">
                                                            {contentItem.text}
                                                        </p>
                                                    )}
                                                    {contentItem.type === 'list' && (
                                                        <ul className="text-ivory-soft/90 text-base mb-4 list-disc list-inside space-y-2">
                                                            {contentItem.items.map((listItem, listIdx) => (
                                                                <li key={listIdx}>{listItem}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AccordionContent>
                                </div>
                            </AccordionItem>
                        </motion.div>
                    );
                })}
            </Accordion>
        </MotionScrollInView>
    );
}
