
'use client';
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList
} from "@/components/ui/breadcrumb";
import MotionScrollInViewOpacity from './motionScrollInViewOpacity';
import { Link as ScrollLink } from 'react-scroll';

export default function CustomBreadCrumb({ links, isButton = false }) {

    return (
        <Breadcrumb className="sticky top-30.5 sm:top-35.5 lg:top-30 z-20 breadcrumb-scroll fluid gridContainer bg-coffee-dark border-b border-coffee-dark overflow-x-auto lg:overflow-hidden">
            <MotionScrollInViewOpacity className="w-full h-auto lg:h-15 flex items-center justify-center py-2 lg:pb-0 lg:pt-0">
                <BreadcrumbList className="w-full flex items-center justify-start lg:justify-center flex-nowrap gap-0 xl:gap-5 text-ivory-soft text-xs sm:text-sm xl:text-base lg:pl-0">
                    {links.map((link, index) => (
                        <BreadcrumbItem key={index}>
                            {isButton ? (
                                <ScrollLink
                                    to={link.href.split('#')[1]}
                                    duration={200}
                                    offset={-118}
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    smoothing="linear"
                                    className="hover:bg-wine-brown rounded-[10px] py-1 lg:py-2.5 px-3.5 lg:px-3.75 transition-colors cursor-pointer whitespace-nowrap"
                                >
                                    {link.label}
                                </ScrollLink>
                            ) : (
                                <BreadcrumbLink href={link.href} className="w-full hover:bg-wine-brown rounded-[10px] py-1 lg:py-2.5 px-3.5 lg:px-3.75 transition-colors cursor-pointer whitespace-nowrap">
                                    {link.label}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </MotionScrollInViewOpacity>
        </Breadcrumb>
    );
}
