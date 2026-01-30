'use client';
import React, { useEffect } from 'react';
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
        <Breadcrumb className="fluid bg-coffee-dark h-15 flex items-center justify-center border-b border-coffee-dark">
            <MotionScrollInViewOpacity className="w-full bg-coffee-dark flex items-center justify-center">
                <BreadcrumbList className="flex items-center gap-5 text-ivory-soft">
                    {links.map((link, index) => (
                        <BreadcrumbItem key={index}>
                            {isButton ? (
                                <ScrollLink
                                    to={link.href.split('#')[1]}
                                    duration={2500}
                                    offset={0}
                                    spy={true}
                                    hashSpy={true}
                                    smoothing="easeInOutCubic"
                                    className="hover:bg-wine-brown rounded-[10px] py-2.5 px-3.75 transition-colors cursor-pointer"
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
