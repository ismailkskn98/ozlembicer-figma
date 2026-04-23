'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import { searchData } from '@/lib/searchData';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const pages = searchData.filter((item) => item.type === 'page');

function ResultItem({ item, onClose }) {
   return (
      <Link href={item.href} onClick={onClose} className="w-full flex items-center gap-3 hover:bg-wine-brown/10 px-2 py-2 rounded-lg transition-all duration-150">
         <div className="relative w-9 h-9 rounded-md overflow-hidden bg-wine-brown/10 shrink-0 flex items-center justify-center" style={{ border: '1px solid #eee6db60' }}>
            {item.image ? <Image src={item.image} alt={item.title} fill className="object-cover object-center" /> : <Search className="w-4 h-4 stroke-1 text-ivory-soft" opacity={0.6} />}
         </div>
         <span className="text-sm font-medium flex-1 text-ivory-soft">{item.title}</span>
         <span className="text-xs text-ivory-soft uppercase tracking-wide" style={{ opacity: 0.6 }}>
            {item.category}
         </span>
      </Link>
   );
}

export default function SearchMain({ children }) {
   const [open, setOpen] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const [results, setResults] = useState(null);
   const inputRef = useRef(null);

   useEffect(() => {
      if (open) {
         setTimeout(() => inputRef.current?.focus(), 300);
      } else {
         setSearchValue('');
         setResults(null);
      }
   }, [open]);

   const debounced = useDebouncedCallback((value) => {
      if (!value.trim()) {
         setResults(null);
         return;
      }
      const lower = value.toLowerCase();
      setResults(searchData.filter((item) => item.title.toLowerCase().includes(lower) || item.category.toLowerCase().includes(lower) || item.keywords.some((k) => k.includes(lower))));
   }, 250);

   const handleClose = () => setOpen(false);

   return (
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
         <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
         <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay
               className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-100"
               style={{ zIndex: 99999 }}
            />

            <DialogPrimitive.Content
               aria-describedby={undefined}
               className="fixed left-1/2 max-w-[calc(100%-2rem)] md:max-w-2xl w-full -translate-x-1/2 rounded-xl overflow-hidden flex flex-col bg-coffee-dark border border-gold/30 shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-100"
               style={{
                  top: '5rem',
                  zIndex: 100000,
                  maxHeight: 'min(70vh, calc(100svh - 9rem))',
               }}
            >
               <DialogPrimitive.Title className="sr-only">Search</DialogPrimitive.Title>

               {/* Search input */}
               <div className="flex items-center py-2 px-3 shrink-0">
                  <Search className="stroke-1 w-5 h-5 shrink-0 text-ivory-soft" style={{ opacity: 0.6 }} />
                  <input
                     ref={inputRef}
                     onChange={(e) => {
                        setSearchValue(e.target.value);
                        debounced(e.target.value);
                     }}
                     value={searchValue}
                     type="text"
                     placeholder="Search..."
                     className="w-full outline-none border-none pl-2 text-sm py-2.5 bg-transparent placeholder:text-ivory-soft/60"
                     style={{ color: '#eee6db60' }}
                  />
                  <span
                     onClick={handleClose}
                     className="uppercase text-[10px] rounded-lg px-2.5 py-2 border text-ivory-soft hover:bg-wine-brown/30 transition-all duration-150 cursor-pointer shrink-0"
                     style={{ border: '1px solid #eee6db60' }}
                  >
                     ESC
                  </span>
               </div>

               {/* Results */}
               <div className="border-t overflow-y-auto overscroll-contain" style={{ borderTop: '1px solid #b99f6c60' }}>
                  <div className="px-4 py-4 flex flex-col gap-1">
                     {results !== null && results.length === 0 && <p className="text-sm text-stone-beige/60 py-2 px-2">No results found.</p>}

                     {results !== null && results.length > 0 && results.map((item) => <ResultItem key={item.id} item={item} onClose={handleClose} />)}

                     {results === null && (
                        <>
                           <p className="text-xs font-semibold text-gold uppercase tracking-wider px-2 pb-1" style={{ color: '#b99f6c' }}>
                              Pages
                           </p>
                           {pages.map((item) => (
                              <ResultItem key={item.id} item={item} onClose={handleClose} />
                           ))}
                        </>
                     )}
                  </div>
               </div>
            </DialogPrimitive.Content>
         </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
   );
}
