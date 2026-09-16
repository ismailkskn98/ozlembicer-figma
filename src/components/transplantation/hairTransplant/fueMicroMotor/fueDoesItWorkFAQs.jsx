import Image from 'next/image';
import React from 'react';

export default function FueDoesItWorkFAQs() {
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark">
         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['Is Androgenetic Alopecia', 'Permanent?'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>
                  Androgenetic alopecia is a permanent and progressive condition, meaning that hair loss continues over time. Although the safe donor area is generally resistant to androgenetic
                  alopecia, this resistance cannot be guaranteed for every patient for a lifetime.
               </p>
               <p>Ultimately, transplanted hair follicles also cannot be guaranteed to remain in the recipient area for the patient’s entire life.</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['Will There Be', 'Scarring After FUE?'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>FUE involves creating tiny incisions in both the donor and recipient areas.</p>
               <ul className="list-disc list-outside pl-5">
                  <li>Scars are usually not noticeable if the patient use donor hairs less than 2cm length.</li>
                  <li>Donor-area marks are typically hidden by surrounding hair</li>
                  <li>If the hair is shaved very short, small dot scars may become visible, which is a known and normal characteristic of the FUE technique</li>
               </ul>
            </div>
         </article>

         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['How Long Does an', 'FUE Hair Transplant Take?'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>

            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>An FUE hair transplant procedure typically lasts between 4 and 12 hours, depending on:</p>
               <ul className="list-disc list-outside pl-5">
                  <li>The number of grafts required</li>
                  <li>Hair thickness and density</li>
                  <li>Individual scalp characteristics</li>
               </ul>
               <p>Hair Growth Timeline After FUE</p>
               <ul className="list-disc list-outside pl-5">
                  <li>First shedding: 2–6 weeks (normal and temporary)</li>
                  <li>New hair growth begins: around 3–4 months</li>
                  <li>Noticeable improvement: 6–9 months</li>
                  <li>Final results: after 12-18 months</li>
               </ul>
               <p>
                  Not all transplanted follicles grow at the same time, as some remain temporarily in the resting (telogen) phase. Overall graft survival rates of up to 90–95% are commonly reported
                  under optimal conditions.
               </p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['Graft Preservation', '& Implantation'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>
                  After extraction, the hair follicles are carefully stored in sterile containers. In some cases, grafts may be preserved in a solution enriched with the patient’s own Platelet-Rich
                  Plasma (PRP), which may help support graft survival.
               </p>
               <p>Once the extraction phase is completed, microscopic channels are created in the recipient area. Each follicular unit is then implanted individually.</p>
               <p>
                  The angle, direction, and depth of each graft are carefully planned to match natural hair growth, especially in the hairline area, to achieve a natural and aesthetically pleasing
                  result.
               </p>
            </div>
         </article>

         <article className="border-b sm:border-b-0 border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['Anesthesia &', 'Patient Comfort'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>
                  We use a needle-free anesthesia machine. During the first two to three minutes of local anesthesia, you may feel mild and tolerable discomfort. Once the anesthesia takes effect,
                  the procedure continues under local anesthesia with patient comfort monitored throughout.
               </p>
               <p>Each patient’s comfort and response to anesthesia are assessed individually throughout FUE hair transplantation.</p>
               <ul className="list-disc list-outside pl-5">
                  <li>Mild discomfort may be felt during the first few minutes of local anesthesia</li>
                  <li>Local anesthesia is used during the procedure</li>
                  <li>Patients may feel tired from sitting for several hours, but regular breaks are provided</li>
               </ul>
               <p>During the procedure, patients can usually:</p>
               <ul className="list-disc list-outside pl-5">
                  <li>Watch TV</li>
                  <li>Listen to music</li>
                  <li>Relax comfortably</li>
               </ul>
               <p>After the operation, temporary tightness or sensitivity may occur. The care team provides individualized aftercare instructions and may recommend appropriate medication when needed.</p>
            </div>
         </article>
         <article className="flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {['Why Choose', 'FUE Hair Transplant?'].map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-0.5 text-coffee-dark">
               <p>Minimally invasive technique</p>
               <p>No linear scar</p>
               <p>Natural-looking results</p>
               <p>Short recovery time</p>
               <p>Suitable for men and women</p>
            </div>
         </article>
      </main>
   );
}
