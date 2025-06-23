import {
   FaEnvelope,
   FaFacebook,
   FaGithub,
   FaLinkedin,
   FaPhoneAlt
} from "react-icons/fa";

export default function Copyright() {
   return (
      <footer className="bg-slate-900 text-slate-200 px-6 py-10 mt-20">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
               <h2 className="text-xl font-bold">Minhaz E Siraz</h2>
               <p className="text-sm text-slate-400 mt-2">
                  Passionate Web Developer from Bangladesh. Turning ideas into
                  reality with clean, efficient code.
               </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
               <div className="flex items-center gap-3">
                  <FaEnvelope className="text-emerald-400" />
                  <a
                     href="mailto:minhazesiraz@gmail.com"
                     className="hover:underline"
                  >
                     minhazesiraz@gmail.com
                  </a>
               </div>
               <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-emerald-400" />
                  <a href="tel:+8801736111145" className="hover:underline">
                     +8801736111145
                  </a>
               </div>
            </div>

            {/* Social Links */}
            <div>
               <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase tracking-wider">
                  Follow Me
               </h3>
               <div className="flex gap-4 text-xl">
                  <a
                     href="https://linkedin.com/in/minhazesiraz"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-emerald-400"
                  >
                     <FaLinkedin />
                  </a>
                  <a
                     href="https://github.com/minhazesiraz"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-emerald-400"
                  >
                     <FaGithub />
                  </a>
                  <a
                     href="https://facebook.com/minhazesiraz"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-emerald-400"
                  >
                     <FaFacebook />
                  </a>
               </div>
            </div>
         </div>

         <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Minhaz E Siraz. All rights
            reserved.
         </div>
      </footer>
   );
}
