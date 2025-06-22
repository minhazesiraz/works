import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function TouchInfo() {
   const contactDetails = [
      {
         icon: <FaPhoneAlt />,
         title: "+8801736111145",
         href: "tel:+8801736111145",
         helper: "Reach me directly or via WhatsApp"
      },
      {
         icon: <FaMapMarkerAlt />,
         title: "Bangladesh",
         href: null,
         helper: "Based in Bangladesh — Available Worldwide"
      },
      {
         icon: <FaEnvelope />,
         title: "minhazesiraz@gmail.com",
         href: "mailto:minhazesiraz@gmail.com",
         helper: "Send inquiries or proposals directly via email"
      }
   ];

   return (
      <section className="max-w-md rounded-xl shadow-lg space-y-6 my-6">
         {contactDetails.map(({ icon, title, helper, href }, i) => (
            <div
               key={i}
               className="flex items-start gap-4 border-b border-slate-700 pb-5 last:border-none"
            >
               {/* Icon Box */}
               <div className="flex items-center justify-center w-10 h-10 rounded-md text-lg">
                  {icon}
               </div>

               {/* Text Info */}
               <div>
                  {href ? (
                     <a
                        href={href}
                        className="text-base font-semibold tracking-wide hover:underline"
                     >
                        {title}
                     </a>
                  ) : (
                     <p className="text-base font-semibold tracking-wide">
                        {title}
                     </p>
                  )}
                  <p className="text-sm text-slate-400 mt-1">{helper}</p>
               </div>
            </div>
         ))}
      </section>
   );
}
