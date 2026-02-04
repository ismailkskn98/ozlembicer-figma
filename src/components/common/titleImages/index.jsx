import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import MotionScrollInViewVariant from "@/components/common/motionScrollInViewVariant";
import React from "react";

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
    return (
        <MotionScrollInViewVariant
            className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-y-5 bg-linear-to-r from-wine-brown to-coffee-dark min-h-175 rounded-4xl p-10 lg:mb-10 mt-0 lg:mt-10 overflow-hidden"
            childClassname="w-full flex items-center justify-between gap-2.5"
        >
            <Accordion type="single" collapsible className="w-full">
                {titleItemsData.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger isShowIcon={false}>
                            <div className="group relative w-full flex items-center justify-between gap-2.5 transition-all duration-200 before:absolute before:content-[''] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-ivory-soft/40 before:to-transparent cursor-pointer">
                                <div className="absolute inset-y-0 -left-[15%] h-full w-1/2 z-10 bg-linear-to-r from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-all duration-200" />
                                <div className="relative w-full text-[20px] text-ivory-soft py-6 sm:py-8.5 z-20">{item.title}</div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={700}
                                    height={200}
                                    className="relative z-20 object-contain object-center w-fit h-37.5"
                                />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <h3 className="text-[18px] text-ivory-soft mb-3">{item.content.title}</h3>
                            {item.content.items.map((contentItem, idx) => (
                                <div key={idx}>
                                    {contentItem.type === 'paragraph' && (
                                        <p className="text-ivory-soft/80 text-[14px] mb-3">
                                            {contentItem.text}
                                        </p>
                                    )}
                                    {contentItem.type === 'list' && (
                                        <ul className="text-ivory-soft/80 text-[14px] mb-3 list-disc list-inside">
                                            {contentItem.items.map((listItem, listIdx) => (
                                                <li key={listIdx}>{listItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </MotionScrollInViewVariant>
    );
}
