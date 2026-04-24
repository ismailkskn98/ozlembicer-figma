import React from 'react';
import ContactForm from './contactForm';
import HowToAppointment from '../common/howToAppointment';

export default function ContactMain() {
   return (
      <>
         <section className="w-full fluid gridContainer">
            <HowToAppointment isContactPage={true} className="pt-15 pb-0" />
         </section>
         <ContactForm />
      </>
   );
}
