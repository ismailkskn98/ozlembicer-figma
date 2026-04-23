import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function ModalVideo({ title, description, videoSrc, children }) {
   return (
      <Dialog>
         <DialogTrigger asChild className="cursor-pointer!">
            {children}
         </DialogTrigger>
         <DialogContent
            showCloseButton={false}
            className={
               'bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 h-full max-h-[50vh] md:max-h-[60vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] flex flex-col items-start gap-2 border-none shadow-none'
            }
         >
            <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-white/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
               <X className="w-5 h-5 text-black" />
            </DialogClose>
            <div className="relative overflow-hidden w-full h-full">
               <iframe
                  src={videoSrc}
                  className="size-full rounded-lg"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               ></iframe>
            </div>
            <DialogHeader className="hidden">
               <DialogTitle></DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
         </DialogContent>
      </Dialog>
   );
}
