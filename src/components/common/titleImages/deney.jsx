'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import MotionScrollInView from "../motionScrollInView";
import { FaHandSparkles } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const titleItemsData = [
    {
        value: 'hair-transplant',
        title: 'Hair Transplant',
        image: '/images/home-accordion/hair-transplant-degisti.jpg',
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <MotionScrollInView
            className="w-full max-w-full xl:max-w-6xl mx-auto rounded-4xl lg:mb-10 mt-0 lg:mt-10 overflow-hidden">
            <Accordion type="single" collapsible className="w-full flex flex-col md:flex-row h-auto md:h-150 md:min-h-150 items-stretch gap-0" value={selectedItem} onValueChange={(value) => setSelectedItem(value)}>
                {titleItemsData.map((item, index) => {
                    const isOpen = selectedItem === item.value;
                    return (
                        <motion.div
                            key={item.value}
                            className="relative w-full md:w-auto md:h-full"
                            initial={false}
                            animate={isMobile ? {
                                height: isOpen ? '500px' : '150px'
                            } : {
                                width: isOpen ? '70%' : '10%'
                            }}
                            transition={{
                                duration: isMobile ? 0.3 : 0.4,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            style={isMobile ? { width: '100%' } : {}}
                        >
                            <AccordionItem value={item.value} className="h-full border-none">
                                <div className="relative h-full min-h-15 md:min-h-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/50 z-10" />
                                    <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                                    <AccordionTrigger
                                        isOpen={isOpen}
                                        isShowIcon={false}
                                        className="relative z-20 p-0 hover:no-underline data-[state=open]:no-underline min-h-15 md:min-h-0"
                                    >
                                        <div className="relative h-full w-full flex items-center md:items-end justify-center md:pb-10 cursor-pointer group">
                                            {!isOpen ? (
                                                <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-center md:justify-between gap-4 md:gap-0 py-4 md:py-6">
                                                    <h2
                                                        className="text-ivory-soft text-lg font-medium tracking-wider whitespace-nowrap origin-center"
                                                        style={{
                                                            writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                                                            textOrientation: isMobile ? 'mixed' : 'mixed'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </h2>
                                                    <item.icon className="text-ivory-soft text-2xl" />
                                                </div>
                                            ) : (
                                                isMobile && (
                                                    <div className="absolute inset-0 flex flex-row items-center justify-between gap-3 py-4 px-6">
                                                        <h2 className="text-ivory-soft text-sm tracking-wider">
                                                            Close
                                                        </h2>
                                                        <IoClose className="text-ivory-soft text-lg" />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="relative md:absolute inset-0 z-20 pt-6 md:pt-10 pb-6 md:pb-10 px-6 md:px-8 overflow-y-auto max-h-125 md:max-h-full"
                                        onWheel={(e) => e.stopPropagation()}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15, duration: 0.25 }}
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
