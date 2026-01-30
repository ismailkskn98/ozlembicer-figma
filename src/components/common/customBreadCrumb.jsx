import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import MotionScrollInViewOpacity from './motionScrollInViewOpacity';
import Lenis from '@/lib/lenis';

export default function CustomBreadCrumb({ links }) {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const lenis = new Lenis();
        const target = document.querySelector(href);
        if (target) {
            lenis.scrollTo(target, { offset: -60 }); // Adjust offset for header height
        }
    };

    return (
        <Breadcrumb className="fluid bg-coffee-dark h-15 flex items-center justify-center border-b border-coffee-dark">
            <MotionScrollInViewOpacity className="w-full bg-coffee-dark flex items-center justify-center">
                <BreadcrumbList className="flex items-center gap-5 text-ivory-soft">
                    {links && links.map((link, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                                {link.label}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </MotionScrollInViewOpacity>
        </Breadcrumb>
    );
}
