import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import MotionScrollInViewOpacity from './motionScrollInViewOpacity';

export default function CustomBreadCrumb({ links }) {
    return (
        <Breadcrumb className="bg-coffee-dark h-15 flex items-center justify-center border-b border-coffee-dark">
            <MotionScrollInViewOpacity className="w-full bg-coffee-dark flex items-center justify-center">
                <BreadcrumbList className="flex items-center gap-5 text-ivory-soft">
                    {links && links.map((link, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={link.href}>{link.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </MotionScrollInViewOpacity>
        </Breadcrumb>
    )
}
