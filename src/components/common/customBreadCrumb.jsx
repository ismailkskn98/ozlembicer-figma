
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
        <Breadcrumb className="sticky top-0 fluid bg-coffee-dark h-12 sm:h-13 lg:h-15 flex items-center justify-center border-b border-coffee-dark">
            <MotionScrollInViewOpacity className="w-full bg-coffee-dark flex items-center justify-center">
                <BreadcrumbList className="flex items-center gap-2 sm:gap-5 text-ivory-soft text-xs sm:text-sm lg:text-base">
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
                                    className="hover:bg-wine-brown rounded-[10px] py-1 lg:py-2.5 px-3.5 lg:px-3.75 transition-colors cursor-pointer"
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
