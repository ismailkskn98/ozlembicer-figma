import { cn } from '@/lib/utils';
import React from 'react';

export default function Pageh3Title({ title, className }) {
   return <h3 className={cn('text-[20px] font-bold text-coffee-dark mx-auto text-center', className)}>{title}</h3>;
}
