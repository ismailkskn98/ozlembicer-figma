import React from 'react';
import ContactForm from './contactForm';
import HowToAppointment from '../common/howToAppointment';

export default function ContactMain() {
   return (
      <>
         <HowToAppointment isContactPage={true} />
         <ContactForm />
      </>
   );
}
