const defaultContactDetails = {
   phoneDisplay: '+90 530 414 13 13',
   phoneHref: 'tel:+905304141313',
   email: 'info@ozlembicer.com',
   whatsappHref: 'https://wa.me/905304141313',
};

const germanContactDetails = {
   phoneDisplay: '+90 535 051 15 55',
   phoneHref: 'tel:+905350511555',
   email: 'deutsch@ozlembicer.com',
   whatsappHref: 'https://wa.me/905350511555',
};

export function getContactDetails(locale) {
   return locale === 'de' ? germanContactDetails : defaultContactDetails;
}
