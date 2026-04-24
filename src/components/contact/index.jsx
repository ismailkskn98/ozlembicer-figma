import React from 'react';
import ContactForm from './contactForm';
import HowToAppointment from '../common/howToAppointment';

export default function ContactMain() {
   return (
      <>
         <HowToAppointment isContactPage={true} className="pt-15 pb-0" />
         <ContactForm />
      </>
   );
}
