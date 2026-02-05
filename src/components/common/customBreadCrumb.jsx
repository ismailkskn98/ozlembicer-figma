
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
        <Breadcrumb className="breadcrumb-scroll fluid gridContainer bg-coffee-dark border-b border-coffee-dark overflow-x-auto lg:overflow-hidden">
            <MotionScrollInViewOpacity className="w-full h-auto lg:h-15 flex items-center justify-center pt-5 pb-3 lg:pb-0 lg:pt-0">
                <BreadcrumbList className="flex items-center flex-nowrap gap-0 xl:gap-5 text-ivory-soft text-xs sm:text-sm xl:text-base">
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
                                <BreadcrumbLink href={link.href}>
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
