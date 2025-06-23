import TouchFormData from "./_components/TouchFormData";
import TouchInfo from "./_components/TouchInfo";

export default function ContactMe_Page() {
   return (
      <>
         {/* <p>
            Contact form <br />
            Email address <br />
            Social links (LinkedIn, GitHub, Facebook page) <br />
            Optionally: WhatsApp or Calendly <br />
         </p> */}
         {/* <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
               <TouchInfo />
            </div>
            <div className="col-span-3">
               <TouchFormData />
            </div>
         </div> */}
         <section className="px-4 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
               {/* Touch Form (shows first on mobile, second on desktop) */}
               <div className="order-1 md:order-2 md:col-span-3">
                  <TouchFormData />
               </div>

               {/* Touch Info (shows second on mobile, first on desktop) */}
               <div className="order-2 md:order-1 md:col-span-2">
                  <TouchInfo />
               </div>
            </div>
         </section>
      </>
   );
}
